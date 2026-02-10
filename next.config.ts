import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/guixavieh.github.io",
  assetPrefix: "/guixavieh.github.io/",
};

module.exports = nextConfig;
