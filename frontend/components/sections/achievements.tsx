import { achievements, sectionContent } from "@/lib/data";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";

export function Achievements() {
  const c = sectionContent.achievements;
  return (
    <Section id="achievements" kicker={c.kicker} title={c.title}>
      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((item, i) => (
          <Reveal
            key={item.title}
            delay={(i % 2) * 0.08}
            className="group rounded-3xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/30 hover:bg-card-strong"
          >
            <span className="text-sm font-semibold text-accent">
              {item.year}
            </span>
            <h3 className="mt-1 text-lg font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.detail}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
