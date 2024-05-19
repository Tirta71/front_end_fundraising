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
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/storage/avatars/**",
      },
    ],
  },
};

module.exports = nextConfig;
