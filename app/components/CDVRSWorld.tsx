import Image from "next/image";
import Link from "next/link";

const worlds = [
  { title: "CDVLabs", line: "Start with a beat.", description: "Instrumentals and production from the same world as the records. Find the starting point for your next idea.", href: "https://beats.cdvrswrld.com/", image: "/covers/ME.PNG", alt: "CDVRS at the studio mixing desk", action: "Explore my beats" },
  { title: "No Pressure", line: "Make room for new voices.", description: "Artist discovery, collaborations and a platform for sounds from the UK and beyond.", href: "/no-pressure", image: "/World/Studio/NEW NP.PNG", alt: "No Pressure artwork", action: "Watch the episodes" },
  { title: "CDVRS Sports", line: "From the studio to the court.", description: "Basketball runs, Takeover 3x3 and the people who bring the game to life.", href: "/sports", image: "/World/Sports/4.jpg", alt: "Basketball at a CDVRS Sports event", action: "Step onto the court" },
];

export default function CDVRSWorld() {
  return (
    <section id="cdvrswrld" className="scroll-mt-28 border-y border-[rgb(var(--foreground))]/15 px-6 py-20 sm:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--accent))]">CDVRSWRLD</p>
        <h2 className="mt-5 font-mono text-4xl font-black uppercase leading-none sm:text-6xl">More than<br />the studio.</h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[rgb(var(--muted))]">Music is the starting point. Beats, artist discovery and basketball are all part of the world around it.</p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {worlds.map((world) => (
            <article key={world.title} className="min-w-0 border border-[rgb(var(--foreground))]/15">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={world.image} alt={world.alt} fill sizes="(max-width: 767px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[rgb(var(--accent))]">{world.title}</p>
                <h3 className="mt-3 text-2xl font-bold leading-tight">{world.line}</h3>
                <p className="mt-4 text-sm leading-7 text-[rgb(var(--muted))]">{world.description}</p>
                {world.href.startsWith("https") ? <a href={world.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm underline underline-offset-4">{world.action} ↗</a> : <Link href={world.href} className="mt-6 inline-block text-sm underline underline-offset-4">{world.action} →</Link>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
