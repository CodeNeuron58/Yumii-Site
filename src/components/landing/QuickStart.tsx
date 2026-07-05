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
    <section
      className="section"
      id="quickstart"
      data-purpose="quick-start-section"
    >
      <hr className="sec-rule" />
      <p className="sec-eyebrow">Bring her home</p>
      <div className="sec-head-row">
        <h2 className="sec-title">
          Two minutes, <em>and she&apos;s yours</em>.
        </h2>
        <a href="/docs/install" className="sec-link">
          all install options →
        </a>
      </div>
      <p className="sec-lede">
        Runs on Windows, macOS and Linux — an everyday laptop is plenty.
      </p>

      <div className="code-card">
        <span className="badge-beta">ALPHA</span>

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
