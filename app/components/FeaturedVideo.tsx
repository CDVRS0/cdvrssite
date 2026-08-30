"use client";

export default function FeaturedVideo() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">

        <p className="text-center text-xs uppercase tracking-[0.4em] text-blue-300">
          Featured Visual
        </p>

        <h2 className="mt-6 text-center text-4xl md:text-6xl font-light">
          Sound Meets Vision
        </h2>

        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10">

          <video
            className="w-full"
            autoPlay
            muted
            loop
            playsInline
            src="/videos/featured.mp4"
          />

        </div>

      </div>
    </section>
  );
}
