type Chip = { label: string; icon: string };

// Two rows of 8. Grouped by role so the grid reads as a real stack
// rather than a feature-shopping list.
const rowOne: Chip[] = [
  // LLM providers
  { label: "Groq", icon: "⚡" },
  { label: "OpenAI", icon: "🟢" },
  { label: "Anthropic", icon: "🧠" },
  // STT
  { label: "Local Whisper", icon: "🎧" },
  { label: "Groq Whisper", icon: "🟢" },
  // TTS
  { label: "ElevenLabs", icon: "🔊" },
  { label: "CAMB.ai", icon: "🌐" },
  // Avatar runtime
  { label: "Live2D", icon: "🎭" },
];

const rowTwo: Chip[] = [
  // Extensibility
  { label: "LangChain tools", icon: "🧰" },
  { label: "MCP servers", icon: "🔌" },
  // Plumbing
  { label: "OS Keychain", icon: "🔐" },
  { label: "SQLite", icon: "🗄️" },
  { label: "FastAPI + WebSocket", icon: "🚀" },
  { label: "LangGraph", icon: "🔁" },
  { label: "DuckDuckGo", icon: "🦆" },
  { label: "+ more", icon: "✨" },
];

export function Integrations() {
  return (
    <section
      className="section"
      style={{ paddingBottom: 80 }}
      data-purpose="integrations-section"
    >
      <div className="section-header">
        <div className="section-title">
          <span className="emoji">🌿</span> Works With Everything
        </div>
      </div>

      <div className="integrations-grid">
        {rowOne.map((chip) => (
          <div key={chip.label} className="integration-item">
            <span className="integration-icon" aria-hidden="true">
              {chip.icon}
            </span>
            {chip.label}
          </div>
        ))}
      </div>

      <div className="integrations-grid">
        {rowTwo.map((chip) => (
          <div key={chip.label} className="integration-item">
            <span className="integration-icon" aria-hidden="true">
              {chip.icon}
            </span>
            {chip.label}
          </div>
        ))}
      </div>
    </section>
  );
}
