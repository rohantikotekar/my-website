"use client";

import { useJourney } from "@/components/journey/journey-provider";

/**
 * Slim journey-progress bar pinned under the navbar. Visible on all screen
 * sizes, so mobile (where the side rail is hidden) still shows trail progress.
 */
export function TopProgressBar() {
  const { progress } = useJourney();

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-16 z-40 h-0.5 bg-transparent"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-forest via-moss to-amber"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
