"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { sections } from "@/lib/data";

type JourneyContextValue = {
  /** Overall scroll progress, 0 → 1. */
  progress: number;
  /** Id of the section currently in view. */
  activeId: string;
  /** Each section's vertical position as a fraction of total scroll (0 → 1). */
  ratios: Record<string, number>;
  /** Smooth-scroll to a section by id. */
  goTo: (id: string) => void;
};

const JourneyContext = createContext<JourneyContextValue | null>(null);

export function JourneyProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string>(sections[0].id);
  const [ratios, setRatios] = useState<Record<string, number>>({});
  const ticking = useRef(false);

  // Track overall scroll progress (rAF-throttled).
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
      ticking.current = false;
    };
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Measure each section's position as a fraction of scrollable height.
  useEffect(() => {
    const measure = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const next: Record<string, number> = {};
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          next[section.id] = max > 0 ? Math.min(1, el.offsetTop / max) : 0;
        }
      }
      setRatios(next);
    };
    measure();
    window.addEventListener("resize", measure);
    // Re-measure after fonts/images settle.
    const t = setTimeout(measure, 600);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, []);

  // Determine the active section using the viewport's vertical middle.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const value = useMemo<JourneyContextValue>(
    () => ({
      progress,
      activeId,
      ratios,
      goTo: (id: string) => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      },
    }),
    [progress, activeId, ratios]
  );

  return (
    <JourneyContext.Provider value={value}>{children}</JourneyContext.Provider>
  );
}

export function useJourney() {
  const ctx = useContext(JourneyContext);
  if (!ctx) {
    throw new Error("useJourney must be used within a JourneyProvider");
  }
  return ctx;
}
