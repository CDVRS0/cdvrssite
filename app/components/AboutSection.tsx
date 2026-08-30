"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <div
      id="bio"
      className="relative w-full border-y border-[rgb(var(--foreground))]/10 bg-[rgb(var(--background))] text-[rgb(var(--foreground))]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_96px)] opacity-40" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 py-24 md:py-32">

        {/* LEFT */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs uppercase tracking-[0.35em] text-[rgb(var(--accent))]"
          >
            Artist Bio
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-mono text-4xl font-black uppercase leading-none md:text-6xl"
          >
            CDVRS is a UK-based producer/artist, and creative visionary known 
            for blending cinematic production, atmospheric sound design, and emotionally 
            driven music into a distinct artistic identity.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 leading-relaxed text-[rgb(var(--muted))]"
          >
            His passion began in school, where he immersed himself in music
            early on. In university, he started engineering, and during the
            COVID-19 lockdowns, he took the chance to dive deeper into
            production, experimenting with Logic and FL Studio while learning
            from legends like Dr. Dre, Timbaland, Pharrell, and Kanye West.
            What started as beat-making soon evolved into a deeper love for
            mixing. CD taught himself by watching tutorials and mixing vocals
            for friends, eventually releasing his debut track Da Interlude with
            BabyBell, now MUDMUNI.
            <br />
            <br />
            By summer 2020, CD expanded his work across university networks,
            connecting with artists across the UK. In 2022, he launched No
            Pressure, a creative platform now working with talent across France,
            Italy, Ghana, and beyond. Today, CDVRS runs his own artist world and
            Grind and Ghost Records, continuing to shape his sound across urban
            and commercial music.
            <br />
            <br />
            His artistic inspirations stem from Pharrell Williams, Kanye West,
            Michael Jackson, Wu-Tang Clan, and Dr. Dre.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 leading-relaxed text-[rgb(var(--muted))]"
          >
            CDVRSWRLD exists as the wider creative platform, but sits
            beside the artist identity. The platform expands the world around him.
            CDVRSWRLD is his world where he merges basketball events, artist discovery 
            through No Pressure, music, beats and community together.   

          </motion.p>

          {/* KEY POINTS */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 space-y-2 text-sm text-[rgb(var(--muted))]"
          >
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 h-[320px] w-full border border-[rgb(var(--foreground))]/15 bg-['/covers/street_c.jpg'] bg-cover bg-center grayscale"
          />

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >

          <div className="relative flex h-[500px] w-full items-end overflow-hidden border border-[rgb(var(--foreground))]/15 bg-black">
            <img
              src="/covers/HAPPY_C.JPG"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-70 grayscale"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <p className="relative p-8 font-mono text-xs uppercase tracking-[0.35em] text-white/70">
              CDVRS
            </p>

          </div>
        </motion.div>


      </div>
    </div>
  );
}
