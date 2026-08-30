"use client";

import { useTheme } from "next-themes";

const themes = [
  { label: "SYS", value: "system" },
  { label: "DARK", value: "cyw-dark" },
  { label: "BLUE", value: "cyw-blue" },
  { label: "LIGHT", value: "light" },
];

export default function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <div
      aria-label="Theme switcher"
      className="fixed bottom-5 right-5 z-[100] flex gap-1 rounded-full border border-[rgb(var(--foreground))]/15 bg-[rgb(var(--background))]/80 p-1.5 shadow-2xl shadow-black/30 backdrop-blur-xl"
    >
      {themes.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => setTheme(item.value)}
          className="rounded-full px-3 py-2 text-xs font-medium text-[rgb(var(--muted))] transition hover:bg-[rgb(var(--surface))]/10 hover:text-[rgb(var(--foreground))] focus-visible:bg-[rgb(var(--accent))] focus-visible:text-white focus-visible:outline-none"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
