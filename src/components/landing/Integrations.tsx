type Chip = { label: string; icon: string };

// Two rows of 8, matching the reference layout
const rowOne: Chip[] = [
  { label: "WhatsApp", icon: "💬" },
  { label: "Telegram", icon: "✈️" },
  { label: "Discord", icon: "💜" },
  { label: "Slack", icon: "💼" },
  { label: "GitHub", icon: "🐙" },
  { label: "VS Code", icon: "🔵" },
  { label: "iMessage", icon: "💬" },
  { label: "Email", icon: "✉️" },
];

const rowTwo: Chip[] = [
  { label: "Google", icon: "🔍" },
  { label: "Notion", icon: "📝" },
  { label: "Obsidian", icon: "🔮" },
  { label: "Spotify", icon: "🎵" },
  { label: "Figma", icon: "🎨" },
  { label: "Browser", icon: "🌐" },
  { label: "ChatGPT", icon: "🤖" },
  { label: "and more", icon: "⋯" },
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
