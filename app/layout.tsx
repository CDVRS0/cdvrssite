import type { Metadata } from "next";
import Script from "next/script";
import ConversionTracking from "./components/ConversionTracking";
import Footer from "./components/Footer";
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "./artist.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cdvrswrld.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      {
        url: "/World/Studio/CDV%20LOGO.png",
        type: "image/png",
        sizes: "192x192",
      },
    ],
    apple: [
      {
        url: "/World/Studio/CDV%20LOGO.png",
        type: "image/png",
        sizes: "192x192",
      },
    ],
  },
  title: {
    default: "CDVRS | Recording Artist & Producer",
    template: "%s | CDVRS",
  },
  description:
    "Official CDVRS website — music, production, No Pressure artist discovery, CDVRS Sports, culture, and creative projects.",
  applicationName: "CDVRS",
  keywords: [
    "CDVRS",
    "CDVRSWRLD",
    "music producer",
    "UK artist",
    "No Pressure music",
    "CDVRS Sports",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "CDVRS | Recording Artist & Producer",
    description:
      "Music, production, artist discovery, sports, culture, and creative projects from CDVRS.",
    siteName: "CDVRS",
    images: [{ url: "/covers/ME.PNG", alt: "CDVRS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CDVRS | Recording Artist & Producer",
    description:
      "Official CDVRS website for music, production, culture, and creative projects.",
    images: ["/covers/ME.PNG"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Cameron Dankwa",
    alternateName: "CDVRS",
    "@id": `${siteUrl}/#artist`,
    url: siteUrl,
    jobTitle: "Recording Artist, Producer and Mixing/Mastering Engineer",
    description: "UK-based recording artist, producer and audio engineer. COO at Grind & Ghost.",
    worksFor: { "@type": "Organization", name: "Grind & Ghost", url: "https://www.grindandghost.com" },
    image: `${siteUrl}/covers/ME.PNG`,
    sameAs: [
      "https://muso.ai/profile/08f30171-fa42-4684-9274-b4023eeb2deb",
      "https://muso.ai/profile/0557c41a-f5c3-493b-8fab-a0550d772f38",
      "https://www.instagram.com/camerondankwa/",
      "https://www.tiktok.com/@cdvrs_",
      "https://www.youtube.com/@CDVRSWRLD",
      "https://open.spotify.com/artist/1C1YzVPfV5sNBGwhMsNFRl",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script
          id="cdvrs-structured-data"
          strategy="beforeInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Providers>{children}<Footer /></Providers>
        <Analytics />
        <ConversionTracking />
      </body>
    </html>
  );
}
