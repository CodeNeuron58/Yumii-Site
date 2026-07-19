"use client";

import { useState } from "react";
import { CheckIcon, CopySimpleIcon } from "@phosphor-icons/react/dist/ssr";
import {
  QUICKSTART_COMMENT,
  installers,
  type Installer,
} from "./data/installers";
import { Reveal } from "./Reveal";

export function QuickStart() {
  const [activeId, setActiveId] = useState<Installer["id"]>(installers[0].id);
  const [copied, setCopied] = useState(false);
  const active =
    installers.find((item) => item.id === activeId) ?? installers[0];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(active.commandLines.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="quickstart"
      className="relative z-10 mx-auto grid max-w-6xl items-start gap-12 px-5 py-20 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-28"
    >
      <Reveal>
        <p className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-mint">
          Bring her home
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Two minutes, <em className="italic text-mint">and she&apos;s yours</em>.
        </h2>
        <p className="mt-4 max-w-[40ch] text-ink-soft">
          Windows today; macOS and Linux coming soon. An everyday laptop is
          plenty — no GPU needed.
        </p>
        <a
          href="/docs/install"
          className="mt-5 inline-block font-mono text-sm text-mint underline-offset-4 hover:underline"
        >
          all install options →
        </a>
      </Reveal>

      <Reveal delay={0.1} className="min-w-0">
        <div className="overflow-hidden rounded-2xl border border-line bg-pool">
          <div className="flex flex-wrap gap-1.5 border-b border-line-soft px-4 py-3">
            {installers.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`rounded-full px-4 py-1.5 font-mono text-[13px] transition-colors ${
                  item.id === activeId
                    ? "bg-night text-mint"
                    : "text-ink-dim hover:text-ink-soft"
                }`}
                onClick={() => setActiveId(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="relative bg-night px-6 py-6">
            {active.comingSoon ? (
              <p className="grid min-h-16 place-items-center font-mono text-[13.5px] text-ink-dim">
                coming soon
              </p>
            ) : (
              <>
                <pre className="overflow-x-auto pr-12 font-mono text-[13.5px] leading-7">
                  <code>
                    <span className="text-ink-dim">{QUICKSTART_COMMENT}</span>
                    {"\n"}
                    {active.commandLines.map((line, idx) => (
                      <span key={idx}>
                        {idx === 0 ? (
                          <>
                            <span className="text-mint">$ </span>
                            <span className="text-ink">{line}</span>
                          </>
                        ) : (
                          <span className="text-ink">{"  " + line}</span>
                        )}
                        {"\n"}
                      </span>
                    ))}
                  </code>
                </pre>
                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label="Copy command to clipboard"
                  className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-mint/50 hover:text-mint"
                >
                  {copied ? (
                    <CheckIcon size={16} aria-hidden="true" />
                  ) : (
                    <CopySimpleIcon size={16} aria-hidden="true" />
                  )}
                </button>
              </>
            )}
          </div>

          <p className="border-t border-line-soft px-6 py-4 text-[13px] text-ink-dim">
            {active.note}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
