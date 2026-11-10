import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUp, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND } from "@/data/site";
import { LogoMark } from "./logo";

type Msg = { from: "bot" | "me"; text: string; link?: { label: string; to: string } };

const quick: { q: string; a: Msg }[] = [
  {
    q: "How much does it cost?",
    a: { from: "bot", text: "The Room Visualizer starts from US$348/month on a 12-month term. The AI Shopping Assistant starts from US$35/month.", link: { label: "See pricing", to: "/pricing" } },
  },
  {
    q: "How long does setup take?",
    a: { from: "bot", text: "Most retailers are live within two weeks. We build the 3D models from your existing product photos.", link: { label: "How it works", to: "/how-it-works" } },
  },
  {
    q: "Which platforms do you support?",
    a: { from: "bot", text: "There's a native Shopify app, and we support custom storefronts with a small embed snippet.", link: { label: "Shopify app", to: "/features/shopify" } },
  },
  {
    q: "Can I try it myself?",
    a: { from: "bot", text: "Yes. The live demo lets you place rugs and furniture in a sample room or your own photo.", link: { label: "Open the live demo", to: "/demo" } },
  },
];

export function NeedHelp() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: "Hi! I'm the Roomform helper. Ask a question or pick one below." },
  ]);
  const [draft, setDraft] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const ask = (q: string, a: Msg) => setMessages((m) => [...m, { from: "me", text: q }, a]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    const match = quick.find((x) => x.q.toLowerCase().split(" ").some((w) => w.length > 4 && text.toLowerCase().includes(w)));
    ask(
      text,
      match?.a ?? {
        from: "bot",
        text: `Thanks for asking. A specialist can answer that properly — book a short call or email ${BRAND.email}.`,
        link: { label: "Book a demo", to: "/contact" },
      },
    );
    setDraft("");
  };

  return (
    <>
      <div
        className={cn(
          "fixed bottom-20 left-1/2 z-50 w-[min(22rem,calc(100vw-1.5rem))] -translate-x-1/2 transition-all duration-300",
          open ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible translate-y-4 opacity-0",
        )}
        role="dialog"
        aria-label="Need help chat"
      >
        <div className="overflow-hidden rounded-3xl bg-surface shadow-float">
          <div className="flex items-center justify-between bg-ink px-4 py-3 text-ink-foreground">
            <span className="flex items-center gap-2 text-sm font-semibold">
              <LogoMark className="h-5 w-5 text-pink-light" /> Roomform help
            </span>
            <button type="button" aria-label="Close help" onClick={() => setOpen(false)} className="rounded-full p-1 hover:bg-ink-soft">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div ref={listRef} className="max-h-72 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div key={i} className={cn("flex", m.from === "me" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[0.82rem] leading-relaxed",
                    m.from === "me" ? "bg-ink text-ink-foreground" : "bg-lavender text-foreground",
                  )}
                >
                  {m.text}
                  {m.link ? (
                    <Link to={m.link.to} onClick={() => setOpen(false)} className="mt-1.5 block font-semibold text-primary hover:underline">
                      {m.link.label} →
                    </Link>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5 px-4 pb-3">
            {quick.map((x) => (
              <button
                key={x.q}
                type="button"
                onClick={() => ask(x.q, x.a)}
                className="rounded-full border border-border px-3 py-1.5 text-[0.72rem] font-medium transition-colors hover:border-primary hover:text-primary"
              >
                {x.q}
              </button>
            ))}
          </div>
          <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-border p-3">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Ask anything…"
              aria-label="Your question"
              className="h-10 flex-1 rounded-full bg-muted px-4 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
            />
            <button type="submit" aria-label="Send" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary-hover">
              <ArrowUp className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="fixed bottom-5 left-1/2 z-50 flex h-11 -translate-x-1/2 items-center gap-2.5 rounded-full border-2 border-pink-light/60 bg-ink px-5 text-sm font-semibold text-ink-foreground shadow-float transition-transform hover:scale-[1.03]"
      >
        <span className="h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
        {open ? "Close help" : "Need help?"}
      </button>
    </>
  );
}
