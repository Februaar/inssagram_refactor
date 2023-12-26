/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["images.vivino.com"],
  },
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
};

module.exports = nextConfig;
