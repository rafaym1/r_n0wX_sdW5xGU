import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lightsprint serves the dev server through a per-sandbox subdomain
  // proxy; without this, Next.js 16 blocks cross-origin dev requests
  // (HMR, RSC payloads) from that origin.
  allowedDevOrigins: ["*.lightsprint.ai"],
};

export default nextConfig;
