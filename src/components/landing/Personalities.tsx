import { PERSONALITIES } from "./data/content";
import { Reveal, SECTION_PAD, SectionHead } from "./Section";

export function Personalities() {
  return (
    <section id="personalities" className="bg-mist">
      <div className={`mx-auto max-w-[1280px] py-[110px] ${SECTION_PAD}`}>
        <SectionHead eyebrow="Personality" title="Six moods. Each one a text file.">
          Ask her to switch, or pick one in the dashboard. Every personality is a plain text file you
          can rewrite, or copy to make your own.
        </SectionHead>
        <Reveal lift={60}>
          <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
            {PERSONALITIES.map((p) => (
              <li key={p.name} className="rounded-full bg-white px-5 py-3">
                <span className="font-display text-lg font-bold text-forest">{p.name}</span>
                <span className="ml-2 text-[15px] text-soft">{p.mood}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
