/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Build করার সময় টাইপস্ক্রিপ্ট এরর ইগনোর করবে
    ignoreBuildErrors: true,
  },
  eslint: {
    // Build করার সময় ESLint এরর ইগনোর করবে
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.externals.push(
      'pino-pretty',
      'lokijs',
      'encoding',
      '@x402/svm',
      '@solana/web3.js'
    );
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      async_hooks: false,
    };
    return config;
  },
};

export default nextConfig;
