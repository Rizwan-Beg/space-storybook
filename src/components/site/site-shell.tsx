import { useEffect, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { SiteHeader } from "./header";
import { SiteFooter } from "./footer";
import { NeedHelp } from "./need-help";

/** Observes `.reveal` elements and marks them visible as they scroll into view. Re-scans after each navigation. */
function useScrollReveal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    document.documentElement.classList.add("js-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    const scan = () => document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);
}

export function SiteShell({ children }: { children: ReactNode }) {
  useScrollReveal();
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <NeedHelp />
    </>
  );
}
