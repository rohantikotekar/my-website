import { profile, footer } from "@/lib/data";
import { CONTAINER } from "@/components/section";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className={`${CONTAINER} py-8 text-center text-xs text-muted-foreground`}>
        © {new Date().getFullYear()} {profile.name}. {footer.builtWith}
      </div>
    </footer>
  );
}
