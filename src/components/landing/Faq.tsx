"use client";

import { useState } from "react";
import { FAQ } from "./data/content";
import { Reveal } from "./Section";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="mx-auto max-w-[880px] px-5 pb-[120px] pt-10 sm:px-[clamp(20px,6vw,96px)]">
      <Reveal lift={40}>
        <h2
          className="mb-8 font-display font-extrabold text-forest"
          style={{ fontSize: "clamp(32px, 4vw, 54px)", lineHeight: 1, letterSpacing: "-0.03em" }}
        >
          Questions
        </h2>
      </Reveal>
      <div className="flex flex-col border-t-[1.5px] border-line">
        {FAQ.map((item, i) => {
          const isOpen = open === i;
          const id = `faq-${i}`;
          return (
            <div key={item.q} className="border-b-[1.5px] border-line">
              <h3 className="m-0">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={id}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent px-1 py-[22px] text-left font-display text-[19px] font-bold text-forest hover:text-leaf sm:text-[21px]"
                >
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="grid h-8 w-8 flex-none place-items-center rounded-full bg-mist text-xl transition-transform duration-200"
                    style={{ transform: `rotate(${isOpen ? 45 : 0}deg)` }}
                  >
                    +
                  </span>
                </button>
              </h3>
              <div id={id} hidden={!isOpen}>
                <p className="m-0 pb-6 pl-1 pr-12 text-[17px] leading-[1.55] text-soft [text-wrap:pretty]">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
