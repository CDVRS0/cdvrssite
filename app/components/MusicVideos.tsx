"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const videos = [
  { id: "ee8Epim6Eek", title: "PEACE VS CHAOS", label: "Official video", image: "/videos/peace-vs-chaos.jpg" },
  { id: "qGuP7TyUdGY", title: "5AM", label: "CDVRS · Music video", image: "/videos/5am.jpg" },
  { id: "gWI91liK6Io", title: "OKEY", label: "CDVRS · Music video", image: "/videos/okey.jpg" },
];

export default function MusicVideos({ standalone = false }: { standalone?: boolean }) {
  const [playing, setPlaying] = useState<string | null>(null);
  return (
    <section id="music-videos" aria-labelledby="music-videos-heading" className="scroll-mt-36 border-y border-[rgb(var(--foreground))]/15 px-6 py-16 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--accent))]">Press play · CDVRS</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
          <h2 id="music-videos-heading" className="font-mono text-4xl font-black uppercase leading-none sm:text-6xl">The music.<br />In motion.</h2>
          {!standalone && <Link href="/videos" className="text-sm underline underline-offset-4">Explore videos →</Link>}
        </div>
        <p className="mt-6 max-w-xl leading-7 text-[rgb(var(--muted))]">Watch PEACE VS CHAOS, 5AM and OKEY, from the official CDVRS YouTube channel.</p>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {videos.map(video => (
            <article key={video.id}>
              <div className="relative aspect-video overflow-hidden border border-[rgb(var(--foreground))]/20 bg-black">
                {playing === video.id ? (
                  <iframe src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`} title={`Watch ${video.title} by CDVRS`} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="absolute inset-0 h-full w-full border-0" />
                ) : (
                  <button type="button" onClick={() => setPlaying(video.id)} aria-label={`Play ${video.title} by CDVRS`} className="group absolute inset-0 h-full w-full focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-amber-200">
                    <Image src={video.image} alt={`${video.title} video thumbnail`} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition duration-300 group-hover:scale-105" />
                    <span aria-hidden="true" className="absolute inset-0 bg-black/20 transition group-hover:bg-black/5" />
                    <span className="absolute inset-0 flex items-center justify-center"><span aria-hidden="true" className="flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-black/70 text-2xl text-white">▶</span></span>
                  </button>
                )}
              </div>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[rgb(var(--muted))]">{video.label}</p>
              <h3 className="mt-2 font-mono text-2xl font-black">{video.title}</h3>
              <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm underline underline-offset-4">Watch on YouTube ↗</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
