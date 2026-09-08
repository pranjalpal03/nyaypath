/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: process.env.NEXT_PUBLIC_BACKEND_URL
          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/:path*`
          : 'https://nyaypath-backend-wmnm.onrender.com/api/v1/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
