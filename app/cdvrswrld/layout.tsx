import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDVRSWRLD Creative Platform",
  description:
    "Enter CDVRSWRLD, the creative platform connecting CDVRS music, No Pressure, CDVRS Sports, CDVlabs, and community.",
  alternates: { canonical: "/cdvrswrld" },
  openGraph: {
    title: "CDVRSWRLD Creative Platform",
    description:
      "Discover the music, sports, culture, and creative projects inside CDVRSWRLD.",
    url: "/cdvrswrld",
  },
};

export default function CDVRSWorldLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
