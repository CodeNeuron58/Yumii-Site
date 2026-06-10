type Update = {
  version: string;
  date: string;
  title: string;
  bullets: string[];
};

const updates: Update[] = [
  {
    version: "v0.3.0",
    date: "June 2026",
    title: "Streaming engine + custom LangGraph loop",
    bullets: [
      "Heuristic emotion classifier",
      "HITL confirmation gate",
      "MCP loader",
      "DuckDuckGo search tool",
    ],
  },
  {
    version: "v0.2.0",
    date: "April 2026",
    title: "Memory & sessions",
    bullets: [
      "Persistent SQLite memory",
      "Per-session checkpoints",
      "Automatic fact extraction",
    ],
  },
  {
    version: "v0.1.0",
    date: "January 2026",
    title: "First public release",
    bullets: [
      "Real-time voice loop",
      "Live2D avatar",
      "Six personalities",
      "Three LLM providers",
    ],
  },
];

export function Updates() {
  return (
    <section className="section" data-purpose="updates-section">
      <div className="section-header">
        <div className="section-title">
          <span className="emoji">🌿</span> Latest Updates
        </div>
        <a
          href="https://github.com/CodeNeuron58/Yumii/blob/master/CHANGELOG.md"
          className="section-link"
          target="_blank"
          rel="noreferrer noopener"
        >
          Read full changelog →
        </a>
      </div>
      <div className="updates-grid">
        {updates.map((update) => (
          <div key={update.version} className="update-card">
            <div className="update-meta">
              <span className="update-version">{update.version}</span>
              <span className="update-date">{update.date}</span>
            </div>
            <div className="update-title">{update.title}</div>
            <ul className="update-bullets">
              {update.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
