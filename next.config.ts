import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { withContentlayer } from 'next-contentlayer2';

// Single source of truth for the readiamond subdomain.
// In dev you can still trigger these rules via `curl -H "Host: <SUBDOMAIN>"`.
const READIAMOND_HOST = 'readiamond.ryuteakwoo.com';

const nextConfig: NextConfig = {
  // Host-based subdomain rewrite:
  // readiamond.ryuteakwoo.com/                → /en/staticPage/readiamond
  // readiamond.ryuteakwoo.com/{en|zh}         → /{en|zh}/staticPage/readiamond
  // (next-intl middleware still runs first; on a bare "/" request it
  //  redirects to "/en", which then matches the second rule below.)
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          has: [{ type: 'host', value: READIAMOND_HOST }],
          destination: '/en/staticPage/readiamond',
        },
        {
          source: '/:locale(en|zh)',
          has: [{ type: 'host', value: READIAMOND_HOST }],
          destination: '/:locale/staticPage/readiamond',
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },

  // 301 the old portfolio paths to the new subdomain. The host guard
  // (`missing: host = subdomain`) prevents the redirect from firing on
  // the subdomain itself, where the rewrite serves the same internal path.
  async redirects() {
    return [
      {
        source: '/:locale(en|zh)/staticPage/readiamond',
        missing: [{ type: 'host', value: READIAMOND_HOST }],
        destination: `https://${READIAMOND_HOST}/:locale`,
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(withContentlayer(nextConfig));
