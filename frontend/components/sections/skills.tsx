import { skillCategories, sectionContent } from "@/lib/data";
import { Section } from "@/components/section";

/**
 * Technical skills as plain grouped lines — category, then the tools under it.
 * No tabs, cards, or logo tiles.
 */
export function Skills() {
  return (
    <Section id="skills" title={sectionContent.skills.title}>
      <div className="space-y-6">
        {skillCategories.map((category) => (
          <div key={category.id}>
            <h3 className="text-[0.95rem] font-semibold tracking-tight">
              {category.name}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {category.skills.map((skill) => skill.name).join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
