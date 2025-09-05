/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ This tells Next.js not to fail builds because of ESLint errors
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
