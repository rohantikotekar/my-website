"use client";

import { useState } from "react";
import { GraduationCap, Briefcase, FlaskConical } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { careerStops, type CareerStop } from "@/lib/data";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const KIND_ICON = {
  education: GraduationCap,
  work: Briefcase,
  research: FlaskConical,
} as const;

export function CareerTimeline() {
  // Default the open marker to the most recent stop (the latest experience).
  const [activeId, setActiveId] = useState<string>(
    careerStops[careerStops.length - 1].id
  );
  const activeIndex = careerStops.findIndex((s) => s.id === activeId);
  const active: CareerStop = careerStops[activeIndex] ?? careerStops[0];

  return (
    <Section
      id="experience"
      index="02"
      stage="Trail Markers"
      title="The route so far"
      intro="Each marker is a stop on the journey. Tap one to see what happened there."
    >
      {/* Horizontal trail of stops */}
      <div className="overflow-x-auto pb-2">
        <div className="relative flex min-w-max gap-2 px-1 sm:gap-4">
          {/* base + progress line through the markers */}
          <div className="absolute inset-x-5 top-5 h-0.5 bg-border" />
          <div
            className="absolute left-5 top-5 h-0.5 bg-gradient-to-r from-forest to-amber"
            style={{
              width: `calc((100% - 2.5rem) * ${
                careerStops.length > 1
                  ? activeIndex / (careerStops.length - 1)
                  : 0
              })`,
            }}
          />

          {careerStops.map((stop) => {
            const Icon = KIND_ICON[stop.kind];
            const isActive = stop.id === activeId;
            return (
              <button
                key={stop.id}
                type="button"
                onClick={() => setActiveId(stop.id)}
                className="group relative flex w-32 shrink-0 flex-col items-center text-center sm:w-36"
                aria-pressed={isActive}
              >
                <span
                  className={cn(
                    "z-10 flex size-10 items-center justify-center rounded-full border-2 bg-background transition-colors",
                    isActive
                      ? "border-amber text-amber"
                      : "border-border text-muted-foreground group-hover:border-forest/50 group-hover:text-forest"
                  )}
                >
                  <Icon className="size-4" />
                </span>
                <span className="mt-2 text-[11px] font-semibold text-amber">
                  {stop.period}
                </span>
                <span
                  className={cn(
                    "mt-0.5 text-sm font-medium leading-tight transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {stop.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Expanding detail for the selected stop */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 rounded-2xl border border-border bg-card/60 p-6"
        >
          <div>
            <h3 className="font-serif text-2xl font-semibold">{active.title}</h3>
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              {active.org} · {active.period}
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground/90">
              {active.summary}
            </p>

            <h4 className="mt-5 text-sm font-semibold">Accomplishments</h4>
            <ul className="mt-2 space-y-1.5">
              {active.accomplishments.map((a) => (
                <li
                  key={a}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-moss" />
                  {a}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {active.skills.map((skill) => (
                <Badge key={skill} variant="forest">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
