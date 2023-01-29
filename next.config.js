/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  distDir: 'build',

}

// next.config.js
const withVideos = require('next-videos')

module.exports = withVideos()