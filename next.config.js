/** @type {import('next').NextConfig} */

const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    config.plugins.push(new Dotenv({ path: "./.env.development.local", silent: true }));
    return config;
  },
  env: {
    AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE,
  },
};
