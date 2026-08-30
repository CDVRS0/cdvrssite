"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-[rgb(var(--hero-background))] text-[rgb(var(--foreground))]"
    >
      <motion.img
        src="/covers/ME.png"
        alt=""
        style={{ opacity, scale }}
        className="absolute inset-0 h-full w-full object-cover opacity-30 grayscale"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.42),rgba(0,0,0,0.92))]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_12px)] opacity-30" />
      <div className="absolute bottom-8 left-0 flex w-[200%] gap-10 font-mono text-[12vw] font-black uppercase leading-none tracking-[0.05em] text-white/10">
        <span>CDVRS CDVRS CDVRS CDVRS</span>
        <span>CDVRS CDVRS CDVRS CDVRS</span>
      </div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 flex h-full w-full flex-col justify-end px-6 pb-24 pt-32 text-left sm:px-10 md:pb-28"
      >
        <p className="mb-6 max-w-xl font-mono text-xs uppercase tracking-[0.35em] text-white/60">
          Artist • Producer •
        </p>

        <h1 className="font-mono text-[22vw] font-black uppercase leading-[0.78] tracking-[0.02em] text-white md:text-[13vw]">
          CDVRS
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
          The official artist website. 
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#music"
            className="border border-white bg-white px-8 py-4 font-mono text-xs font-black uppercase tracking-[0.22em] text-black transition hover:bg-[rgb(var(--accent))] hover:text-white"
          >
            Listen Now
          </a>

          <a
            href="#socials"
            className="border border-white/30 px-8 py-4 font-mono text-xs font-black uppercase tracking-[0.22em] text-white transition hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))]"
          >
            Connect
          </a>
        </div>

        <button
          onClick={() => {
            const next = document.getElementById("bio");
            if (next) {
              next.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="mt-8 w-fit font-mono text-xs uppercase tracking-[0.4em] text-white/45 transition hover:text-white"
        >
          ENTER SITE
        </button>

      </motion.div>
    </section>
  );
}
