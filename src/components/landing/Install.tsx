"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckIcon, CopySimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { INSTALL_COMMAND, LINKS, VERSION } from "./data/content";

export function Install() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_COMMAND);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="install" className="px-3 pb-10 sm:px-[clamp(12px,3vw,40px)]">
      <div
        data-scene="reveal"
        className="mx-auto flex max-w-[1280px] flex-col items-center gap-[22px] overflow-hidden rounded-[36px] bg-forest px-6 py-[clamp(48px,8vw,110px)] text-center text-cream sm:px-[clamp(24px,6vw,80px)]"
        style={{ transform: "scale(calc(.92 + var(--p, 1) * .08))" }}
      >
        <Image
          src="/yumii-icon.png"
          alt=""
          width={120}
          height={120}
          className="rounded-[28px]"
          style={{
            transform: "rotate(calc((1 - var(--p, 1)) * -20deg)) translateY(calc((1 - var(--p, 1)) * 40px))",
          }}
        />
        <h2
          className="m-0 max-w-[12em] font-display font-extrabold [text-wrap:balance]"
          style={{ fontSize: "clamp(38px, 5.5vw, 76px)", lineHeight: 0.98, letterSpacing: "-0.035em" }}
        >
          Yumii is waiting quietly.
        </h2>
        <p className="m-0 max-w-[28em] text-[19px] leading-normal text-panel-ink">
          Paste one line into PowerShell, then say hello.
        </p>

        <div className="relative flex w-full max-w-[560px] items-center rounded-2xl bg-[#0f3a28] py-4 pl-5 pr-14 text-left">
          <code className="overflow-x-auto whitespace-normal font-mono text-[14px] leading-relaxed text-cream sm:whitespace-nowrap sm:text-[15.5px]">
            <span className="select-none text-mint">PS&gt; </span>
            {INSTALL_COMMAND}
          </code>
          <button
            type="button"
            onClick={copy}
            aria-label={copied ? "Copied" : "Copy the install command"}
            className="absolute right-3 grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-white/20 bg-transparent text-cream transition-colors hover:border-mint hover:text-mint"
          >
            {copied ? <CheckIcon size={16} aria-hidden="true" /> : <CopySimpleIcon size={16} aria-hidden="true" />}
          </button>
        </div>
        <p className="m-0 max-w-[36em] text-[15px] leading-normal text-panel-ink">
          It installs Yumii to your Start Menu and asks you to pick her mind, ears and voice. The
          default mind needs a{" "}
          <a href={LINKS.nebiusKeys} target="_blank" rel="noreferrer" className="text-cream underline underline-offset-4 hover:text-mint">
            Nebius Token Factory key
          </a>
          ; new accounts start with trial credit. Run the line again any time to update.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={LINKS.install}
            className="rounded-full bg-cream px-6 py-3.5 font-bold text-forest no-underline transition hover:-translate-y-0.5 hover:text-forest"
          >
            Install guide
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/30 px-6 py-3.5 font-semibold text-cream no-underline transition hover:border-mint hover:text-mint"
          >
            View on GitHub
          </a>
        </div>
        <p className="m-0 text-[13px] text-panel-ink/80">
          {VERSION} · Windows 10 and 11 · free and open source (MIT)
        </p>
      </div>
    </section>
  );
}
