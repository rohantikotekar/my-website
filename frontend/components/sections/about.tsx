import { profile, quickFacts, sectionContent } from "@/lib/data";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";

export function About() {
  const c = sectionContent.about;
  return (
    <Section id="about" kicker={c.kicker} title={c.title} intro={c.intro}>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-start">
        <Reveal className="min-w-0 lg:col-span-3" delay={0.05}>
          <div className="space-y-6 text-base leading-relaxed text-soft sm:text-lg">
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="min-w-0 lg:col-span-2" delay={0.12}>
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-7">
            <p className="kicker mb-5">{c.quickFactsLabel}</p>
            <dl className="space-y-5">
              {quickFacts.map(({ label, value }) => (
                <div key={label} className="border-l-2 border-accent/40 pl-4">
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-foreground sm:text-base">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
