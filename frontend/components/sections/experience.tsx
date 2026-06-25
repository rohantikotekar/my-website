import { Briefcase, MapPin } from "lucide-react";
import { experiences, type WorkExperience } from "@/lib/data";
import { Section } from "@/components/section";
import { SectionReveal } from "@/components/trail/section-reveal";
import { Badge } from "@/components/ui/badge";

const TYPE_VARIANT: Record<WorkExperience["type"], "amber" | "forest"> = {
  Internship: "amber",
  Research: "forest",
  "Full-time": "forest",
};

export function Experience() {
  return (
    <Section
      id="work-experience"
      index="03"
      stage="Switchbacks"
      title="Experience & internships"
      intro="The steeper stretches of the climb — internships and research roles where the work got real."
    >
      <div className="space-y-6">
        {experiences.map((job, i) => (
          <SectionReveal key={`${job.org}-${job.period}`} delay={(i % 3) * 0.06}>
            <div className="rounded-xl border border-border bg-card/60 p-6 transition-colors hover:border-forest/30 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                      <Briefcase className="size-4" />
                    </span>
                    <h3 className="font-serif text-xl font-semibold">
                      {job.role}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-foreground/80">
                    {job.org}
                  </p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="size-3" aria-hidden />
                    {job.location}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <Badge variant="amber">{job.period}</Badge>
                  <Badge variant={TYPE_VARIANT[job.type]}>{job.type}</Badge>
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-moss" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <Badge key={skill} variant="forest">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </Section>
  );
}
