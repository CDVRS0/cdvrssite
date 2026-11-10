import Navbar from "../components/Navbar";
import { tournamentWaitingList } from "../data/tournament";
import EnquiryDraft from "../components/EnquiryDraft";
import { enquiryTypes, type EnquiryType } from "../data/enquiries";

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const { type } = await searchParams;
  const initialType: EnquiryType = type && Object.hasOwn(enquiryTypes, type) ? type as EnquiryType : "bookings";
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] px-6 pb-24 pt-36 text-[rgb(var(--foreground))]">
      <Navbar />
      <main className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">Contact CDVRS</p>
        <h1 className="mt-6 font-mono text-5xl font-black uppercase leading-none md:text-8xl">Let’s make it happen.</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[rgb(var(--muted))]">A record, a live booking, a collaboration or time on the court. Reach the right part of my world.</p>
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <div className="self-start divide-y divide-current/15 border-y border-current/15">
            {(["bookings", "no-pressure", "cd4q", "takeover"] as const).map(key => <div key={key} className="py-6"><h2 className="font-mono text-lg font-bold">{key === "bookings" ? "Artist, production & engineering" : key === "cd4q" ? "CDVRS Sports & CD4Q" : enquiryTypes[key].label}</h2><a className="mt-3 inline-block break-all underline underline-offset-4" href={`mailto:${enquiryTypes[key].email}`}>{enquiryTypes[key].email}</a></div>)}
          </div>
          <div><p className="mb-6 text-sm leading-7">Looking for the next tournament? <a className="underline underline-offset-4" href={tournamentWaitingList}>Join the waiting list on Tally ↗</a></p><EnquiryDraft key={initialType} initialType={initialType} /></div>
        </div>
      </main>
    </div>
  );
}
