import { profile } from "@/lib/data";
import { CONTAINER } from "@/components/section";
import { Reveal } from "@/components/reveal";

/**
 * Page opener: name, one-line role, and a short two-paragraph intro. Nothing
 * else — the resume below carries the detail.
 */
export function Hero() {
  return (
    <section id="hero" className="scroll-mt-20 pt-28 pb-4 sm:pt-32">
      <div className={CONTAINER}>
        <Reveal>
          <h1 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-2.5 text-center text-sm text-muted-foreground">
            {profile.location}
          </p>

          <div className="mt-8 space-y-4 text-[0.95rem] leading-relaxed text-soft">
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
