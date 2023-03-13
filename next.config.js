/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "strapi.planets.leonpahole.com"],
  },
};

module.exports = nextConfig;
