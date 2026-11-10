import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { proofBadges } from "@/data/site";
import { LogoMark } from "./logo";
import { Reveal } from "./primitives";

type Action = { label: string; to: string };

export function CtaPanel({
  title = "Try the platform on your own products",
  body = "Try the platform demo, or book a session to see the full platform in action.",
  primary = { label: "Book a demo", to: "/contact" },
  secondary = { label: "Try the live demo", to: "/demo" },
}: {
  title?: string;
  body?: string;
  primary?: Action;
  secondary?: Action;
}) {
  return (
    <section className="px-4 py-20 md:py-28">
      <Reveal className="relative mx-auto max-w-[38rem] overflow-hidden rounded-[2.25rem] wash-cta px-7 py-12 md:max-w-[76rem] md:px-12 md:py-14 lg:max-w-[61rem]">
        <div aria-hidden="true" className="dot-grid absolute right-0 top-0 h-16 w-16 text-primary/40" />
        <LogoMark className="pointer-events-none absolute -bottom-6 right-2 h-32 w-32 text-primary/50" />
        <div className="relative grid items-center gap-10 md:grid-cols-[1.15fr_1fr]">
          <div>
            <h2 className="display-lg max-w-md">{title}</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">{body}</p>
          </div>
          <div className="md:justify-self-end">
            <div className="flex flex-wrap gap-2 md:justify-end">
              <Button asChild variant="brand" size="pill">
                <Link to={primary.to}>
                  {primary.label} <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="pill" size="pill">
                <Link to={secondary.to}>{secondary.label}</Link>
              </Button>
            </div>
            <ul className="mt-5 grid grid-cols-3 gap-2">
              {proofBadges.map((b) => (
                <li key={b} className="flex gap-2 rounded-xl bg-surface/70 p-3 text-[0.7rem] leading-snug text-muted-foreground">
                  <span className="mt-[0.55em] h-px w-3 shrink-0 bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
