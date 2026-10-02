import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your GitHub Pages URL is https://arak-047.github.io/velora, uncomment the line below:
  // basePath: '/velora',
};

export default nextConfig;
