"use client";

import { Sunrise, Sun, Sunset, Moon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme, type Theme } from "@/components/theme/theme-provider";

const META: Record<Theme, { label: string; Icon: typeof Sun }> = {
  morning: { label: "Morning", Icon: Sunrise },
  afternoon: { label: "Afternoon", Icon: Sun },
  sunset: { label: "Sunset", Icon: Sunset },
  night: { label: "Night", Icon: Moon },
};

/**
 * Cycles the Yosemite scene through Morning → Afternoon → Sunset → Night.
 */
export function ThemeToggle() {
  const { theme, cycle } = useTheme();
  const { label, Icon } = META[theme];

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Scene: ${label}. Click to change time of day.`}
      title={`Scene: ${label}`}
      className="group inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card/60 px-3 text-sm font-medium text-foreground/80 backdrop-blur transition-colors hover:border-amber/40 hover:text-amber"
    >
      <span className="relative inline-flex size-5 items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ y: 10, opacity: 0, rotate: -30 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -10, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.25 }}
            className="absolute"
          >
            <Icon className="size-5" />
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="hidden w-16 text-left sm:inline">{label}</span>
    </button>
  );
}
