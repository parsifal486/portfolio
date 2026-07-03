import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer2';

// Single source of truth for the readiamond subdomain.
// In dev you can still trigger these rules via `curl -H "Host: <SUBDOMAIN>"`.
const READIAMOND_HOST = 'readiamond.ryuteakwoo.com';

const nextConfig: NextConfig = {
  // Host-based subdomain rewrite:
  // readiamond.ryuteakwoo.com/ → /staticPage/readiamond
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          has: [{ type: 'host', value: READIAMOND_HOST }],
          destination: '/staticPage/readiamond',
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },

  async redirects() {
    return [
      // The site is English-only now: 301 the old locale-prefixed URLs
      // (/en/..., /zh/...) to their root-level equivalents. The destination
      // is host-relative, so on the readiamond subdomain /en still lands on
      // "/" which the rewrite above serves. The bare-locale rule must come
      // first: with `/:path*` alone, a zero-segment match produces an empty
      // Location header.
      {
        source: '/:locale(en|zh)',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:locale(en|zh)/:path*',
        destination: '/:path*',
        permanent: true,
      },
      // 301 the old portfolio path to the subdomain. The host guard
      // (`missing: host = subdomain`) prevents the redirect from firing on
      // the subdomain itself, where the rewrite serves the same internal path.
      {
        source: '/staticPage/readiamond',
        missing: [{ type: 'host', value: READIAMOND_HOST }],
        destination: `https://${READIAMOND_HOST}/`,
        permanent: true,
      },
    ];
  },
};

export default withContentlayer(nextConfig);
