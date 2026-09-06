import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

/**
 * The single centered column every block on the page aligns to. Kept narrow so
 * lines stay short and the page reads top-to-bottom without scanning sideways.
 */
export const CONTAINER = "mx-auto w-full max-w-2xl px-6";

type SectionProps = {
  id: string;
  /** Plain section heading, e.g. "Experience". */
  title: string;
  children: ReactNode;
  className?: string;
};

/**
 * Minimal section shell: one centered heading over the shared narrow column.
 * No kicker, no supporting intro — heading straight into content.
 */
export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-12 sm:py-16", className)}>
      <div className={CONTAINER}>
        <Reveal>
          <h2 className="text-center text-xl font-semibold tracking-tight sm:text-2xl">
            {title}
          </h2>
          <div className="mt-8">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
