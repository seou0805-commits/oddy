import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: [],
  },
  webpack(config, { dev, isServer, webpack }) {
    if (dev) {
      config.plugins.push(
        new webpack.ProgressPlugin((percentage: number, message: string) => {
          const pct = Math.floor(percentage * 100);
          const label = isServer ? "server" : "client";
          process.stdout.write(`\r  [${label}] ${pct}%  ${message ?? ""}   `);
          if (percentage === 1) process.stdout.write("\n");
        })
      );
    }
    return config;
  },
};

export default nextConfig;
