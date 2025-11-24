import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blob.v0.app",
      },
    ],
  },
};

export default nextConfig;
