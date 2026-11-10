"use client";

import Image from "next/image";
import { useState } from "react";
import credits from "../data/credit-catalogue.json";

const roles = ["Production", "Engineering", "Mixing", "Mastering", "Composition", "Lyrics"];

export default function CreditCatalogue() {
  const [query, setQuery] = useState("");
  const [role, setRole] = useState("All roles");
  const [year, setYear] = useState("All years");
  const years = [...new Set(credits.map((credit) => credit.year))].sort().reverse();
  const filtered = credits.filter((credit) =>
    (role === "All roles" || credit.roles.includes(role)) &&
    (year === "All years" || credit.year === year) &&
    `${credit.title} ${credit.artists.join(" ")}`.toLowerCase().includes(query.trim().toLowerCase())
  );
  function resetFilters() { setQuery(""); setRole("All roles"); setYear("All years"); }

  return (
    <div className="mt-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <label htmlFor="credit-search" className="mb-2 block text-sm text-[rgb(var(--muted))]">Search credits by track or artist</label>
          <input id="credit-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a track or collaborator…" className="w-full border border-[rgb(var(--foreground))]/25 bg-[rgb(var(--background))] px-4 py-3" />
        </div>
        <div>
          <label htmlFor="credit-role" className="mb-2 block text-sm text-[rgb(var(--muted))]">Credit role</label>
          <select id="credit-role" value={role} onChange={(event) => setRole(event.target.value)} className="w-full border border-[rgb(var(--foreground))]/25 bg-[rgb(var(--background))] px-4 py-3">
            <option>All roles</option>{roles.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="credit-year" className="mb-2 block text-sm text-[rgb(var(--muted))]">Credit release year</label>
          <select id="credit-year" value={year} onChange={(event) => setYear(event.target.value)} className="w-full border border-[rgb(var(--foreground))]/25 bg-[rgb(var(--background))] px-4 py-3">
            <option>All years</option>{years.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-sm">
        <p role="status" className="text-[rgb(var(--muted))]">{filtered.length} credited {filtered.length === 1 ? "track" : "tracks"}</p>
        {(query || role !== "All roles" || year !== "All years") && <button onClick={resetFilters} type="button" className="underline underline-offset-4">Clear credit filters</button>}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {filtered.map((credit) => (
          <article key={credit.id} className="min-w-0 border border-[rgb(var(--foreground))]/15 p-5 sm:p-6">
            <div className="flex items-start gap-4">
              {credit.cover && <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-[rgb(var(--surface))]/10"><Image src={credit.cover} alt={`${credit.title} artwork`} fill sizes="80px" className="object-cover" /></div>}
              <div className="min-w-0">
                <p className="break-words text-xs leading-5 text-[rgb(var(--muted))]">{credit.artists.join(", ")} · {credit.year}</p>
                <h3 className="mt-2 break-words text-lg font-bold leading-6">{credit.title}</h3>
              </div>
            </div>
            <ul aria-label={`Roles on ${credit.title}`} className="mt-5 flex flex-wrap gap-2">
              {credit.roles.map((item) => <li key={item} className="border border-[rgb(var(--foreground))]/15 px-2 py-1 text-xs text-[rgb(var(--muted))]">{item}</li>)}
            </ul>
            {credit.sources.length === 1 ? <a href={credit.sources[0]} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm underline underline-offset-4" aria-label={`View ${credit.title} by ${credit.artists.join(", ")} credits on Muso`}>View credits on Muso ↗</a> : <details className="mt-5 text-sm"><summary className="cursor-pointer underline underline-offset-4">View {credit.sources.length} Muso records</summary><div className="mt-3 flex flex-wrap gap-4">{credit.sources.map((source, index) => <a key={source} href={source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" aria-label={`View Muso record ${index + 1} for ${credit.title}`}>Muso record {index + 1} ↗</a>)}</div></details>}
          </article>
        ))}
      </div>
      {filtered.length === 0 && <div className="mt-8 border border-[rgb(var(--foreground))]/20 p-6"><p>No credited tracks match those filters.</p><button type="button" className="mt-4 underline underline-offset-4" onClick={resetFilters}>Reset credits catalogue</button></div>}
    </div>
  );
}
