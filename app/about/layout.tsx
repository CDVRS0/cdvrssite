import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Cameron Dankwa CDVRS",
  description:
    "Learn about Cameron Dankwa, known as CDVRS: a UK-based artist, producer, engineer, and creative visionary building a world through music, sport, and culture.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Cameron Dankwa CDVRS",
    description:
      "The story, music, and creative world of UK-based artist and producer Cameron Dankwa, known as CDVRS.",
    url: "/about",
    images: [{ url: "/covers/HAPPY_C.JPG", alt: "Cameron Dankwa CDVRS" }],
  },
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
