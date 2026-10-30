import { TOOLS } from "./data/content";
import { AskDot } from "./Island";
import { Reveal, SECTION_PAD, SectionHead } from "./Section";

export function Tools() {
  return (
    <section id="tools" className={`mx-auto max-w-[1280px] py-[120px] ${SECTION_PAD}`}>
      <SectionHead eyebrow="Tools" title="Hands, with your permission.">
        She can search the web and handle your email. Anything that reaches outside your computer
        waits for your go-ahead: click Allow, or just say “yes”.
      </SectionHead>
      <div className="grid gap-5 md:grid-cols-3">
        {TOOLS.map((tool, i) => (
          <Reveal key={tool.name} lift={60 + i * 50}>
            <div className="flex h-full flex-col gap-3.5 rounded-3xl bg-white p-7 transition-shadow duration-300 hover:shadow-[0_24px_40px_-24px_rgba(19,74,51,.35)]">
              <div className="font-display text-2xl font-bold text-forest">{tool.name}</div>
              <p className="m-0 text-base leading-normal text-soft [text-wrap:pretty]">{tool.body}</p>
              <div
                className={`mt-auto flex h-[34px] items-center gap-2 overflow-hidden whitespace-nowrap rounded-2xl bg-island text-[12.5px] text-island-ink ${
                  tool.kind === "ask" ? "pl-3.5 pr-[5px]" : "px-3.5"
                }`}
              >
                {tool.kind === "ask" ? (
                  <AskDot />
                ) : (
                  <span aria-hidden="true" className="h-2 w-2 flex-none rounded-full bg-sage" />
                )}
                <span className="flex-1 overflow-hidden text-ellipsis">{tool.card}</span>
                {tool.kind === "ask" && (
                  <span className="rounded-[11px] bg-amber px-2.5 py-1 font-semibold text-amber-ink">Allow</span>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-6">
        <p className="m-0 text-[15px] text-muted">
          Gmail connects through Composio from the dashboard, and the clock and her memory need no
          permission at all.
        </p>
      </Reveal>
    </section>
  );
}
