/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.externals.push(
      'pino-pretty',
      'lokijs',
      'encoding',
      '@solana/web3.js'
    );
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      async_hooks: false,
    };
    config.resolve.alias = {
      ...config.resolve.alias,
      '@x402/svm': false,
      '@x402/svm/exact/client': false,
    };
    return config;
  },
};

export default nextConfig;
