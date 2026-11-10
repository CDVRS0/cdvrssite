import Image from "next/image";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="artist-hero">
      <div className="hero-kicker">
        <span>CAMERON DANKWA / CDVRS</span>
        <span>ARTIST. PRODUCER. ALWAYS CREATING.</span>
      </div>
      <h1 className="hero-title">
        CDVRS<span aria-hidden="true">✳</span>
      </h1>
      <div className="hero-composition">
        <div className="hero-copy">
          <p className="handwritten">a world of my own.</p>
          <h2>
            For the feeling.
            <br />
            For the <em>journey.</em>
          </h2>
          <p>
            Records from my world to yours. I’m Cameron — recording artist,
            producer and the person behind CDVRS.
          </p>
          <Link className="artist-button" href="/#music">
            Find your frequency <span>↘</span>
          </Link>
          <span className="hero-side-note">SOUNDTRACKS TO THE IN-BETWEEN.</span>
        </div>
        <figure className="hero-portrait">
          <Image
            src="/covers/STREET_C.JPG"
            alt="CDVRS with headphones against a colourful graffiti wall"
            fill
            sizes="(max-width: 700px) 90vw, 48vw"
            preload
            className="object-cover"
            style={{ objectPosition: "center 43%" }}
          />
          <figcaption>01 / OUTSIDE THE STUDIO</figcaption>
        </figure>
        <div className="hero-stamp" aria-hidden="true">
          CREATE
          <br />
          YOUR
          <br />
          WORLD ↗
        </div>
        <figure className="hero-inset">
          <Image
            src="/covers/HAPPY_C.JPG"
            alt="Cameron smiling outside in sunglasses"
            fill
            sizes="180px"
            className="object-cover"
            style={{ objectPosition: "center 38%" }}
          />
          <figcaption>just me, being me.</figcaption>
        </figure>
      </div>
      <div className="hero-bottom">
        <span>THE MUSIC / THE PROCESS / THE PERSON</span>
        <Link href="/cdvrswrld">Get to know me ↗</Link>
      </div>
    </section>
  );
}
