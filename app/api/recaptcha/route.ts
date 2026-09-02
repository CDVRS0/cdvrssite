import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    return NextResponse.json(
      { success: false, error: "reCAPTCHA is not configured." },
      { status: 503 },
    );
  }

  const { token } = await request.json().catch(() => ({ token: "" }));

  if (!token || typeof token !== "string") {
    return NextResponse.json(
      { success: false, error: "Missing reCAPTCHA token." },
      { status: 400 },
    );
  }

  const verification = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
      cache: "no-store",
    },
  );
  const result = await verification.json();

  if (!result.success || (result.action && result.action !== "contact_submit")) {
    return NextResponse.json(
      { success: false, error: "reCAPTCHA verification failed." },
      { status: 403 },
    );
  }

  return NextResponse.json({ success: true });
}
