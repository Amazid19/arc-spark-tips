/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding', '@x402/svm');
    return config;
  },
};

export default nextConfig;
