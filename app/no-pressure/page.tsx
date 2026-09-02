"use client";

import type { FormEvent } from "react";
import { motion } from "framer-motion";
import Script from "next/script";
import Navbar from "../components/Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const pillars = [
  { num: "01", title: "Artist Discovery", body: "Bringing forward emerging artists from the UK, France, Italy, and Ghana. We find talent before the algorithm does." },
  { num: "02", title: "Curated Sounds", body: "Episodes, mixes, and releases built around genres with intention — lofi, amapiano, bass, and beyond." },
  { num: "03", title: "Creative Label", body: "More than a playlist. No Pressure develops artists, supports releases, and builds the infrastructure independent music needs." },
];

const episodes = [
  { id: "MuCM3-Ut9lg", label: "No Pressure · Ep. 005", title: "Like What", date: "2026" },
  { id: "8a0CYftJU2c", label: "No Pressure · Ep. 004", title: "Said Enough?", date: "2026" },
  { id: "6Vs_bD6ERUc", label: "No Pressure · Ep. 003", title: "Baby Mama/Freestyle 1", date: "2026" },
];

const releases = [
  { status: "Coming Soon", title: "TBA", artist: "CDVRS", date: "2026", genre: "Add Genre" },
  { status: "Coming Soon", title: "TBA", artist: "No Pressure", date: "2026", genre: "Add Genre" },
];

const contactLinks = [
  { label: "General & Submissions", val: "npglobalmusic@gmail.com", href: "mailto:npglobalmusic@gmail.com" },
  { label: "Sync & Licensing", val: "npglobalmusic@gmail.com", href: "mailto:npglobalmusic@gmail.com" },
  { label: "YouTube", val: "@CDVRSWRLD", href: "https://www.youtube.com/@CDVRSWRLD" },
];

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
  const encodedSubject = encodeURIComponent(subject || "No Pressure Enquiry");
  window.location.href = `mailto:npglobalmusic@gmail.com?subject=${encodedSubject}&body=${body}`;
}

