import Navbar from "../components/Navbar";

export default function NoPressurePage() {
  return (
    <div className="min-h-screen bg-black px-6 pb-24 pt-36 text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">
          CDVRSWRLD
        </p>

        <h1 className="mt-6 font-mono text-6xl font-black uppercase leading-none md:text-8xl">
          No Pressure
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
          A creative label and artist discovery platform for new sounds,
          emerging talent, curated releases, and artist development.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {["Artist Discovery", "Curated Sounds", "Creative Label"].map((item) => (
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
