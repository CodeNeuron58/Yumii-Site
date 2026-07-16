export type Installer = {
  id: string;
  label: string;
  commandLines: string[];
  note: string;
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
    commandLines: ["curl -fsSL https://yumii.me/install.sh | bash"],
    note: "Installs the backend today — the native desktop app for macOS and Linux is on the way.",
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
