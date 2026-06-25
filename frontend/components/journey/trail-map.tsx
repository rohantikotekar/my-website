"use client";

import { useState } from "react";
import { Map as MapIcon, ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { sections } from "@/lib/data";
import { useJourney } from "@/components/journey/journey-provider";
import { cn } from "@/lib/utils";

const trailPath = `M ${sections
  .map((s) => `${s.map.x} ${s.map.y}`)
  .join(" L ")}`;

export function TrailMap() {
  const { activeId, goTo } = useJourney();
  const [open, setOpen] = useState(true);
  const reduceMotion = useReducedMotion();

  const active = sections.find((s) => s.id === activeId) ?? sections[0];

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden lg:block">
      <div className="overflow-hidden rounded-xl border border-border bg-card/80 shadow-lg backdrop-blur">
        {/* Header / toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center gap-2 px-3 py-2 text-left"
          aria-expanded={open}
        >
          <MapIcon className="size-4 text-forest" />
          <span className="flex-1">
            <span className="block text-xs font-semibold leading-tight">
              Trail Map
            </span>
            <span className="block text-[10px] text-muted-foreground">
              You are at: {active.label}
            </span>
          </span>
          <ChevronDown
            className={cn(
              "size-4 text-muted-foreground transition-transform",
              open && "rotate-180"
            )}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-3 pb-3">
                <svg
                  viewBox="0 0 86 130"
                  className="h-44 w-40"
                  role="group"
                  aria-label="Yosemite trail navigation map"
                >
                  {/* Paper background */}
                  <rect
                    x="2"
                    y="2"
                    width="82"
                    height="126"
                    rx="6"
                    className="fill-muted/60"
                  />
                  {/* Contour decoration */}
                  <path
                    d="M10 110 Q 40 96 76 104 M14 70 Q 44 58 72 66 M20 34 Q 44 26 66 32"
                    className="stroke-granite/25"
                    strokeWidth="0.7"
                    fill="none"
                  />
                  {/* The trail */}
                  <path
                    d={trailPath}
                    className="stroke-forest/50"
                    strokeWidth="1.4"
                    strokeDasharray="2 2"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Landmarks */}
                  {sections.map((s) => {
                    const isActive = s.id === activeId;
                    return (
                      <g
                        key={s.id}
                        transform={`translate(${s.map.x} ${s.map.y})`}
                        onClick={() => goTo(s.id)}
                        className="cursor-pointer"
                        role="button"
                        aria-label={`Go to ${s.label}`}
                      >
                        <title>{s.label}</title>
                        {isActive && !reduceMotion && (
                          <motion.circle
                            r={3}
                            className="fill-amber/40"
                            initial={{ scale: 0.6, opacity: 0.8 }}
                            animate={{ scale: 2.2, opacity: 0 }}
                            transition={{
                              duration: 1.6,
                              repeat: Infinity,
                              ease: "easeOut",
                            }}
                          />
                        )}
                        {/* Larger invisible hit area */}
                        <circle r={5} className="fill-transparent" />
                        <circle
                          r={isActive ? 2.6 : 1.8}
                          className={cn(
                            "transition-all",
                            isActive
                              ? "fill-amber stroke-card"
                              : "fill-forest/70 stroke-card hover:fill-forest"
                          )}
                          strokeWidth="0.8"
                        />
                      </g>
                    );
                  })}
                </svg>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
