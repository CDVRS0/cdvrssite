import { Suspense } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MusicSection from "./components/MusicSection";
import ArtistJournal from "./components/ArtistJournal";
import HomeSectionScroller from "./components/HomeSectionScroller";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main className="artist-site">
      <Navbar />
      <Suspense fallback={null}>
        <HomeSectionScroller />
      </Suspense>
      <HeroSection />
      <div className="artist-ticker" aria-hidden="true">
        <span>INDEPENDENT SPIRIT. OPEN FREQUENCIES. CREATE YOUR WORLD. ↗</span>
      </div>
      <MusicSection />
      <ArtistJournal />
      <section className="artist-film">
        <div>
          <p className="eyebrow">SOUND, WITH A PICTURE.</p>
          <h2>
            See what
            <br />
            I’m <em>hearing.</em>
          </h2>
          <Link className="artist-button" href="/music#music-videos">
            Watch the music ↗
          </Link>
        </div>
        <Link
          href="/music#music-videos"
          className="film-still"
          aria-label="Watch PEACE VS CHAOS and more CDVRS music videos"
        >
          <Image
            src="/videos/peace-vs-chaos.jpg"
            alt="Still from the PEACE VS CHAOS music video"
            fill
            sizes="(max-width:700px) 90vw,60vw"
            className="object-cover"
          />
          <span aria-hidden="true">PLAY ↗</span>
        </Link>
      </section>
    </main>
  );
}
