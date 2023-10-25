/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Allows server actions
    serverActions: true,
    mdxRs: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
};

module.exports = nextConfig;
