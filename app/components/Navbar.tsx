"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-[rgb(var(--foreground))]/20 bg-[rgb(var(--background))]/85 backdrop-blur-sm">

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

        <Link
          href="/"
          className="font-mono text-lg font-black uppercase tracking-[0.34em] text-[rgb(var(--foreground))] sm:text-xl"
        >
          CDVRS
        </Link>

        <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.16em] text-[rgb(var(--muted))] sm:gap-7">

          <Link href="/?section=bio" className="transition hover:text-[rgb(var(--accent))]">
            Bio
          </Link>

          <Link href="/?section=music" className="transition hover:text-[rgb(var(--accent))]">
            Music
          </Link>

          <Link href="/events" className="transition hover:text-[rgb(var(--accent))]">
            Events
          </Link>

          <Link href="/shop" className="transition hover:text-[rgb(var(--accent))]">
            Shop
          </Link>

          <Link href="/?section=socials" className="transition hover:text-[rgb(var(--accent))]">
            Socials
          </Link>

          <div className="group relative">
            <Link
              href="/?section=cdvrswrld"
              className="inline-flex transition hover:text-[rgb(var(--accent))]"
            >
              CDVRSWRLD
            </Link>

            <div className="invisible absolute left-0 top-full z-50 min-w-52 border border-[rgb(var(--foreground))]/20 bg-[rgb(var(--background))]/95 p-3 opacity-0 shadow-2xl shadow-black/20 backdrop-blur-md transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <Link
                href="/no-pressure"
                className="block border-b border-[rgb(var(--foreground))]/10 px-3 py-3 transition hover:text-[rgb(var(--accent))]"
              >
                No Pressure
              </Link>

              <Link
                href="/sports"
                className="block border-b border-[rgb(var(--foreground))]/10 px-3 py-3 transition hover:text-[rgb(var(--accent))]"
              >
                CDVRS SPORTS
              </Link>

              <a
                href="https://beats.cdvrswrld.com/"
                target="_blank"
                rel="noreferrer"
                className="block px-3 py-3 transition hover:text-[rgb(var(--accent))]"
              >
                CDVlabs
              </a>
            </div>
          </div>

          <Link href="/?section=contact" className="transition hover:text-[rgb(var(--accent))]">
            Contact
          </Link>

        </div>

      </div>
    </nav>
  );
}
