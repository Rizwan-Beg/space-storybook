import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type PhoneProduct = { name: string; price: string; thumb: string; variants?: string };

/** CSS phone with a mini visualizer UI: room preview, before/after slider, searchable product list. */
export function PhoneMockup({
  room,
  products,
  className,
  tilt = false,
  interactive = true,
}: {
  room: string;
  products: PhoneProduct[];
  className?: string;
  tilt?: boolean;
  interactive?: boolean;
}) {
  const [selected, setSelected] = useState(0);
  const [split, setSplit] = useState(62);
  return (
    <div
      className={cn(
        "relative mx-auto w-[16.5rem] rounded-[2.8rem] bg-ink p-2.5 shadow-float ring-1 ring-ink-foreground/20 md:w-[18rem]",
        tilt && "rotate-[8deg] transition-transform duration-700 hover:rotate-[4deg]",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[2.3rem] bg-surface">
        <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-ink" />
        <div className="flex items-center justify-between px-6 pb-1 pt-2.5 text-[0.62rem] font-semibold text-foreground">
          <span>10:16</span>
          <span className="rounded-full bg-success px-1.5 text-[0.55rem] text-primary-foreground">5G</span>
        </div>
        <div className="flex items-center justify-between px-4 py-2 text-[0.6rem] text-muted-foreground">
          <span className="font-semibold text-foreground">yourstore.com</span>
          <X className="h-3 w-3" />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={room} alt="Shopper's room with the selected product placed" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${split}%` }}>
            <img
              src={room}
              alt=""
              aria-hidden="true"
              className="h-full max-w-none object-cover saturate-[0.15]"
              style={{ width: `${(100 / split) * 100}%` }}
              loading="lazy"
            />
          </div>
          <div className="absolute inset-y-0 w-0.5 bg-surface" style={{ left: `${split}%` }} />
        </div>
        <div className="flex items-center gap-2 px-4 py-2.5">
          <span className="text-[0.55rem] text-muted-foreground">Before</span>
          {interactive ? (
            <input
              type="range"
              min={10}
              max={90}
              value={split}
              onChange={(e) => setSplit(Number(e.target.value))}
              aria-label="Compare before and after"
              className="h-1 flex-1 accent-ink"
            />
          ) : (
            <span className="h-1 flex-1 rounded-full bg-ink" />
          )}
          <span className="text-[0.55rem] text-muted-foreground">After</span>
        </div>
        <div className="mx-3 flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-[0.6rem] text-muted-foreground">
          <Search className="h-3 w-3" /> Search by color, style or material
          <SlidersHorizontal className="ml-auto h-3 w-3" />
        </div>
        <ul className="space-y-1.5 p-3 pb-5">
          {products.map((p, i) => (
            <li key={p.name}>
              <button
                type="button"
                disabled={!interactive}
                onClick={() => setSelected(i)}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-xl border p-1.5 text-left transition-colors",
                  selected === i ? "border-primary bg-pink-soft/60" : "border-border bg-surface",
                )}
              >
                <img src={p.thumb} alt="" className="h-9 w-9 rounded-lg object-cover" loading="lazy" />
                <span className="min-w-0">
                  <span className="block truncate text-[0.62rem] font-semibold text-foreground">{p.name}</span>
                  <span className="block text-[0.58rem] text-muted-foreground">
                    {p.price}
                    {p.variants ? ` · ${p.variants}` : ""}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
