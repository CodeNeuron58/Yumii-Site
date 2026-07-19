import { OrbDot } from "./OrbDot";
import { Reveal } from "./Reveal";

/**
 * The two real surfaces of the product: the orb you talk to, and the
 * dashboard where you see everything she is. The orb preview is a live
 * rendition (the orb really is the whole UI); the dashboard is shown as
 * an honest listing of its actual tabs, not a fake window.
 */
const orbPoints = [
  "A small floating orb that sits quietly on top of your screen",
  "Summon her from anywhere with a hotkey, talk, then get back to it",
  "One command installs her — she lands in your Start Menu",
];

const dashboardPoints = [
  "Every conversation, resumable — she picks up where you left off",
  "Her memory of you, in the open: browse it, edit it, delete it",
  "Swap her mind, voice, ears, and personality anytime",
];

export function Faces() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 py-20 md:px-8 lg:py-28">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Meet her <em className="italic text-mint">where you live</em>.
        </h2>
        <p className="mt-4 max-w-[52ch] text-ink-soft">
          The orb is the conversation. Behind it sits a dashboard where
          nothing about her is hidden from you.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* The orb */}
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
                  The orb
                </h3>
                <span className="font-mono text-xs text-ink-dim">
                  the conversation
                </span>
              </div>
              <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-ink-soft">
                {orbPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* The dashboard */}
        <Reveal delay={0.1} className="min-w-0">
          <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-pool">
            <pre className="grow overflow-x-auto p-7 font-mono text-[13px] leading-7 text-ink-soft">
              <code>
                <span className="text-ink-dim">yumii dashboard</span>
                {"\n"}
                {"\n"}
                <span className="text-cyan">Chats</span>
                {"       every conversation, resumable\n"}
                <span className="text-cyan">Memory</span>
                {"      what she knows about you\n"}
                <span className="text-cyan">Tools</span>
                {"       what she's allowed to touch\n"}
                <span className="text-cyan">Settings</span>
                {"    her mind, voice, and mood"}
              </code>
            </pre>
            <div className="border-t border-line-soft p-7">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-semibold text-ink">
                  The dashboard
                </h3>
                <span className="font-mono text-xs text-ink-dim">
                  everything, visible
                </span>
              </div>
              <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-ink-soft">
                {dashboardPoints.map((point) => (
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
