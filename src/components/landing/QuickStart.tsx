"use client";

import { useState } from "react";

type Installer = {
  id: string;
  label: string;
  commandLines: string[];
  note: string;
};

const installers: Installer[] = [
  {
    id: "windows",
    label: "Windows",
    commandLines: [
      "irm https://raw.githubusercontent.com/CodeNeuron58/Yumii/master/install.ps1 | iex",
    ],
    note:
      "Works on macOS, Linux, and Windows. Requires Python 3.12+ and uv. Optional: a Cubism 4 Live2D model for the avatar.",
  },
  {
    id: "unix",
    label: "macOS / Linux",
    commandLines: [
      "curl -LsSf https://raw.githubusercontent.com/CodeNeuron58/Yumii/master/install.sh | sh",
    ],
    note:
      "Works on macOS, Linux, and Windows. Requires Python 3.12+ and uv. Optional: a Cubism 4 Live2D model for the avatar.",
  },
  {
    id: "source",
    label: "From source",
    commandLines: [
      "git clone https://github.com/CodeNeuron58/Yumii.git",
      "cd Yumii",
      "uv sync",
      "yumii wake-up",
    ],
    note:
      "Works on macOS, Linux, and Windows. Requires Python 3.12+ and uv. Optional: a Cubism 4 Live2D model for the avatar.",
  },
];

const COMMENT = "# Get Yumii up and running in seconds";

export function QuickStart() {
  const [activeId, setActiveId] = useState(installers[0].id);
  const [copied, setCopied] = useState(false);
  const active = installers.find((item) => item.id === activeId) ?? installers[0];

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
    <section className="section" data-purpose="quick-start-section">
      <div className="section-header">
        <div className="section-title">
          <span className="emoji">🌿</span> Quick Start
        </div>
        <a href="/docs/install" className="section-link">
          All Installation Options →
        </a>
      </div>

      <div className="code-card">
        <span className="badge-beta">BETA</span>

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
        </div>

        <div className="code-body">
          <div className="code-comment">{COMMENT}</div>
          {active.commandLines.map((line, idx) =>
            idx === 0 ? (
              <div className="code-line" key={idx}>
                <span className="code-prompt">$</span>
                <span>{line}</span>
              </div>
            ) : (
              <div className="code-line code-line-continuation" key={idx}>
                <span>{line}</span>
              </div>
            )
          )}
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
