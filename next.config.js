

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["img.clerk.com"],
  }
};

const eslintConfig = {
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ["styles"]
  }
}



export default nextConfig;