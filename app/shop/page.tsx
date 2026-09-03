"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const shopUrl = "https://vyb.co/artists/cdvrs";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      <Navbar />
      <main>
        <section className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-24 pt-36 sm:px-10">
          <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_12px)] opacity-25" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_10%_90%,rgba(var(--accent),0.18)_0%,transparent_65%)]" />
          <div className="relative z-10 mx-auto w-full max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">CDVRSWRLD</p>
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="mt-6 font-mono text-[18vw] font-black uppercase leading-[0.85] md:text-[10vw]">Shop</motion.h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[rgb(var(--muted))]">Clothing and creative products from the CDVRS world, available through the official external store.</p>
            <a href={shopUrl} target="_blank" rel="noopener noreferrer" className="mt-10 inline-block border border-white bg-white px-8 py-4 font-mono text-xs font-black uppercase tracking-[0.22em] text-black transition hover:border-[rgb(var(--accent))] hover:bg-[rgb(var(--accent))] hover:text-white">Visit Store</a>
          </div>
        </section>

        <section className="border-t border-[rgb(var(--foreground))]/10 px-6 py-24 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-[rgb(var(--accent))]">Official Store</p>
            <h2 className="font-mono text-4xl font-black uppercase leading-none md:text-6xl">Wear the world</h2>
            <p className="mt-6 max-w-2xl leading-8 text-[rgb(var(--muted))]">Find CDVRS clothing and products through the official artist store. The link opens in a new tab so you can return to CDVRSWRLD whenever you are ready.</p>
            <a href={shopUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block border-b border-[rgb(var(--accent))]/50 pb-1 font-mono text-xs uppercase tracking-[0.25em] text-[rgb(var(--accent))] transition hover:border-[rgb(var(--accent))]">Open CDVRS Store</a>
          </div>
        </section>
      </main>
    </div>
  );
}