import Image from "next/image";
import Link from "next/link";
import catalogue from "../data/discography.json";

const southbound = catalogue.find((release) => release.title === "SOUTHBOUND")!;

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#101010] px-6 pb-16 pt-44 text-white sm:px-10 sm:pt-32 lg:pb-20 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
        <Image src="/covers/ME.PNG" alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-[#101010]" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 sm:grid-cols-[1.1fr_0.9fr] sm:items-center lg:gap-12">
        <div className="relative z-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/65">Recording artist · Producer</p>
          <h1 className="mt-7 font-mono text-[24vw] font-black uppercase leading-[0.8] tracking-[-0.06em] sm:text-[13vw] lg:text-[clamp(5rem,13.5vw,12rem)]">CDVRS</h1>
          <p className="mt-7 font-mono text-2xl font-bold uppercase tracking-tight sm:text-2xl lg:text-4xl">Create your world.</p>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/70 lg:text-lg lg:leading-8">For the headphones. For the dancefloor. For the journey in between. Explore the music and the world of Cameron Dankwa.</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link href="/#music" className="bg-white px-6 py-4 font-bold text-black transition hover:bg-amber-200">Start listening ↓</Link>
            <Link href="/music" className="border border-white/30 px-6 py-4 transition hover:border-amber-200">Explore my catalogue</Link>
          </div>
          <div className="mt-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
            <span className="h-px w-10 bg-amber-200/70" /> Sound · Studio · Culture
          </div>
        </div>
        <div className="relative mx-auto flex w-full max-w-xl flex-col gap-5">
          <div className="relative hidden aspect-[4/5] overflow-hidden border border-white/15 sm:block">
            <Image src="/covers/ME.PNG" alt="CDVRS at the mixing desk in the studio" fill sizes="(max-width: 1023px) 100vw, 45vw" preload className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
            <p className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">Inside the world · CDVRS</p>
          </div>
          <a href={southbound.spotify} target="_blank" rel="noopener noreferrer" className="relative flex w-full items-center gap-4 border border-white/20 bg-[#171410] p-3 shadow-2xl transition hover:border-amber-200" aria-label="Listen to the SOUTHBOUND project by CDVRS on Spotify">
            <Image src="/covers/Southbound.png" alt="SOUTHBOUND artwork" width={88} height={88} className="h-20 w-20 object-cover sm:h-16 sm:w-16 lg:h-24 lg:w-24" />
            <div className="pr-2">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-amber-200">Start here · SOUTHBOUND</p>
              <p className="mt-2 text-xs text-white/75 lg:text-sm">REFLECT / SOUTHBOUND / BAKE</p>
              <p className="mt-3 text-sm font-bold">Listen to the project ↗</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
