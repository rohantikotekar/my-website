"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  skillCategories,
  sectionContent,
  type SkillCategory,
  type Skill,
} from "@/lib/data";
import { techIcons, isDarkHex } from "@/lib/tech-icons";
import { Section } from "@/components/section";
import { cn } from "@/lib/utils";

function TechLogo({ skill }: { skill: Skill }) {
  // A custom logo image takes precedence over a Simple Icons slug.
  if (skill.img) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={skill.img}
        alt={skill.name}
        className="size-7 shrink-0 rounded object-contain"
      />
    );
  }

  const icon = skill.slug ? techIcons[skill.slug] : undefined;

  if (icon) {
    const dark = isDarkHex(icon.hex);
    return (
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-label={skill.name}
        className={cn("size-7", dark && "text-soft")}
      >
        <path d={icon.path} fill={dark ? "currentColor" : `#${icon.hex}`} />
      </svg>
    );
  }

  // Fallback monogram for skills without a brand logo.
  const mono = skill.name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase();
  return (
    <span className="flex size-7 items-center justify-center rounded-md bg-accent/10 text-xs font-semibold text-accent">
      {mono}
    </span>
  );
}

export function Skills() {
  const [activeId, setActiveId] = useState<string>(skillCategories[0].id);
  const active: SkillCategory =
    skillCategories.find((c) => c.id === activeId) ?? skillCategories[0];
  const c = sectionContent.skills;

  return (
    <Section id="skills" kicker={c.kicker} title={c.title} intro={c.intro}>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
        {/* Categories */}
        <div className="min-w-0 rounded-3xl border border-border bg-card p-5 lg:col-span-2">
          <div className="grid grid-cols-2 gap-2 lg:flex lg:flex-col">
            {skillCategories.map((cat) => {
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveId(cat.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "flex h-full w-full items-center justify-between gap-3 rounded-2xl border p-4 text-left transition-all",
                    isActive
                      ? "border-accent/40 bg-accent/10"
                      : "border-border bg-white/[0.02] hover:border-white/20 hover:bg-white/5"
                  )}
                >
                  <span>
                    <span className="block text-sm font-semibold">
                      {cat.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {cat.skills.length} {c.itemsLabel}
                    </span>
                  </span>
                  <ChevronRight
                    className={cn(
                      "size-4 shrink-0 transition-transform",
                      isActive
                        ? "text-accent lg:translate-x-0.5"
                        : "text-muted-foreground"
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Contents of the selected category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0 rounded-3xl border border-border bg-card p-6 lg:col-span-3"
          >
            <h3 className="text-2xl font-semibold tracking-tight">
              {active.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{active.blurb}</p>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {active.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-white/[0.02] p-3 transition-all hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white/5"
                >
                  <TechLogo skill={skill} />
                  <span className="text-sm font-medium leading-tight">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
