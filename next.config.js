/** @type {import('next').NextConfig} */
const nextConfig = {
  // Note: i18n config removed as it's not compatible with App Router
  // Internationalization is now handled through the app directory structure
  images: {
    domains: ['placehold.co', 'via.placeholder.com'],
  },
}

module.exports = nextConfig 