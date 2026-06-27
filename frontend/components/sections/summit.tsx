import { Mail, Calendar, Flag, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";
import { Section } from "@/components/section";
import { SectionReveal } from "@/components/trail/section-reveal";
import { ContactForm } from "@/components/contact-form";

/**
 * Opens a Gmail compose window pre-addressed to me. Unlike `mailto:`, this works
 * in the browser without a configured desktop mail client.
 */
const EMAIL_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  profile.email
)}&su=${encodeURIComponent("Hello from your portfolio")}`;

/** Strip protocol / www / trailing slash for a clean, readable handle. */
const prettyUrl = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");

const connectLinks = [
  { Icon: Mail, label: "Email", value: profile.email, href: EMAIL_HREF },
  {
    Icon: GithubIcon,
    label: "GitHub",
    value: prettyUrl(profile.social.github),
    href: profile.social.github,
  },
  {
    Icon: LinkedinIcon,
    label: "LinkedIn",
    value: prettyUrl(profile.social.linkedin),
    href: profile.social.linkedin,
  },
];

export function Summit() {
  return (
    <Section
      id="summit"
      index="08"
      stage="The Summit"
      title="You've reached the top"
      intro="Thanks for making the climb. Here's where to find me, or start a conversation."
    >
      <SectionReveal className="mx-auto flex max-w-2xl flex-col rounded-lg border border-border bg-card p-6 sm:p-8">
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

        {/* Direct contact links */}
        <div className="mt-6 border-t border-border pt-6">
          <p className="trail-eyebrow mb-3 text-muted-foreground/80">Find me</p>
          <div className="grid gap-2">
            {connectLinks.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 transition-colors hover:border-forest/40 hover:bg-muted/40"
              >
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <Icon className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold leading-tight">
                    {label}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {value}
                  </span>
                </span>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-forest" />
              </a>
            ))}
          </div>
          <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="size-3.5" aria-hidden />
            Calendar booking coming soon.
          </p>
        </div>
      </SectionReveal>
    </Section>
  );
}
