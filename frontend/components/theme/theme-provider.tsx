"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export const THEMES = ["morning", "afternoon", "sunset", "night"] as const;
export type Theme = (typeof THEMES)[number];

export const THEME_STORAGE_KEY = "trail-theme";
const THEME_EVENT = "trail-themechange";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  cycle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function apply(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* ignore storage errors */
  }
  window.dispatchEvent(new Event(THEME_EVENT));
}

// External store: the source of truth is the <html data-theme> attribute, which
// the no-flash script sets before React hydrates. Reading it via
// useSyncExternalStore keeps us in sync without effects or hydration flicker.
function subscribe(onChange: () => void) {
  window.addEventListener(THEME_EVENT, onChange);
  return () => window.removeEventListener(THEME_EVENT, onChange);
}
function getSnapshot(): Theme {
  const t = document.documentElement.getAttribute("data-theme") as Theme | null;
  return t && THEMES.includes(t) ? t : "afternoon";
}
function getServerSnapshot(): Theme {
  return "afternoon";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const setTheme = useCallback((next: Theme) => apply(next), []);

  const cycle = useCallback(() => {
    const next = THEMES[(THEMES.indexOf(getSnapshot()) + 1) % THEMES.length];
    apply(next);
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, cycle }),
    [theme, setTheme, cycle]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}

/**
 * Inline script string that sets the theme before first paint to avoid a flash.
 * Picks a saved theme, otherwise one that matches the current time of day.
 */
export const themeInitScript = `(function(){try{var k='${THEME_STORAGE_KEY}';var t=localStorage.getItem(k);if(!t){var h=new Date().getHours();t=h<11?'morning':h<17?'afternoon':h<20?'sunset':'night';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','afternoon');}})();`;
