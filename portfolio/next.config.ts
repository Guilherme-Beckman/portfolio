import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
};

const withNextIntl = createNextIntlPlugin();

const composedConfig = [withNextVideo, withNextIntl].reduce(
  (config, plugin) => plugin(config),
  nextConfig
);

export default composedConfig;
