import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDVRS Sports Basketball & Culture",
  description:
    "CDVRS Sports connects basketball, culture, live events, creative visuals, and the Takeover 3x3 community.",
  alternates: { canonical: "/sports" },
  openGraph: {
    title: "CDVRS Sports Basketball & Culture | CDVRS",
    description:
      "Basketball, culture, live events, creative visuals, and Takeover 3x3 from CDVRS Sports.",
    url: "/sports",
  },
};

export default function SportsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
