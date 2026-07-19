import { Reveal } from "./Reveal";

/**
 * Capabilities as a four-cell bento: 4 items, 4 cells, with real visual
 * variation (a live waveform, an aurora-gradient cell) instead of four
 * identical text cards.
 */
export function Features() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 py-20 md:px-8 lg:py-28">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Small on your screen,{" "}
          <em className="italic text-mint">capable underneath</em>.
        </h2>
        <p className="mt-4 max-w-[52ch] text-ink-soft">
          A companion first, but one that can actually help.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-6">
        {/* Real conversation: wide cell with a live voice waveform */}
        <Reveal className="lg:col-span-4">
          <div className="flex h-full flex-col justify-between rounded-2xl border border-line bg-pool p-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                Real conversation
              </h3>
              <p className="mt-2.5 max-w-[52ch] text-[15px] leading-relaxed text-ink-soft">
                Talk naturally, out loud. She answers with a real voice, and
                if you cut her off mid-sentence she stops and listens.
              </p>
            </div>
            <div
              className="mt-8 flex h-10 items-center gap-1"
              aria-hidden="true"
            >
              {Array.from({ length: 36 }, (_, i) => (
                <span
                  key={i}
                  className="w-[3px] rounded-full"
                  style={{
                    height: `${18 + Math.sin(i * 0.9) * 14 + (i % 5) * 3}%`,
                    background:
                      i % 2
                        ? "rgba(62,230,168,0.55)"
                        : "rgba(47,210,233,0.45)",
                  }}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Mind and voice: aurora-gradient cell */}
        <Reveal delay={0.08} className="lg:col-span-2">
          <div
            className="flex h-full flex-col justify-between rounded-2xl border border-line p-8"
            style={{
              background:
                "linear-gradient(150deg, rgba(46,230,160,0.14), rgba(35,200,225,0.1) 55%, rgba(8,21,15,0.6))",
            }}
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                Your choice of mind and voice
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                Plug in the provider you already use and pick the voice she
                speaks with. Offline listening included.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Ollama", "Groq", "OpenAI", "Anthropic"].map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-line px-3.5 py-1 font-mono text-xs text-ink-soft"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Memory */}
        <Reveal delay={0.05} className="lg:col-span-2">
          <div className="h-full rounded-2xl border border-line bg-pool p-8">
            <h3 className="font-display text-xl font-semibold text-ink">
              A memory that lasts
            </h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
              She learns the little things: your name, your projects, what
              you like. Any conversation picks up where it left off.
            </p>
          </div>
        </Reveal>

        {/* Tasks, gated by consent: shows the real approval prompt */}
        <Reveal delay={0.12} className="lg:col-span-4">
          <div className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-line bg-pool p-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                Gets things done
              </h3>
              <p className="mt-2.5 max-w-[42ch] text-[15px] leading-relaxed text-ink-soft">
                Ask her to search the web, read your inbox, or check your
                calendar. When a task reaches beyond your machine, she asks
                before acting — every time.
              </p>
            </div>
            <div
              className="shrink-0 rounded-2xl border border-line bg-night px-5 py-4"
              aria-hidden="true"
            >
              <p className="font-mono text-xs text-ink-soft">
                may I search the web?
              </p>
              <div className="mt-3 flex gap-2">
                <span className="rounded-full bg-mint px-3.5 py-1 font-mono text-[11px] font-semibold text-mint-deep">
                  allow
                </span>
                <span className="rounded-full border border-line px-3.5 py-1 font-mono text-[11px] text-ink-dim">
                  not now
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
