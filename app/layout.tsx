import type { Metadata } from "next";
import Script from "next/script";
import Providers from "./providers";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cdvrswrld.com";

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
    default: "CDVRS | Artist, Producer & Creative Visionary",
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
    title: "CDVRS | Artist, Producer & Creative Visionary",
    description:
      "Music, production, artist discovery, sports, culture, and creative projects from CDVRS.",
    siteName: "CDVRS",
    images: [{ url: "/covers/ME.PNG", alt: "CDVRS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CDVRS | Artist, Producer & Creative Visionary",
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
    name: "CDVRS",
    url: siteUrl,
    jobTitle: "Artist and Producer",
    description: "UK-based artist, producer, and creative visionary.",
    image: `${siteUrl}/covers/ME.PNG`,
    sameAs: [
      "https://www.instagram.com/camerondankwa/",
      "https://www.tiktok.com/@cdvrs",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
