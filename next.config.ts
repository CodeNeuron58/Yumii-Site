import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const docsUrl = process.env.DOCS_URL || "http://localhost:3001";
    // The install scripts are single-sourced in the Yumii repo; yumii.me
    // just proxies them so the install command reads clean and branded:
    //   iex (irm https://yumii.me/install.ps1)
    //   curl -fsSL https://yumii.me/install.sh | bash
    // Override the base with INSTALL_SCRIPTS_BASE to pin a tag/branch.
    const scriptsBase =
      process.env.INSTALL_SCRIPTS_BASE ||
      "https://raw.githubusercontent.com/CodeNeuron58/Yumii/master";
    return [
      {
        source: "/docs",
        destination: `${docsUrl}/docs`,
      },
      {
        source: "/docs/:path+",
        destination: `${docsUrl}/docs/:path+`,
      },
      {
        source: "/install.ps1",
        destination: `${scriptsBase}/install.ps1`,
      },
      {
        source: "/install.sh",
        destination: `${scriptsBase}/install.sh`,
      },
    ];
  },
};

export default nextConfig;
