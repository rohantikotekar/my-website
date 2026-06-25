"use client";

import { useState } from "react";
import { ArrowUpRight, Tent } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { GithubIcon } from "@/components/icons";
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
      index="04"
      stage="Campsites"
      title="Stops worth setting up camp"
      intro="A few projects I've built along the trail. Tap a campsite to look inside."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            whileHover={reduceMotion ? undefined : { y: -6, scale: 1.03 }}
            className="group relative h-full rounded-lg border border-border bg-card shadow-sm transition-colors hover:border-forest/30"
          >
            {project.github ? (
              <a
                href={project.github}
                onClick={(e) => e.stopPropagation()}
                aria-label={`${project.title} on GitHub`}
                {...(project.github !== "#"
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="absolute right-3 top-3 z-20 inline-flex size-9 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground backdrop-blur transition-colors hover:border-forest/40 hover:text-forest focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <GithubIcon className="size-4" />
              </a>
            ) : null}

            <button
              type="button"
              onClick={() => setActive(project)}
              className="flex h-full w-full flex-col rounded-lg p-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={`Open ${project.title} details`}
            >
              <div className="flex items-center gap-2 pe-9">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
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
            </button>
          </motion.div>
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
