import { Reveal } from "./Reveal";

/**
 * The quiet centerpiece: privacy is Yumii's moat, so it gets a full-width
 * statement band, not a feature card.
 */
const guarantees = [
  {
    title: "Her memory is files on your disk",
    desc: "Everything she knows about you sits in plain local storage. Read it, edit it, delete it. It's yours.",
  },
  {
    title: "Keys in your system's own vault",
    desc: "Credentials live in your operating system's secure keychain, never in a text file, never on a server.",
  },
  {
    title: "No account. No cloud. No telemetry.",
    desc: "There is nothing to sign up for and nothing phoning home. Close the app and she's simply asleep on your disk.",
  },
];

export function Privacy() {
  return (
    <section className="relative z-10 border-y border-line-soft bg-pool py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-mint">
            Private by design
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Nothing leaves <em className="italic text-mint">your machine</em>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {guarantees.map(({ title, desc }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="mx-auto max-w-[36ch] text-center md:mx-0 md:text-left">
                <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                  {title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <p className="text-sm text-ink-dim">
            Open source under MIT.{" "}
            <a
              href="https://github.com/CodeNeuron58/Yumii"
              target="_blank"
              rel="noreferrer noopener"
              className="text-mint underline-offset-4 hover:underline"
            >
              Check for yourself
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
