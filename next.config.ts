import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)', // Apply CSP to all routes
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' https://js.stripe.com;", // Add other policies as needed
          },
        ],
      },
    ];
  },
};

export default nextConfig;
