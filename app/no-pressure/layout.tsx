import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "No Pressure Music & Artist Discovery",
  description:
    "No Pressure is a creative label and artist discovery platform for emerging talent, curated sounds, releases, and artist development.",
  alternates: { canonical: "/no-pressure" },
  openGraph: {
    title: "No Pressure Music & Artist Discovery | CDVRS",
    description:
      "Discover emerging artists, curated sounds, releases, and creative work from No Pressure.",
    url: "/no-pressure",
    images: [{ url: "/covers/JUNINP.png", alt: "No Pressure" }],
  },
};

export default function NoPressureLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
