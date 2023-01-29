/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  dist: '.next'
}

// next.config.js
const withVideos = require('next-videos')

module.exports = withVideos()