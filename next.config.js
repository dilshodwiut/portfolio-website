/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  compiler: {
    // removeConsole: true,
    swcMinify: true,
  },
  experimental: {
    modularizeImports: {
      lodash: {
        transform: "lodash/{{member}}",
      },
    },
  },
  nextConfig,
};
