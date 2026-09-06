import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile, sectionContent } from "@/lib/data";
import { Section } from "@/components/section";

/**
 * Opens a Gmail compose window pre-addressed to me. Unlike `mailto:`, this works
 * in the browser without a configured desktop mail client.
 */
const EMAIL_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  profile.email
)}&su=${encodeURIComponent("Hello from your portfolio")}`;

const socials = [
  { label: "GitHub", href: profile.social.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.social.linkedin, Icon: LinkedinIcon },
];

export function Contact() {
  return (
    <Section id="contact" index="04" title={sectionContent.contact.title}>
      <div className="flex flex-col items-center">
        <a
          href={EMAIL_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 font-mono text-sm text-foreground transition-colors hover:text-accent sm:text-base"
        >
          <Mail className="size-4 text-accent" aria-hidden />
          <span className="underline decoration-accent/40 decoration-1 underline-offset-[6px] transition-colors group-hover:decoration-accent">
            {profile.email}
          </span>
          <ArrowUpRight
            className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
            aria-hidden
          />
        </a>

        <div className="mt-6 flex items-center gap-2.5">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-card-strong hover:text-accent"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
