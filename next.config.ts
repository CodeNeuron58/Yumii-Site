import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const docsUrl = process.env.DOCS_URL || "http://localhost:3001";
    return [
      {
        source: "/docs",
        destination: `${docsUrl}/docs`,
      },
      {
        source: "/docs/:path+",
        destination: `${docsUrl}/docs/:path+`,
      },
    ];
  },
};

export default nextConfig;
