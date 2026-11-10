import { cn } from "@/lib/utils";

/** Roomform monogram: a single-line room corner (two walls + floor) drawn like an "R". */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={cn("h-7 w-7", className)} aria-hidden="true">
      <path
        d="M5 27V6.5a1.5 1.5 0 0 1 1.5-1.5H17a6.5 6.5 0 0 1 0 13H11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11 11v16M16.5 18 27 27" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Wordmark({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={cn("h-8 w-8 text-primary", markClassName)} />
      <span className="font-display text-[1.6rem] font-light tracking-[0.08em] lowercase">
        room<span className="text-primary">form</span>
      </span>
    </span>
  );
}
