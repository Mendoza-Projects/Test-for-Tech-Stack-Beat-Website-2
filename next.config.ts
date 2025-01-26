import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,  // Ensures paths have a trailing slash
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/*/0.jpg',
        
      },
      
    ],
  },
};

export default nextConfig;