export default function NoPressurePage() {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      {recaptchaSiteKey && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
          strategy="afterInteractive"
        />
      )}
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-screen w-full flex-col justify-end overflow-hidden px-6 pb-24 pt-36 sm:px-10">
        <img
          src="/World/Studio/NEW NP.PNG"
          alt="No Pressure creative label artwork"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 grayscale"
        />
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_12px)] opacity-25" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_10%_90%,rgba(var(--accent),0.18)_0%,transparent_65%)]" />
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="relative z-10 mx-auto w-full max-w-6xl"
        >
          <motion.p variants={fadeUp} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">
            CDVRSWRLD
          </motion.p>
          <motion.h1 variants={fadeUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="mt-6 font-mono text-[18vw] font-black uppercase leading-[0.85] tracking-[0.02em] md:text-[10vw]">
            No<br />Pressure
          </motion.h1>
          <motion.p variants={fadeUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="mt-8 max-w-2xl text-lg leading-8 text-[rgb(var(--muted))]">
            A creative label and artist discovery platform for new sounds, emerging talent, curated releases, and artist development — spanning UK, France, Italy, and Ghana.
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="/no-pressure" className="border border-white bg-white px-8 py-4 font-mono text-xs font-black uppercase tracking-[0.22em] text-black transition hover:border-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))] hover:text-white">
              Watch Episodes
            </a>
            <a href="https://www.youtube.com/@CDVRSWRLD" target="_blank" rel="noopener noreferrer" className="border border-white/30 px-8 py-4 font-mono text-xs font-black uppercase tracking-[0.22em] text-white transition hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))]">
              YouTube Channel
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* PILLARS */}
      <section className="border-t border-[rgb(var(--foreground))]/10 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="mb-12 font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">
            The Platform
          </motion.p>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="grid gap-px border border-[rgb(var(--foreground))]/10 bg-[rgb(var(--foreground))]/10 md:grid-cols-3">
            {pillars.map((p) => (
              <motion.div key={p.num} variants={fadeUp} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="bg-[rgb(var(--background))] p-8 transition hover:bg-white/5">
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--accent))]">{p.num}</p>
                <h3 className="mb-3 font-mono text-xl font-black uppercase leading-none">{p.title}</h3>
                <p className="text-sm leading-relaxed text-[rgb(var(--muted))]">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EPISODES */}
      <section id="episodes" className="border-t border-[rgb(var(--foreground))]/10 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-end justify-between gap-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">Latest from YouTube</p>
              <h2 className="font-mono text-4xl font-black uppercase leading-none md:text-6xl">Episodes</h2>
            </motion.div>
            <a href="https://www.youtube.com/@CDVRSWRLD/videos" target="_blank" rel="noopener noreferrer" className="shrink-0 border-b border-[rgb(var(--accent))]/40 pb-0.5 font-mono text-xs uppercase tracking-[0.2em] text-[rgb(var(--accent))] transition hover:border-[rgb(var(--accent))]">
              View all
            </a>
          </div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={{ show: { transition: { staggerChildren: 0.12 } } }} className="grid gap-6 md:grid-cols-3">
            {episodes.map((ep) => (
              <motion.div key={ep.id} variants={fadeUp} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="border border-[rgb(var(--foreground))]/15 bg-white/5 transition hover:border-[rgb(var(--accent))]/50">
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  {ep.id.startsWith("VIDEO_ID") ? (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgb(var(--accent))]/30 bg-[rgb(var(--accent))]/10">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="rgb(var(--accent))"><polygon points="3,1 13,7 3,13" /></svg>
                      </div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">Add Video ID</p>
                    </div>
                  ) : (
                    <iframe src={"https://www.youtube.com/embed/" + ep.id} className="h-full w-full border-none" allowFullScreen />
                  )}
                </div>
                <div className="p-5">
                  <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.24em] text-[rgb(var(--accent))]">{ep.label}</p>
                  <h3 className="mb-2 font-mono text-sm font-black uppercase leading-snug">{ep.title}</h3>
                  <p className="font-mono text-[10px] text-white/30">{ep.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* RELEASES */}
      <section className="border-t border-[rgb(var(--foreground))]/10 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="mb-12">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">Coming Soon</p>
            <h2 className="font-mono text-4xl font-black uppercase leading-none md:text-6xl">Upcoming Releases</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="grid gap-px border border-[rgb(var(--foreground))]/10 bg-[rgb(var(--foreground))]/10 sm:grid-cols-2 md:grid-cols-4">
            {releases.map((r, i) => (
              <motion.div key={i} variants={fadeUp} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="bg-[rgb(var(--background))] p-6 transition hover:bg-white/5">
                <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.28em] text-[rgb(var(--accent))]">{r.status}</p>
                <h3 className="mb-1 font-mono text-xl font-black uppercase leading-none">{r.title}</h3>
                <p className="mb-3 font-mono text-xs text-white/30">{r.artist}</p>
                <p className="font-mono text-[10px] text-white/30">{r.date}</p>
                <span className="mt-4 inline-block border border-[rgb(var(--foreground))]/15 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">{r.genre}</span>
              </motion.div>
            ))}
            {[0, 1].map((i) => (
              <motion.div key={"slot-" + i} variants={fadeUp} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex min-h-[160px] flex-col items-center justify-center gap-3 border border-dashed border-[rgb(var(--accent))]/20 bg-transparent">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgb(var(--accent))]/25 font-mono text-lg text-[rgb(var(--accent))]/40">+</div>
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[rgb(var(--accent))]/40">New Release</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-t border-[rgb(var(--foreground))]/10 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="grid gap-16 md:grid-cols-2">
            <div>
              <motion.p variants={fadeUp} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">Get In Touch</motion.p>
              <motion.h2 variants={fadeUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="font-mono text-4xl font-black uppercase leading-none md:text-5xl">Work with<br />No Pressure</motion.h2>
              <motion.p variants={fadeUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="mt-6 max-w-md leading-relaxed text-[rgb(var(--muted))]">
                For artist submissions, collaboration, press, sync, or anything platform-related — reach out directly. We respond to everyone.
              </motion.p>
              <motion.div variants={fadeUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="mt-10 flex flex-col border-t border-[rgb(var(--foreground))]/10">
                {contactLinks.map((link) => (
                  <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="group flex items-center justify-between border-b border-[rgb(var(--foreground))]/10 py-5 transition hover:pl-2">
                    <div>
                      <p className="font-mono text-sm font-black uppercase leading-none">{link.label}</p>
                      <p className="mt-1 font-mono text-[10px] text-white/30 transition group-hover:text-[rgb(var(--accent))]/70">{link.val}</p>
                    </div>
                    <span className="text-white/30 transition group-hover:text-[rgb(var(--accent))]">→</span>
                  </a>
                ))}
              </motion.div>
            </div>
            <motion.form onSubmit={handleSubmit} variants={fadeUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col gap-5">
              {[
                { id: "np-name", name: "name", label: "Name", type: "text", placeholder: "Your name", required: true },
                { id: "np-email", name: "email", label: "Email", type: "email", placeholder: "your@email.com", required: true },
                { id: "np-subject", name: "subject", label: "Subject", type: "text", placeholder: "Artist Submission / Press / Collab / General", required: false },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="mb-2 block font-mono text-[9px] uppercase tracking-[0.24em] text-white/30">{f.label}</label>
                  <input id={f.id} name={f.name} type={f.type} required={f.required} placeholder={f.placeholder} className="w-full border border-[rgb(var(--foreground))]/15 bg-white/5 px-4 py-3 font-mono text-sm text-white placeholder-white/20 outline-none transition focus:border-[rgb(var(--accent))]/60" />
                </div>
              ))}
              <div>
                <label htmlFor="np-message" className="mb-2 block font-mono text-[9px] uppercase tracking-[0.24em] text-white/30">Message</label>
                <textarea id="np-message" name="message" required rows={5} placeholder="Tell us about your project or enquiry..." className="w-full resize-none border border-[rgb(var(--foreground))]/15 bg-white/5 px-4 py-3 font-mono text-sm text-white placeholder-white/20 outline-none transition focus:border-[rgb(var(--accent))]/60" />
              </div>
              <button type="submit" className="border border-white bg-transparent px-8 py-4 font-mono text-xs font-black uppercase tracking-[0.22em] text-white transition hover:border-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))]">
                Send Message
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}