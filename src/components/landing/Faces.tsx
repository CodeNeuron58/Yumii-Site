/**
 * Two doors to the same companion — the desktop app for everyone,
 * the terminal for developers. Same brain, same memory.
 */

const appPoints = [
  "A small floating orb that sits quietly on top of your screen",
  "Summon her from anywhere with a hotkey — talk, then get back to it",
  "One-click installer on the way",
];

const terminalPoints = [
  "The full companion, living in your shell — nothing cut down",
  "Sessions, memory and moods managed with quick slash-commands",
  "Same brain, same memory as the app",
];

export function Faces() {
  return (
    <section className="section" data-purpose="faces-section">
      <hr className="sec-rule" />
      <p className="sec-eyebrow">Two doors</p>
      <h2 className="sec-title">
        Meet her <em>where you live</em>.
      </h2>
      <p className="sec-lede">
        One companion, one memory — reachable from the desktop or the
        terminal. Whichever you open, she knows you.
      </p>

      <div className="faces-grid">
        {/* ── The desktop app ─────────────────────────────────────── */}
        <div className="face-card">
          <div className="face-visual face-visual-app" aria-hidden="true">
            <div className="mini-window">
              <div className="mini-orb" />
              <div className="mini-hint">tap to talk</div>
            </div>
          </div>
          <div className="face-head">
            <span className="face-title">The Desktop App</span>
            <span className="face-for">for everyone</span>
          </div>
          <ul className="face-points">
            {appPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        {/* ── The terminal ────────────────────────────────────────── */}
        <div className="face-card">
          <div className="face-visual face-visual-term" aria-hidden="true">
            <div className="term-chrome">
              <span />
              <span />
              <span />
            </div>
            <div className="term-body">
              <div className="term-line">
                <span className="term-prompt">❯</span> yumii
              </div>
              <div className="term-line term-banner">
                YUMII&nbsp;&nbsp;·&nbsp;&nbsp;your companion, in the shell
              </div>
              <div className="term-line term-dim">
                /memory&nbsp;&nbsp;— everything she remembers
              </div>
              <div className="term-line term-dim">
                /personality&nbsp;&nbsp;— switch her mood
              </div>
            </div>
          </div>
          <div className="face-head">
            <span className="face-title">The Terminal</span>
            <span className="face-for">for developers</span>
          </div>
          <ul className="face-points">
            {terminalPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
