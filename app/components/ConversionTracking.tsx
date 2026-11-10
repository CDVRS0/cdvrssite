"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { tournamentWaitingList } from "../data/tournament";

// Record destination categories only: never names, email addresses or form content.
export default function ConversionTracking() {
  useEffect(() => {
    function clicked(event: MouseEvent) {
      const anchor = event.target instanceof Element ? event.target.closest("a") : null;
      if (!anchor) return;
      const url = new URL(anchor.href, window.location.origin);
      const category = anchor.href === tournamentWaitingList ? "tournament_waiting_list" :
        ["open.spotify.com", "music.apple.com", "ditto.fm", "ffm.to", "song.link"].includes(url.hostname) ? "music" :
        url.hostname === "beats.cdvrswrld.com" ? "beats" : null;
      if (category) {
        try { track("destination_click", { category, page: window.location.pathname }); } catch { /* Navigation remains available if analytics is blocked. */ }
      }
    }
    document.addEventListener("click", clicked);
    return () => document.removeEventListener("click", clicked);
  }, []);
  return null;
}
