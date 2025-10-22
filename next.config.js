/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vwzciaaeijiwhnvlfzni.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
