import { personalities } from "./data/personalities";

export function Personality() {
  return (
    <section className="section" data-purpose="personality-section">
      <div className="section-header">
        <div className="section-title">
          <span className="emoji">🌿</span> Six Personalities
        </div>
        <span className="section-meta">Pick a mood. Switch any time.</span>
      </div>
      <div className="personality-grid">
        {personalities.map(({ name, mood, icon }) => (
          <div key={name} className="personality-card">
            <div className="personality-icon-box" aria-hidden="true">
              {icon}
            </div>
            <div className="personality-name">{name}</div>
            <div className="personality-mood">{mood}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
