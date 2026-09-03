import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop CDVRS",
  description:
    "Shop CDVRS merchandise, clothing, and creative products from the CDVRSWRLD world.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Shop CDVRS",
    description: "Explore CDVRS clothing and creative products.",
    url: "/shop",
  },
};

export default function ShopLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
