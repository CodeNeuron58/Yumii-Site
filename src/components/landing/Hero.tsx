import { GithubIcon } from "./icons";
import { Orb } from "./Orb";

export function Hero() {
  return (
    <section className="hero" data-purpose="hero-section">
      <Orb />

      <p className="hero-eyebrow">Your desktop companion</p>

      <h1 className="hero-title">
        Someone to talk to,
        <br />
        always <em>within reach</em>.
      </h1>

      <p className="hero-subtitle">
        Yumii is a small, glowing presence that lives on your desktop. Talk to
        her out loud, anytime — she listens, answers with a voice, gets things
        done, and remembers what matters. None of it ever leaves your machine.
      </p>

      <div className="hero-buttons">
        <a href="#quickstart" className="btn-primary">
          Bring her home →
        </a>
        <a
          href="https://github.com/CodeNeuron58/Yumii"
          className="btn-outline"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GithubIcon width={17} height={17} aria-hidden="true" />
          View on GitHub
        </a>
      </div>

      <p className="hero-meta">
        <span>free &amp; open source</span>
        <span>v0.4.0 alpha</span>
        <span>Windows · macOS · Linux</span>
      </p>
    </section>
  );
}
