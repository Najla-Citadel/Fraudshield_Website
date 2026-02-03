import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // REQUIRED for GitHub Pages
  },
  basePath: "/Fraudshield_Website",
  assetPrefix: "/Fraudshield_Website/",
};

export default nextConfig;
