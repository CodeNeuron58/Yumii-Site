import { releases } from "./data/releases";

export function Updates() {
  return (
    <section className="section" data-purpose="updates-section">
      <hr className="sec-rule" />
      <p className="sec-eyebrow">Growing</p>
      <div className="sec-head-row">
        <h2 className="sec-title">
          She&apos;s <em>learning fast</em>.
        </h2>
        <a
          href="https://github.com/CodeNeuron58/Yumii/blob/master/CHANGELOG.md"
          className="sec-link"
          target="_blank"
          rel="noreferrer noopener"
        >
          full changelog →
        </a>
      </div>
      <p className="sec-lede">Three releases in two months — and counting.</p>

      <div className="timeline">
        {releases.map((release) => (
          <div key={release.version} className="timeline-item">
            <div className="timeline-meta">
              <span className="timeline-version">{release.version}</span>
              <span className="timeline-date">{release.date}</span>
            </div>
            <div>
              <div className="timeline-title">{release.title}</div>
              <div className="timeline-summary">{release.summary}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
