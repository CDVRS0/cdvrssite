import Link from "next/link";

const socials = [
  { name: "Instagram", detail: "Artist · @camerondankwa", href: "https://www.instagram.com/camerondankwa/" },
  { name: "TikTok", detail: "@cdvrs_", href: "https://www.tiktok.com/@cdvrs_" },
  { name: "YouTube", detail: "@CDVRSWRLD · music & No Pressure", href: "https://www.youtube.com/@CDVRSWRLD" },
  { name: "Spotify", detail: "Follow the music", href: "https://open.spotify.com/artist/1C1YzVPfV5sNBGwhMsNFRl" },
];

export default function ArtistConnectSection() {
  return (
    <section id="socials" className="scroll-mt-28 px-6 py-20 sm:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--accent))]">Keep in touch</p>
          <h2 className="mt-5 font-mono text-4xl font-black uppercase leading-none sm:text-6xl">Stay in<br />my world.</h2>
          <p className="mt-6 max-w-md leading-8 text-[rgb(var(--muted))]">The music, the process and the moments in between. Find me here.</p>
          <div className="mt-8 border-t border-[rgb(var(--foreground))]/15">
            {socials.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 border-b border-[rgb(var(--foreground))]/15 py-5"><span className="font-bold">{social.name}</span><span className="text-right text-sm text-[rgb(var(--muted))]">{social.detail} ↗</span></a>)}
          </div>
        </div>
        <div id="contact" className="scroll-mt-28">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--accent))]">From the studio</p>
          <video src="/World/Studio/0219.mp4" poster="/covers/ME.PNG" title="CDVRS studio footage" controls playsInline preload="none" className="mt-5 aspect-video w-full border border-[rgb(var(--foreground))]/15 bg-black object-contain" />
          <h3 className="mt-7 text-2xl font-bold">Let’s make the next record.</h3>
          <p className="mt-4 leading-8 text-[rgb(var(--muted))]">Production, mixing, mastering or a collaboration. Tell me what you’re working on.</p>
          <Link href="/contact" className="mt-6 inline-block bg-[rgb(var(--foreground))] px-6 py-4 text-sm font-bold text-[rgb(var(--background))]">Get in touch →</Link>
        </div>
      </div>
    </section>
  );
}
