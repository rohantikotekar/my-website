import { Target, Leaf, Code2 } from "lucide-react";
import { profile, quickFacts } from "@/lib/data";
import { Section } from "@/components/section";
import { SectionReveal } from "@/components/trail/section-reveal";

const values = [
  {
    Icon: Target,
    title: "Excellence",
    text: "I hold my work to a high bar — done well and done right.",
  },
  {
    Icon: Leaf,
    title: "Growth",
    text: "Every project leaves me more capable than the last.",
  },
  {
    Icon: Code2,
    title: "Craft",
    text: "Clean, considered engineering — built to last.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      index="01"
      stage="The Forest"
      title="A little about the hiker"
      intro="Where the trail enters the trees — the motivation and mindset behind the work."
    >
      <div className="grid gap-12 lg:grid-cols-5">
        <SectionReveal className="lg:col-span-3" delay={0.05}>
          <div className="space-y-4 text-base leading-relaxed text-foreground/90 sm:text-lg">
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="lg:col-span-2" delay={0.15}>
          <div className="grid gap-4">
            {values.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-lg border border-border bg-card/60 p-5"
              >
                <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>

      <SectionReveal delay={0.2}>
        <div className="mt-12 rounded-xl border border-border bg-card/60 p-6 sm:p-8">
          <p className="trail-eyebrow mb-6 text-muted-foreground/80">Trail log</p>
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {quickFacts.map(({ label, value }) => (
              <div key={label} className="border-l-2 border-amber/40 pl-4">
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground/90 sm:text-base">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </SectionReveal>
    </Section>
  );
}
