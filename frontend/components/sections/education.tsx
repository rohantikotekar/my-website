import { education, sectionContent } from "@/lib/data";
import { Section } from "@/components/section";

/** Degrees in the same plain shape as the experience list. */
export function Education() {
  return (
    <Section id="education" title={sectionContent.education.title}>
      <div className="space-y-6">
        {education.map((entry) => (
          <article key={entry.school}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-[0.95rem] font-semibold tracking-tight">
                {entry.school}
              </h3>
              <span className="text-xs text-accent">{entry.period}</span>
            </div>
            <p className="mt-1 text-sm text-soft">{entry.degree}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {entry.location}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
