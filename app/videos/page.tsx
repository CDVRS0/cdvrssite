import Navbar from "../components/Navbar";
import MusicVideos from "../components/MusicVideos";

export default function VideosPage() {
  return (
    <div className="artist-site music-page min-h-screen">
      <Navbar />
      <main>
        <header className="mx-auto max-w-6xl px-6 pb-16 pt-44 sm:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--accent))]">CDVRS · Videos</p>
          <h1 className="mt-6 font-mono text-6xl font-black uppercase leading-none sm:text-8xl">Watch my world.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[rgb(var(--muted))]">Music videos and visuals from CDVRS. Start here, then explore more on the official channel.</p>
          <a href="https://www.youtube.com/@CDVRSWRLD" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block underline underline-offset-4">Explore the CDVRS YouTube channel ↗</a>
        </header>
        <MusicVideos standalone />
      </main>

    </div>
  );
}
