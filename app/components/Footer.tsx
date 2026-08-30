"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--foreground))]/15 bg-[rgb(var(--background))] py-20">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="font-mono text-4xl font-black uppercase tracking-[0.16em]">
          CDVRS
        </h2>

        <p className="mt-4 max-w-md text-gray-400">
          The official artist website. © 2026 . ALL RIGHTS RESERVED. 
        </p>. 

        <div className="mt-12 flex flex-wrap gap-8 font-mono text-xs uppercase tracking-[0.2em] text-gray-500">

          <a href="#bio">Bio</a>
          <a href="#music">Music</a>
          <a href="#socials">Socials</a>
          <a href="#cdvrswrld">CDVRSWRLD</a>
          <a href="#contact">Contact</a>

        </div>

      </div>

    </footer>
  );
}
