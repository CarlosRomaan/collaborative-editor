import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'img.clerk.com' }]
  }

};

module.exports = {
  eslint: {
    dirs: ["types"]
  }
}


export default nextConfig;
