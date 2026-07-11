export type Installer = {
  id: string;
  label: string;
  commandLines: string[];
  note: string;
};

const SHARED_NOTE =
  "Works on Windows, macOS and Linux. The one-click desktop installer arrives with the next release.";

export const installers: Installer[] = [
  {
    id: "windows",
    label: "Windows",
    commandLines: [
      "irm https://raw.githubusercontent.com/CodeNeuron58/Yumii/master/install.ps1 | iex",
    ],
    note: SHARED_NOTE,
  },
  {
    id: "unix",
    label: "macOS / Linux",
    commandLines: [
      "curl -LsSf https://raw.githubusercontent.com/CodeNeuron58/Yumii/master/install.sh | sh",
    ],
    note: SHARED_NOTE,
  },
  {
    id: "source",
    label: "From source",
    commandLines: [
      "git clone https://github.com/CodeNeuron58/Yumii.git",
      "cd Yumii",
      "uv sync",
      "uv run yumii",
    ],
    note: SHARED_NOTE,
  },
];

export const QUICKSTART_COMMENT = "# Yumii runs on your machine";
