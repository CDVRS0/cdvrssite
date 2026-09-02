"use client";

import type { FormEvent } from "react";
import Script from "next/script";
import Navbar from "../components/Navbar";

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const subject = String(data.get("subject") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  if (!name || !email || !message) {
    alert("Please fill in your name, email and message.");
    return;
  }

  if (!recaptchaSiteKey || !window.grecaptcha) {
    alert("The security check is not ready. Please try again.");
    return;
  }

  await new Promise<void>((resolve) => window.grecaptcha.ready(resolve));
  const token = await window.grecaptcha.execute(recaptchaSiteKey, {
    action: "contact_submit",
  });
  const verification = await fetch("/api/recaptcha", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });

  if (!verification.ok) {
    alert("Security verification failed. Please try again.");
    return;
  }

  const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
  const encodedSubject = encodeURIComponent(subject || "CDVRS Enquiry");
  window.location.href = `mailto:npglobalmusic@gmail.com?subject=${encodedSubject}&body=${body}`;
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] px-6 pb-24 pt-36 text-[rgb(var(--foreground))]">
      {recaptchaSiteKey && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
          strategy="afterInteractive"
        />
      )}
      <Navbar />
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">
          Contact
        </p>

        <h1 className="mt-6 font-mono text-5xl font-black uppercase leading-none md:text-8xl">
          CDVRS enquiries
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[rgb(var(--muted))]">
          For bookings, music, production, and collaborations email - npglobalmusic@gmail.com
        </p>

        <div className="mt-14 grid gap-16 md:grid-cols-2">
          <div className="grid gap-4 self-start sm:grid-cols-2 md:grid-cols-1">
            {["Bookings", "Music", "Production", "Collaborations"].map((item) => (
              <div
                key={item}
                className="border border-[rgb(var(--foreground))]/15 p-6 font-mono text-xs uppercase tracking-[0.24em] text-[rgb(var(--muted))]"
              >
                {item}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              name="name"
              required
              placeholder="Your name"
              className="border border-[rgb(var(--foreground))]/15 bg-white/5 px-4 py-3 font-mono text-sm outline-none focus:border-[rgb(var(--accent))]"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="border border-[rgb(var(--foreground))]/15 bg-white/5 px-4 py-3 font-mono text-sm outline-none focus:border-[rgb(var(--accent))]"
            />
            <input
              name="subject"
              placeholder="Subject"
              className="border border-[rgb(var(--foreground))]/15 bg-white/5 px-4 py-3 font-mono text-sm outline-none focus:border-[rgb(var(--accent))]"
            />
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Tell us about your enquiry..."
              className="resize-none border border-[rgb(var(--foreground))]/15 bg-white/5 px-4 py-3 font-mono text-sm outline-none focus:border-[rgb(var(--accent))]"
            />
            <button
              type="submit"
              className="border border-white px-8 py-4 font-mono text-xs font-black uppercase tracking-[0.22em] transition hover:border-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
