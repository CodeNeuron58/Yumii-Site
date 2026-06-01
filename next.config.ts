import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/docs/:path*",
        // In production, this should point to your deployed docs Vercel URL
        // We use an environment variable so you can set it in Vercel.
        // Fallback to localhost:3001 if testing both locally.
        destination: process.env.DOCS_URL 
          ? `${process.env.DOCS_URL}/docs/:path*` 
          : "http://localhost:3001/docs/:path*",
      },
    ];
  },
};

export default nextConfig;
