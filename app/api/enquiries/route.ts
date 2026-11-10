import { createHash } from "node:crypto";
import { Resend } from "resend";
import { enquiryTypes, type EnquiryType } from "../../data/enquiries";

export const runtime = "nodejs";
const attempts = new Map<string, { count: number; until: number }>();
const configured = () => Boolean(process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "[SENSITIVE]");
const response = (body: object, status = 200) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
export async function GET() { return response({ enabled: configured() }); }

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin || origin !== new URL(request.url).origin) return response({ error: "Please submit this form from the website." }, 403);
  if (!request.headers.get("content-type")?.includes("application/json")) return response({ error: "Invalid request." }, 415);
  const raw = await request.text();
  if (raw.length > 12000) return response({ error: "Your enquiry is too long." }, 413);
  let input: Record<string, unknown>;
  try { input = JSON.parse(raw); } catch { return response({ error: "Invalid request." }, 400); }
  if (!input || typeof input !== "object" || Array.isArray(input)) return response({ error: "Invalid request." }, 400);
  const read = (key: string) => typeof input[key] === "string" ? (input[key] as string).trim() : "";
  const type = read("type");
  const name = read("name"), email = read("email"), subject = read("subject"), message = read("message");
  if (read("website") || typeof input.startedAt !== "number" || Date.now() - input.startedAt < 3000 || Date.now() - input.startedAt > 86400000) return response({ error: "Please take a moment, then try again." }, 400);
  if (!Object.hasOwn(enquiryTypes, type) || !name || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || /[\r\n]/.test(name + email + subject) || subject.length > 150 || message.length < 5 || message.length > 4000) return response({ error: "Check your name, email and message, then try again." }, 400);
  if (!configured()) return response({ error: "Website sending is temporarily unavailable. Please use the direct email link below." }, 503);
  // A bounded, per-instance guard complements the honeypot and fixed recipient routing.
  const now = Date.now();
  for (const [key, item] of attempts) if (item.until <= now) attempts.delete(key);
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const key = createHash("sha256").update(ip).digest("hex");
  const limit = attempts.get(key) || { count: 0, until: now + 600000 };
  if (limit.count >= 5 || attempts.size >= 2000) return response({ error: "Too many attempts. Please try later or email us directly." }, 429);
  attempts.set(key, { ...limit, count: limit.count + 1 });
  const destination = enquiryTypes[type as EnquiryType];
  const content = { type, name, email, subject, message };
  const idempotencyKey = createHash("sha256").update(JSON.stringify(content)).digest("hex");
  try {
    const { data, error } = await new Resend(process.env.RESEND_API_KEY).emails.send({
      from: process.env.RESEND_FROM_EMAIL || "CDVRSWRLD <website@cdvrswrld.com>",
      to: destination.email,
      replyTo: email,
      subject: `[${destination.label}] ${subject || "Website enquiry"}`,
      text: `Enquiry: ${destination.label}\nName: ${name}\nReply email: ${email}\n\n${message}`,
    }, { idempotencyKey });
    if (error || !data?.id) {
      console.error("Enquiry email rejected", { name: error?.name, status: error?.statusCode });
      return response({ error: "Your message could not be sent. Your details are still here—please try again or use the direct email link." }, 502);
    }
    return response({ success: true, reference: data.id });
  } catch {
    return response({ error: "We couldn’t confirm sending. Please try again with the same details or use the direct email link." }, 502);
  }
}
