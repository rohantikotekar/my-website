import { profile, footer } from "@/lib/data";
import { CONTAINER } from "@/components/section";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-border">
      <div
        className={`${CONTAINER} flex flex-col items-center gap-1 py-8 text-center`}
      >
        <p className="font-mono text-[0.7rem] text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
        {/* Full-strength muted: at 11px a further opacity step drops below AA. */}
        <p className="font-mono text-[0.7rem] text-muted-foreground">
          {footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
