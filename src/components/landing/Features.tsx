import { features } from "./data/features";

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
