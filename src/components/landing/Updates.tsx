import { ArrowLongRightIcon, ArrowRightIcon } from "./icons";

type Tag = { label: string };

type Update = {
  date: string;
  title: string;
  body: string;
  tags: Tag[];
  badge?: string;
};

const updates: Update[] = [
  {
    date: "May 28, 2026",
    title: "Smarter, Faster, More Capable",
    body: "Improved voice accuracy, faster tool calling, and a brand new memory system.",
    tags: [{ label: "release" }, { label: "changelog" }],
    badge: "LATEST",
  },
  {
    date: "May 15, 2026",
    title: "Introducing Skills SDK",
    body: "Build custom skills and extend with your own tools and logic.",
    tags: [{ label: "development" }],
  },
  {
    date: "May 05, 2026",
    title: "Local Models Support",
    body: "Run Yumi with local LLMs for complete privacy and control.",
    tags: [{ label: "feature" }],
  },
];

export function Updates() {
  return (
    <section className="updates-section w-full" data-purpose="updates-section">
      <div className="updates-header flex items-center justify-between mb-6">
        <h2 className="updates-title text-xl md:text-2xl font-bold flex items-center gap-2 font-display">
          <ArrowRightIcon className="w-5 h-5 text-primary" />
          Latest Updates
        </h2>
        <a
          href="#"
          className="updates-link text-sm text-primary hover:underline flex items-center gap-1 font-medium"
        >
          Read all
          <ArrowLongRightIcon className="w-4 h-4" />
        </a>
      </div>
      <div className="updates-grid grid grid-cols-1 md:grid-cols-3 gap-4">
        {updates.map((update) => (
          <div
            key={update.title}
            className="update-card bg-surface-container/50 border border-outline-variant rounded-xl p-6 flex flex-col h-full hover:bg-surface-container transition-colors"
          >
            <div className="update-header flex items-center gap-3 mb-3">
              {update.badge ? (
                <span className="update-badge bg-primary text-on-primary text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                  {update.badge}
                </span>
              ) : null}
              <span className="update-date text-on-surface-variant text-sm">{update.date}</span>
            </div>
            <h3
              className="update-title font-bold text-lg mb-2 text-on-surface"
              dangerouslySetInnerHTML={{ __html: update.title.replace(/(.{1,18})\/(.{1,18})/, "$1<br/>$2") }}
            />
            <p className="update-description text-on-surface-variant text-sm mb-6 flex-grow">{update.body}</p>
            <div className="update-tags flex gap-2 mt-auto">
              {update.tags.map((tag) => (
                <span
                  key={tag.label}
                  className="tag text-xs text-primary border border-primary/30 bg-primary/10 px-2 py-1 rounded"
                >
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
