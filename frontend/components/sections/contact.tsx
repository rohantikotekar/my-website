import { profile, sectionContent } from "@/lib/data";
import { Section } from "@/components/section";

/**
 * Opens a Gmail compose window pre-addressed to me. Unlike `mailto:`, this works
 * in the browser without a configured desktop mail client.
 */
const EMAIL_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  profile.email
)}&su=${encodeURIComponent("Hello from your portfolio")}`;

const links = [
  { label: profile.email, href: EMAIL_HREF },
  { label: "GitHub", href: profile.social.github },
  { label: "LinkedIn", href: profile.social.linkedin },
];

export function Contact() {
  return (
    <Section id="contact" title={sectionContent.contact.title}>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-sm">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-soft underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            {label}
          </a>
        ))}
      </div>
    </Section>
  );
}
