import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] px-6 pb-24 pt-36 text-[rgb(var(--foreground))]">
      <Navbar />
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">
          Contact
        </p>

        <h1 className="mt-6 font-mono text-5xl font-black uppercase leading-none md:text-8xl">
          CDVRS enquiries
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[rgb(var(--muted))]">
          For bookings, music, production, and collaborations email - npglobalmusic@gmail.com
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {["Bookings", "Music", "Production", "Collaborations"].map((item) => (
            <div
              key={item}
              className="border border-[rgb(var(--foreground))]/15 p-6 font-mono text-xs uppercase tracking-[0.24em] text-[rgb(var(--muted))]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
