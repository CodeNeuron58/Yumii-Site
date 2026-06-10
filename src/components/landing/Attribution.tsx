export function Attribution() {
  return (
    <section
      className="section attribution-section"
      data-purpose="attribution-section"
    >
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
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 .587l3.668 7.568L24 9.75l-6 5.847 1.417 8.265L12 19.771l-7.417 4.091L6 15.597 0 9.75l8.332-1.595z" />
        </svg>
        Star on GitHub
      </a>
    </section>
  );
}
