/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["res.cloudinary.com", "images.ctfassets.net"],
  },
  nextConfig,
};

// For styled components configuration in module.exports
// experimental: {
//   styledComponents: true,
// },
