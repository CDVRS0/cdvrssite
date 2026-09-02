"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const sectionIds = new Set([
  "bio",
  "music",
  "socials",
  "cdvrswrld",
  "contact",
]);

export default function HomeSectionScroller() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");

    if (!section || !sectionIds.has(section)) {
      return;
    }

    window.requestAnimationFrame(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [searchParams]);

  return null;
}
