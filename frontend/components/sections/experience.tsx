import { MapPin } from "lucide-react";
import { experiences, sectionContent } from "@/lib/data";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const c = sectionContent.work;
  return (
    <Section id="work" kicker={c.kicker} title={c.title} intro={c.intro}>
      <div className="relative border-l border-border pl-6 sm:pl-8">
        {experiences.map((job, i) => (
          <Reveal
            key={`${job.org}-${job.period}`}
            delay={(i % 2) * 0.06}
            className="relative pb-12 last:pb-0"
          >
            {/* timeline node */}
            <span
              className="absolute -left-[1.6rem] top-1.5 size-3 rounded-full border-2 border-accent bg-background shadow-[0_0_14px_var(--accent)] sm:-left-[2.1rem]"
              aria-hidden
            />

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl font-semibold tracking-tight">
                {job.role}
              </h3>
              <span className="text-sm font-medium text-accent">
                {job.period}
              </span>
            </div>

            <p className="mt-1 text-sm font-medium text-soft">{job.org}</p>
            <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="size-3" aria-hidden />
              {job.location} · {job.type}
            </p>

            <ul className="mt-4 space-y-2.5">
              {job.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/70" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
