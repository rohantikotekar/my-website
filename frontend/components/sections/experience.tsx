import { experiences, sectionContent } from "@/lib/data";
import { Section } from "@/components/section";

/**
 * Straight resume list: role at org, dates, bullets. No timeline rail, badges,
 * or cards — the text is the content.
 */
export function Experience() {
  return (
    <Section id="work" title={sectionContent.work.title}>
      <div className="space-y-9">
        {experiences.map((job) => (
          <article key={`${job.org}-${job.period}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-[0.95rem] font-semibold tracking-tight">
                {job.role}
                <span className="font-normal text-muted-foreground"> at </span>
                {job.org}
              </h3>
              <span className="text-xs text-accent">{job.period}</span>
            </div>

            <p className="mt-1 text-xs text-muted-foreground">{job.location}</p>

            <ul className="mt-3 space-y-2">
              {job.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                >
                  <span
                    className="mt-[0.55rem] size-1 shrink-0 rounded-full bg-accent/60"
                    aria-hidden
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
