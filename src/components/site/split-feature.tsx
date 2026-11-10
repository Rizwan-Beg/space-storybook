import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowLink, DashList, DotGrid, HalfCircle, Reveal } from "./primitives";

export type Tone = "ivory" | "lavender" | "ink";

const toneClass: Record<Tone, string> = {
  ivory: "bg-background text-foreground",
  lavender: "bg-lavender text-foreground",
  ink: "bg-ink text-ink-foreground",
};

/**
 * Alternating text + media section (the reference's main storytelling block):
 * big display heading with a soft semicircle behind it, dash bullets, arrow link, dotted grid by the media.
 */
export function SplitFeature({
  title,
  body,
  bullets,
  link,
  media,
  reverse = false,
  tone = "ivory",
  id,
  titleClassName,
}: {
  title: ReactNode;
  body?: ReactNode;
  bullets?: string[];
  link?: { label: string; to: string };
  media: ReactNode;
  reverse?: boolean;
  tone?: Tone;
  id?: string;
  titleClassName?: string;
}) {
  const ink = tone === "ink";
  return (
    <section id={id} className={cn("relative overflow-hidden section-pad", toneClass[tone])}>
      <div className="container-site relative grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal className={cn("relative", reverse ? "md:order-2" : "md:order-1")}>
          <HalfCircle className={cn("-left-16 -top-16 w-[22rem]", ink ? "bg-ink-foreground/5" : "bg-blush/70")} />
          <h2 className={cn("display-lg relative", titleClassName)}>{title}</h2>
          {body ? (
            <div className={cn("relative mt-6 max-w-md text-[0.95rem] leading-relaxed", ink ? "text-ink-muted" : "text-muted-foreground")}>{body}</div>
          ) : null}
          {bullets ? <DashList items={bullets} tone={ink ? "ink" : "default"} className="relative mt-7 max-w-md" /> : null}
          {link ? (
            <div className="relative mt-8">
              <ArrowLink to={link.to} tone={ink ? "ink" : "default"}>
                {link.label}
              </ArrowLink>
            </div>
          ) : null}
        </Reveal>
        <Reveal delay={120} className={cn("relative", reverse ? "md:order-1" : "md:order-2")}>
          <DotGrid className={cn("absolute -bottom-8 z-0", reverse ? "-left-8" : "-right-8", ink && "text-ink-foreground/20")} />
          <div className="relative z-10">{media}</div>
        </Reveal>
      </div>
    </section>
  );
}

/** Rounded image frame used for media slots. */
export function MediaFrame({
  src,
  alt,
  className,
  imgClassName,
  caption,
  width,
  height,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  caption?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <figure className={cn("group relative overflow-hidden rounded-[1.75rem] shadow-card", className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        className={cn("h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]", imgClassName)}
      />
      {caption ? (
        <figcaption className="absolute bottom-3 right-3 rounded-full card-glass px-3 py-1 serif-italic text-xs text-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
