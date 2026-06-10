"use client";

import { useState } from "react";
import {
  QUICKSTART_COMMENT,
  installers,
  type Installer,
} from "./data/installers";

export function QuickStart() {
  const [activeId, setActiveId] = useState<Installer["id"]>(installers[0].id);
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
          <div className="code-comment">{QUICKSTART_COMMENT}</div>
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
