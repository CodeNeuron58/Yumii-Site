import { integrationRowOne, integrationRowTwo } from "./data/integrations";

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
        {integrationRowOne.map((chip) => (
          <div key={chip.label} className="integration-item">
            <span className="integration-icon" aria-hidden="true">
              {chip.icon}
            </span>
            {chip.label}
          </div>
        ))}
      </div>

      <div className="integrations-grid">
        {integrationRowTwo.map((chip) => (
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
