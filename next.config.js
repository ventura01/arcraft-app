/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "res.cloudinary.com",
      "cloudflare-ipfs.com",
      "placeimg.com",
      "picsum.photos",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
