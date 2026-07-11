"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * The hero orb: a live rendition of the actual product, cycling through
 * Yumii's real states (idle → listening → thinking → speaking).
 * Clicking or pressing Enter skips ahead. All motion lives in CSS keyed
 * off `data-state`; under prefers-reduced-motion the cycle stops at idle.
 */
const STATES = [
  { id: "idle", caption: "always there", duration: 3600 },
  { id: "listening", caption: "listening", duration: 3000 },
  { id: "thinking", caption: "thinking", duration: 2600 },
  { id: "speaking", caption: "answering, out loud", duration: 3400 },
] as const;

export function Orb({ size = 260 }: { size?: number }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const state = STATES[index];

  useEffect(() => {
    if (reduce) return;
    const timer = setTimeout(
      () => setIndex((i) => (i + 1) % STATES.length),
      state.duration
    );
    return () => clearTimeout(timer);
  }, [index, state.duration, reduce]);

  const advance = () => setIndex((i) => (i + 1) % STATES.length);

  return (
    <div className="flex flex-col items-center gap-8">
      <div
        className="orb-stage cursor-pointer"
        style={{ "--orb-size": `${size}px` } as CSSProperties}
        data-state={state.id}
        role="button"
        tabIndex={0}
        aria-label={`Yumii orb, currently ${state.id}. Activate to see her next state.`}
        onClick={advance}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            advance();
          }
        }}
      >
        <span className="orb-ring" aria-hidden="true" />
        <span className="orb-ring orb-ring-2" aria-hidden="true" />
        <div className="orb" />
        <div className="orb-wave" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <p
        className="font-mono text-xs tracking-[0.18em] uppercase text-ink-dim"
        aria-hidden="true"
      >
        {state.caption}
      </p>
    </div>
  );
}
