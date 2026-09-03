"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const events = [
  { number: "01", title: "Takeover 3x3", type: "Basketball", description: "A competitive 3x3 basketball experience bringing players and community together." },
  { number: "02", title: "CYW Workshop", type: "Creative Workshop", description: "A space for ideas, conversation, and creative development across the CDVRS world." },
  { number: "03", title: "Listening Sessions", type: "Music", description: "Shared moments around new music, releases, and the stories behind the sound." },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      <Navbar />
      <main>
        <section className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-24 pt-36 sm:px-10">
          <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_12px)] opacity-25" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_10%_90%,rgba(var(--accent),0.18)_0%,transparent_65%)]" />
          <div className="relative z-10 mx-auto w-full max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">CDVRSWRLD</p>
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="mt-6 font-mono text-[18vw] font-black uppercase leading-[0.85] md:text-[10vw]">Events</motion.h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[rgb(var(--muted))]">Basketball runs, listening sessions, workshops, and community experiences from the CDVRS world.</p>
          </div>
        </section>

        <section className="border-t border-[rgb(var(--foreground))]/10 px-6 py-24 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">The Calendar</p>
            <h2 className="mb-12 font-mono text-4xl font-black uppercase leading-none md:text-6xl">Made to gather</h2>
            <div className="grid gap-px border border-[rgb(var(--foreground))]/10 bg-[rgb(var(--foreground))]/10 md:grid-cols-3">
              {events.map((event) => (
                <motion.article key={event.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[rgb(var(--background))] p-8 transition hover:bg-white/5">
                  <p className="mb-6 font-mono text-xs tracking-[0.3em] text-[rgb(var(--accent))]">{event.number} / {event.type}</p>
                  <h3 className="font-mono text-2xl font-black uppercase leading-none">{event.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-[rgb(var(--muted))]">{event.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}