/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tirta.site",
        port: "",
        pathname: "/storage/thumbnails/**",
      },
    ],
  },
};

module.exports = nextConfig;
