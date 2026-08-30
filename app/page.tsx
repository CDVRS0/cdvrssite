import AboutSection from "./components/AboutSection";
import ArtistConnectSection from "./components/ArtistConnectSection";
import CDVRSWorld from "./components/CDVRSWorld";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MusicSection from "./components/MusicSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <ArtistConnectSection />
      <CDVRSWorld />
      <Footer />
    </main>
  );
}
