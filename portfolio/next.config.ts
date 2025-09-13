import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "guilherme-beckman.github.io",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();

const composedConfig = [withNextVideo, withNextIntl].reduce(
  (config, plugin) => plugin(config),
  nextConfig
);

export default composedConfig;
