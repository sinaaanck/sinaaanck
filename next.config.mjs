/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  images: {
    // Use unoptimized images to avoid processing placeholder assets during development
    unoptimized: true,
  },
};

export default nextConfig;
