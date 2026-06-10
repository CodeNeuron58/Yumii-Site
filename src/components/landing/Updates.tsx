import { releases } from "./data/releases";

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
        {releases.map((update) => (
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
