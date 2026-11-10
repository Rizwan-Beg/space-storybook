import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Wraps content in the global scroll-reveal animation (observer lives in the root route). */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  return (
    <Tag className={cn("reveal", className)} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}

/** Em-dash bullet list used throughout the reference design. */
export function DashList({ items, className, tone = "default" }: { items: string[]; className?: string; tone?: "default" | "ink" }) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex gap-3 text-[0.92rem] leading-relaxed",
            tone === "ink" ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          <span className={cn("mt-[0.7em] h-px w-3.5 shrink-0", tone === "ink" ? "bg-ink-muted" : "bg-muted-foreground/60")} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Small "Label →" link with a nudging arrow. */
export function ArrowLink({
  to,
  children,
  className,
  tone = "default",
  hash,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "ink" | "pink";
  hash?: string;
}) {
  return (
    <Link
      to={to}
      {...(hash ? { hash } : {})}
      className={cn(
        "group inline-flex items-center gap-2 text-[0.85rem] font-semibold transition-colors",
        tone === "ink" && "text-ink-foreground hover:text-pink-light",
        tone === "pink" && "text-primary hover:text-primary-hover",
        tone === "default" && "text-foreground hover:text-primary",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function DotGrid({ className, cols = 5, rows = 5 }: { className?: string; cols?: number; rows?: number }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none dot-grid text-foreground/15", className)}
      style={{ width: cols * 16, height: rows * 16 }}
    />
  );
}

/** Soft semicircle decoration that sits behind headings. */
export function HalfCircle({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute aspect-[2/1] w-[26rem] max-w-[70vw] bg-blush/80",
        flip ? "rounded-b-full" : "rounded-t-full",
        className,
      )}
    />
  );
}

export function Blob({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("pointer-events-none absolute rounded-full bg-primary/55", className)} />;
}

export function SectionHeading({
  title,
  body,
  align = "center",
  className,
  tone = "default",
  size = "lg",
}: {
  title: ReactNode;
  body?: ReactNode;
  align?: "center" | "left";
  className?: string;
  tone?: "default" | "ink";
  size?: "xl" | "lg" | "md";
}) {
  return (
    <Reveal className={cn(align === "center" ? "mx-auto text-center" : "", "max-w-3xl", className)}>
      <h2 className={cn(size === "xl" ? "display-xl" : size === "lg" ? "display-lg" : "display-md")}>{title}</h2>
      {body ? (
        <p className={cn("mt-5 text-base leading-relaxed md:text-lg", tone === "ink" ? "text-ink-muted" : "text-muted-foreground")}>{body}</p>
      ) : null}
    </Reveal>
  );
}

/** Chip used for tags (category pills, feature tags). */
export function Chip({ children, className, dot = false }: { children: ReactNode; className?: string; dot?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-[0.72rem] font-medium text-foreground",
        className,
      )}
    >
      {dot ? <span className="h-1.5 w-1.5 rounded-full bg-primary" /> : null}
      {children}
    </span>
  );
}

/** Italic serif index number like "01". */
export function IndexNum({ n, className }: { n: number; className?: string }) {
  return <span className={cn("serif-italic text-sm text-primary", className)}>{String(n).padStart(2, "0")}</span>;
}
