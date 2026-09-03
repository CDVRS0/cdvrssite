"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const releases = [
  {
    type: "EP",
    title: "SOUTHBOUND",
    desc: "CDVRS' debut EP",
    year: "2026",
    cover: "/covers/Southbound.png",
    link: "https://link.grindandghost.com/cdpvsc",
  },
  {
    type: "Single",
    title: "PEACE VS CHAOS",
    desc: "CDVRS explores duality and contrast.",
    year: "2026",
    cover: "/covers/PEACE_VS_ CHAOS.png",
    link: "https://link.grindandghost.com/cdpvsc",
  },
  {
    type: "Single",
    title: "Amsterdam Remix",
    desc: "PALMZZ X CDVRS",
    year: "2025",
    cover: "/covers/Amsterdam_Remix.png",
    link: "https://too.fm/2vppndw",
  },
];

export default function MusicPage() {
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? releases[active] : null;

  return (
    <div className="min-h-screen w-full bg-[rgb(var(--background))] px-6 py-24 text-[rgb(var(--foreground))]">

      {/* HEADER */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-xs tracking-[0.4em] text-[rgb(var(--muted))] uppercase">
          MUSIC
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-light">
          CDVRS Discography
        </h1>

        <p className="mt-6 text-[rgb(var(--muted))]">
          Releases, experiments, and sonic world-building inside CYW.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {releases.map((item, i) => (
          <motion.div
            key={i}
            onClick={() => setActive(i)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-[rgb(var(--foreground))]/10 bg-[rgb(var(--foreground))]/5 transition hover:-translate-y-1 hover:bg-[rgb(var(--foreground))]/10"
          >

            {/* COVER */}
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={item.cover}
                alt={item.title}
                className="h-full w-full object-cover scale-105 group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            {/* INFO */}
            <div className="p-5">
              <p className="text-xs tracking-[0.3em] text-[rgb(var(--accent))]">
                {item.type} • {item.year}
              </p>

              <h2 className="mt-2 text-lg font-light">
                {item.title}
              </h2>

              <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                {item.desc}
              </p>

              <p className="mt-5 text-xs tracking-[0.3em] text-[rgb(var(--muted))] group-hover:text-[rgb(var(--accent))] transition">
                LISTEN →
              </p>
            </div>
          </motion.div>
        ))}

      </div>

      {/* MODAL PLAYER */}
      <AnimatePresence>
        {active !== null && current && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="w-[90%] max-w-lg rounded-2xl border border-white/10 bg-[rgb(var(--background))] p-6 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >

              {/* COVER */}
              <img
                src={current.cover}
                alt={current.title}
                className="w-full h-64 object-cover rounded-xl"
              />

              {/* TEXT */}
              <p className="mt-5 text-xs tracking-[0.3em] text-[rgb(var(--accent))]">
                NOW PLAYING
              </p>

              <h2 className="mt-2 text-2xl font-light">
                {current.title}
              </h2>

              <p className="mt-3 text-sm text-[rgb(var(--muted))]">
                {current.desc}
              </p>

              {/* ACTION */}
              <button
                onClick={() => window.open(current.link, "_blank")}
                className="mt-6 w-full rounded-lg bg-[rgb(var(--foreground))]/10 py-3 text-sm transition hover:bg-[rgb(var(--foreground))]/20"
              >
                Open Release →
              </button>

              <button
                onClick={() => setActive(null)}
                className="mt-4 text-xs text-[rgb(var(--muted))] hover:text-[rgb(var(--foreground))]"
              >
                Close
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
