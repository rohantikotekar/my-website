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
  /** Two-digit index shown before the title, e.g. "01". */
  index: string;
  /** Plain section heading, e.g. "Experience". */
  title: string;
  children: ReactNode;
  className?: string;
};

/**
 * Section shell: a centered heading flanked by hairlines that fade outward,
 * with a monospace index for a little engineering texture. Still no kicker,
 * intro line, or card around the content.
 */
export function Section({
  id,
  index,
  title,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-12 sm:py-16", className)}>
      <div className={CONTAINER}>
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="rule-fade w-full flex-1 -scale-x-100" aria-hidden />
            <div className="flex items-baseline gap-2 whitespace-nowrap">
              <span className="font-mono text-xs font-medium text-accent">
                {index}
              </span>
              <h2 className="font-display text-lg font-bold tracking-tight sm:text-xl">
                {title}
              </h2>
            </div>
            <span className="rule-fade w-full flex-1" aria-hidden />
          </div>
          <div className="mt-8">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
