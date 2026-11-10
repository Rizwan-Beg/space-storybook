import { cn } from "@/lib/utils";
import { testimonials, type Testimonial } from "@/data/site";
import { Reveal } from "./primitives";

function QuoteCard({ t, highlight }: { t: Testimonial; highlight?: boolean }) {
  return (
    <figure
      className={cn(
        "flex h-[17rem] w-[18rem] shrink-0 flex-col justify-between rounded-3xl p-6 md:w-[22rem]",
        highlight ? "wash-pink-card" : "card-soft",
      )}
    >
      <div>
        <span className="font-serif text-3xl leading-none text-primary">“</span>
        <blockquote className="mt-2 line-clamp-6 text-[0.84rem] leading-relaxed text-foreground/85">{t.quote}</blockquote>
      </div>
      <figcaption>
        <p className="text-sm font-semibold">{t.name}</p>
        <p className="text-xs text-muted-foreground">
          {t.role} · {t.company}
        </p>
      </figcaption>
    </figure>
  );
}

function Row({ items, reverse }: { items: Testimonial[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden">
      <div className={cn("flex w-max gap-4 hover:[animation-play-state:paused]", reverse ? "animate-marquee-reverse" : "animate-marquee")}>
        {doubled.map((t, i) => (
          <QuoteCard key={`${t.name}-${i}`} t={t} highlight={i % items.length === 1} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials({ title = "What retail teams say after working with Roomform" }: { title?: string }) {
  const half = Math.ceil(testimonials.length / 2);
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-80 grid-lines" />
      <Reveal className="container-site relative text-center">
        <h2 className="display-lg mx-auto max-w-3xl">{title}</h2>
      </Reveal>
      <div className="relative mt-14 space-y-4">
        <Row items={[...testimonials.slice(half), ...testimonials.slice(0, half)]} />
        <Row items={[...testimonials].reverse()} reverse />
      </div>
    </section>
  );
}
