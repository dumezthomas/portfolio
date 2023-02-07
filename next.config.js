/** @type {import('next').NextConfig} */

module.exports = nextConfig = {
  reactStrictMode: true,
  env: {
    AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE,
    BASE_URL: process.env.BASE_URL,
  },
};
