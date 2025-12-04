/*
  Project: Prathamone Publications
  Author: Jawahar R. Mallah
  Company: Prathamone
  Email: jawahar.mallah@gmail.com
  File: next.config.js
  Description: Next.js configuration for Prathamone Publications.
*/
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    unoptimized: true
  }
};
module.exports = nextConfig;
