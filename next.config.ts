/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/engage',
  assetPrefix: '/engage/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
