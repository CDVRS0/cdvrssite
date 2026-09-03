"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-[rgb(var(--background))] px-6 py-24 text-[rgb(var(--foreground))]">

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">
          ABOUT CDVRS
        </p>

        <h1 className="mt-6 font-mono text-5xl font-black uppercase leading-none md:text-8xl">
          Cameron Dankwa, CDVRS
        </h1>

        <p className="mt-8 text-[rgb(var(--muted))] leading-7 text-lg">
          Cameron Dankwa, known as CDVRS, is a UK-based producer, artist,
          engineer, and creative visionary blending cinematic production,
          atmospheric sound design, and emotionally driven music.
        </p>
      </motion.div>

      <div className="my-20 h-px w-full bg-[rgb(var(--foreground))]/10" />

      <div className="max-w-5xl mx-auto space-y-16">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-light text-[rgb(var(--accent))]">
            The Vision
          </h2>

          <p className="mt-4 text-[rgb(var(--muted))] leading-7">
            Build an artist world where every release has a sound, visual
            direction, and clear story. CDVRSWRLD expands the world around the
            artist through music, production, sport, culture, and community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-light text-[rgb(var(--accent))]">
            Artist Focus
          </h2>

          <p className="mt-4 text-[rgb(var(--muted))] leading-7">
            Cameron developed his production and engineering practice during
            university and the COVID-19 lockdowns, learning through Logic, FL
            Studio, mixing, and collaborations across the UK. His work draws
            inspiration from Pharrell Williams, Kanye West, Michael Jackson,
            Wu-Tang Clan, Dr. Dre, and Timbaland.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-light text-[rgb(var(--accent))]">
            CDVRSWRLD
          </h2>

          <p className="mt-4 text-[rgb(var(--muted))] leading-7">
            CDVRSWRLD is the wider creative platform around CDVRS. It brings
            together music, No Pressure artist discovery, CDVRS Sports, CDVlabs,
            visual work, and community.
          </p>
        </motion.div>

      </div>

      <div className="mt-24 text-center text-xs tracking-[0.35em] text-[rgb(var(--muted))]">
        CDVRS • 2026
      </div>

    </div>
  );
}
