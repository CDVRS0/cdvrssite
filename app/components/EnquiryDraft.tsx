"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { track } from "@vercel/analytics";
import { enquiryTypes, type EnquiryType } from "../data/enquiries";

// Keep direct email available even when the delivery service is unavailable.
export default function EnquiryDraft({ initialType = "bookings", types = Object.keys(enquiryTypes) as EnquiryType[] }: { initialType?: EnquiryType; types?: EnquiryType[] }) {
  const id = useId();
  const [type, setType] = useState<EnquiryType>(initialType);
  const [notice, setNotice] = useState("");
  const [enabled, setEnabled] = useState<boolean | null>(null);
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
    const controller = new AbortController();
    fetch("/api/enquiries", { signal: controller.signal }).then(r => r.json()).then(data => setEnabled(data.enabled === true)).catch(() => { if (!controller.signal.aborted) setEnabled(false); });
    return () => controller.abort();
  }, []);
  const destination = enquiryTypes[type];
  const fieldClass = "w-full border border-current/25 bg-transparent px-4 py-3 text-base outline-none focus:border-[rgb(var(--accent))]";
  async function openDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (busy || enabled === null) return;
    setNotice("");
    setFailed(false);
    if (enabled) {
      setBusy(true);
      try {
        const result = await fetch("/api/enquiries", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type, name: data.get("name"), email: data.get("email"), subject: data.get("subject"), message: data.get("message"), website: data.get("website"), startedAt: startedAt.current }),
          signal: AbortSignal.timeout(20000),
        });
        const reply = await result.json();
        if (!result.ok || !reply.success) throw new Error(reply.error || "Your message could not be sent. Please try again or email us directly.");
        setNotice(`Your enquiry has been accepted. Reference: ${reply.reference}. We’ll reply to the email address you provided.`);
        track("enquiry_accepted", { category: type });
        form.reset();
        startedAt.current = Date.now();
      } catch (error) {
        setFailed(true);
        setNotice(error instanceof Error && error.name !== "TimeoutError" ? error.message : "We couldn’t confirm sending. Your details are still here. Please retry with the same details or email us directly.");
      } finally { setBusy(false); }
      return;
    }
    const subject = `[${destination.label}] ${String(data.get("subject") || "Website enquiry").trim()}`;
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nEnquiry: ${destination.label}\n\n${data.get("message")}`;
    window.location.href = `mailto:${destination.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNotice("Your email draft is ready to open. Send it from your email app to complete the enquiry. If no app opened, use the address shown above.");
  }
  return (
    <form onSubmit={openDraft} aria-busy={busy} className="flex flex-col gap-5">
      <p className="text-sm leading-6">{enabled === null ? "Checking website sending availability…" : enabled ? "Choose the team you need and send your enquiry here. Replies go to the email address you provide." : "Choose the team you need. This form prepares an email draft; send it from your email app to complete your enquiry."}</p>
      <div className="hidden" aria-hidden="true"><label htmlFor={`${id}-website`}>Leave this blank</label><input id={`${id}-website`} name="website" tabIndex={-1} autoComplete="off" /></div>
      <fieldset disabled={busy || enabled === null} className="contents">
      <div><label htmlFor={`${id}-type`} className="mb-2 block text-sm">Enquiry type</label><select id={`${id}-type`} name="type" className={fieldClass} value={type} onChange={event => { setType(event.target.value as EnquiryType); setNotice(""); }}>{types.map(key => <option key={key} value={key} className="bg-black text-white">{enquiryTypes[key].label}</option>)}</select></div>
      <p className="break-words text-sm">Send to: <a className="underline underline-offset-4" href={`mailto:${destination.email}`}>{destination.email}</a></p>
      <div><label htmlFor={`${id}-name`} className="mb-2 block text-sm">Your name</label><input id={`${id}-name`} name="name" autoComplete="name" required maxLength={100} className={fieldClass} /></div>
      <div><label htmlFor={`${id}-email`} className="mb-2 block text-sm">Your email address</label><input id={`${id}-email`} name="email" type="email" autoComplete="email" required maxLength={254} className={fieldClass} /></div>
      <div><label htmlFor={`${id}-subject`} className="mb-2 block text-sm">Subject</label><input id={`${id}-subject`} name="subject" maxLength={150} className={fieldClass} /></div>
      <div><label htmlFor={`${id}-message`} className="mb-2 block text-sm">Your enquiry</label><textarea id={`${id}-message`} name="message" required maxLength={4000} rows={5} className={`${fieldClass} resize-y`} placeholder="Tell us what you have in mind. For future runs, include your preferred area and availability." /></div>
      <button type="submit" className="border border-current px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-white/10">{busy ? "Sending…" : enabled === null ? "Checking availability…" : enabled ? "Send enquiry" : "Open email draft"}</button>
      </fieldset>
      <p role={failed ? "alert" : "status"} className="text-sm leading-6">{notice}</p>
      <p className="text-xs leading-5 opacity-70">Please only include details needed to reply to your enquiry. Registering interest does not reserve a place or subscribe you to a marketing list.</p>
    </form>
  );
}
