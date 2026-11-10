import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop CDVRS",
  description:
    "Explore the CDVRS artist store, support the music and find beats through CDVLabs.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Shop CDVRS",
    description: "Explore the CDVRS artist store and support the music.",
    url: "/shop",
  },
};

export default function ShopLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
