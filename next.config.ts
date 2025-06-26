import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@/public': path.resolve(__dirname, 'public'),
      '@/content': path.resolve(__dirname, 'content'),
      '@/messages': path.resolve(__dirname, 'messages'),
      '@/i18n': path.resolve(__dirname, 'src/i18n'),
      '@/components': path.resolve(__dirname, 'src/app/[locale]/components'),
    };
    return config;
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
