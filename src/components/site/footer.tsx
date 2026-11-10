import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { BRAND, footerColumns } from "@/data/site";
import { Wordmark } from "./logo";

export function SiteFooter() {
  return (
    <footer className="px-3 pb-6 pt-16 md:px-6">
      <div className="mx-auto max-w-[80rem] rounded-[2.5rem] bg-ink px-6 py-12 text-ink-foreground md:px-16 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_repeat(3,1fr)] lg:grid-cols-[1.4fr_repeat(6,1fr)]">
          <div className="space-y-5">
            <Link to="/" aria-label="Roomform home">
              <Wordmark className="text-ink-foreground" markClassName="text-pink-light" />
            </Link>
            <p className="text-sm leading-relaxed text-ink-muted">
              {BRAND.city}
              <br />
              {BRAND.region}
            </p>
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-2 text-xs text-ink-muted transition-colors hover:text-pink-light"
            >
              <Mail className="h-3.5 w-3.5" /> {BRAND.email}
            </a>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="eyebrow text-ink-muted">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-ink-foreground/85 transition-colors hover:text-pink-light">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-ink-foreground/10 pt-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Roomform. All rights reserved.</p>
          <p>{BRAND.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
