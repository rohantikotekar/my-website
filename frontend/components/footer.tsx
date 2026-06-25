import { Mail, Mountain } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile, sections } from "@/lib/data";

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
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 font-serif text-lg font-semibold">
              <Mountain className="size-5 text-forest" aria-hidden />
              {profile.name}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {profile.role}. Thanks for hiking the trail — I hope you enjoyed
              the view.
            </p>
          </div>

          <nav className="flex flex-col gap-2" aria-label="Footer">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-muted-foreground transition-colors hover:text-forest"
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
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-forest/40 hover:text-forest"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
