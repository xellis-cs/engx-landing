import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the site builds to plain HTML/CSS/JS in /out and is served
  // from Azure Static Web Apps' CDN. Revisit if/when server-side features
  // (auth'd partner portal, API routes) move into this app — see docs/ARCHITECTURE.md.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
