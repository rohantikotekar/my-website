import { Mail, Calendar, Flag } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";
import { Section } from "@/components/section";
import { SectionReveal } from "@/components/trail/section-reveal";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";

/**
 * Opens a Gmail compose window pre-addressed to me. Unlike `mailto:`, this works
 * in the browser without a configured desktop mail client.
 */
const EMAIL_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  profile.email
)}&su=${encodeURIComponent("Hello from your portfolio")}`;

export function Summit() {
  return (
    <Section
      id="summit"
      index="08"
      stage="The Summit"
      title="You've reached the top"
      intro="Thanks for making the climb. Here's where to find me, or start a conversation."
    >
      <SectionReveal className="mx-auto flex max-w-2xl flex-col rounded-lg border border-border bg-card p-8">
        <div className="flex items-center gap-2 text-forest">
          <Flag className="size-5" />
          <span className="trail-eyebrow !text-forest">Let&apos;s connect</span>
        </div>
        <h3 className="mt-3 font-serif text-2xl font-semibold">
          Start a conversation
        </h3>
        <p className="mt-2 text-muted-foreground">
          Whether it&apos;s a role, a collaboration, or just trail talk — send a
          message and I&apos;ll get back to you.
        </p>

        {/* Live contact form — submissions are emailed and stored */}
        <div className="mt-6">
          <ContactForm />
        </div>

        <div className="mt-6 border-t border-border pt-6">
          <div className="flex flex-wrap items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <a href={EMAIL_HREF} target="_blank" rel="noopener noreferrer">
                <Mail className="size-4" />
                Email directly
              </a>
            </Button>
            {/* Calendar booking — future milestone */}
            <Button variant="ghost" size="sm" disabled>
              <Calendar className="size-4" />
              Book a call (soon)
            </Button>
          </div>
          <div className="mt-3 flex items-center gap-2">
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
        </div>
      </SectionReveal>
    </Section>
  );
}
