"use client";

import Image from "next/image";
import { useState } from "react";
import releases from "../data/discography.json";

const categories = ["All releases", "CDVRS", "Collaborations"] as const;

export default function Discography() {
  const [previewId, setPreviewId] = useState<string | null>(null);
  const [category, setCategory] = useState<(typeof categories)[number]>("All releases");
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("All years");
  const years = [...new Set(releases.map((release) => release.year))].sort().reverse();
  const filtered = releases.filter((release) =>
    (category === "All releases" || release.category === category) &&
    (year === "All years" || release.year === year) &&
    `${release.title} ${release.artists}`.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <section id="discography" className="mx-auto max-w-6xl px-6 py-24 sm:px-10 xl:px-0">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--accent))]">The catalogue</p>
      <h2 className="mt-4 font-mono text-4xl font-black uppercase sm:text-6xl">Releases &amp; collaborations</h2>
      <div className="mt-8 flex flex-wrap gap-2" aria-label="Filter releases">
        {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`border px-4 py-3 text-sm transition ${category === item ? "border-[rgb(var(--foreground))] bg-[rgb(var(--foreground))] text-[rgb(var(--background))]" : "border-[rgb(var(--foreground))]/25 hover:border-[rgb(var(--accent))]"}`}>{item}</button>)}
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto]">
        <div>
          <label htmlFor="release-search" className="mb-2 block text-sm text-[rgb(var(--muted))]">Search by release or artist</label>
          <input id="release-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a record…" className="w-full border border-[rgb(var(--foreground))]/25 bg-[rgb(var(--background))] px-4 py-3" />
        </div>
        <div>
          <label htmlFor="release-year" className="mb-2 block text-sm text-[rgb(var(--muted))]">Release year</label>
          <select id="release-year" value={year} onChange={(event) => setYear(event.target.value)} className="w-full border border-[rgb(var(--foreground))]/25 bg-[rgb(var(--background))] px-4 py-3">
            <option>All years</option>{years.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
      </div>
      <p role="status" className="mt-5 text-sm text-[rgb(var(--muted))]">{filtered.length} {filtered.length === 1 ? "release" : "releases"}</p>
      <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((release) => (
          <article key={release.id} className="min-w-0">
            <a href={release.spotify} target="_blank" rel="noopener noreferrer" className="group block" aria-label={`Listen to ${release.title} by ${release.artists} on Spotify (opens in a new tab)`}>
              <div className="relative aspect-square overflow-hidden border border-[rgb(var(--foreground))]/15 bg-[rgb(var(--surface))]/10">
                <Image src={release.cover} alt={`${release.title} cover artwork`} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-[rgb(var(--accent))]">{release.type} · <time dateTime={release.date}>{new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(release.date))}</time></p>
              <h3 className="mt-2 break-words text-2xl font-bold">{release.title}</h3>
              <p className="mt-2 text-sm text-[rgb(var(--muted))]">{release.artists}</p>
              <p className="mt-4 text-sm underline underline-offset-4">Listen on Spotify ↗</p>
            </a>
            {release.apple && <a href={release.apple} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-[rgb(var(--muted))] underline underline-offset-4" aria-label={`Listen to ${release.title} by ${release.artists} on Apple Music`}>Apple Music ↗</a>}
            <div className="mt-4">
              <button type="button" aria-expanded={previewId === release.id} aria-controls={`player-${release.id}`} onClick={() => setPreviewId(previewId === release.id ? null : release.id)} className="border border-[rgb(var(--foreground))]/25 px-4 py-2 text-sm" aria-label={`${previewId === release.id ? "Close" : "Preview"} ${release.title} by ${release.artists}`}>{previewId === release.id ? "Close player" : "Preview release"}</button>
              <div id={`player-${release.id}`}>
                {previewId === release.id && <iframe title={`${release.title} by ${release.artists} on Spotify`} src={release.spotify.replace("open.spotify.com/album/", "open.spotify.com/embed/album/")} height={release.tracks > 1 ? 352 : 152} allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" className="mt-4 w-full rounded-xl border-0" />}
              </div>
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && <div className="mt-8 border border-[rgb(var(--foreground))]/20 p-8"><p>No releases match those filters.</p><button type="button" className="mt-4 underline underline-offset-4" onClick={() => { setCategory("All releases"); setQuery(""); setYear("All years"); }}>Clear filters</button></div>}
      <div className="mt-14 flex flex-wrap gap-5 border-t border-[rgb(var(--foreground))]/15 pt-8 text-sm">
        <a href="https://open.spotify.com/artist/1C1YzVPfV5sNBGwhMsNFRl" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">CDVRS on Spotify ↗</a>
        <a href="https://music.apple.com/gb/artist/cdvrs/1888536908" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">CDVRS on Apple Music ↗</a>
      </div>
    </section>
  );
}
