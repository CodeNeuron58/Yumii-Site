type Tag = { label: string };

type Update = {
  date: string;
  title: string;
  body: string;
  tags: Tag[];
  variant: "latest" | "dev" | "feat";
  badgeLabel: string;
};

const updates: Update[] = [
  {
    date: "May 28, 2026",
    title: "Smarter, Faster, More Capable",
    body: "Improved voice accuracy, faster tool calling, and a brand new memory system.",
    tags: [{ label: "release" }, { label: "changelog" }],
    variant: "latest",
    badgeLabel: "LATEST",
  },
  {
    date: "May 15, 2026",
    title: "Introducing Skills SDK",
    body: "Build custom skills and extend with your own tools and logic.",
    tags: [{ label: "development" }],
    variant: "dev",
    badgeLabel: "DEV",
  },
  {
    date: "May 05, 2026",
    title: "Local Models Support",
    body: "Run Yumii with local LLMs for complete privacy and control.",
    tags: [{ label: "feature" }],
    variant: "feat",
    badgeLabel: "FEAT",
  },
];

const badgeClass: Record<Update["variant"], string> = {
  latest: "badge badge-latest",
  dev: "badge badge-dev",
  feat: "badge badge-feat",
};

export function Updates() {
  return (
    <section className="section" data-purpose="updates-section">
      <div className="section-header">
        <div className="section-title">
          <span className="emoji">🌿</span> Latest Updates
        </div>
        <a href="#" className="section-link">
          Read all →
        </a>
      </div>
      <div className="updates-grid">
        {updates.map((update) => (
          <div key={update.title} className="update-card">
            <div className="update-badge">
              <span className={badgeClass[update.variant]}>{update.badgeLabel}</span>
              <span className="update-date">{update.date}</span>
            </div>
            <div className="update-title">{update.title}</div>
            <div className="update-desc">{update.body}</div>
            <div className="update-tags">
              {update.tags.map((tag) => (
                <span key={tag.label} className="update-tag">
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
