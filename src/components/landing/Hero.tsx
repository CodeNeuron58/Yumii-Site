import Image from "next/image";
import {
  ArrowRightIcon,
  BoltIcon,
  CodeIcon,
  GithubIcon,
  LockIcon,
  MicrophoneIcon,
  TerminalIcon,
} from "./icons";

const badges = [
  { label: "Terminal Native", Icon: TerminalIcon },
  { label: "Voice First", Icon: MicrophoneIcon },
  { label: "Local & Private", Icon: LockIcon },
  { label: "Extensible", Icon: BoltIcon },
  { label: "Open Source", Icon: CodeIcon },
];

export function Hero() {
  return (
    <main className="hero-section flex flex-col items-center text-center mt-8 md:mt-16 w-full z-10">
      {/* ── Mascot with Halo Glow Ring ─────────────────────────────── */}
      <div className="hero-mascot-wrapper relative mx-auto mb-8 flex items-center justify-center w-48 h-48 sm:w-64 sm:h-64">

        {/* Layer 1 – Far outer bloom (slow-breathing radial glow) */}
        <div
          className="absolute rounded-full pointer-events-none animate-halo-breathe"
          style={{
            inset: "-72px",
            background:
              "radial-gradient(circle, rgba(107,251,154,0.09) 0%, rgba(107,251,154,0.04) 40%, transparent 70%)",
          }}
        />

        {/* Layer 2 – Counter-rotating dashed ring (far, subtle) */}
        <div
          className="absolute rounded-full pointer-events-none animate-halo-counter-spin"
          style={{
            inset: "-20px",
            border: "1px dashed rgba(107,251,154,0.18)",
          }}
        />

        {/* Layer 3 – Rotating conic-gradient arc (the sweeping bright light) */}
        <div
          className="absolute rounded-full pointer-events-none animate-halo-spin"
          style={{
            inset: "-5px",
            padding: "3px",
            background:
              "conic-gradient(from 0deg, transparent 0%, rgba(107,251,154,0.05) 15%, rgba(107,251,154,0.95) 38%, #6bfb9a 50%, rgba(107,251,154,0.95) 62%, rgba(107,251,154,0.05) 80%, transparent 100%)",
            /* Mask trick: show only the 3px padding ring, not the interior */
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "destination-out",
            maskComposite: "exclude",
          }}
        />

        {/* Layer 4 – Inner pulsing glow ring (tight to image edge) */}
        <div
          className="absolute rounded-full pointer-events-none animate-halo-pulse-glow"
          style={{
            inset: "-1px",
            border: "1.5px solid rgba(107,251,154,0.45)",
          }}
        />

        {/* Mascot image – circular clip + mint drop-shadow */}
        <Image
          src="/yumi-hero.png"
          alt="Yumi AI companion"
          width={256}
          height={256}
          priority
          className="relative z-10 w-full h-full object-cover rounded-full"
          style={{ filter: "drop-shadow(0 0 14px rgba(107,251,154,0.28))" }}
        />
      </div>

      <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-on-surface max-w-3xl leading-[1.1] font-display">
        Your <span className="text-primary">AI companion</span>
        <br />
        that lives in the terminal.
      </h1>

      <p className="hero-subtitle mt-6 text-lg sm:text-xl text-on-surface-variant max-w-2xl mx-auto">
        Real-time voice interaction, tool calling, and persistent memory.
        <br className="hidden sm:block" />
        Built for developers. Designed for productivity.
      </p>

      <div className="hero-cta-group mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4">
        <a
          href="#"
          className="cta-button-primary w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-on-primary hover:bg-primary/90 px-8 py-3.5 rounded-full text-base font-semibold transition-colors shadow-lg shadow-primary/20"
        >
          Get Started
          <ArrowRightIcon className="w-4 h-4" />
        </a>
        <a
          href="#"
          className="cta-button-secondary w-full sm:w-auto flex items-center justify-center gap-2 bg-surface-container text-on-surface hover:bg-surface-container-high px-8 py-3.5 rounded-full text-base font-medium transition-colors border border-outline-variant"
        >
          View on GitHub
          <GithubIcon className="w-5 h-5" />
        </a>
      </div>

      <div className="hero-badges mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-on-surface-variant">
        {badges.map(({ label, Icon }) => (
          <div key={label} className="badge-item flex items-center gap-2">
            <Icon className="w-4 h-4 text-primary" />
            {label}
          </div>
        ))}
      </div>
    </main>
  );
}
