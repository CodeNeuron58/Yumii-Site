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
    commandLines: [
      "irm https://raw.githubusercontent.com/CodeNeuron58/Yumii/master/install.ps1 | iex",
    ],
    note:
      "Works on macOS, Linux, and Windows. Requires Python 3.12+ and uv. Optional: a Cubism 4 Live2D model for the avatar.",
  },
  {
    id: "unix",
    label: "macOS / Linux",
    commandLines: [
      "curl -LsSf https://raw.githubusercontent.com/CodeNeuron58/Yumii/master/install.sh | sh",
    ],
    note:
      "Works on macOS, Linux, and Windows. Requires Python 3.12+ and uv. Optional: a Cubism 4 Live2D model for the avatar.",
  },
  {
    id: "source",
    label: "From source",
    commandLines: [
      "git clone https://github.com/CodeNeuron58/Yumii.git",
      "cd Yumii",
      "uv sync",
      "yumii wake-up",
    ],
    note:
      "Works on macOS, Linux, and Windows. Requires Python 3.12+ and uv. Optional: a Cubism 4 Live2D model for the avatar.",
  },
];

export const QUICKSTART_COMMENT = "# Get Yumii up and running in seconds";
