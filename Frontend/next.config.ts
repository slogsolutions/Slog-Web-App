import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'c.animaapp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http', // Django dev server
        hostname: 'localhost',
        port: '8000',
        pathname: '/media/**',
      },
      {
        protocol: 'https', // Render production
        hostname: 'slog-web-app.onrender.com',
        port: '',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;
