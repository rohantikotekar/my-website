import { experiences, sectionContent } from "@/lib/data";
import { Section } from "@/components/section";

/**
 * Resume list: role, company, dates, bullets, and the stack for each entry.
 * A hairline rail down the left picks up the accent on hover, which gives the
 * list some structure without wrapping every job in a card.
 */
export function Experience() {
  return (
    <Section id="work" index="01" title={sectionContent.work.title}>
      <div className="space-y-10">
        {experiences.map((job) => (
          <article
            key={`${job.org}-${job.period}`}
            className="group border-l-2 border-border pl-5 transition-colors duration-200 hover:border-accent/70"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-base font-bold tracking-tight">
                {job.role}
              </h3>
              <span className="meta shrink-0">{job.period}</span>
            </div>

            <p className="mt-1 text-sm font-semibold text-accent">{job.org}</p>
            <p className="meta mt-1">
              {job.location} · {job.type}
            </p>

            <ul className="mt-3.5 space-y-2">
              {job.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                >
                  <span
                    className="mt-[0.5rem] size-1 shrink-0 rounded-full bg-accent/70 transition-colors group-hover:bg-accent"
                    aria-hidden
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {job.skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
