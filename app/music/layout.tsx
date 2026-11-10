import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDVRS Discography & Credits",
  description:
    "Explore CDVRS releases, No Pressure collaborations and production, mixing and mastering credits. Listen to SOUTHBOUND and browse the discography.",
  alternates: { canonical: "/music" },
  openGraph: {
    title: "CDVRS Discography & Credits",
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
