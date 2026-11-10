import Image from "next/image";
import Link from "next/link";
import catalogue from "../data/discography.json";

const selections = ["PEACE VS CHAOS", "Amsterdam (Remix)", "5AM"].map((title) => catalogue.find((release) => release.title === title)!);

export default function MusicSection() {
  return (
    <section id="music" className="scroll-mt-28 border-b border-[rgb(var(--foreground))]/15 px-6 py-20 sm:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--accent))]">Press play</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <h2 className="font-mono text-5xl font-black uppercase leading-none sm:text-6xl xl:text-7xl">Head<br />SOUTHBOUND.</h2>
            <p className="mt-7 max-w-lg text-lg leading-8 text-[rgb(var(--muted))]">A little reflection. A change of pace. Somewhere warmer. Three tracks moving through lo-fi hip-hop, Miami bass and amapiano.</p>
            <div className="mt-7 flex flex-wrap gap-5 text-sm">
              <Link href="/music" className="underline underline-offset-4">Explore the full discography →</Link>
              <a href="https://music.apple.com/gb/album/southbound-single/6773625550" target="_blank" rel="noopener noreferrer" className="text-[rgb(var(--muted))] underline underline-offset-4">Apple Music ↗</a>
            </div>
          </div>
          <div className="self-center">
            <iframe title="Listen to SOUTHBOUND by CDVRS" src="https://open.spotify.com/embed/album/5wjmUNQHPoRSoVRvpMVhZJ" height="352" loading="lazy" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" className="w-full rounded-xl border-0" />
            <p className="mt-4 text-xs leading-6 text-[rgb(var(--muted))]">Featured in <a href="https://diymusician.cdbaby.com/news/artist-release-roundup-june-2026/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">CD Baby’s June 2026 Artist Release Roundup ↗</a></p>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-end justify-between gap-4 border-t border-[rgb(var(--foreground))]/15 pt-8">
          <h3 className="font-mono text-xl font-black uppercase">Keep listening</h3>
          <Link href="/music#discography" className="text-sm underline underline-offset-4">All releases &amp; collaborations →</Link>
        </div>
        <div className="mt-6 grid gap-8 sm:grid-cols-3">
          {selections.map((release) => (
            <a key={release.id} href={release.spotify} target="_blank" rel="noopener noreferrer" className="group min-w-0" aria-label={`Listen to ${release.title} by ${release.artists} on Spotify`}>
              <div className="relative aspect-square overflow-hidden border border-[rgb(var(--foreground))]/15">
                <Image src={release.cover} alt={`${release.title} cover artwork`} fill sizes="(max-width: 639px) 100vw, 33vw" className="object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[rgb(var(--accent))]">{release.type} · {release.year}</p>
              <h4 className="mt-2 text-2xl font-bold">{release.title}</h4>
              <p className="mt-2 text-sm text-[rgb(var(--muted))]">{release.artists}</p>
              <p className="mt-4 text-sm underline underline-offset-4">Listen ↗</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
