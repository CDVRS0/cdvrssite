"use client";

import { motion } from "framer-motion";
import EnquiryDraft from "../components/EnquiryDraft";
import Navbar from "../components/Navbar";
import NoPressureEpisodes from "../components/NoPressureEpisodes";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const pillars = [
  { num: "01", title: "Artist Discovery", body: "Bringing forward emerging artists from the UK, France and Italy. We find talent before the algorithm does." },
  { num: "02", title: "Curated Sounds", body: "Episodes, mixes, and releases built around genres with intention — lofi, amapiano, bass, and beyond." },
  { num: "03", title: "Creative Label", body: "More than a playlist. No Pressure develops artists, supports releases, and builds the infrastructure independent music needs." },
];

const contactLinks = [
  { label: "General & Submissions", val: "npglobalmusic@gmail.com", href: "mailto:npglobalmusic@gmail.com" },
  { label: "Sync & Licensing", val: "npglobalmusic@gmail.com", href: "mailto:npglobalmusic@gmail.com" },
  { label: "YouTube", val: "@CDVRSWRLD", href: "https://www.youtube.com/@CDVRSWRLD" },
];

const musicPlatforms = [
  { name: "Spotify", action: "Listen & follow", detail: "Explore No Pressure releases and collaborations.", href: "https://open.spotify.com/artist/0DGQqQUltmg7eUOd0HeUaS" },
  { name: "Apple Music", action: "Explore the music", detail: "Find No Pressure singles, sessions and collaborations.", href: "https://music.apple.com/gb/artist/no-pressure/1886519542" },
  { name: "YouTube", action: "Watch the episodes", detail: "No Pressure episodes and visuals on the CDVRS channel.", href: "https://www.youtube.com/@CDVRSWRLD/search?query=No%20Pressure" },
];

export default function NoPressurePage() {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
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
            A creative label and artist discovery platform for new sounds, emerging talent, curated releases, and artist development — spanning the UK, France and Italy.
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#episodes" className="border border-white bg-white px-8 py-4 font-mono text-xs font-black uppercase tracking-[0.22em] text-black transition hover:border-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))] hover:text-white">
              Watch Episodes
            </a>
            <a href="#listen" className="border border-white/30 px-8 py-4 font-mono text-xs font-black uppercase tracking-[0.22em] text-white transition hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))]">
              Listen &amp; follow
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

      <section id="listen" aria-labelledby="np-listen-heading" className="scroll-mt-36 border-t border-[rgb(var(--foreground))]/10 px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--accent))]">No Pressure · On your platform</p>
          <h2 id="np-listen-heading" className="mt-4 font-mono text-4xl font-black uppercase leading-none md:text-6xl">Listen &amp; follow</h2>
          <p className="mt-6 max-w-2xl leading-7 text-[rgb(var(--muted))]">From Let You Go to Spirit In Me. Discover the artists, play the releases and watch the sessions wherever you listen.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {musicPlatforms.map(platform => (
              <a key={platform.name} href={platform.href} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col border border-[rgb(var(--foreground))]/20 p-6 transition hover:border-[rgb(var(--accent))] focus-visible:outline-2 focus-visible:outline-[rgb(var(--accent))]">
                <h3 className="font-mono text-2xl font-black">{platform.name}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-[rgb(var(--muted))]">{platform.detail}</p>
                <span className="mt-6 text-sm font-bold underline underline-offset-4">{platform.action} ↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <NoPressureEpisodes />

      {/* CONTACT */}
      <section className="border-t border-[rgb(var(--foreground))]/10 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="grid gap-16 md:grid-cols-2">
            <div>
              <motion.p variants={fadeUp} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">Get In Touch</motion.p>
              <motion.h2 variants={fadeUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="font-mono text-4xl font-black uppercase leading-none md:text-5xl">Work with<br />No Pressure</motion.h2>
              <motion.p variants={fadeUp} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="mt-6 max-w-md leading-relaxed text-[rgb(var(--muted))]">
                For artist submissions, collaboration, press, sync, or anything platform-related — reach out directly.
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
            <EnquiryDraft initialType="no-pressure" types={["no-pressure"]} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
