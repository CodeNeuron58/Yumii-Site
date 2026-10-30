import { LEAVES, STAYS_LOCAL } from "./data/content";
import { Reveal, SECTION_PAD, SectionHead } from "./Section";

function List({ items, mark }: { items: string[]; mark: "stay" | "leave" }) {
  return (
    <ul className="m-0 flex list-none flex-col gap-3 p-0">
      {items.map((item) => (
        <li key={item} className="grid grid-cols-[22px_1fr] gap-3 text-base leading-normal text-soft">
          <span
            aria-hidden="true"
            className={`mt-0.5 grid h-[22px] w-[22px] place-items-center rounded-full text-xs font-bold ${
              mark === "stay" ? "bg-forest text-cream" : "bg-mist text-forest"
            }`}
          >
            {mark === "stay" ? "✓" : "→"}
          </span>
          <span className="[text-wrap:pretty]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Privacy() {
  return (
    <section id="privacy" className={`mx-auto max-w-[1280px] py-[120px] ${SECTION_PAD}`}>
      <SectionHead eyebrow="Privacy" title="Private by design, honest about the rest.">
        No account, no telemetry, no server of ours. Here is exactly what stays and what leaves.
      </SectionHead>
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal lift={60}>
          <div className="h-full rounded-3xl bg-white p-7">
            <div className="mb-5 font-display text-[22px] font-bold text-forest">Stays on your computer</div>
            <List items={STAYS_LOCAL} mark="stay" />
          </div>
        </Reveal>
        <Reveal lift={110}>
          <div className="h-full rounded-3xl bg-white p-7">
            <div className="mb-5 font-display text-[22px] font-bold text-forest">Leaves only when it has to</div>
            <List items={LEAVES} mark="leave" />
          </div>
        </Reveal>
      </div>
      <Reveal className="mt-6">
        <p className="m-0 text-[15px] text-muted">
          The dashboard&apos;s Privacy tab spells this out for your exact setup, and the code is open
          for anyone to check.
        </p>
      </Reveal>
    </section>
  );
}
