import { GithubIcon, StarIcon } from "./icons";

/**
 * The closing invitation: what's next (her face), and the open-source
 * welcome.
 */
export function Attribution() {
  return (
    <section className="section closing" data-purpose="closing-section">
      <hr className="sec-rule" />
      <p className="sec-eyebrow">What&apos;s next</p>
      <h2 className="closing-title">
        The orb is her <em>first form</em>.
      </h2>
      <p className="closing-body">
        An animated companion — one who blinks, emotes, and lip-syncs as she
        speaks — is on the way. Yumii is open source and shaped in the open;
        the next feature might be yours.
      </p>
      <div className="closing-actions">
        <a
          href="https://github.com/CodeNeuron58/Yumii"
          className="btn-primary"
          target="_blank"
          rel="noreferrer noopener"
        >
          <StarIcon width={17} height={17} aria-hidden="true" />
          Star on GitHub
        </a>
        <a
          href="https://github.com/CodeNeuron58/Yumii/blob/master/ROADMAP.md"
          className="btn-outline"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GithubIcon width={17} height={17} aria-hidden="true" />
          Read the roadmap
        </a>
      </div>
    </section>
  );
}
