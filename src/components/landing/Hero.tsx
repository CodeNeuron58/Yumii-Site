"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HERO_EXCHANGE, VERSION } from "./data/content";
import { IslandPill, Pulse, Sliver, Spinner, Wave } from "./Island";

// One tick = 70 ms; the loop is 120 ticks (~8.4 s):
// resting sliver → listening (words appear) → thinking → speaking.
const TICK_MS = 70;
const LOOP = 120;
const SPEAKING_FINAL = LOOP - 1;

function phaseOf(t: number) {
  return t < 14 ? 0 : t < 58 ? 1 : t < 74 ? 2 : 3;
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  // Server render and reduced motion both show the finished answer.
  const [t, setT] = useState(SPEAKING_FINAL);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    if (ref.current) io.observe(ref.current);
    const iv = window.setInterval(() => {
      if (visible) setT((x) => (x + 1) % LOOP);
    }, TICK_MS);
    return () => {
      window.clearInterval(iv);
      io.disconnect();
    };
  }, []);

  const { question, answer } = HERO_EXCHANGE;
  const phase = phaseOf(t);
  const q = question.slice(0, Math.max(1, Math.floor((t - 14) * 1.1)));
  const a = answer.slice(0, Math.max(1, Math.floor((t - 74) * 1.3)));
  const off = (i: number): -1 | 0 | 1 => (i === phase ? 0 : i < phase ? -1 : 1);
  const pill = "h-10 px-[18px] text-sm shadow-[0_12px_30px_-12px_rgba(0,0,0,.35)]";

  return (
    <section
      id="top"
      ref={ref}
      data-scene="hero"
      className="relative isolate flex min-h-[calc(100svh-62px)] flex-col items-center overflow-hidden px-5 pt-[18px] text-center"
    >
      {/* The island, playing one exchange */}
      <div
        className="relative z-[3] h-10 w-full"
        role="img"
        aria-label={`The Yumii island at the top of the screen. You say: “${question}” She answers: “${answer}”`}
      >
        <Sliver shown={phase === 0} className="top-1.5 bg-ink/60" />
        {/* listening → thinking is one pill, like the real island: the
            words stay put, only the wave turns into a spinner */}
        <IslandPill shown={phase === 1 || phase === 2} offset={phase === 0 ? 1 : phase === 3 ? -1 : 0} className={pill}>
          {phase >= 2 ? <Spinner /> : <Wave />}
          <span className={`overflow-hidden text-ellipsis transition-colors duration-300 ${phase >= 2 ? "text-island-dim" : ""}`}>
            {phase >= 2 ? question : q}
          </span>
        </IslandPill>
        <IslandPill shown={phase === 3} offset={off(3)} className={pill}>
          <Pulse />
          <span className="overflow-hidden text-ellipsis">{a}</span>
        </IslandPill>
      </div>

      <p
        className="relative z-[3] mt-2.5 flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-leaf"
        style={{ opacity: "calc(1 - var(--p, 0) * 3)" }}
      >
        <span aria-hidden="true">↑</span> That&apos;s Yumii. She lives up here.
      </p>

      <div
        className="relative z-[2]"
        style={{
          marginTop: "clamp(16px, 4vh, 56px)",
          transform: "translateY(calc(var(--p, 0) * 140px))",
          opacity: "calc(1 - var(--p, 0) * 1.5)",
        }}
      >
        <h1
          className="m-0 font-display font-extrabold text-forest [text-wrap:balance]"
          style={{ fontSize: "clamp(40px, min(7vw, 9.5vh), 100px)", lineHeight: 0.92, letterSpacing: "-0.04em" }}
        >
          Talk to your laptop.
          <br />
          <span className="text-leaf">Yumii talks back.</span>
        </h1>
        <p
          className="mx-auto max-w-[34em] text-soft [text-wrap:pretty]"
          style={{
            fontSize: "clamp(17px, 1.5vw, 20px)",
            lineHeight: 1.5,
            margin: "clamp(12px, 2.4vh, 22px) auto clamp(16px, 3vh, 28px)",
          }}
        >
          A voice companion that rests at the top of your screen and opens the moment you speak. She
          remembers your life, helps with everyday things, and asks before she acts.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#install"
            className="whitespace-nowrap rounded-full bg-forest px-[26px] py-4 text-[17px] font-semibold text-cream no-underline transition hover:-translate-y-0.5 hover:bg-forest-hover hover:text-cream hover:shadow-[0_12px_24px_-10px_rgba(19,74,51,.5)]"
          >
            Install for Windows
          </a>
          <a href="#how" className="whitespace-nowrap text-[17px] font-semibold text-forest no-underline">
            See how it works ↓
          </a>
        </div>
        <p className="mt-4 text-[13px] text-muted">
          {VERSION} · free and open source · built with NVIDIA Nemotron on Nebius Token Factory
        </p>
      </div>

      {/* the green hill rises as you scroll */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -z-[1] -translate-x-1/2 bg-mist"
        style={{
          width: "max(130vw, 1100px)",
          height: "calc(clamp(90px, 17vh, 200px) + var(--p, 0) * 70vh)",
          borderRadius:
            "50% 50% 0 0 / calc(100% - var(--p, 0) * 60%) calc(100% - var(--p, 0) * 60%) 0 0",
        }}
      />
      <div className="relative mt-auto flex w-[min(92vw,520px)] justify-center pt-2">
        <span
          aria-hidden="true"
          className="absolute left-[-14%] top-[30%] h-7 w-7 rounded-full bg-forest"
          style={{ transform: "translateY(calc(var(--p, 0) * -300px))" }}
        />
        <span
          aria-hidden="true"
          className="absolute right-[-8%] top-[12%] h-3.5 w-3.5 rounded-full bg-sage"
          style={{ transform: "translateY(calc(var(--p, 0) * -420px))" }}
        />
        <span
          aria-hidden="true"
          className="absolute right-[-20%] top-[55%] h-11 w-11 rounded-full bg-blush"
          style={{ transform: "translateY(calc(var(--p, 0) * -200px))" }}
        />
        <Image
          src="/yumii-mascot.png"
          alt="Yumii, a green-haired girl in a leaf hat"
          width={500}
          height={500}
          priority
          className="relative mb-[-2%] h-auto"
          style={{
            width: "clamp(150px, 34vh, 400px)",
            transform: "translateY(calc(var(--p, 0) * -40px)) scale(calc(1 - var(--p, 0) * .25))",
            opacity: "calc(1 - var(--p, 0) * 2)",
          }}
        />
      </div>
    </section>
  );
}
