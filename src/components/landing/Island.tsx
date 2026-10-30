import type { CSSProperties, ReactNode } from "react";

// Miniature versions of the real island's pieces, drawn with the app's
// own colours: mint while listening, a spinner while thinking, a wave
// while she speaks, amber when she is asking permission.

export function Pulse() {
  return (
    <span
      aria-hidden="true"
      className="h-2 w-2 flex-none rounded-full bg-mint"
      style={{ animation: "y-pulse 1.4s ease-in-out infinite" }}
    />
  );
}

export function Spinner() {
  return (
    <span
      aria-hidden="true"
      className="h-3 w-3 flex-none rounded-full border-2 border-[#333] border-t-mint"
      style={{ animation: "y-spin .8s linear infinite" }}
    />
  );
}

export function Wave() {
  return (
    <span aria-hidden="true" className="flex h-3.5 flex-none items-center gap-0.5">
      {[0, 1, 2, 3].map((k) => (
        <span
          key={k}
          className="h-3.5 w-[3px] rounded-sm bg-sage"
          style={{ animation: `y-wave .9s ease-in-out ${k * 0.12}s infinite` }}
        />
      ))}
    </span>
  );
}

export function AskDot() {
  return <span aria-hidden="true" className="h-2 w-2 flex-none rounded-full bg-amber" />;
}

/** One island state, stacked over the others and cross-faded by `shown`. */
export function IslandPill({
  shown,
  offset,
  className = "",
  children,
}: {
  shown: boolean;
  /** where it slides from / to: -1 above, 0 in place, 1 below */
  offset: -1 | 0 | 1;
  className?: string;
  children: ReactNode;
}) {
  const style: CSSProperties = {
    transform: `translateX(-50%) translateY(${offset * 7}px)`,
    opacity: shown ? 1 : 0,
    transition: "opacity .35s, transform .35s",
  };
  return (
    <div
      aria-hidden={!shown}
      className={`absolute left-1/2 top-0 flex max-w-[calc(100vw-32px)] items-center gap-2.5 whitespace-nowrap rounded-[20px] bg-island text-island-ink ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function Sliver({ shown, className = "" }: { shown: boolean; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute left-1/2 h-[5px] w-[120px] -translate-x-1/2 rounded-[3px] ${className}`}
      style={{ opacity: shown ? 1 : 0, transition: "opacity .35s" }}
    />
  );
}

export function ApprovalButtons({ compact = false }: { compact?: boolean }) {
  const pad = compact ? "px-2.5 py-1" : "px-2.5 py-[5px]";
  return (
    <>
      <span className={`rounded-xl bg-amber font-semibold text-amber-ink ${pad}`}>Allow</span>
      <span className={`rounded-xl bg-island-btn text-island-dim ${pad}`}>Deny</span>
    </>
  );
}
