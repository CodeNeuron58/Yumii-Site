"use client";

import { useState } from "react";
import { ArrowLongRightIcon, ArrowRightIcon, CopyIcon } from "./icons";

const installers: Array<{ id: string; label: string; command: string; note: string }> = [
  {
    id: "one-liner",
    label: "One-liner",
    command: "curl -fsSL https://yumi.sh/install.sh | bash",
    note: "Works on macOS, Linux, and Windows. Requires Node.js 18+.",
  },
  {
    id: "npm",
    label: "npm",
    command: "npm install -g @yumi/cli",
    note: "Requires Node.js 18+. Ships with the yumi launcher script.",
  },
  {
    id: "homebrew",
    label: "Homebrew",
    command: "brew install yumi-ai/tap/yumi",
    note: "macOS or Linuxbrew. Adds yumi to your PATH automatically.",
  },
  {
    id: "macos",
    label: "macOS",
    command: "curl -fsSL https://yumi.sh/install.sh | bash",
    note: "Apple silicon and Intel builds. Signed and notarized.",
  },
  {
    id: "linux",
    label: "Linux",
    command: "curl -fsSL https://yumi.sh/install.sh | bash",
    note: "Tested on Ubuntu 22.04+, Fedora 39+, and Arch.",
  },
  {
    id: "windows",
    label: "Windows",
    command: "irm https://yumi.sh/install.ps1 | iex",
    note: "Windows 10+ with PowerShell 7. WSL2 recommended.",
  },
];

export function QuickStart() {
  const [activeId, setActiveId] = useState(installers[0].id);
  const [copied, setCopied] = useState(false);
  const active = installers.find((item) => item.id === activeId) ?? installers[0];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(active.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="quickstart-section w-full" data-purpose="quick-start-section">
      <div className="quickstart-header flex items-center justify-between mb-6">
        <h2 className="quickstart-title text-xl md:text-2xl font-bold flex items-center gap-2 font-display">
          <ArrowRightIcon className="w-5 h-5 text-primary" />
          Quick Start
        </h2>
        <a
          href="#"
          className="quickstart-link text-sm text-primary hover:underline flex items-center gap-1 font-medium"
        >
          All Installation Options
          <ArrowLongRightIcon className="w-4 h-4" />
        </a>
      </div>

      <div className="terminal-window bg-surface-container rounded-xl border border-outline-variant overflow-hidden shadow-xl shadow-black/20">
        <div className="terminal-header flex items-center justify-between px-4 py-3 bg-surface-container-low border-b border-outline-variant overflow-x-auto terminal-scroll">
          <div className="terminal-controls flex items-center gap-2 mr-6 shrink-0">
            <span className="control-btn control-btn-red w-3 h-3 rounded-full bg-error" />
            <span className="control-btn control-btn-yellow w-3 h-3 rounded-full bg-yellow-500" />
            <span className="control-btn control-btn-green w-3 h-3 rounded-full bg-primary" />
          </div>
          <div className="terminal-tabs flex gap-1 sm:gap-2 shrink-0">
            {installers.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={
                    isActive
                      ? "terminal-tab-active px-3 py-1.5 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                      : "terminal-tab px-3 py-1.5 text-xs font-medium rounded-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
                  }
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="terminal-badge ml-auto pl-6 shrink-0 hidden sm:block">
            <span className="beta-badge text-[10px] uppercase tracking-wider text-on-surface-variant bg-surface-container-highest px-2 py-1 rounded font-mono">
              BETA
            </span>
          </div>
        </div>

        <div className="terminal-content p-6 font-mono text-sm sm:text-base relative group">
          <p className="terminal-comment text-on-surface-variant/70 mb-2 italic text-xs sm:text-sm">
            # Get Yumi up and running in seconds
          </p>
          <div className="terminal-command flex items-start sm:items-center justify-between gap-4">
            <div className="command-input flex items-center gap-3 overflow-x-auto terminal-scroll pb-2 sm:pb-0">
              <span className="command-prompt text-primary shrink-0">$</span>
              <code className="command-text text-on-surface whitespace-nowrap">{active.command}</code>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy to clipboard"
              className="copy-btn p-2 text-on-surface-variant hover:text-on-surface rounded-md hover:bg-surface-container-high transition-colors shrink-0 border border-transparent group-hover:border-outline-variant"
            >
              <CopyIcon className="w-5 h-5" />
            </button>
          </div>
          {copied ? (
            <span className="copied-feedback absolute right-12 -top-2 text-[10px] font-mono uppercase tracking-wider text-primary bg-surface-container-high px-2 py-0.5 rounded">
              Copied
            </span>
          ) : null}
        </div>
      </div>

      <p className="quickstart-note mt-3 text-xs text-on-surface-variant">{active.note}</p>
    </section>
  );
}
