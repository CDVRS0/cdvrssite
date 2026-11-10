import Image from "next/image";
import Navbar from "../components/Navbar";
import Discography from "../components/Discography";
import CreditsSection from "../components/CreditsSection";
import MusicVideos from "../components/MusicVideos";
import releases from "../data/discography.json";

const southbound = releases.find((release) => release.title === "SOUTHBOUND")!;

export default function MusicPage() {
  return (
    <div className="artist-site music-page min-h-screen">
      <Navbar />
      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-44 sm:px-10 lg:grid-cols-2 lg:items-center xl:px-0">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--accent))]">CDVRS · Music</p>
            <h1 className="mt-5 font-mono text-6xl font-black uppercase leading-[0.95] sm:text-8xl">A world<br />in sound.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[rgb(var(--muted))]">The records, collaborations and sounds of CDVRS. Start with SOUTHBOUND, then explore the catalogue and the work behind the music.</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <a href="#discography" className="bg-[rgb(var(--foreground))] px-6 py-4 font-bold text-[rgb(var(--background))]">Explore discography</a>
              <a href="#music-videos" className="border border-[rgb(var(--foreground))]/30 px-6 py-4">Watch music videos</a>
              <a href="#credits" className="border border-[rgb(var(--foreground))]/30 px-6 py-4">Production &amp; engineering credits</a>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden border border-[rgb(var(--foreground))]/15">
            <Image src="/covers/Southbound.png" alt="SOUTHBOUND by CDVRS cover artwork" fill sizes="(max-width: 1023px) 100vw, 50vw" preload className="object-cover" />
          </div>
        </section>
        <section aria-labelledby="featured-release" className="border-y border-[rgb(var(--foreground))]/15 px-6 py-16 sm:px-10">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[rgb(var(--accent))]">Featured project · 2026</p>
              <h2 id="featured-release" className="mt-4 font-mono text-4xl font-black sm:text-6xl">SOUTHBOUND</h2>
              <p className="mt-6 max-w-xl leading-8 text-[rgb(var(--muted))]">Three tracks. Three states of mind. REFLECT, SOUTHBOUND and BAKE move through lo-fi hip-hop, Miami bass and amapiano — a project shaped by atmosphere, warmth and movement.</p>
              <div className="mt-6 flex flex-wrap gap-5 text-sm">
                <a href={southbound.spotify} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Listen on Spotify ↗</a>
                <a href={southbound.apple} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Apple Music ↗</a>
                <a href="https://diymusician.cdbaby.com/news/artist-release-roundup-june-2026/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Read the CD Baby feature ↗</a>
              </div>
            </div>
            <iframe title="Listen to SOUTHBOUND by CDVRS on Spotify" src="https://open.spotify.com/embed/album/5wjmUNQHPoRSoVRvpMVhZJ" height="352" loading="lazy" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" className="w-full rounded-xl border-0" />
          </div>
        </section>
        <MusicVideos />
        <Discography />
        <CreditsSection />
      </main>

    </div>
  );
}
