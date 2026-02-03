import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Fraudshield_Website",
  assetPrefix: "/Fraudshield_Website/",
  images: {
    unoptimized: true, // REQUIRED for GitHub Pages
  },
  
};

export default nextConfig;
