"use client";

import Image from "next/image";
import { useState } from "react";
import episodes from "../data/no-pressure-episodes.json";

const categories = ["All videos", "Episodes", "Season 1", "Visualisers"];

export default function NoPressureEpisodes() {
  const [category, setCategory] = useState("All videos");
  const [query, setQuery] = useState("");
  const [playing, setPlaying] = useState<string | null>(null);
  const visible = episodes.filter(ep => (category === "All videos" || ep.category === category) && `${ep.title} ${ep.artist} ${ep.label}`.toLowerCase().includes(query.trim().toLowerCase()));
  function changeCategory(value: string) { setCategory(value); setPlaying(null); }
  return (
    <section id="episodes" aria-labelledby="episodes-heading" className="scroll-mt-36 border-t border-[rgb(var(--foreground))]/10 px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div><p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--accent))]">The No Pressure archive</p><h2 id="episodes-heading" className="font-mono text-4xl font-black uppercase leading-none md:text-6xl">Episodes &amp; sessions</h2></div>
          <a href="https://www.youtube.com/@CDVRSWRLD/search?query=No%20Pressure" target="_blank" rel="noopener noreferrer" className="text-sm underline underline-offset-4">Explore on YouTube ↗</a>
        </div>
        <p className="mt-6 max-w-2xl leading-7 text-[rgb(var(--muted))]">All five numbered episodes, the Season 1 sessions and cypher, plus the visualiser archive. Find an artist, choose a video and press play.</p>
        <div role="group" aria-label="Filter No Pressure videos" className="mt-8 flex flex-wrap gap-3">
          {categories.map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => changeCategory(item)} className={`border px-4 py-3 text-sm transition ${category === item ? "border-[rgb(var(--accent))] bg-[rgb(var(--foreground))] text-[rgb(var(--background))]" : "border-[rgb(var(--foreground))]/25 hover:border-[rgb(var(--accent))]"}`}>{item}</button>)}
        </div>
        <div className="mt-6 max-w-lg"><label htmlFor="episode-search" className="mb-2 block text-sm">Search by artist or video</label><input id="episode-search" type="search" value={query} onChange={event => { setQuery(event.target.value); setPlaying(null); }} className="w-full border border-[rgb(var(--foreground))]/25 bg-transparent px-4 py-3 outline-none focus:border-[rgb(var(--accent))]" /></div>
        <p role="status" className="mt-5 text-sm text-[rgb(var(--muted))]">{visible.length} {visible.length === 1 ? "video" : "videos"}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map(ep => <article key={ep.id} className="overflow-hidden border border-[rgb(var(--foreground))]/15 bg-white/5">
            <div className="relative aspect-video bg-black">
              {playing === ep.id ? <iframe src={`https://www.youtube-nocookie.com/embed/${ep.id}?autoplay=1&rel=0`} title={ep.youtubeTitle} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="absolute inset-0 h-full w-full border-0" /> : <button type="button" aria-label={`Play ${ep.title} by ${ep.artist}`} onClick={() => setPlaying(ep.id)} className="group absolute inset-0 h-full w-full focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-amber-200"><Image src={ep.image} alt={`${ep.title} — ${ep.artist} video thumbnail`} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition group-hover:opacity-80" /><span aria-hidden="true" className="absolute inset-0 flex items-center justify-center"><span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-black/70 text-xl text-white">▶</span></span></button>}
            </div>
            <div className="p-5"><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[rgb(var(--accent))]">{ep.label}</p><h3 className="mt-3 font-mono text-lg font-black">{ep.title}</h3><p className="mt-2 text-sm text-[rgb(var(--muted))]">{ep.artist}</p><a href={`https://www.youtube.com/watch?v=${ep.id}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm underline underline-offset-4">Watch on YouTube ↗</a></div>
          </article>)}
        </div>
        {visible.length === 0 && <div className="mt-8 border border-[rgb(var(--foreground))]/20 p-6"><p>No videos match that search.</p><button type="button" className="mt-4 underline underline-offset-4" onClick={() => { setQuery(""); changeCategory("All videos"); }}>Show all videos</button></div>}
      </div>
    </section>
  );
}
