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

  const body = encodeURIComponent(
    `From: ${name} (${email})\n\n${message}`,
  );
  const encodedSubject = encodeURIComponent(
    subject || "CDVRS Sports Enquiry",
  );

  window.location.href =
    `mailto:npglobalmusic@gmail.com?subject=${encodedSubject}&body=${body}`;
}

export default function SportsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {recaptchaSiteKey && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
          strategy="afterInteractive"
        />
      )}
      <Navbar />

      <main>
        <section className="flex min-h-screen flex-col justify-end px-6 pb-24 pt-36 sm:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">
              CDVRSWRLD
            </p>

            <h1 className="mt-6 font-mono text-[16vw] font-black uppercase leading-[0.85] md:text-[10vw]">
              CDVRS
              <br />
              Sports
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
              Basketball, culture, visuals, live runs, events, and creative
              moments around sport.
            </p>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-24 sm:px-10">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">
                About Us
              </p>
              <h2 className="font-mono text-4xl font-black uppercase md:text-6xl">
                More Than
                <br />
                The Game
              </h2>
              <p className="mt-6 max-w-xl leading-8 text-white/65">
                CDVRS Sports exists to create a place where people can play,
                express themselves, develop and belong. Basketball is the
                foundation, but the greater purpose is to create pathways,
                opportunities and community through sport.
              </p>
            </div>

            <div className="aspect-[4/3] overflow-hidden border border-white/15 bg-white/5">
              <img
                src="/World/Sports/4.jpg"
                alt="CDVRS Sports basketball event"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-24 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <p className="mb-12 font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">
              The Movement
            </p>

            <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
              {["Basketball Runs", "Culture", "Live Moments"].map(
                (item, index) => (
                  <div
                    key={item}
                    className="bg-black p-8 transition hover:bg-white/5"
                  >
                    <p className="mb-4 font-mono text-xs text-[rgb(var(--accent))]">
                      0{index + 1}
                    </p>
                    <h2 className="font-mono text-xl font-black uppercase">
                      {item}
                    </h2>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-24 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">
              Latest Event
            </p>

            <h2 className="mb-12 font-mono text-4xl font-black uppercase md:text-6xl">
              Takeover 3x3
            </h2>

            <div className="border border-white/15 bg-white/5">
              <div className="aspect-video bg-black">
                <video
                  src="/World/Sports/takeover.mp4"
                    className="h-full w-full"
                    title="Takeover 3x3 Basketball highlights"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  />
              </div>

              <div className="p-6">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-[rgb(var(--accent))]">
                  CDVRS Sports
                </p>
                <h3 className="mt-3 font-mono text-2xl font-black uppercase">
                  Takeover 3x3 Basketball
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/60">
                  Highlights from the latest CDVRS Sports basketball event.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-24 sm:px-10">
          <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">
                Get In Touch
              </p>
              <h2 className="font-mono text-4xl font-black uppercase md:text-5xl">
                Work With
                <br />
                CDVRS Sports
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                name="name"
                required
                placeholder="Your name"
                className="border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none focus:border-[rgb(var(--accent))]"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none focus:border-[rgb(var(--accent))]"
              />
              <input
                name="subject"
                placeholder="Subject"
                className="border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none focus:border-[rgb(var(--accent))]"
              />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us about your enquiry..."
                className="resize-none border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none focus:border-[rgb(var(--accent))]"
              />
              <button
                type="submit"
                className="border border-white px-8 py-4 font-mono text-xs font-black uppercase tracking-[0.22em] transition hover:border-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))]"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}