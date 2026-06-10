const features = [
  {
    title: "Terminal Native",
    body: "Lives in your terminal. Run commands, scripts, and workflows naturally.",
    icon: "⌨️",
  },
  {
    title: "Voice First",
    body: "Talk in real time. Voice input, voice output, zero friction.",
    icon: "🎙️",
  },
  {
    title: "Persistent Memory",
    body: "Remembers context, preferences, and past conversations.",
    icon: "🧠",
  },
  {
    title: "Tool Calling",
    body: "Search the web, read files, execute commands, and more.",
    icon: "🔧",
  },
  {
    title: "Automation",
    body: "Automate repetitive tasks and build powerful terminal workflows.",
    icon: "⚡",
  },
  {
    title: "Extensible",
    body: "Add custom skills, plugins, and integrations with ease.",
    icon: "🧩",
  },
];

export function Features() {
  return (
    <section className="section" data-purpose="features-section">
      <div className="section-header">
        <div className="section-title">
          <span className="emoji">🌿</span> What It Can Do
        </div>
      </div>
      <div className="features-grid">
        {features.map(({ title, body, icon }) => (
          <div key={title} className="feature-card">
            <div className="feature-icon" aria-hidden="true">
              {icon}
            </div>
            <div className="feature-title">{title}</div>
            <div className="feature-desc">{body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
