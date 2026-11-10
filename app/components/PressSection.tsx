import Link from "next/link";
import { musoProfiles } from "../data/credits";

export default function PressSection() {
  return (
    <section id="press" className="border-y border-[rgb(var(--foreground))]/15 px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--accent))]">Selected coverage</p>
        <h2 className="mt-5 font-mono text-4xl font-black uppercase md:text-6xl">Music. In focus.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="border border-[rgb(var(--foreground))]/15 p-6">
            <h3 className="text-xl">SOUTHBOUND — CD Baby</h3>
            <p className="mt-4 leading-7 text-[rgb(var(--muted))]">Featured in CD Baby’s June 2026 Artist Release Roundup, with a look at the EP’s lo-fi hip-hop, Miami bass and amapiano influences.</p>
            <a className="mt-6 inline-block underline underline-offset-4" href="https://diymusician.cdbaby.com/news/artist-release-roundup-june-2026/" target="_blank" rel="noopener noreferrer">Read the CD Baby feature ↗</a>
          </article>
          <article className="border border-[rgb(var(--foreground))]/15 p-6">
            <h3 className="text-xl">The Watchlist Vol.1 — UD Music</h3>
            <p className="mt-4 leading-7 text-[rgb(var(--muted))]">A guest feature on Grind &amp; Ghost’s compilation, highlighting Cameron Dankwa and Ayo Peters’ work curating emerging artists.</p>
            <a className="mt-6 inline-block underline underline-offset-4" href="https://www.udmusic.org/blog/artists/guest-blog-grind-ghost-records-present-the-watchlist-vol-1/" target="_blank" rel="noopener noreferrer">Read the UD Music feature ↗</a>
          </article>
        </div>
        <div className="mt-8 flex flex-wrap gap-5 text-sm">
          <Link href="/music#credits" className="underline underline-offset-4">Explore production &amp; engineering credits</Link>
          <a href={musoProfiles.cameron} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Cameron Dankwa on Muso ↗</a>
          <a href={musoProfiles.cdvrs} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">CDVRS on Muso ↗</a>
        </div>
        <Link href="/contact" className="mt-10 inline-block border border-[rgb(var(--foreground))]/30 px-6 py-4">Enquire about production, mixing &amp; mastering</Link>
      </div>
    </section>
  );
}
