import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navGroups, type NavGroup } from "@/data/site";
import { LogoMark } from "./logo";

function DropdownPanel({ group, onNavigate }: { group: NavGroup; onNavigate: () => void }) {
  const wide = group.items.length > 4;
  return (
    <div
      className={cn(
        "card-glass rounded-3xl p-3 shadow-float",
        wide ? "grid w-[38rem] grid-cols-2 gap-1" : "grid w-[22rem] gap-1",
      )}
    >
      {group.items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          onClick={onNavigate}
          className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-lavender"
          activeProps={{ className: "bg-lavender" }}
        >
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-pink-soft text-primary transition-transform group-hover:scale-105">
            <item.icon className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-foreground">{item.label}</span>
            <span className="mt-0.5 block text-xs text-muted-foreground">{item.note}</span>
          </span>
        </Link>
      ))}
      {group.footer ? (
        <Link
          to={group.footer.to}
          onClick={onNavigate}
          className={cn(
            "group mt-1 flex items-center justify-between rounded-2xl bg-ink px-4 py-3 text-xs font-semibold text-ink-foreground",
            wide && "col-span-2",
          )}
        >
          {group.footer.label}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      ) : null}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 160);
  };
  const keepOpen = (label: string) => {
    window.clearTimeout(closeTimer.current);
    setOpen(label);
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-3 md:top-6">
      <div className="relative mx-auto w-fit max-w-full" onMouseLeave={scheduleClose}>
        <nav
          aria-label="Main navigation"
          className="card-glass flex h-12 items-center gap-1 rounded-full pl-3 pr-1.5 shadow-nav"
        >
          <Link to="/" aria-label="Roomform home" className="flex items-center pr-2 text-primary">
            <LogoMark className="h-6 w-6" />
          </Link>
          <span className="mr-2 hidden h-5 w-px bg-border lg:block" />

          <div className="hidden items-center lg:flex">
            {navGroups.map((group) => (
              <div key={group.label} className="relative" onMouseEnter={() => keepOpen(group.label)}>
                <button
                  type="button"
                  aria-expanded={open === group.label}
                  aria-haspopup="true"
                  onClick={() => setOpen(open === group.label ? null : group.label)}
                  className={cn(
                    "flex h-9 items-center gap-1 rounded-full px-3.5 text-[0.8rem] font-semibold text-foreground transition-colors hover:bg-lavender",
                    open === group.label && "bg-lavender",
                  )}
                >
                  {group.label}
                  <ChevronDown className={cn("h-3 w-3 opacity-60 transition-transform", open === group.label && "rotate-180")} />
                </button>
              </div>
            ))}
            <Link
              to="/pricing"
              className="flex h-9 items-center rounded-full px-3.5 text-[0.8rem] font-semibold text-foreground transition-colors hover:bg-lavender"
              activeProps={{ className: "bg-lavender" }}
            >
              Pricing
            </Link>
            <span className="mx-2 h-5 w-px bg-border" />
          </div>

          <Button asChild variant="brand" size="pill-sm" className="h-9">
            <Link to="/contact">
              Talk to Sales <ArrowRight />
            </Link>
          </Button>
          <button
            type="button"
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full text-foreground hover:bg-lavender lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Desktop dropdowns */}
        <div className="absolute left-1/2 top-full hidden -translate-x-1/2 pt-3 lg:block">
          {navGroups.map((group) => (
            <div
              key={group.label}
              onMouseEnter={() => keepOpen(group.label)}
              className={cn(
                "absolute left-1/2 top-3 -translate-x-1/2 transition-all duration-200",
                open === group.label ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-2 opacity-0",
              )}
            >
              <DropdownPanel group={group} onNavigate={() => setOpen(null)} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "mx-auto mt-3 max-w-md origin-top overflow-hidden rounded-3xl card-glass shadow-float transition-all duration-300 lg:hidden",
          mobileOpen ? "max-h-[80vh] opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <div className="max-h-[78vh] overflow-y-auto p-3">
          {navGroups.map((group) => (
            <div key={group.label} className="border-b border-border last:border-0">
              <button
                type="button"
                className="flex w-full items-center justify-between px-3 py-3.5 text-sm font-semibold"
                aria-expanded={mobileGroup === group.label}
                onClick={() => setMobileGroup(mobileGroup === group.label ? null : group.label)}
              >
                {group.label}
                <ChevronDown className={cn("h-4 w-4 transition-transform", mobileGroup === group.label && "rotate-180")} />
              </button>
              <div className={cn("grid transition-all duration-300", mobileGroup === group.label ? "grid-rows-[1fr] pb-2" : "grid-rows-[0fr]")}>
                <div className="overflow-hidden">
                  {[...group.items, ...(group.footer ? [{ label: group.footer.label, to: group.footer.to, note: "" }] : [])].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-lavender hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Link to="/pricing" className="block px-3 py-3.5 text-sm font-semibold">
            Pricing
          </Link>
          <Link to="/demo" className="block px-3 pb-3.5 text-sm font-semibold">
            Try the live demo
          </Link>
        </div>
      </div>
    </header>
  );
}
