"use client";

import { motion } from "framer-motion";

const pressItems = [
  "CDVRS is a UK artist, producer, and creative director building cinematic music with a distinct visual world.",
  "Press photos",
  "Release assets",
  "Booking context",
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Spotify", href: "#" },
  { label: "Apple Music", href: "#" },
];

export default function ArtistEPKSection() {
  return (
    <section
      id="epk"
      className="relative w-full bg-[rgb(var(--background))] px-6 py-32 text-[rgb(var(--foreground))]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-[rgb(var(--accent))]/10 blur-[220px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-[rgb(var(--foreground))]/10 bg-[rgb(var(--surface))]/5 p-8 md:p-10"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">
            Press / EPK
          </p>

          <h2 className="mt-6 text-4xl font-light leading-tight md:text-6xl">
            Everything needed to present CDVRS clearly.
          </h2>

          <p className="mt-8 max-w-2xl leading-8 text-[rgb(var(--muted))]">
            A focused artist kit for press, playlists, promoters, collaborators,
            and creative partners. Built around CDVRS as the artist, with
            CDVRSWRLD treated as the wider platform.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {pressItems.map((item) => (
              <div
                key={item}
                className="border border-[rgb(var(--foreground))]/10 p-4 text-sm text-[rgb(var(--muted))]"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <div id="contact" className="grid gap-6">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="rounded-2xl border border-[rgb(var(--foreground))]/10 bg-[rgb(var(--surface))]/5 p-8"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[rgb(var(--accent))]">
              Socials
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-[rgb(var(--foreground))]/10 px-4 py-3 text-sm text-[rgb(var(--muted))] transition hover:border-[rgb(var(--accent))]/50 hover:text-[rgb(var(--accent))]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl border border-[rgb(var(--foreground))]/10 bg-[rgb(var(--foreground))] p-8 text-[rgb(var(--background))]"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[rgb(var(--accent))]">
              Contact
            </p>

            <h3 className="mt-5 text-3xl font-light">Bookings, press, music.</h3>

            <p className="mt-5 leading-7 text-[rgb(var(--background))]/70">
              Use this section for management, press enquiries, booking
              requests, production work, and collaboration conversations.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-block rounded-full bg-[rgb(var(--background))] px-6 py-3 text-sm font-medium text-[rgb(var(--foreground))] transition hover:opacity-85"
            >
              Contact CDVRS
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
