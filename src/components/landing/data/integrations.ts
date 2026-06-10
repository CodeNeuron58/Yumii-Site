export type Chip = { label: string; icon: string };

// Two rows of 8. Grouped by role so the grid reads as a real stack
// rather than a feature-shopping list.
export const integrationRowOne: Chip[] = [
  // LLM providers
  { label: "Groq", icon: "⚡" },
  { label: "OpenAI", icon: "🟢" },
  { label: "Anthropic", icon: "🧠" },
  // STT
  { label: "Local Whisper", icon: "🎧" },
  { label: "Groq Whisper", icon: "🟢" },
  // TTS
  { label: "ElevenLabs", icon: "🔊" },
  { label: "CAMB.ai", icon: "🌐" },
  // Avatar runtime
  { label: "Live2D", icon: "🎭" },
];

export const integrationRowTwo: Chip[] = [
  // Extensibility
  { label: "LangChain tools", icon: "🧰" },
  { label: "MCP servers", icon: "🔌" },
  // Plumbing
  { label: "OS Keychain", icon: "🔐" },
  { label: "SQLite", icon: "🗄️" },
  { label: "FastAPI + WebSocket", icon: "🚀" },
  { label: "LangGraph", icon: "🔁" },
  { label: "DuckDuckGo", icon: "🦆" },
  { label: "+ more", icon: "✨" },
];
