"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { GithubIcon } from "@/components/icons";
import { projects, sectionContent, type Project } from "@/lib/data";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ProjectCaseStudy } from "@/components/sections/project-case-study";

function ProjectCard({
  project,
  index,
  reduceMotion,
  onOpen,
}: {
  project: Project;
  index: number;
  reduceMotion: boolean | null;
  onOpen: () => void;
}) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      className={cn(
        "group relative h-full rounded-3xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-accent/30 hover:bg-card-strong",
        project.featured && "sm:col-span-2"
      )}
    >
      {project.github ? (
        <a
          href={project.github}
          onClick={(e) => e.stopPropagation()}
          aria-label={`${project.title} on GitHub`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-4 top-4 z-20 inline-flex size-9 items-center justify-center rounded-full border border-border bg-white/5 text-muted-foreground backdrop-blur transition-colors hover:border-accent/40 hover:text-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <GithubIcon className="size-4" />
        </a>
      ) : null}

      <button
        type="button"
        onClick={onOpen}
        className="flex h-full w-full flex-col rounded-3xl p-7 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={`Open ${project.title} details`}
      >
        <div className="flex items-center gap-2 pe-10">
          <span className="kicker">{project.category}</span>
          {project.featured ? (
            <Badge variant="accent">{sectionContent.projects.featuredLabel}</Badge>
          ) : null}
        </div>

        <h3 className="mt-4 text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.blurb}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-soft">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
          {sectionContent.projects.caseStudyLabel}
          <ArrowUpRight className="size-4" />
        </span>
      </button>
    </motion.div>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="projects"
      kicker={sectionContent.projects.kicker}
      title={sectionContent.projects.title}
      intro={sectionContent.projects.intro}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            reduceMotion={reduceMotion}
            onOpen={() => setActive(project)}
          />
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
