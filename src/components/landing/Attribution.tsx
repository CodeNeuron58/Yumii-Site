import { StarIcon } from "./icons";

export function Attribution() {
  return (
    <section className="section" data-purpose="attribution-section">
      <p className="attribution-body">
        Yumii is an open-source experiment in digital companionship. Every line
        of the brain is editable. Star the project, open an issue, send a PR —
        the next feature might be yours.
      </p>
      <a
        href="https://github.com/CodeNeuron58/Yumii"
        className="btn-outline attribution-cta"
        target="_blank"
        rel="noreferrer noopener"
      >
        <StarIcon width={18} height={18} aria-hidden="true" />
        Star on GitHub
      </a>
    </section>
  );
}
