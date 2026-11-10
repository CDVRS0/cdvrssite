import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My World — Cameron Dankwa",
  description:
    "Meet Cameron Dankwa, the person behind CDVRS. Photographs, the story behind the music, and the creative world around it.",
  alternates: { canonical: "/cdvrswrld" },
  openGraph: {
    title: "My World — Cameron Dankwa",
    description: "The person, the process and the world behind CDVRS.",
    url: "/cdvrswrld",
  },
};

export default function CDVRSWorldLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
