/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'i.imgur.com',
        protocol: 'https'
      },
      {
        hostname: 'lh3.googleusercontent.com',
        protocol: 'https'
      }
    ]
  }
};

module.exports = nextConfig;
