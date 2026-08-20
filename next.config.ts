import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === "development" ? true : false;

export default {
  /* config options here */
  compiler: {
    removeConsole: !isDevelopment,
  },
  experimental: {
    turbopackRustReactCompiler: true,
  },
  images: {
    formats: ["image/webp"],
  },
  productionBrowserSourceMaps: isDevelopment,
  reactStrictMode: isDevelopment,
  reactCompiler: true,
  poweredByHeader: isDevelopment,
} as NextConfig;
