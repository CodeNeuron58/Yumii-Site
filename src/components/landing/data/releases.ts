export type Release = {
  version: string;
  date: string;
  title: string;
  summary: string;
};

export const releases: Release[] = [
  {
    version: "v0.4.0",
    date: "July 2026",
    title: "Yumii moves to the desktop",
    summary:
      "A floating orb that's always within reach. Sharper hearing that ignores humming and background noise, plus an offline word-by-word listening option.",
  },
  {
    version: "v0.3.0",
    date: "June 2026",
    title: "She can do things now",
    summary:
      "Real task-doing, gated by your approval. Web search built in, and faster streaming replies.",
  },
  {
    version: "v0.2.0",
    date: "June 2026",
    title: "She remembers you",
    summary:
      "Long-term memory stored on your disk, conversations that resume where you left off, and facts she learns about you automatically.",
  },
];
