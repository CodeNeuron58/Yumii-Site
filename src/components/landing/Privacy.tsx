/**
 * The quiet centerpiece — privacy is Yumii's moat, so it gets a
 * statement, not a feature card.
 */

const guarantees = [
  {
    title: "Her memory is files on your disk",
    desc: "Everything she knows about you sits in plain local storage. Read it, edit it, delete it — it's yours.",
  },
  {
    title: "Keys in your system's own vault",
    desc: "Credentials live in your operating system's secure keychain, never in a text file, never on a server.",
  },
  {
    title: "No account. No cloud. No telemetry.",
    desc: "There is nothing to sign up for and nothing phoning home. Close the app and she's simply asleep on your disk.",
  },
];

export function Privacy() {
  return (
    <section className="section" data-purpose="privacy-section">
      <div className="privacy-wrap">
        <p className="sec-eyebrow">Private by design</p>
        <h2 className="privacy-title">
          Nothing leaves <em>your machine</em>.
        </h2>

        <div className="privacy-rows">
          {guarantees.map(({ title, desc }) => (
            <div key={title} className="privacy-item">
              <div className="privacy-item-title">{title}</div>
              <div className="privacy-item-desc">{desc}</div>
            </div>
          ))}
        </div>

        <p className="privacy-foot">
          Open source under MIT —{" "}
          <a
            href="https://github.com/CodeNeuron58/Yumii"
            target="_blank"
            rel="noreferrer noopener"
          >
            check for yourself
          </a>
          .
        </p>
      </div>
    </section>
  );
}
