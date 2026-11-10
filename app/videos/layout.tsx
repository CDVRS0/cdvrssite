import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDVRS Videos",
  description:
    "Watch PEACE VS CHAOS, 5AM and OKEY on the official CDVRS website, with videos from the CDVRS YouTube channel.",
  alternates: { canonical: "/videos" },
  openGraph: {
    title: "CDVRS Videos",
    description:
      "Watch PEACE VS CHAOS, 5AM and OKEY by CDVRS.",
    url: "/videos",
  },
};

export default function VideosLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
