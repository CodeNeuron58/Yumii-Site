import { MEMORY_FACTS, MEMORY_POINTS } from "./data/content";
import { Reveal, SECTION_PAD, SectionHead } from "./Section";

export function Memory() {
  return (
    <section id="memory" className={`mx-auto max-w-[1280px] pb-16 pt-[120px] ${SECTION_PAD}`}>
      <SectionHead eyebrow="Memory" title="She remembers your life.">
        Tell her once. She keeps what matters, and it all lives in files on your own computer that
        you can read, edit and delete.
      </SectionHead>
      <div className="grid items-start gap-5 md:grid-cols-[1.1fr_1fr]">
        <div className="grid gap-5 sm:grid-cols-3 md:grid-cols-1">
          {MEMORY_POINTS.map((point, i) => (
            <Reveal key={point.title} lift={60 + i * 40}>
              <div className="h-full rounded-3xl bg-white p-7">
                <div className="font-display text-[22px] font-bold text-forest">{point.title}</div>
                <p className="mt-2 text-base leading-normal text-soft [text-wrap:pretty]">{point.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal lift={110}>
          <figure className="m-0 rounded-3xl bg-white p-7">
            <figcaption className="mb-4 flex items-center justify-between text-sm font-semibold text-muted">
              <span>Dashboard · Memory</span>
              <span className="rounded-full bg-mist px-3 py-1 text-xs text-forest">stored on this PC</span>
            </figcaption>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {MEMORY_FACTS.map((fact) => (
                <li
                  key={fact}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-line px-4 py-3 text-[15px] text-ink"
                >
                  <span>{fact}</span>
                  <span className="flex-none text-xs text-muted">edit · forget</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-2.5 rounded-2xl bg-island px-4 py-3 text-[13px] text-island-ink">
              <span aria-hidden="true" className="h-2 w-2 flex-none rounded-full bg-mint" />
              <span>“Welcome back. How did Monday&apos;s exam go?”</span>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
