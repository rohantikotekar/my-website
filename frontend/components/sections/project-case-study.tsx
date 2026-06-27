"use client";

import { useEffect, useRef } from "react";
import {
  ArrowLeft,
  ChevronRight,
  PlayCircle,
  Layers,
  GitBranch,
  Clock,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/** Full-screen immersive case study for a single project. */
export function ProjectCaseStudy({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const reduceMotion = useReducedMotion();

  // Keep the latest onClose without re-running the mount effect.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    // Push a history entry so the browser Back button (and gestures) closes the
    // case study instead of leaving the page. Both the "Back to trail" button
    // and Escape call history.back(), which fires popstate → onClose.
    window.history.pushState({ projectCaseStudy: true }, "");

    const onPop = () => onCloseRef.current();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") window.history.back();
    };

    window.addEventListener("popstate", onPop);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, []);

  const linkExternal = (href?: string) =>
    href && href !== "#"
      ? { href, target: "_blank", rel: "noopener noreferrer" }
      : null;

  const demo = linkExternal(project.demo);

  return (
    <motion.div
      className="fixed inset-0 z-[70] overflow-y-auto bg-background"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      {/* Sticky top bar */}
      <div className="sticky top-0 z-10 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-4xl items-center justify-between px-6">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-forest"
          >
            <ArrowLeft className="size-4" />
            Back to trail
          </button>
          <span className="trail-eyebrow">Case Study</span>
        </div>
      </div>

      <article className="mx-auto w-full max-w-4xl px-6 pb-24">
        {/* Header */}
        <header className="pt-10">
          <div className="flex flex-wrap items-center gap-2">
            {project.featured && <Badge variant="amber">Featured</Badge>}
            {project.year && <Badge variant="forest">{project.year}</Badge>}
            {project.role && <Badge variant="outline">{project.role}</Badge>}
          </div>
          <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
            {project.title}
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            {project.blurb}
          </p>
        </header>

        {/* Demo media */}
        {project.media ? (
          <div className="mt-8 w-full overflow-hidden rounded-2xl border border-border">
            {project.media.type === "video" ? (
              <video
                src={project.media.src}
                className="aspect-video w-full bg-black object-contain"
                controls
                playsInline
                preload="metadata"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.media.src}
                alt={project.media.alt ?? `${project.title} preview`}
                className="aspect-video w-full bg-muted/30 object-contain"
              />
            )}
          </div>
        ) : (
          <div className="mt-8 flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-forest/15 via-sky/10 to-amber/15">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <PlayCircle className="size-10 text-forest/70" />
              <span className="text-sm">Demo coming soon</span>
            </div>
          </div>
        )}

        {/* Overview */}
        <Block icon={Sparkles} title="Overview">
          <p className="text-base leading-relaxed text-foreground/90">
            {project.description}
          </p>
        </Block>

        {/* Tech stack */}
        {project.stack?.length ? (
          <Block icon={Layers} title="Tech stack">
            <div className="grid gap-4 sm:grid-cols-3">
              {project.stack.map((group) => (
                <div key={group.label}>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {group.label}
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="forest">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Block>
        ) : null}

        {/* Architecture */}
        {project.architecture?.length ? (
          <Block icon={GitBranch} title="Architecture">
            <div className="flex flex-wrap items-center gap-2">
              {project.architecture.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium">
                    {step}
                  </span>
                  {i < project.architecture!.length - 1 && (
                    <ChevronRight className="size-4 shrink-0 text-amber" />
                  )}
                </div>
              ))}
            </div>
          </Block>
        ) : null}

        {/* Timeline */}
        {project.timeline?.length ? (
          <Block icon={Clock} title="Timeline">
            <ol className="space-y-3">
              {project.timeline.map((t) => (
                <li key={t.phase} className="flex gap-4">
                  <span className="w-24 shrink-0 text-sm font-semibold text-forest">
                    {t.phase}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {t.detail}
                  </span>
                </li>
              ))}
            </ol>
          </Block>
        ) : null}

        {/* Highlights */}
        {project.highlights?.length ? (
          <Block icon={Sparkles} title="Highlights">
            <ul className="space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-foreground/90">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-moss" />
                  {h}
                </li>
              ))}
            </ul>
          </Block>
        ) : null}

        {/* Challenge + Lesson */}
        {(project.challenge || project.lesson) && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {project.challenge && (
              <div className="rounded-xl border border-border bg-muted/40 p-5">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-amber">
                  The climb
                </h4>
                <p className="mt-2 text-sm text-foreground/90">
                  {project.challenge}
                </p>
              </div>
            )}
            {project.lesson && (
              <div className="rounded-xl border border-border bg-muted/40 p-5">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-forest">
                  The view from the top
                </h4>
                <p className="mt-2 text-sm text-foreground/90">
                  {project.lesson}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Links */}
        <div className="mt-10 flex flex-wrap gap-3">
          {demo ? (
            <Button asChild>
              <a {...demo}>
                <ExternalLink className="size-4" />
                Live demo
              </a>
            </Button>
          ) : (
            <Button disabled>
              <ExternalLink className="size-4" />
              Demo (coming soon)
            </Button>
          )}
        </div>
      </article>
    </motion.div>
  );
}

function Block({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Layers;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 border-t border-border pt-8">
      <h3 className="flex items-center gap-2 font-serif text-xl font-semibold">
        <Icon className="size-5 text-forest" />
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}
