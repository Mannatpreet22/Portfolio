import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images : {
    remotePatterns : [{
      protocol : 'https',
      hostname : 'assets.aceternity.com'
    },
  {
    protocol: 'https',
    hostname: 'images.unsplash.com'
  }],
  domains : [
      "api.microlink.io", // Microlink Image Preview
    ]
  }
};

export default nextConfig;
