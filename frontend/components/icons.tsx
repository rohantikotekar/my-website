import type { SVGProps } from "react";

/**
 * Brand icons (GitHub, LinkedIn, X/Twitter).
 * lucide-react no longer ships brand marks, so we define them here.
 * They inherit `currentColor` and accept the same className sizing as lucide.
 */

type IconProps = SVGProps<SVGSVGElement>;

export function GithubIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.575.106.785-.25.785-.556 0-.275-.01-1.003-.016-1.97-3.197.695-3.872-1.541-3.872-1.541-.523-1.328-1.277-1.682-1.277-1.682-1.044-.714.08-.699.08-.699 1.155.081 1.763 1.186 1.763 1.186 1.026 1.758 2.693 1.25 3.35.956.103-.743.401-1.25.73-1.538-2.553-.29-5.238-1.277-5.238-5.683 0-1.256.448-2.283 1.184-3.088-.119-.29-.513-1.46.112-3.043 0 0 .966-.31 3.166 1.18a11.02 11.02 0 0 1 2.882-.388c.978.004 1.963.132 2.883.388 2.198-1.49 3.163-1.18 3.163-1.18.627 1.583.233 2.753.114 3.043.738.805 1.183 1.832 1.183 3.088 0 4.417-2.689 5.39-5.25 5.674.413.355.78 1.057.78 2.131 0 1.539-.014 2.781-.014 3.159 0 .308.207.668.79.554A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}
