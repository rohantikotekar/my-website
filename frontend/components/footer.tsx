import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile, sections, footer } from "@/lib/data";

const navItems = sections.filter((s) => s.id !== "hero");

const socials = [
  { label: "GitHub", href: profile.social.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.social.linkedin, Icon: LinkedinIcon },
  {
    label: "Email",
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      profile.email
    )}`,
    Icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="text-lg font-bold tracking-tight">
              {profile.name}
              <span className="text-accent">.</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {footer.blurb}
            </p>
          </div>

          <nav className="flex flex-col gap-2.5" aria-label="Footer">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.nav}
              </a>
            ))}
          </nav>

          <div className="flex gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-white/5 text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. {footer.builtWith}
        </div>
      </div>
    </footer>
  );
}
