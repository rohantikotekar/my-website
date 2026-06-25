import { Award } from "lucide-react";
import { achievements } from "@/lib/data";
import { Section } from "@/components/section";
import { SectionReveal } from "@/components/trail/section-reveal";

export function Achievements() {
  return (
    <Section
      id="achievements"
      index="06"
      stage="Scenic Overlooks"
      title="Views worth pausing for"
      intro="Milestones along the way — the overlooks where the climb paid off."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((item, i) => (
          <SectionReveal
            key={item.title}
            delay={(i % 2) * 0.08}
            className="group flex items-start gap-4 rounded-lg border border-border bg-card/60 p-6 transition-colors hover:border-amber/40"
          >
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-amber/10 text-amber">
              <Award className="size-5" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-amber">
                  {item.year}
                </span>
              </div>
              <h3 className="mt-0.5 font-serif text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </Section>
  );
}
