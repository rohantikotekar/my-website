"use client";

import { useState } from "react";
import { ArrowUpRight, Tent } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { projects, type Project } from "@/lib/data";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { ProjectCaseStudy } from "@/components/sections/project-case-study";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="projects"
      index="03"
      stage="Campsites"
      title="Stops worth setting up camp"
      intro="A few projects I've built along the trail. Tap a campsite to look inside."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.button
            key={project.title}
            type="button"
            onClick={() => setActive(project)}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            whileHover={reduceMotion ? undefined : { y: -6, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 text-left shadow-sm outline-none transition-colors hover:border-forest/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={`Open ${project.title} details`}
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-forest/10 text-forest">
                <Tent className="size-4" />
              </span>
              {project.featured ? (
                <Badge variant="amber">Featured</Badge>
              ) : null}
            </div>
            <h3 className="mt-4 font-serif text-xl font-semibold transition-colors group-hover:text-forest">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">{project.blurb}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/85">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="forest">
                  {tag}
                </Badge>
              ))}
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-forest opacity-0 transition-opacity group-hover:opacity-100">
              Look inside
              <ArrowUpRight className="size-4" />
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <ProjectCaseStudy project={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </Section>
  );
}
