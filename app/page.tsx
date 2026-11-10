import { Suspense } from "react";
import AboutSection from "./components/AboutSection";
import ArtistConnectSection from "./components/ArtistConnectSection";
import CDVRSWorld from "./components/CDVRSWorld";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HomeSectionScroller from "./components/HomeSectionScroller";
import MusicVideos from "./components/MusicVideos";
import MusicSection from "./components/MusicSection";
import PressSection from "./components/PressSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      <Navbar />
      <Suspense fallback={null}>
        <HomeSectionScroller />
      </Suspense>
      <HeroSection />
      <MusicSection />
      <MusicVideos />
      <AboutSection />
      <CDVRSWorld />
      <PressSection />
      <ArtistConnectSection />
      <Footer />
    </main>
  );
}
