import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDVRS Events",
  description:
    "Find CDVRS events, basketball runs, listening sessions, workshops, and creative community experiences.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "CDVRS Events",
    description:
      "Basketball, music, workshops, and community events from CDVRS.",
    url: "/events",
  },
};

export default function EventsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
