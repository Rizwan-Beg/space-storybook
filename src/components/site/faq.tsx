import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./primitives";

export type FaqItem = { q: string; a: string };

export function FaqList({ items, title = "Frequently asked questions", className }: { items: FaqItem[]; title?: string; className?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className={cn("px-4 py-16 md:py-24", className)}>
      <div className="mx-auto max-w-[48rem]">
        {title ? <h2 className="display-sm text-center md:text-[2rem]">{title}</h2> : null}
        <div className="mt-10 space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={Math.min(i, 6) * 40}>
                <div
                  className={cn(
                    "rounded-2xl border border-surface/80 bg-gradient-to-b from-ivory to-background shadow-soft transition-colors",
                    isOpen && "bg-surface",
                  )}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left text-[0.92rem] font-semibold text-foreground"
                  >
                    {item.q}
                    <Plus className={cn("h-4 w-4 shrink-0 text-primary transition-transform duration-300", isOpen && "rotate-45")} />
                  </button>
                  <div className={cn("grid transition-all duration-300 ease-out", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-[0.9rem] leading-relaxed text-muted-foreground">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
