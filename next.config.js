/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['picsum.photos', 'dummyjson.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig