import { OrbDot } from "./OrbDot";
import { Reveal } from "./Reveal";

/**
 * How she's with you: the conversation loop told through the orb's real
 * states. Each step's mini-orb plays the actual animation the product
 * shows in that moment, joined by one aurora thread.
 */
const steps = [
  {
    state: "listening",
    label: "You speak",
    desc: "No wake word, no button. Just start talking.",
  },
  {
    state: "thinking",
    label: "She thinks",
    desc: "You can see her working it out.",
  },
  {
    state: "speaking",
    label: "She answers",
    desc: "Out loud, with a real voice. Cut her off anytime.",
  },
  {
    state: "idle",
    label: "She remembers",
    desc: "What matters sticks. Tomorrow, too.",
  },
] as const;

export function Presence() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 py-20 md:px-8 lg:py-28">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          A conversation, <em className="italic text-mint">not a chat window</em>.
        </h2>
        <p className="mt-4 max-w-[52ch] text-ink-soft">
          There is nothing to open and nothing to type into. She sits at the
          edge of your screen, and the whole exchange happens out loud.
        </p>
      </Reveal>

      <div className="relative mt-16">
        {/* the aurora thread joining the four moments */}
        <div
          className="absolute left-[10%] right-[10%] top-7 hidden h-px lg:block"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(62,230,168,0.35), rgba(47,210,233,0.35), transparent)",
          }}
          aria-hidden="true"
        />
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {steps.map(({ state, label, desc }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center">
                <OrbDot state={state} size={56} />
                <div className="mt-5 font-display text-lg font-semibold text-ink">
                  {label}
                </div>
                <p className="mt-1.5 max-w-[24ch] text-sm leading-relaxed text-ink-dim">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
