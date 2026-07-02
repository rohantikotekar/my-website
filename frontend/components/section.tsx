import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type SectionProps = {
  id: string;
  /** Small uppercase label above the title, e.g. "Selected Projects". */
  kicker: string;
  title: ReactNode;
  /** Optional supporting line under the title. */
  intro?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Standard section shell: consistent vertical rhythm, an accent kicker, a large
 * title, and a scroll reveal for the heading block.
 */
export function Section({
  id,
  kicker,
  title,
  intro,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-24 sm:py-32", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal className="mb-12 max-w-2xl">
          <p className="kicker">{kicker}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {intro}
            </p>
          ) : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
