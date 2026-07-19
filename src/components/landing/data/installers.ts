export type Installer = {
  id: string;
  label: string;
  commandLines: string[];
  note: string;
  comingSoon?: boolean;
};

export const installers: Installer[] = [
  {
    id: "windows",
    label: "Windows",
    commandLines: ["iex (irm https://yumii.me/install.ps1)"],
    note: "Installs Yumii as a desktop app, right in your Start Menu. Re-run the command any time to update.",
  },
  {
    id: "unix",
    label: "macOS / Linux",
    commandLines: [],
    comingSoon: true,
    note: "The native desktop app for macOS and Linux is coming soon.",
  },
  {
    id: "source",
    label: "From source",
    commandLines: [
      "git clone https://github.com/CodeNeuron58/Yumii.git",
      "cd Yumii",
      "uv sync",
      "cd desktop && npx @tauri-apps/cli dev",
    ],
    note: "For developers — runs the desktop app straight from a clone.",
  },
];

export const QUICKSTART_COMMENT = "# Yumii runs on your machine";
