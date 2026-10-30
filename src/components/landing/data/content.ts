// Every claim on the page lives here, so a release can be checked
// against the product in one place. Keep it true to the shipped app.

export const VERSION = "v0.15.0";
export const INSTALL_COMMAND = "iex (irm https://yumii.me/install.ps1)";

export const LINKS = {
  github: "https://github.com/CodeNeuron58/Yumii",
  changelog: "https://github.com/CodeNeuron58/Yumii/blob/master/CHANGELOG.md",
  docs: "/docs/introduction",
  install: "/docs/get-started/installation",
  nebiusKeys: "https://tokenfactory.nebius.com/project/api-keys",
};

/** The hero's island plays one short exchange on a loop. */
export const HERO_EXCHANGE = {
  question: "Remember, my sister Riya visits on Friday.",
  answer: "Got it. Riya, this Friday.",
};

export type Step = { title: string; body: string };

export const STEPS: Step[] = [
  {
    title: "Out of sight",
    body: "Yumii rests as a thin line at the top of your screen. No window to open, no wake word.",
  },
  {
    title: "Just speak",
    body: "Start talking and the island opens and listens. Talk over her any time and she stops.",
  },
  {
    title: "A moment to think",
    body: "Her mind is NVIDIA Nemotron on Nebius Token Factory, or any model you pick, local ones included.",
  },
  {
    title: "She answers out loud",
    body: "Her voice starts while she is still thinking, and the reply shows in the island as she speaks.",
  },
  {
    title: "Asks before she acts",
    body: "Searching the web or sending an email? A card asks first. Click Allow, or just say “yes”.",
  },
];

/** What the laptop's island shows for each step. */
export const STEP_DEMO = {
  question: "Remember, Riya visits on Friday.",
  answer: "Got it. Riya, this Friday.",
  approval: "Search: Tokyo weather?",
};

export const MEMORY_FACTS = [
  "Sister: Riya, visiting Friday",
  "Exam on Monday, a bit nervous",
  "Likes short answers",
];

export const MEMORY_POINTS = [
  {
    title: "Saves what matters",
    body: "She writes her own notes about your life, and corrects them when things change.",
  },
  {
    title: "Recalls every conversation",
    body: "Ask about something from weeks ago and she searches your past chats.",
  },
  {
    title: "Picks up where you left off",
    body: "Each session is summarised, so she knows what was going on last time.",
  },
];

export type Tool = {
  name: string;
  body: string;
  /** "ask" shows the approval pill; "result" shows what the island lists after you allow it */
  kind: "ask" | "result";
  card: string;
};

export const TOOLS: Tool[] = [
  {
    name: "Search the web",
    body: "Tavily-powered search with a short spoken answer, and DuckDuckGo when you have no key.",
    kind: "ask",
    card: "Search the web: Tokyo weather?",
  },
  {
    name: "Read your inbox",
    body: "Ask what is new. Once you allow it, the island lists sender and subject while she reads them out.",
    kind: "result",
    card: "Priya: Friday plans · GitHub: CI passed",
  },
  {
    name: "Send email",
    body: "Say what to write. The card shows who it goes to and what it says before anything sends.",
    kind: "ask",
    card: "Send email to Priya?",
  },
];

export const MIND_POINTS = [
  {
    title: "Nemotron 3 Super",
    body: "Every conversation turn and every tool call. About a second to her first word.",
  },
  {
    title: "Nemotron 3 Nano",
    body: "Her background thinking: reviewing what to remember and summarising chats, at a fraction of the cost.",
  },
  {
    title: "Tuned for voice",
    body: "Reasoning is switched off on the voice path (measured on Nano: first word in 0.8 s instead of 8.4 s), and a warm-up hides cold starts.",
  },
];

export const MIX = [
  { role: "Mind", options: "12 providers, including local models through Ollama" },
  { role: "Ears", options: "Local Whisper, Groq, Vosk, NVIDIA Nemotron Speech, Moonshine" },
  { role: "Voice", options: "Kokoro (local), ElevenLabs, CAMB.ai" },
];

export const STAYS_LOCAL = [
  "Her memories, your chat history and settings, in SQLite files you can browse and delete",
  "Your API keys, in an owner-only file",
  "Speech recognition, with local Whisper (the default)",
  "Her voice, with Kokoro (the default)",
];

export const LEAVES = [
  "The conversation text, to the model you choose (Nebius by default, nowhere with a local model)",
  "Web searches, to Tavily or DuckDuckGo",
  "Email actions, through Composio, only after you approve",
];

export const PERSONALITIES = [
  { name: "Caring", mood: "warm, nurturing" },
  { name: "Tsundere", mood: "sharp, secretly sweet" },
  { name: "Genki", mood: "loud, high-energy" },
  { name: "Kuudere", mood: "composed, cool" },
  { name: "Dandere", mood: "quiet, shy at first" },
  { name: "Yandere", mood: "intense, devoted" },
];

export const FAQ: { q: string; a: string }[] = [
  {
    q: "Where does Yumii live on my screen?",
    a: "In a thin island at the top. Hover it to peek at her controls, press Ctrl+Shift+Space to show or hide her, or just start talking and it opens.",
  },
  {
    q: "Is she always listening?",
    a: "While the app runs, yes, so you never need a wake word. Speech recognition runs on your computer by default. Mute her from the island and a “Muted” pill stays on screen until you unmute.",
  },
  {
    q: "Will she search the web or send email on her own?",
    a: "No. Anything that reaches outside your computer shows an approval card first. Click Allow, or say “yes”. You can make her stricter or looser in the dashboard.",
  },
  {
    q: "What do I need?",
    a: "Windows 10 or 11, a microphone, and one API key: Nebius Token Factory is the default. You can run fully local with Ollama instead. No GPU needed.",
  },
  {
    q: "Can I choose the models?",
    a: "Yes. The dashboard picks her mind, her ears and her voice, and switches them any time.",
  },
  {
    q: "Is it free?",
    a: "Yumii is free and open source under the MIT license. Cloud models bill you directly through your own key; local models cost nothing.",
  },
  {
    q: "What about macOS and Linux?",
    a: "Windows today. macOS and Linux shells are on the roadmap.",
  },
];
