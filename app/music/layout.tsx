import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDVRS Music Catalog",
  description:
    "Explore the CDVRS music catalog, including the Southbound EP, Peace Vs Chaos, Amsterdam Remix, and future releases.",
  alternates: { canonical: "/music" },
  openGraph: {
    title: "CDVRS Music Catalog",
    description:
      "Listen to releases and discover the evolving sound of CDVRS, a UK-based artist and producer.",
    url: "/music",
    images: [{ url: "/covers/Southbound.png", alt: "CDVRS Southbound EP" }],
  },
};

export default function MusicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
