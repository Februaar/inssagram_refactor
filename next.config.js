/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
};

module.exports = nextConfig;
