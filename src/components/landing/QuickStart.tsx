"use client";

import { useState } from "react";

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
    <section className="section" data-purpose="quick-start-section">
      <div className="section-header">
        <div className="section-title">
          <span className="emoji">🌿</span> Quick Start
        </div>
        <a href="#" className="section-link">
          All Installation Options →
        </a>
      </div>

      <div className="code-card">
        <div className="code-tabs">
          {installers.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`code-tab ${item.id === activeId ? "active" : ""}`}
              onClick={() => setActiveId(item.id)}
            >
              {item.label}
            </button>
          ))}
          <span className="badge-beta">BETA</span>
        </div>

        <div className="code-body">
          <div className="code-comment"># Get Yumii up and running in seconds</div>
          <div className="code-line">
            <span className="code-prompt">$</span>
            <span>{active.command}</span>
          </div>
          <button
            type="button"
            className="copy-btn"
            onClick={handleCopy}
            aria-label="Copy to clipboard"
          >
            {copied ? "✓" : "⎘"}
          </button>
        </div>

        <div className="code-footer">{active.note}</div>
      </div>
    </section>
  );
}
