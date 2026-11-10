import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DotGrid, Reveal } from "./primitives";

type Action = { label: string; to: string; hash?: string };

/** Inner-page hero: soft lavender/blush wash, big title, two pill actions, media card on the right. */
export function PageHero({
  title,
  body,
  primary,
  secondary,
  note,
  media,
  proof,
  className,
}: {
  title: ReactNode;
  body: ReactNode;
  primary?: Action;
  secondary?: Action;
  note?: ReactNode;
  media?: ReactNode;
  proof?: string[];
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden wash-hero pb-20 pt-32 md:pb-28 md:pt-40", className)}>
      <div aria-hidden="true" className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-pink-soft/70" />
      <DotGrid className="absolute left-0 top-[60%] hidden md:block" cols={3} rows={5} />
      <div className={cn("container-site relative grid items-center gap-12", media ? "md:grid-cols-[1fr_1.05fr]" : "")}>
        <Reveal>
          <h1 className="display-hero max-w-xl">{title}</h1>
          <div className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">{body}</div>
          {primary || secondary ? (
            <div className="mt-8 flex flex-wrap gap-2.5">
              {primary ? (
                <Button asChild variant="brand" size="pill">
                  <Link to={primary.to} {...(primary.hash ? { hash: primary.hash } : {})}>
                    {primary.label}
                  </Link>
                </Button>
              ) : null}
              {secondary ? (
                <Button asChild variant="pill" size="pill">
                  <Link to={secondary.to} {...(secondary.hash ? { hash: secondary.hash } : {})}>
                    {secondary.label}
                  </Link>
                </Button>
              ) : null}
            </div>
          ) : null}
          {note ? <div className="mt-5 max-w-md text-xs leading-relaxed text-muted-foreground">{note}</div> : null}
        </Reveal>
        {media ? (
          <Reveal delay={150}>
            {media}
            {proof ? (
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {proof.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {p}
                  </li>
                ))}
              </ul>
            ) : null}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

/** Numbered steps grid ("How it works"). */
export function StepsGrid({
  title,
  steps,
  className,
}: {
  title: ReactNode;
  steps: { title: string; body: string }[];
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden bg-lavender section-pad", className)}>
      <div aria-hidden="true" className="absolute -left-20 bottom-10 h-64 w-32 rounded-l-full bg-blush/60" />
      <div className="container-site relative">
        <Reveal className="relative max-w-3xl">
          <h2 className="display-lg">{title}</h2>
          <div aria-hidden="true" className="absolute -right-24 top-0 hidden h-24 w-24 rounded-full bg-primary/50 md:block" />
        </Reveal>
        <ol className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 80} className={cn(i % 2 === 1 && "md:mt-14")}>
              <span className="font-display text-5xl font-light text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-2xl">{s.title}</h3>
              <p className="mt-2 max-w-md text-[0.92rem] leading-relaxed text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
