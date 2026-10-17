"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export const OPEN_SIGNUP = "travel:open-signup";

/**
 * Lenis smooth scroll, staggered IntersectionObserver reveal, and click routing:
 * - `href="#signup"` (optionally `data-plan`) opens the sign-up modal
 * - any other `href="#id"` smooth-scrolls to that section
 */
export default function ScrollEffects() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    let lenis: Lenis | null = null;
    let raf = 0;
    let io: IntersectionObserver | null = null;

    if (reduced) {
      els.forEach((el) => el.classList.add("in"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
      );
      els.forEach((el) => io?.observe(el));

      lenis = new Lenis({ duration: 1.15, smoothWheel: true, touchMultiplier: 1.5 });
      const loop = (t: number) => {
        lenis?.raf(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute("href")!;
      e.preventDefault();

      if (hash === "#signup") {
        window.dispatchEvent(new CustomEvent(OPEN_SIGNUP, { detail: a.dataset.plan }));
        return;
      }
      const target = hash === "#top" ? document.body : document.querySelector<HTMLElement>(hash);
      if (!target) return;
      if (lenis) lenis.scrollTo(hash === "#top" ? 0 : target);
      else if (hash === "#top") window.scrollTo(0, 0);
      else target.scrollIntoView();
      history.replaceState(null, "", hash);
    };
    document.addEventListener("click", onClick);

    // Pause page scrolling while the modal is open.
    const onModal = (e: Event) => {
      if ((e as CustomEvent<boolean>).detail) lenis?.stop();
      else lenis?.start();
    };
    window.addEventListener("travel:modal", onModal);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("travel:modal", onModal);
      io?.disconnect();
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return null;
}
