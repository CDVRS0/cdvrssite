import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDVRS Archive",
  description:
    "Explore the CDVRS archive of music, visuals, events, releases, and moments from the creative world.",
  alternates: { canonical: "/archive" },
  openGraph: {
    title: "CDVRS Archive",
    description: "A collection of CDVRS music, visuals, and creative work.",
    url: "/archive",
  },
};

export default function ArchiveLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
