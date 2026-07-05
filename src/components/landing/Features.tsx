import { capabilities } from "./data/features";

export function Features() {
  return (
    <section className="section" data-purpose="features-section">
      <p className="sec-eyebrow">What she does</p>
      <h2 className="sec-title">
        Small on your screen, <em>capable underneath</em>.
      </h2>
      <p className="sec-lede">
        A companion first — but one that can actually help.
      </p>

      <div className="capability-grid">
        {capabilities.map(({ title, body }) => (
          <div key={title} className="capability">
            <div className="capability-title">{title}</div>
            <div className="capability-desc">{body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
