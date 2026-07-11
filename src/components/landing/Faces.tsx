import { OrbDot } from "./OrbDot";
import { Reveal } from "./Reveal";

/**
 * Two doors to the same companion: the desktop app for everyone, the
 * terminal for developers. The app preview is a live rendition of the
 * product (the orb really is the whole UI); the terminal is shown as an
 * honest command listing, not a fake window.
 */
const appPoints = [
  "A small floating orb that sits quietly on top of your screen",
  "Summon her from anywhere with a hotkey, talk, then get back to it",
  "One-click installer on the way",
];

const terminalPoints = [
  "The full companion, living in your shell, nothing cut down",
  "Sessions, memory and moods managed with quick slash-commands",
  "Same brain, same memory as the app",
];

export function Faces() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 py-20 md:px-8 lg:py-28">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Meet her <em className="italic text-mint">where you live</em>.
        </h2>
        <p className="mt-4 max-w-[52ch] text-ink-soft">
          One companion, one memory, reachable from the desktop or the
          terminal. Whichever you open, she knows you.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* The desktop app */}
        <Reveal className="min-w-0">
          <div className="h-full overflow-hidden rounded-2xl border border-line bg-pool">
            <div
              className="relative grid h-60 place-items-center"
              style={{
                background:
                  "radial-gradient(70% 90% at 50% 110%, rgba(46,230,170,0.13), transparent 70%), radial-gradient(50% 60% at 80% 0%, rgba(35,200,225,0.08), transparent 70%)",
              }}
              aria-hidden="true"
            >
              <div
                className="float-gentle"
                style={{ animation: "orb-float 4.5s ease-in-out infinite" }}
              >
                <OrbDot state="idle" size={84} />
              </div>
              <p className="absolute bottom-5 font-mono text-[11px] tracking-[0.14em] text-ink-dim">
                press the hotkey, then just talk
              </p>
            </div>
            <div className="border-t border-line-soft p-7">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-semibold text-ink">
                  The desktop app
                </h3>
                <span className="font-mono text-xs text-ink-dim">
                  for everyone
                </span>
              </div>
              <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-ink-soft">
                {appPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* The terminal */}
        <Reveal delay={0.1} className="min-w-0">
          <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-pool">
            <pre className="grow overflow-x-auto p-7 font-mono text-[13px] leading-7 text-ink-soft">
              <code>
                <span className="text-mint">$</span> yumii{"\n"}
                {"\n"}
                <span className="text-ink-dim">
                  she is awake, listening in your shell
                </span>
                {"\n"}
                {"\n"}
                <span className="text-cyan">/memory</span>
                {"        everything she remembers\n"}
                <span className="text-cyan">/personality</span>
                {"   switch her mood\n"}
                <span className="text-cyan">/sessions</span>
                {"      pick up any conversation"}
              </code>
            </pre>
            <div className="border-t border-line-soft p-7">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-semibold text-ink">
                  The terminal
                </h3>
                <span className="font-mono text-xs text-ink-dim">
                  for developers
                </span>
              </div>
              <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-ink-soft">
                {terminalPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
