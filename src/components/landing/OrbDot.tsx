import type { CSSProperties } from "react";

/**
 * A small, server-renderable orb locked to one state (or one mood tint).
 * Used by the Presence flow and the Personality row; all animation is
 * pure CSS keyed off `data-state`.
 */
export function OrbDot({
  state = "idle",
  size = 56,
  tint,
}: {
  state?: "idle" | "listening" | "thinking" | "speaking";
  size?: number;
  tint?: string;
}) {
  const style = {
    "--orb-size": `${size}px`,
    ...(tint ? { "--p-tint": tint } : {}),
  } as CSSProperties;

  return (
    <span
      className="orb-stage inline-grid shrink-0"
      style={style}
      data-state={state}
      aria-hidden="true"
    >
      <span className="orb-ring" />
      <span className="orb-ring orb-ring-2" />
      <span className={`orb ${tint ? "orb-tinted" : ""}`} />
    </span>
  );
}
