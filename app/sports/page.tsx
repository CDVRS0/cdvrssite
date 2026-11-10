"use client";

import EnquiryDraft from "../components/EnquiryDraft";
import { tournamentWaitingList } from "../data/tournament";
import Navbar from "../components/Navbar";

export default function SportsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <section className="flex min-h-screen flex-col justify-end px-6 pb-24 pt-36 sm:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">
              CDVRSWRLD
            </p>

            <h1 className="mt-6 font-mono text-[16vw] font-black uppercase leading-[0.85] md:text-[10vw]">
              CDVRS
              <br />
              Sports
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
              Basketball, culture, visuals, live runs, events, and creative
              moments around sport.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a className="border border-white px-6 py-4 font-mono text-xs uppercase" href={tournamentWaitingList}>Join the next tournament waiting list ↗</a>
              <a className="border border-white/30 px-6 py-4 font-mono text-xs uppercase" href="#register-interest">CD4Q runs &amp; scrimmages</a>
              <a className="border border-white/30 px-6 py-4 font-mono text-xs uppercase" href="/contact?type=sports">Partnership enquiries</a>
            </div>
          </div>
        </section>

        <section id="tournament" className="scroll-mt-36 border-t border-white/10 px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(var(--accent))]">Next tournament</p>
            <h2 className="mt-4 font-mono text-3xl font-black uppercase md:text-5xl">Be part of the next one.</h2>
            <p className="mt-6 max-w-2xl leading-8 text-white/65">Join our tournament waiting list on Tally. Add your details there to register your interest. A waiting-list entry is not a ticket, payment or guaranteed place. Confirmed dates, venue and entry details will be announced separately.</p>
            <a href={tournamentWaitingList} className="mt-8 inline-block border border-white px-6 py-4 font-mono text-sm">Join the tournament waiting list ↗</a>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-24 sm:px-10">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">
                About Us
              </p>
              <h2 className="font-mono text-4xl font-black uppercase md:text-6xl">
                More Than
                <br />
                The Game
              </h2>
              <p className="mt-6 max-w-xl leading-8 text-white/65">
                CDVRS Sports exists to create a place where people can play,
                express themselves, develop and belong. Basketball is the
                foundation, but the greater purpose is to create pathways,
                opportunities and community through sport.
              </p>
            </div>

            <div className="aspect-[4/3] overflow-hidden border border-white/15 bg-white/5">
              <img
                src="/World/Sports/4.jpg"
                alt="CDVRS Sports basketball event"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-24 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <p className="mb-12 font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">
              The Movement
            </p>

            <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
              {["Basketball Runs", "Culture", "Live Moments"].map(
                (item, index) => (
                  <div
                    key={item}
                    className="bg-black p-8 transition hover:bg-white/5"
                  >
                    <p className="mb-4 font-mono text-xs text-[rgb(var(--accent))]">
                      0{index + 1}
                    </p>
                    <h2 className="font-mono text-xl font-black uppercase">
                      {item}
                    </h2>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-24 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">
              Past event highlights
            </p>

            <h2 className="mb-12 font-mono text-4xl font-black uppercase md:text-6xl">
              Takeover 3x3
            </h2>

            <div className="border border-white/15 bg-white/5">
              <div className="aspect-video bg-black">
                <video
                  src="/World/Sports/takeover.mp4"
                    className="h-full w-full"
                    title="Takeover 3x3 Basketball highlights"
                    preload="none"
                    muted
                    loop
                    playsInline
                    controls
                  />
              </div>

              <div className="p-6">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-[rgb(var(--accent))]">
                  CDVRS Sports
                </p>
                <h3 className="mt-3 font-mono text-2xl font-black uppercase">
                  Takeover 3x3 Basketball
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/60">
                  Revisit Takeover 3x3. These are highlights from a past event, not an announcement of a future date.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="register-interest" className="scroll-mt-36 border-t border-white/10 px-6 py-24 sm:px-10">
          <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">
                Get In Touch
              </p>
              <h2 className="font-mono text-4xl font-black uppercase md:text-5xl">
                Join the
                <br />
                next run
              </h2>
              <p className="mt-6 leading-8 text-white/65">Ask about CD4Q runs and scrimmages or discuss a Sports partnership. For the next tournament, use the waiting list above. Session enquiries do not reserve a place or subscribe you to updates.</p>
            </div>

            <EnquiryDraft initialType="cd4q" types={["cd4q", "sports"]} />
          </div>
        </section>
      </main>
    </div>
  );
}