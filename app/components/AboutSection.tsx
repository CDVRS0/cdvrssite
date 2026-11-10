import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="bio" className="scroll-mt-28 px-6 py-20 sm:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative pb-8 pr-8">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src="/covers/HAPPY_C.JPG" alt="Cameron Dankwa smiling outside in sunglasses" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover object-[center_35%]" />
          </div>
          <div className="absolute bottom-0 right-0 border border-[rgb(var(--foreground))]/20 bg-[rgb(var(--background))] px-6 py-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em]">Cameron Dankwa</p>
            <p className="mt-1 text-sm text-[rgb(var(--muted))]">The person behind CDVRS.</p>
          </div>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--accent))]">A little about me</p>
          <h2 className="mt-5 font-mono text-4xl font-black uppercase leading-none sm:text-6xl">I’m Cameron.<br />The music<br />is CDVRS.</h2>
          <p className="mt-7 text-lg leading-8 text-[rgb(var(--muted))]">I’m a UK-based recording artist, producer and mixing/mastering engineer. My world moves between making records, working with artists and bringing people together.</p>
          <p className="mt-5 leading-8 text-[rgb(var(--muted))]">Production started with experimenting in Logic and FL Studio. Mixing vocals for friends became a craft of its own. Along the way, music grew into No Pressure, CDVLabs and a wider world of basketball, culture and community.</p>
          <div className="mt-8 border-y border-[rgb(var(--foreground))]/15 py-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[rgb(var(--accent))]">In the inspiration folder</p>
            <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">Pharrell · Timbaland · Dr. Dre · Kanye West · Michael Jackson · Wu-Tang Clan</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-5 text-sm">
            <Link href="/about" className="underline underline-offset-4">More of my story →</Link>
            <Link href="/music#credits" className="text-[rgb(var(--muted))] underline underline-offset-4">The work behind the records →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
