"use client";

const events = [
  {
    title: "Basketball Runs",
    location: "Milton Keynes",
    date: "9 June 2026",
  },
  {
    title: "CYW Workshop",
    location: "London",
    date: "July 2026",
  },
  {
    title: "CDVRS Listening Session",
    location: "TBA",
    date: "2026",
  },
];

export default function EventsSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">

        <p className="text-center text-xs uppercase tracking-[0.4em] text-blue-300">
          Events
        </p>

        <h2 className="mt-6 text-center text-4xl md:text-6xl font-light">
          Upcoming Experiences
        </h2>

        <div className="mt-16 grid gap-6">

          {events.map((event) => (
            <div
              key={event.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
            >
              <h3 className="text-2xl">{event.title}</h3>

              <p className="mt-2 text-gray-400">
                {event.location}
              </p>

              <p className="mt-2 text-blue-300">
                {event.date}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}