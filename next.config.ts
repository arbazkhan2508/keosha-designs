import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.rosewe.com",
      },
      {
        protocol: "https",
        hostname: "saritahanda.com",
      },
      {
        protocol: "https",
        hostname: "www.saritahanda.com",
      },
    ],
  },
};

export default nextConfig;

