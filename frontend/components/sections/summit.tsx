import { Mail, FileText, Calendar, Flag } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile, resumeUrl } from "@/lib/data";
import { Section } from "@/components/section";
import { SectionReveal } from "@/components/trail/section-reveal";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";

export function Summit() {
  return (
    <Section
      id="summit"
      index="07"
      stage="The Summit"
      title="You've reached the top"
      intro="Thanks for making the climb. Here's where to find me, grab my resume, or start a conversation."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Get in touch */}
        <SectionReveal className="flex flex-col rounded-lg border border-border bg-card p-8">
          <div className="flex items-center gap-2 text-forest">
            <Flag className="size-5" />
            <span className="trail-eyebrow !text-forest">Let&apos;s connect</span>
          </div>
          <h3 className="mt-3 font-serif text-2xl font-semibold">
            Start a conversation
          </h3>
          <p className="mt-2 text-muted-foreground">
            Whether it&apos;s a role, a collaboration, or just trail talk —
            send a message and I&apos;ll get back to you.
          </p>

          {/* Live contact form — submissions are emailed and stored */}
          <div className="mt-6">
            <ContactForm />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-border pt-6">
            <Button asChild variant="ghost" size="sm">
              <a href={`mailto:${profile.email}`}>
                <Mail className="size-4" />
                Email directly
              </a>
            </Button>
            {/* Calendar booking — future milestone */}
            <Button variant="ghost" size="sm" disabled>
              <Calendar className="size-4" />
              Book a call (soon)
            </Button>
            <span className="mx-1 h-5 w-px bg-border" aria-hidden />
            <Button asChild variant="ghost" size="icon" aria-label="GitHub">
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="size-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="size-5" />
              </a>
            </Button>
          </div>
        </SectionReveal>

        {/* Resume */}
        <SectionReveal
          delay={0.1}
          className="flex flex-col justify-between rounded-lg border border-border bg-forest p-8 text-primary-foreground"
        >
          <div>
            <div className="flex items-center gap-2 text-amber-soft">
              <FileText className="size-5" />
              <span className="trail-eyebrow !text-amber-soft">Resume</span>
            </div>
            <h3 className="mt-3 font-serif text-2xl font-semibold">
              The full route, on paper
            </h3>
            <p className="mt-2 text-primary-foreground/80">
              Prefer the details? Download a one-page summary of my experience,
              skills, and education.
            </p>
          </div>

          <div className="mt-8">
            <Button asChild variant="accent" size="lg">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="size-4" />
                Download resume
              </a>
            </Button>
            <p className="mt-3 text-xs text-primary-foreground/60">
              Add your resume PDF to <code>/public/resume.pdf</code> to enable
              this link.
            </p>
          </div>
        </SectionReveal>
      </div>
    </Section>
  );
}
