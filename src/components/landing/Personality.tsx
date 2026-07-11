import { OrbDot } from "./OrbDot";
import { Reveal } from "./Reveal";
import { personalities } from "./data/personalities";

/**
 * Six moods, six tints: in the product the orb genuinely recolours when
 * her personality switches, so the row below is a truthful preview.
 */
export function Personality() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 py-20 md:px-8 lg:py-28">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          One companion, <em className="italic text-mint">many colours</em>.
        </h2>
        <p className="mt-4 max-w-[52ch] text-ink-soft">
          Warm and nurturing today, sharp and teasing tomorrow. Switch her
          personality mid-conversation and she takes on a whole new tone.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-3 gap-x-4 gap-y-10 sm:grid-cols-6">
        {personalities.map(({ name, mood, tint }, i) => (
          <Reveal key={name} delay={i * 0.06}>
            <div className="group flex flex-col items-center text-center">
              <div className="transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
                <OrbDot size={52} tint={tint} />
              </div>
              <div className="mt-4 font-display text-[15px] font-semibold text-ink">
                {name}
              </div>
              <div className="mt-0.5 text-xs leading-snug text-ink-dim">
                {mood}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
