import { profile } from "@/lib/data";
import { CONTAINER } from "@/components/section";
import { Reveal } from "@/components/reveal";

/**
 * Page opener: name, location, and a short two-paragraph intro. Nothing else —
 * the resume below carries the detail.
 */
export function Hero() {
  return (
    <section id="hero" className="scroll-mt-20 pt-28 pb-6 sm:pt-36">
      <div className={CONTAINER}>
        <Reveal>
          <p className="flex items-center justify-center gap-2">
            <span
              className="relative flex size-1.5 items-center justify-center"
              aria-hidden
            >
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs tracking-wide text-muted-foreground">
              {profile.location}
            </span>
          </p>

          <h1 className="mt-4 text-center font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <div className="mx-auto mt-8 space-y-4 text-[0.95rem] leading-relaxed text-soft">
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
