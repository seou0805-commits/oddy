import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["three"],
  },
  webpack(config, { dev, isServer, webpack }) {
    if (!dev) {
      config.devtool = false;
    }

    // public/catalog/ 파일은 webpack 처리 없이 정적 파일로만 서빙
    config.module.rules.push({
      test: /public[\\/]catalog[\\/]/,
      type: "asset/resource",
      generator: {
        emit: false,
      },
    });

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
