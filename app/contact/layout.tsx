import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact CDVRS",
  description:
    "Contact CDVRS for bookings, music, production, collaborations, press, and creative enquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact CDVRS | Bookings, Music & Production",
    description:
      "Get in touch with CDVRS for bookings, music, production, collaborations, and creative enquiries.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
