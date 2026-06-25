"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";

/** Layered ridgelines that fade in behind the hero — the distant Yosemite skyline. */
function Ridgeline() {
  return (
    <svg
      className="absolute inset-x-0 bottom-0 h-[45%] w-full text-forest"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        fill="currentColor"
        fillOpacity="0.08"
        d="M0,224 L120,197 C240,171,480,117,720,128 C960,139,1200,213,1320,250 L1440,288 L1440,320 L0,320 Z"
      />
      <path
        fill="currentColor"
        fillOpacity="0.14"
        d="M0,288 L160,256 C320,224,640,160,960,176 C1120,184,1280,240,1360,266 L1440,293 L1440,320 L0,320 Z"
      />
    </svg>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };
  const item = {
    hidden: reduceMotion ? {} : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <Ridgeline />

      <div className="mx-auto w-full max-w-5xl px-6 pt-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="trail-eyebrow flex items-center gap-2"
          >
            <MapPin className="size-3.5" aria-hidden />
            {profile.location} · Trailhead
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
          >
            Hi, I&apos;m {profile.name}.
            <span className="mt-2 block text-forest">{profile.role}.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg">
              <a href="#projects">Explore my work</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#summit">Get in touch</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      {!reduceMotion && (
        <motion.a
          href="#about"
          aria-label="Scroll to begin"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-5" />
        </motion.a>
      )}
    </section>
  );
}
