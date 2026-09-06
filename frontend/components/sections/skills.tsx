import { skillCategories, sectionContent } from "@/lib/data";
import { Section } from "@/components/section";

/**
 * Technical skills as tagged groups — a monospace category label over a wrap of
 * lightweight tags. Denser and more scannable than a comma list, without
 * turning into a grid of cards.
 */
export function Skills() {
  return (
    <Section id="skills" index="03" title={sectionContent.skills.title}>
      <div className="space-y-7">
        {skillCategories.map((category) => (
          <div key={category.id}>
            <h3 className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-accent">
              {category.name}
            </h3>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <span key={skill.name} className="tag">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
