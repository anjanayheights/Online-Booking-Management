/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // In specific paths ko static export se exclude karne ke liye
  async headers() {
    return [];
  },
};

module.exports = nextConfig;
