"use client";

import { useEffect, useState } from "react";

/**
 * The hero orb — a live rendition of the actual product.
 * It cycles through Yumii's real states (idle → listening → thinking →
 * speaking) on a timer; clicking or pressing Enter skips ahead.
 * All motion lives in CSS keyed off `data-state`, so
 * `prefers-reduced-motion` can switch it off wholesale.
 */
const STATES = [
  { id: "idle", caption: "always there", duration: 3600 },
  { id: "listening", caption: "listening…", duration: 3000 },
  { id: "thinking", caption: "thinking…", duration: 2600 },
  { id: "speaking", caption: "answering — out loud", duration: 3400 },
] as const;

export function Orb() {
  const [index, setIndex] = useState(0);
  const state = STATES[index];

  useEffect(() => {
    const timer = setTimeout(
      () => setIndex((i) => (i + 1) % STATES.length),
      state.duration
    );
    return () => clearTimeout(timer);
  }, [index, state.duration]);

  const advance = () => setIndex((i) => (i + 1) % STATES.length);

  return (
    <div className="orb-hero">
      <div
        className="orb-stage"
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
        <div className="orb-ball" />
      </div>
      <div className="orb-caption" aria-hidden="true">
        {state.caption}
      </div>
    </div>
  );
}
