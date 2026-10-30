import { STEPS, STEP_DEMO } from "./data/content";
import { ApprovalButtons, AskDot, IslandPill, Pulse, Sliver, Spinner, Wave } from "./Island";

/** Pinned while you scroll: five moments, one island, one laptop. */
export function HowItWorks({ step }: { step: number }) {
  const off = (i: number): -1 | 0 | 1 => (i === step ? 0 : i < step ? -1 : 1);
  const pill = "top-2.5 h-8 gap-2 px-3 text-[10.5px] short-phone:top-1.5 short-phone:h-7 short-phone:gap-1.5 short-phone:px-2.5 short-phone:text-[9.5px] sm:h-9 sm:gap-2.5 sm:px-4 sm:text-[12.5px]";

  return (
    <section
      id="how"
      data-scene="pin"
      data-steps={STEPS.length}
      className="relative bg-mist"
      style={{ height: "520vh" }}
    >
      <div className="sticky top-0 flex h-[100svh] items-center px-5 pb-6 pt-[70px] short-phone:pb-3 short-phone:pt-[66px] sm:px-[clamp(20px,6vw,96px)]">
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-6 short-phone:gap-3 md:grid-cols-2 md:gap-[clamp(24px,5vw,72px)]">
          <div
            style={{
              opacity: "var(--e, 1)",
              transform: "translateY(calc((1 - var(--e, 1)) * 90px))",
            }}
          >
            <p className="mb-2.5 text-[15px] font-semibold uppercase tracking-[0.06em] text-sage short-phone:hidden">How it works</p>
            <h2
              className="mb-4 font-display font-extrabold text-forest short-phone:mb-2 md:mb-7"
              style={{ fontSize: "clamp(30px, 4vw, 54px)", lineHeight: 1, letterSpacing: "-0.03em" }}
            >
              One island. Five moments.
            </h2>
            <ol className="m-0 flex list-none flex-col gap-1 p-0 md:gap-1.5">
              {STEPS.map((s, i) => {
                const active = i === step;
                return (
                  <li
                    key={s.title}
                    aria-current={active ? "step" : undefined}
                    className="grid grid-cols-[32px_1fr] gap-3 rounded-2xl px-3.5 py-2 transition-[opacity,background-color] duration-300 short-phone:py-1 md:py-3"
                    style={{ background: active ? "#ffffff" : "transparent", opacity: active ? 1 : 0.45 }}
                  >
                    <span
                      className="grid h-7 w-7 place-items-center rounded-full text-[13px] font-bold text-cream transition-colors duration-300"
                      style={{ background: active ? "var(--color-forest)" : "var(--color-dot)" }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <div className="font-display text-lg font-bold text-forest md:text-xl">{s.title}</div>
                      {active && (
                        <div className="mt-1 text-[15px] leading-[1.45] text-soft [text-wrap:pretty] md:text-base">
                          {s.body}
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <div
            className="mx-auto w-full max-w-[min(100%,560px)] short-phone:max-w-[270px] md:max-w-none"
            style={{
              transformOrigin: "50% 100%",
              transform:
                "perspective(1400px) translateY(calc((1 - var(--e, 1)) * 140px)) rotateX(calc((1 - var(--e, 1)) * 32deg)) scale(calc(.78 + var(--e, 1) * .22))",
              opacity: "calc(.2 + var(--e, 1) * .8)",
            }}
          >
            <div
              className="relative aspect-[16/10] overflow-hidden rounded-[18px_18px_6px_6px] border-[10px] border-[#1c1c1c] bg-[#f4f1e6] shadow-[0_30px_60px_-30px_rgba(19,74,51,.45)]"
              role="img"
              aria-label={`A laptop screen with the Yumii island at the top. Step ${step + 1} of ${STEPS.length}: ${STEPS[step].title}.`}
            >
              {/* a calm desktop */}
              <div className="absolute left-[8%] top-[22%] h-[56%] w-[46%] rounded-[10px] bg-white shadow-[0_6px_20px_rgba(0,0,0,.06)]" />
              <div className="absolute left-[58%] top-[34%] h-[44%] w-[32%] rounded-[10px] bg-[#f6f3ea] shadow-[0_6px_20px_rgba(0,0,0,.06)]" />
              <div className="absolute left-[12%] top-[30%] h-2 w-[30%] rounded bg-[#e6ece3]" />
              <div className="absolute left-[12%] top-[36%] h-2 w-[22%] rounded bg-[#e6ece3]" />
              <div className="absolute inset-x-0 bottom-0 h-[9%] bg-white/70" />

              <Sliver shown={step === 0} className="top-2 bg-black/55" />
              {/* listening and thinking share one pill: the words stay, the wave becomes a spinner */}
              <IslandPill shown={step === 1 || step === 2} offset={step === 0 ? 1 : step > 2 ? -1 : 0} className={pill}>
                {step >= 2 ? <Spinner /> : <Wave />}
                <span className={`transition-colors duration-300 ${step >= 2 ? "text-island-dim" : ""}`}>
                  {STEP_DEMO.question}
                </span>
              </IslandPill>
              <IslandPill shown={step === 3} offset={off(3)} className={pill}>
                <Pulse />
                <span>{STEP_DEMO.answer}</span>
              </IslandPill>
              <IslandPill shown={step === 4} offset={off(4)} className={`${pill} pr-1.5`}>
                <AskDot />
                <span>{STEP_DEMO.approval}</span>
                <ApprovalButtons />
              </IslandPill>
            </div>
            <div className="mx-[-4%] h-3 rounded-b-[14px] bg-[#2a2a2a]" />
            <div className="mx-auto mt-5 h-1 w-3/5 overflow-hidden rounded-sm bg-[#cfdccb] short-phone:hidden">
              <div className="h-full bg-sage" style={{ width: "calc(var(--p, 0) * 100%)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
