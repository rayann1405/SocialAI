import { cn } from "@/lib/utils";

/**
 * SocialAI brand mark — broadcast signal:
 * a coral node with three ink arcs (publish / reach).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-8 w-8 logo-mark", className)}
      role="img"
      aria-label="SocialAI"
    >
      <rect width="32" height="32" rx="9" fill="hsl(var(--accent))" />
      <circle cx="11" cy="21" r="3.2" fill="hsl(var(--primary))" />
      <path
        d="M11 21c0-4.2 3.4-7.6 7.6-7.6"
        stroke="hsl(var(--primary))"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
        opacity="0.95"
      />
      <path
        d="M11 21c0-6.6 5.4-12 12-12"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M11 21c0-8.8 7.2-16 16-16"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.45"
      />
    </svg>
  );
}

export function Logo({
  className,
  showWordmark = true,
  inverted = false,
}: {
  className?: string;
  showWordmark?: boolean;
  /** White wordmark for dark / photo backgrounds */
  inverted?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      {showWordmark && (
        <span
          className={cn(
            "font-heading text-lg font-extrabold tracking-tight",
            inverted && "text-white",
          )}
        >
          Social
          <span className={inverted ? "text-primary" : "text-primary"}>AI</span>
        </span>
      )}
    </span>
  );
}
