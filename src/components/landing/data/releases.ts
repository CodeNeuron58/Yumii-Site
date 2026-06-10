export type Release = {
  version: string;
  date: string;
  title: string;
  bullets: string[];
};

export const releases: Release[] = [
  {
    version: "v0.3.0",
    date: "June 2026",
    title: "Streaming engine + custom LangGraph loop",
    bullets: [
      "Heuristic emotion classifier",
      "HITL confirmation gate",
      "MCP loader",
      "DuckDuckGo search tool",
    ],
  },
  {
    version: "v0.2.0",
    date: "April 2026",
    title: "Memory & sessions",
    bullets: [
      "Persistent SQLite memory",
      "Per-session checkpoints",
      "Automatic fact extraction",
    ],
  },
  {
    version: "v0.1.0",
    date: "January 2026",
    title: "First public release",
    bullets: [
      "Real-time voice loop",
      "Live2D avatar",
      "Six personalities",
      "Three LLM providers",
    ],
  },
];
