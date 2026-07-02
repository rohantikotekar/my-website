import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile, sectionContent } from "@/lib/data";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
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

export function Contact() {
  const c = sectionContent.contact;
  return (
    <Section id="contact" kicker={c.kicker} title={c.title} intro={c.intro}>
      <Reveal className="mx-auto w-full max-w-2xl">
        {/* Contact form */}
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          <h3 className="text-xl font-semibold tracking-tight">
            {c.formHeading}
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {c.formSubtext}
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>

          {/* Connect links */}
          <div className="mt-6 border-t border-border pt-6">
            <p className="kicker">{c.findMeLabel}</p>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
              {connectLinks.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 rounded-2xl border border-border bg-white/5 px-4 py-3.5 transition-colors hover:border-accent/40 hover:bg-white/[0.08]"
                >
                  <span className="flex items-center gap-2">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Icon className="size-4" />
                    </span>
                    <span className="flex-1 text-sm font-semibold leading-tight">
                      {label}
                    </span>
                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
                  </span>
                  <span className="break-all text-xs text-muted-foreground">
                    {value}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
