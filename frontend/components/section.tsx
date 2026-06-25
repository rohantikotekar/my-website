import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SectionReveal } from "@/components/trail/section-reveal";

type SectionProps = {
  id: string;
  /** Two-digit stage number, e.g. "02". */
  index: string;
  /** Trail-stage name, e.g. "The Forest". */
  stage: string;
  title: string;
  /** Optional supporting line under the title. */
  intro?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Standard section shell: consistent spacing, a trail-stage eyebrow,
 * a serif title, and a scroll reveal for the heading block.
 */
export function Section({
  id,
  index,
  stage,
  title,
  intro,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-24 sm:py-28", className)}
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <SectionReveal className="mb-12 max-w-2xl">
          <p className="trail-eyebrow flex items-center gap-3">
            <span className="text-muted-foreground/70">{index}</span>
            <span className="h-px w-8 bg-amber/50" aria-hidden />
            {stage}
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{title}</h2>
          {intro ? (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {intro}
            </p>
          ) : null}
        </SectionReveal>
        {children}
      </div>
    </section>
  );
}
