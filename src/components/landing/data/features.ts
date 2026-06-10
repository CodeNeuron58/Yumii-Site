export type Feature = {
  title: string;
  body: string;
  icon: string;
};

export const features: Feature[] = [
  {
    title: "Voice Loop",
    body:
      "Real-time speech-to-text and text-to-speech. Silero VAD detects when you speak. Whisper transcribes. ElevenLabs or CAMB.ai speaks back. Barge-in supported.",
    icon: "🎙️",
  },
  {
    title: "Live2D Avatar",
    body:
      "Bring your own Cubism 4 model. Yumii drives expressions, lip sync, and body motions from a deterministic classifier — no extra LLM call.",
    icon: "🎭",
  },
  {
    title: "Persistent Memory",
    body:
      "Six personality modes. Yumii extracts facts about you from every turn and remembers them across sessions. Sessions themselves are saved and resume-able.",
    icon: "🧠",
  },
  {
    title: "Tool Calling",
    body:
      "Native tool calling via LangGraph. A time tool and a web search tool ship in the box. The registry is open — drop in your own tools.",
    icon: "🛠️",
  },
  {
    title: "Local & Private",
    body:
      "Runs on your machine, on CPU. No cloud dependency for the brain. API keys live in your OS keychain — Windows Credential Manager, macOS Keychain, or libsecret.",
    icon: "🛡️",
  },
  {
    title: "MCP-Ready",
    body:
      "Configure MCP servers in ~/.yumii/config.json. Their tools land in the same registry as native tools, with the same policies and confirmation gates.",
    icon: "🔌",
  },
];
