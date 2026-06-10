import { ArrowRightIcon } from "./icons";

type Chip = {
  label: string;
  color: string;
  letter?: string;
  shape?: "circle" | "square";
  fontClass?: string;
};

const chips: Chip[] = [
  { label: "WhatsApp", color: "#25D366" },
  { label: "Telegram", color: "#0088cc" },
  { label: "Discord", color: "#5865F2" },
  { label: "Slack", color: "#E01E5A" },
  { label: "GitHub", color: "#ffffff" },
  { label: "VS Code", color: "#007ACC" },
  { label: "iMessage", color: "#34C759" },
  { label: "Email", color: "#EA4335" },
  { label: "Google", color: "#ffffff", letter: "G", fontClass: "text-[#4285F4]" },
  { label: "Notion", color: "#ffffff", letter: "N", shape: "square", fontClass: "text-black font-serif" },
  { label: "Obsidian", color: "#7C3AED" },
  { label: "Spotify", color: "#1DB954" },
  { label: "Figma", color: "#F24E1E" },
  { label: "Browser", color: "#4285F4" },
  { label: "ChatGPT", color: "#10A37F" },
];

export function Integrations() {
  return (
    <section className="integrations-section w-full pb-16" data-purpose="integrations-section">
      <h2 className="integrations-title text-xl md:text-2xl font-bold mb-6 flex items-center gap-2 font-display">
        <ArrowRightIcon className="w-5 h-5 text-primary" />
        Works With Everything
      </h2>
      <div className="integrations-grid flex flex-wrap gap-3">
        {chips.map((chip) => (
          <div
            key={chip.label}
            className="integration-chip flex items-center gap-2 bg-surface-container/30 border border-outline-variant rounded-full px-4 py-2 hover:bg-surface-container transition-colors"
          >
            <span
              className={
                (chip.shape === "square" ? "rounded-md" : "rounded-full") +
                " integration-icon w-5 h-5 flex items-center justify-center shrink-0 text-[10px] font-bold " +
                (chip.fontClass ?? "")
              }
              style={{ backgroundColor: chip.color }}
            >
              {chip.letter ?? null}
            </span>
            <span className="integration-label text-sm text-on-surface-variant">{chip.label}</span>
          </div>
        ))}
        <div className="integration-more flex items-center gap-2 bg-transparent border-none rounded-full px-4 py-2">
          <span className="text-sm text-on-surface-variant">... and more</span>
        </div>
      </div>
    </section>
  );
}
