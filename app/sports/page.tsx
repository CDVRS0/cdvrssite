import Navbar from "../components/Navbar";

export default function SportsPage() {
  return (
    <div className="min-h-screen bg-black px-6 pb-24 pt-36 text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">
          CDVRSWRLD
        </p>

        <h1 className="mt-6 font-mono text-6xl font-black uppercase leading-none md:text-8xl">
          CDVRS SPORTS
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
          The movement side of CDVRSWRLD: basketball, culture, visuals, live
          runs, events, and creative moments around sport.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {["Basketball Runs", "Culture", "Live Moments"].map((item) => (
            <div
              key={item}
              className="border border-white/15 bg-white/5 p-6 font-mono text-xs uppercase tracking-[0.24em] text-white/60"
            >
              {item}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
