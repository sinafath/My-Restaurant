/** @type {import('next').NextConfig} */
module.exports = {
  loader: 'custom',
  reactStrictMode: true,
  images: {
    deviceSizes: [250, 300, 350, 400, 450, 500, 800, 1248, 1520, 1920, 3840],
    domains: ['http://localhost:1337'],

  }
}
