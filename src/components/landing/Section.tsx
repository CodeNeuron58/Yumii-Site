import type { ReactNode } from "react";

/** Fades and lifts into place as it scrolls into view (driven by ScrollScenes). */
export function Reveal({
  lift = 50,
  className = "",
  children,
}: {
  lift?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      data-scene="reveal"
      className={className}
      style={{
        opacity: "var(--p, 1)",
        transform: `translateY(calc((1 - var(--p, 1)) * ${lift}px))`,
      }}
    >
      {children}
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={`mb-12 max-w-[720px] ${className}`}>
      <p className="mb-2.5 text-[15px] font-semibold uppercase tracking-[0.06em] text-sage">{eyebrow}</p>
      <h2
        className="mb-4 font-display font-extrabold text-forest [text-wrap:balance]"
        style={{ fontSize: "clamp(32px, 4vw, 54px)", lineHeight: 1, letterSpacing: "-0.03em" }}
      >
        {title}
      </h2>
      {children && <p className="m-0 text-[19px] leading-normal text-soft [text-wrap:pretty]">{children}</p>}
    </Reveal>
  );
}

export const SECTION_PAD = "px-5 sm:px-[clamp(20px,6vw,96px)]";
