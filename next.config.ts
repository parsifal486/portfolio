import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
import {withContentlayer} from 'next-contentlayer2'


const nextConfig: NextConfig = {
  
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(withContentlayer(nextConfig));
