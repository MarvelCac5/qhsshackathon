/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/qhsshackathon',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
