/**
 * How she's with you — the conversation loop told through the orb's
 * real states. Each step's mini-orb plays the actual animation the
 * product shows in that moment.
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
    desc: "What matters sticks — tomorrow, too.",
  },
] as const;

export function Presence() {
  return (
    <section className="section" data-purpose="presence-section">
      <hr className="sec-rule" />
      <p className="sec-eyebrow">Presence</p>
      <h2 className="sec-title">
        A conversation, <em>not a chat window</em>.
      </h2>
      <p className="sec-lede">
        There&apos;s nothing to open and nothing to type into. She sits at the
        edge of your screen, and the whole exchange happens out loud.
      </p>

      <div className="presence-strip">
        {steps.map(({ state, label, desc }) => (
          <div key={label} className="presence-step">
            <div className="step-orb" data-state={state} aria-hidden="true" />
            <div className="step-label">{label}</div>
            <div className="step-desc">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
