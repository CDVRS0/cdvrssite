import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDVRS Events",
  description:
    "Explore past Takeover 3x3 highlights and register interest in CD4Q basketball runs and future CDVRS events.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "CDVRS Events",
    description:
      "Takeover 3x3 highlights, CD4Q basketball runs and CDVRS community enquiries.",
    url: "/events",
  },
};

export default function EventsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
