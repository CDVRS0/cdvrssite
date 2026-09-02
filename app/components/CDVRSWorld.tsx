"use client";

import { motion } from "framer-motion";

const worlds = [
  {
    title: "No Pressure",
    desc: "A creative label and artist discovery platform for new sounds, emerging talent, and curated releases.",
    href: "/no-pressure",
    image: "/World/Studio/C0019.MOV",
  },
  {
    title: "CDVRS SPORTS",
    desc: " Connecting basketball and culture.",
    href: "/sports",
    image: "/World/Sports/BANK P.mov",
  },
  {
    title: "CDVlabs",
    desc: "The beatstore and production lab for instrumentals.",
    href: "https://beats.cdvrswrld.com/",
    image: "/World/Studio/DEAD PRESIDENTS II.mov",
  },
];

export default function CDVRSWorld() {
  return (
    <section
      id="cdvrswrld"
      className="relative w-full min-h-screen h-auto overflow-visible border-y border-[rgb(var(--foreground))]/10 bg-[rgb(var(--foreground))] px-6 pb-40 pt-24 text-[rgb(var(--background))]"
    >
      {/* AMBIENT GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-200px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[rgb(var(--accent))]/20 blur-[250px]" />
      </div>

      {/* CENTER WRAPPER */}
      <div className="relative flex min-h-screen w-full items-center justify-center">
        <div className="w-full max-w-7xl">

          {/* HEADER */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]"
          >
            Wider Platform
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-5xl text-center font-mono text-4xl font-black uppercase leading-none md:text-7xl"
          >
            CDVRSWRLD is built for the community
            <br />
            artist discovery, sports,culture,clothing and music.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-2xl text-center leading-7 text-[rgb(var(--background))]/65"
          >
            
          </motion.p>

          {/* GRID */}
          <div className="mt-20 grid grid-cols-1 gap-6 pb-40 md:grid-cols-3">

            {worlds.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="group relative h-[380px] overflow-hidden rounded-3xl border border-[rgb(var(--background))]/15 bg-[rgb(var(--background))]/5"
              >

                {item.image.toLowerCase().endsWith(".mov") ? (
                  <video
                    src={item.image}
                    className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105"
                  />
                )}

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-0 p-8">

                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--accent))]">
                    CDVRSWRLD
                  </p>

                  <h3 className="mt-3 font-mono text-4xl font-black uppercase leading-none">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                    {item.desc}
                  </p>

                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.3em] text-white/50 transition group-hover:text-[rgb(var(--accent))]"
                  >
                    Explore
                  </a>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
