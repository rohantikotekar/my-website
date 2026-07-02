"use client";

import { motion, useReducedMotion } from "motion/react";
import { profile, heroSignals, heroMetrics, hero } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const item = {
    hidden: reduceMotion ? {} : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left — headline */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white/5 px-3.5 py-1.5 text-sm text-soft"
          >
            <span className="size-2 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
            {profile.location} · {profile.role}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 text-[clamp(2.6rem,7vw,4.6rem)] font-bold leading-[0.98] tracking-tight"
          >
            {hero.headline.before}{" "}
            <span className="text-gradient">{hero.headline.highlight}</span>
            {hero.headline.after}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-soft"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg">
              <a href={hero.primaryCta.href}>{hero.primaryCta.label}</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right — profile snapshot card */}
        <motion.aside
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Profile snapshot"
          className="rounded-3xl border border-border bg-gradient-to-b from-white/[0.09] to-white/[0.04] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.4)]"
        >
          <dl className="divide-y divide-border">
            {heroSignals.map(({ label, value }) => (
              <div key={label} className="py-4 first:pt-0 last:pb-0">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  {label}
                </dt>
                <dd className="mt-1 font-medium text-foreground">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {heroMetrics.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-black/20 p-4"
              >
                <div className="text-2xl font-bold tracking-tight">{value}</div>
                <div className="mt-1 text-[0.72rem] leading-snug text-muted-foreground">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
