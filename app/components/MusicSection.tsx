"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
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
    color: "from-[rgb(var(--accent))]/30 to-[rgb(var(--surface))]/5",
    year: "2026",
    cover: "/covers/Southbound.png",
    link: "https://link.grindandghost.com/cdpvsc",
  },
  {
    type: "Single",
    title: "PEACE VS CHAOS",
    desc: "CDVRS explores duality and contrast",
    color: "from-[rgb(var(--surface))]/10 to-[rgb(var(--accent))]/20",
    year: "2026",
    cover: "/covers/PEACE_VS_ CHAOS.png",
    link: "https://link.grindandghost.com/cdpvsc",
  },
  {
    type: "Single",
    title: "Amsterdam Remix",
    desc: "PALMZZ X CDVRS",
    color: "from-[rgb(var(--accent))]/20 to-[rgb(var(--background))]",
    year: "2025",
    cover: "/covers/Amsterdam_Remix.png",
    link: "https://too.fm/2vppndw",
  },
];

const getPlatform = (url: string) => {
  if (url.includes("spotify")) return "spotify";
  if (url.includes("apple")) return "apple";
  if (url.includes("soundcloud")) return "soundcloud";
  return "smart";
};

export default function MusicSection() {
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? releases[active] : null;
  const platform = current ? getPlatform(current.link) : null;

  return (
    <section
      id="music"
      className="relative min-h-screen w-full overflow-hidden bg-[rgb(var(--background))] text-[rgb(var(--foreground))]"
    >

      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_18px)] opacity-20" />

      <div className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 py-24">

        <div className="w-full max-w-7xl">

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-6 font-mono text-6xl font-black uppercase leading-none text-[rgb(var(--foreground))] md:text-8xl"
          >
            Music
          </motion.h2>

          <motion.p className="max-w-2xl text-lg leading-8 text-[rgb(var(--muted))]">
            Official releases from CDVRS. Singles, EPs, collaborations, and
            sonic chapters built to introduce the artist first.
          </motion.p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">

            {releases.map((item, i) => (
              <motion.div
                key={i}
                onClick={() => setActive(i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer border border-[rgb(var(--foreground))]/15 bg-[rgb(var(--surface))]/5 p-4 transition hover:-translate-y-1 hover:border-[rgb(var(--accent))]/70"
              >

                <div className="relative h-72 w-full overflow-hidden bg-black">

                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />

                  <img
                    src={item.cover}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full scale-105 object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
                  />

                  <div className="absolute inset-0 bg-[rgb(var(--background))]/30" />
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--accent))]">
                    {item.type}
                  </p>
                  <span className="text-xs text-[rgb(var(--muted))]">
                    {item.year}
                  </span>
                </div>

                <h3 className="mt-3 font-mono text-2xl font-black uppercase leading-none">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                  {item.desc}
                </p>

                <p className="mt-5 font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))] group-hover:text-[rgb(var(--accent))]">
                  LISTEN →
                </p>

              </motion.div>
            ))}

          </div>

          <Link
            href="/music"
            className="mt-10 inline-block border-b border-[rgb(var(--accent))]/50 pb-1 font-mono text-xs uppercase tracking-[0.25em] text-[rgb(var(--accent))] transition hover:border-[rgb(var(--accent))]"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {active !== null && current && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="w-[90%] max-w-lg border border-white/20 bg-black p-6 text-center text-white"
              onClick={(e) => e.stopPropagation()}
            >

              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={current.cover}
                  className="absolute inset-0 h-full w-full object-cover"
                  alt=""
                />
                <div className="absolute inset-0 bg-[rgb(var(--background))]/40" />
              </div>

              <p className="mt-5 text-xs tracking-[0.3em] text-[rgb(var(--accent))]">
                {platform?.toUpperCase() ?? "SMART LINK"}
              </p>

              <h2 className="mt-2 font-mono text-3xl font-black uppercase">
                {current.title}
              </h2>

              <p className="mt-3 text-sm text-[rgb(var(--muted))]">
                {current.desc}
              </p>

              <button
                onClick={() => window.open(current.link, "_blank")}
                className="mt-6 w-full border border-white bg-white py-3 font-mono text-xs font-black uppercase tracking-[0.2em] text-black transition hover:bg-[rgb(var(--accent))] hover:text-white"
              >
                Open Streaming Platform →
              </button>

              <button
                onClick={() => setActive(null)}
                className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-white/50"
              >
                Close
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
