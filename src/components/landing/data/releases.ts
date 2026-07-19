export type Release = {
  version: string;
  date: string;
  title: string;
  summary: string;
};

export const releases: Release[] = [
  {
    version: "v0.13.0",
    date: "July 2026",
    title: "The polish release",
    summary:
      "Sharper web search that can never hang a turn, a smaller and tidier orb you move by grabbing it, and an installer that survives locked-down laptops.",
  },
  {
    version: "v0.12.0",
    date: "July 2026",
    title: "The first-run release",
    summary:
      "A fresh install now guides you: her voice and ears download behind a progress bar, one key wakes her up, and nothing ever freezes silently.",
  },
  {
    version: "v0.11.0",
    date: "July 2026",
    title: "One command, deeper memory",
    summary:
      "The single-command install arrives — and she starts searching every past conversation, writing her own facts, and knowing when things happened.",
  },
];
