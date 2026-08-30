"use client";

import { useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { StaggerContainer, StaggerItem } from "./StaggerContainer";

export default function CYWManifesto() {
  useEffect(() => {
    console.log("MANIFESTO RENDERED");
  }, []);

  return (
    <section
      id="cywmanifesto"
      className="relative w-full min-h-screen h-auto bg-[rgb(var(--background))] text-[rgb(var(--foreground))] px-6 pt-40 pb-48 overflow-visible"
    >
      {/* AMBIENT GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-200px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[rgb(var(--accent))]/10 blur-[200px]" />
      </div>

      {/* CONTENT WRAPPER (NO MORE FULL SCREEN CENTER LOCK) */}
      <div className="relative mx-auto max-w-5xl text-center">

        {/* LABEL */}
        <ScrollReveal>
          <p className="text-xs tracking-[0.4em] text-[rgb(var(--accent))] uppercase">
            CYW MANIFESTO
          </p>
        </ScrollReveal>

        {/* TITLE */}
        <ScrollReveal>
          <h2 className="mt-6 text-4xl font-light leading-tight md:text-6xl">
            A system, not a brand.
            <br />
            A universe built from vision, sound, and identity.
          </h2>
        </ScrollReveal>

        {/* PARAGRAPH */}
        <ScrollReveal>
          <p className="mt-10 mx-auto max-w-3xl text-lg leading-8 text-[rgb(var(--muted))]">
            <span className="text-[rgb(var(--accent))] font-medium">
              Create Your World
            </span>{" "}
            connects music, fashion, sport, and film into one unified ecosystem.
            It exists to give creators a platform to build identity beyond limits.
          </p>
        </ScrollReveal>

        {/* GRID */}
        <div className="mt-20">
          <StaggerContainer>
            {["Music", "Fashion", "Sport", "Film"].map((item) => (
              <StaggerItem key={item}>
                <div className="rounded-xl border border-[rgb(var(--foreground))]/10 bg-[rgb(var(--surface))]/5 p-6 backdrop-blur-md transition hover:bg-[rgb(var(--surface))]/10">
                  <p className="text-sm tracking-[0.3em] text-[rgb(var(--accent))] uppercase">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
}