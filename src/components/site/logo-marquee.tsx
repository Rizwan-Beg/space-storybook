import { cn } from "@/lib/utils";
import { clientLogos } from "@/data/site";

const styleMap: Record<string, string> = {
  serif: "font-serif text-2xl italic tracking-tight",
  wide: "font-display text-lg font-semibold tracking-[0.3em]",
  script: "font-serif text-2xl font-light tracking-tight",
  thin: "font-display text-lg font-light tracking-[0.35em]",
  bold: "font-display text-xl font-extrabold tracking-tight",
};

export function LogoMarquee({ label = "In good company" }: { label?: string }) {
  const doubled = [...clientLogos, ...clientLogos];
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28" aria-label={label}>
      <div aria-hidden="true" className="absolute inset-0 grid-lines" />
      <p className="relative text-center eyebrow text-muted-foreground">{label}</p>
      <div className="marquee-mask relative mt-10 overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16 hover:[animation-play-state:paused] md:gap-24">
          {doubled.map((l, i) => (
            <span key={`${l.name}-${i}`} className={cn("whitespace-nowrap text-foreground/35 transition-colors hover:text-foreground/70", styleMap[l.style])}>
              {l.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
