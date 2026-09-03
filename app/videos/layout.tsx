import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDVRS Videos",
  description:
    "Watch CDVRS music videos, creative visuals, live moments, interviews, and stories from CDVRSWRLD.",
  alternates: { canonical: "/videos" },
  openGraph: {
    title: "CDVRS Videos",
    description:
      "Music videos, creative visuals, and live moments from CDVRS.",
    url: "/videos",
  },
};

export default function VideosLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
