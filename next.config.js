/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")();

const nextConfig = withMDX({
  experimental: {
    mdxRs: true,
  },
});

module.exports = nextConfig;
