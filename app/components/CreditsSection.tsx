import Link from "next/link";
import CreditCatalogue from "./CreditCatalogue";
import { musoProfiles } from "../data/credits";

export default function CreditsSection() {
  return (
    <section id="credits" className="border-t border-[rgb(var(--foreground))]/15 px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--accent))]">Behind the records</p>
        <h2 className="mt-4 font-mono text-4xl font-black uppercase sm:text-6xl">Credits catalogue</h2>
        <p className="mt-6 max-w-2xl leading-7 text-[rgb(var(--muted))]">Production, songwriting, mixing, mastering and engineering by Cameron Dankwa / CDVRS. Explore the full catalogue listed across both Muso profiles, from artist releases to work with collaborators.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={musoProfiles.cameron} target="_blank" rel="noopener noreferrer" className="border border-[rgb(var(--foreground))]/30 px-5 py-3 text-sm hover:border-[rgb(var(--accent))]">Cameron Dankwa on Muso ↗</a>
          <a href={musoProfiles.cdvrs} target="_blank" rel="noopener noreferrer" className="border border-[rgb(var(--foreground))]/30 px-5 py-3 text-sm hover:border-[rgb(var(--accent))]">CDVRS on Muso ↗</a>
        </div>
        <CreditCatalogue />
        <Link href="/contact" className="mt-10 inline-block bg-[rgb(var(--foreground))] px-6 py-4 text-sm font-bold text-[rgb(var(--background))]">Work with CDVRS</Link>
      </div>
    </section>
  );
}
