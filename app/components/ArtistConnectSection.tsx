"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Spotify", href: "#" },
  { label: "Apple Music", href: "#" },
  { label: "vyb", href: "#" },
];

export default function ArtistConnectSection() {
  return (
    <section
      id="socials"
      className="relative w-full overflow-hidden bg-[rgb(var(--background))] px-6 py-32 text-[rgb(var(--foreground))]"
    >
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_18px)] opacity-30" />

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="border border-[rgb(var(--foreground))]/15 bg-[rgb(var(--foreground))] p-8 text-[rgb(var(--background))] md:p-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">
            Socials
          </p>

          <h2 className="mt-6 font-mono text-5xl font-black uppercase leading-none md:text-7xl">
            Follow the signal.
          </h2>

          <div className="mt-10 grid gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-between border-t border-[rgb(var(--background))]/20 py-5 font-mono text-sm uppercase tracking-[0.24em] text-[rgb(var(--background))]/70 transition hover:text-[rgb(var(--accent))]"
              >
                <span>{link.label}</span>
                <span>↗</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="relative min-h-[520px] overflow-hidden border border-[rgb(var(--foreground))]/15 bg-black"
        >
          <video
            src="/World/Studio/0218.mov"
            className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

          <div className="relative flex min-h-[520px] flex-col justify-end p-8 md:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">
              Contact
            </p>

            <h3 className="mt-5 max-w-xl font-mono text-4xl font-black uppercase leading-none text-white md:text-6xl">
              Bookings. Features. Production. Visuals.
            </h3>

            <p className="mt-6 max-w-xl leading-7 text-white/65">
              For music, bookings, collaborations, production work, and direct
              artist enquiries.
            </p>

            <a
              href="/contact"
              className="mt-8 w-fit border border-white bg-white px-6 py-3 font-mono text-xs font-black uppercase tracking-[0.22em] text-black transition hover:bg-[rgb(var(--accent))] hover:text-white"
            >
              Contact CDVRS
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
