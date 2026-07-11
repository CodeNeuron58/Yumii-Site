import { Reveal } from "./Reveal";
import { releases } from "./data/releases";

export function Updates() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 py-20 md:px-8 lg:py-28">
      <Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            She&apos;s <em className="italic text-mint">learning fast</em>.
          </h2>
          <a
            href="https://github.com/CodeNeuron58/Yumii/blob/master/CHANGELOG.md"
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono text-sm text-mint underline-offset-4 hover:underline"
          >
            full changelog →
          </a>
        </div>
        <p className="mt-4 max-w-[52ch] text-ink-soft">
          Three releases in two months, and counting.
        </p>
      </Reveal>

      <div className="mt-14 space-y-12">
        {releases.map((release, i) => (
          <Reveal key={release.version} delay={i * 0.06}>
            <article className="grid gap-2 sm:grid-cols-[140px_1fr] sm:gap-8">
              <div className="font-mono text-sm text-mint">
                {release.version}
                <div className="mt-0.5 text-xs text-ink-dim">
                  {release.date}
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {release.title}
                </h3>
                <p className="mt-1.5 max-w-[64ch] text-[15px] leading-relaxed text-ink-soft">
                  {release.summary}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
