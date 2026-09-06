import { education, sectionContent } from "@/lib/data";
import { Section } from "@/components/section";

/** Degrees, in the same railed shape as the experience list. */
export function Education() {
  return (
    <Section id="education" index="02" title={sectionContent.education.title}>
      <div className="space-y-7">
        {education.map((entry) => (
          <article
            key={entry.school}
            className="border-l-2 border-border pl-5 transition-colors duration-200 hover:border-accent/70"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-base font-bold tracking-tight">
                {entry.school}
              </h3>
              <span className="meta shrink-0">{entry.period}</span>
            </div>
            <p className="mt-1 text-sm font-semibold text-accent">
              {entry.degree}
            </p>
            <p className="meta mt-1">{entry.location}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
