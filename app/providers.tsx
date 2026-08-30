"use client";

import { ThemeProvider } from "next-themes";
import SmoothScroll from "./components/SmoothScroll";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="cdvrs-theme"
      themes={["light", "dark", "cyw-dark", "cyw-blue", "cyw-light"]}
    >
      {children}
      <SmoothScroll />
      <ThemeSwitcher />
    </ThemeProvider>
  );
}
