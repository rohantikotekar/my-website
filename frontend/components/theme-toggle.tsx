"use client";

import { Moon, Sun } from "lucide-react";

export type Theme = "light" | "dark";

/** Key the chosen theme is stored under. Shared with the boot script in layout. */
export const THEME_KEY = "theme";

/**
 * Switches between the light and dark palettes by flipping `data-theme` on
 * <html>, and remembers the choice.
 *
 * Holds no React state: the current theme is read from the DOM at click time,
 * and which icon shows is decided by CSS off `data-theme` (see globals.css).
 * That keeps the button correct from the very first paint — no hydration
 * mismatch and no icon flicker.
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next: Theme = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Private mode / blocked storage — the toggle still works for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light or dark theme"
      title="Toggle theme"
      className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
    >
      <Sun className="theme-icon-sun size-4" aria-hidden />
      <Moon className="theme-icon-moon size-4" aria-hidden />
    </button>
  );
}
