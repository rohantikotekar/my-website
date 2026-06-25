"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Distance to travel on the y-axis while fading in. */
  y?: number;
};

/**
 * Reveals its children as they scroll into view — a gentle fade + rise,
 * like the next stretch of trail coming into view. Respects reduced motion.
 */
export function SectionReveal({
  children,
  className,
  delay = 0,
  y = 24,
}: SectionRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -120px 0px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
