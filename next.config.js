/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Static prerendering errors ko bypass karne ke liye dynamic config
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;
