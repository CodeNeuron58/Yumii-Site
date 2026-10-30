"use client";

import { useEffect, useState } from "react";
import { Faq } from "./Faq";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { HowItWorks } from "./HowItWorks";
import { Install } from "./Install";
import { Memory } from "./Memory";
import { Mind } from "./Mind";
import { Nav } from "./Nav";
import { Personalities } from "./Personalities";
import { Privacy } from "./Privacy";
import { Tools } from "./Tools";

const clamp01 = (x: number) => Math.max(0, Math.min(1, x));

/**
 * One scroll driver for the whole page. Every [data-scene] element gets
 * --p (its 0→1 progress); the pinned section also gets --e (an eased
 * entry) and decides which of the five steps is showing.
 *   hero   — progress through the hero as it scrolls away
 *   pin    — progress through the tall pinned section
 *   reveal — 0 below the fold → 1 once ~45% of a screen into view
 * With reduced motion, nothing moves: reveals stay at 1, the hero at 0.
 */
function useScrollScenes(onStep: (step: number) => void) {
  useEffect(() => {
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>("[data-scene]").forEach((el) => {
        const r = el.getBoundingClientRect();
        const kind = el.dataset.scene;
        let p: number;
        if (kind === "pin") p = clamp01(-r.top / Math.max(1, r.height - vh));
        else if (kind === "hero") p = still ? 0 : clamp01(-r.top / r.height);
        else p = still ? 1 : clamp01((vh - r.top) / (vh * 0.45));
        el.style.setProperty("--p", p.toFixed(4));

        if (kind === "pin") {
          const e = still ? 1 : clamp01((vh - r.top) / vh);
          el.style.setProperty("--e", (1 - Math.pow(1 - e, 3)).toFixed(4));
          const n = Number(el.dataset.steps) || 1;
          onStep(Math.min(n - 1, Math.floor(p * n)));
        }
      });
    };
    const tick = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", tick);
    };
  }, [onStep]);
}

export function Landing() {
  const [step, setStep] = useState(0);
  useScrollScenes(setStep);

  return (
    <div className="min-h-screen overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <HowItWorks step={step} />
        <div className="bg-[linear-gradient(var(--color-mist),var(--color-cream)_360px)]">
          <Memory />
        </div>
        <Tools />
        <Mind />
        <Privacy />
        <Personalities />
        <Faq />
        <Install />
      </main>
      <Footer />
    </div>
  );
}
