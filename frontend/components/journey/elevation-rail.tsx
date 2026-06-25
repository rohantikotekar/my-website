"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Footprints } from "lucide-react";
import { sections } from "@/lib/data";
import { useJourney } from "@/components/journey/journey-provider";
import { cn } from "@/lib/utils";

// Thematic elevation readout (Yosemite Valley floor → Half Dome-ish summit).
const BASE_FT = 4000;
const SUMMIT_FT = 8800;

export function ElevationRail() {
  const { progress, ratios, activeId, goTo } = useJourney();
  const reduceMotion = useReducedMotion();

  // Detect newly-completed markers to fire a brief milestone pulse.
  const [flashId, setFlashId] = useState<string | null>(null);
  const completedRef = useRef<Set<string>>(new Set());
  const mounted = useRef(false);

  useEffect(() => {
    const nowCompleted = sections.filter(
      (s) => (ratios[s.id] ?? 1) <= progress + 0.001
    );
    for (const s of nowCompleted) {
      if (!completedRef.current.has(s.id)) {
        completedRef.current.add(s.id);
        if (mounted.current && s.id !== "hero") {
          setFlashId(s.id);
          window.setTimeout(
            () => setFlashId((cur) => (cur === s.id ? null : cur)),
            900
          );
        }
      }
    }
    mounted.current = true;
  }, [progress, ratios]);

  const elevation = Math.round(BASE_FT + progress * (SUMMIT_FT - BASE_FT));

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-5 top-0 z-30 hidden h-screen w-16 lg:flex lg:items-center xl:left-8"
    >
      <div className="relative h-[68vh] w-full">
        {/* Faint elevation silhouette behind the track */}
        <svg
          className="absolute inset-0 h-full w-full text-granite/30"
          viewBox="0 0 40 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M20 100 L20 78 L27 60 L15 40 L24 22 L20 0"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeDasharray="1 2"
          />
        </svg>

        {/* Track */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-border" />

        {/* Filled progress */}
        <div
          className="absolute left-1/2 top-0 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-forest to-amber"
          style={{ height: `${progress * 100}%` }}
        />

        {/* Section markers */}
        {sections.map((s) => {
          const ratio = ratios[s.id] ?? 0;
          const completed = ratio <= progress + 0.001;
          const active = activeId === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(s.id)}
              aria-label={`Go to ${s.label}`}
              className="group pointer-events-auto absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ top: `${ratio * 100}%` }}
            >
              {/* Milestone pulse */}
              <AnimatePresence>
                {flashId === s.id && !reduceMotion && (
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0.7 }}
                    animate={{ scale: 3, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber"
                  />
                )}
              </AnimatePresence>

              <span
                className={cn(
                  "block size-2.5 rounded-full border-2 transition-all duration-300",
                  completed
                    ? "border-amber bg-amber"
                    : "border-granite/60 bg-background",
                  active && "ring-2 ring-amber/40 ring-offset-2 ring-offset-background"
                )}
              />

              {/* Hover label */}
              <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-border bg-card px-2 py-1 text-xs font-medium text-foreground opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100">
                {s.label}
              </span>
            </button>
          );
        })}

        {/* Hiker marker */}
        <div
          className="absolute left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          style={{ top: `${progress * 100}%`, transition: "top 0.12s ease-out" }}
        >
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-full border border-amber/50 bg-card text-amber shadow-sm">
              <Footprints className="size-3.5" />
            </span>
            <span className="rounded-md bg-forest px-1.5 py-0.5 text-[10px] font-semibold tabular-nums text-primary-foreground shadow-sm">
              {elevation.toLocaleString()} ft
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
