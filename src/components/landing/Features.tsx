import {
  ArrowRightIcon,
  BrainIcon,
  BoltIcon,
  DesktopIcon,
  MicrophoneIcon,
  PuzzlesIcon,
  TerminalIcon,
} from "./icons";

const features = [
  {
    title: "Terminal Native",
    body: "Lives in your terminal. Run commands, scripts, and workflows naturally.",
    Icon: TerminalIcon,
  },
  {
    title: "Voice First",
    body: "Talk in real time. Voice input, voice output, zero friction.",
    Icon: MicrophoneIcon,
  },
  {
    title: "Persistent Memory",
    body: "Remembers context, preferences, and past conversations.",
    Icon: DesktopIcon,
  },
  {
    title: "Tool Calling",
    body: "Search the web, read files, execute commands, and more.",
    Icon: BrainIcon,
  },
  {
    title: "Automation",
    body: "Automate repetitive tasks and build powerful terminal workflows.",
    Icon: BoltIcon,
  },
  {
    title: "Extensible",
    body: "Add custom skills, plugins, and integrations with ease.",
    Icon: PuzzlesIcon,
  },
];

export function Features() {
  return (
    <section className="features-section w-full" data-purpose="features-section">
      <h2 className="features-title text-xl md:text-2xl font-bold mb-6 flex items-center gap-2 font-display">
        <ArrowRightIcon className="w-5 h-5 text-primary" />
        What It Can Do
      </h2>
      <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map(({ title, body, Icon }) => (
          <div
            key={title}
            className="feature-card bg-surface-container/50 border border-outline-variant rounded-xl p-6 hover:bg-surface-container transition-colors"
          >
            <div className="feature-icon-wrapper w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center mb-4 text-primary">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="feature-title font-bold text-lg mb-2">{title}</h3>
            <p className="feature-description text-on-surface-variant text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
