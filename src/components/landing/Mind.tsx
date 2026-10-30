import { MIND_POINTS, MIX } from "./data/content";
import { Reveal, SECTION_PAD, SectionHead } from "./Section";

export function Mind() {
  return (
    <section id="mind" className="bg-mist">
      <div className={`mx-auto max-w-[1280px] py-[110px] ${SECTION_PAD}`}>
        <SectionHead eyebrow="Her mind" title="NVIDIA Nemotron, on Nebius Token Factory.">
          Every reply and every tool call is thought through by Nemotron, served by Nebius Token
          Factory with one API key. Prefer something else? Swap her mind in the dashboard.
        </SectionHead>
        <div className="grid gap-5 md:grid-cols-3">
          {MIND_POINTS.map((point, i) => (
            <Reveal key={point.title} lift={60 + i * 50}>
              <div className="h-full rounded-3xl bg-white p-7">
                <div className="font-display text-[22px] font-bold text-forest">{point.title}</div>
                <p className="mt-2 text-base leading-normal text-soft [text-wrap:pretty]">{point.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-5" lift={70}>
          <dl className="m-0 overflow-hidden rounded-3xl bg-white">
            {MIX.map((row, i) => (
              <div
                key={row.role}
                className={`grid gap-1 px-7 py-4 sm:grid-cols-[120px_1fr] sm:gap-6 ${i ? "border-t border-line" : ""}`}
              >
                <dt className="font-display text-lg font-bold text-forest">{row.role}</dt>
                <dd className="m-0 self-center text-[15px] text-soft">{row.options}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
