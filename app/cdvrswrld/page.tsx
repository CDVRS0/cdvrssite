"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const tiles = [
  {
    title: "Music",
    desc: "CDVRS releases and sonic world-building.",
    href: "/music",
    glow: "from-blue-500/30 to-transparent",
  },
  {
    title: "No Pressure",
    desc: "Discover emerging artists and curated sounds.",
    href: "/no-pressure",
    glow: "from-white/10 to-blue-500/20",
  },
  {
    title: "CDVRS SPORTS",
    desc: "Create Your Move — basketball & culture.",
    href: "/sports",
    glow: "from-blue-500/20 to-black",
  },
  {
    title: "Events",
    desc: "Live moments, activations, and experiences.",
    href: "/events",
    glow: "from-white/10 to-black",
  },
  {
    title: "CDVlabs",
    desc: "Beatstore, instrumentals, sound packs, and production tools.",
    href: "https://beats.cdvrswrld.com/",
    glow: "from-blue-500/10 to-white/5",
  },
  {
    title: "Archive",
    desc: "Past work, visuals, and history.",
    href: "/archive",
    glow: "from-white/5 to-black",
  },
];

export default function CDVRSWRLDPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-24">

      {/* HEADER */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-xs tracking-[0.4em] text-gray-500 uppercase">
          CDVRSWRLD
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-light leading-tight">
          A connected creative universe
        </h1>

        <p className="mt-6 text-gray-400 leading-7">
          CDVRSWRLD is the central system connecting music, fashion, sport,
          and culture into one evolving world.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {tiles.map((item, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{
              duration: 0.6,
              delay: i * 0.05,
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/10"
          >
            {/* GLOW BACKGROUND */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-60 blur-2xl`}
            />

            {/* CONTENT */}
            <div className="relative z-10">
              <h2 className="text-xl font-light text-blue-300 group-hover:text-white transition">
                {item.title}
              </h2>

              <p className="mt-3 text-sm text-gray-400 leading-6">
                {item.desc}
              </p>

              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="mt-6 inline-block text-xs tracking-[0.3em] text-gray-500 transition group-hover:text-blue-300"
              >
                ENTER →
              </a>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}
