import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // TODO: Fix pre-existing TS errors in shadcn chart.tsx and calendar.tsx,
    // then remove this flag
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      // Wix migration: old URLs that no longer have a direct equivalent
      {
        source: "/unitedstates",
        destination: "/regions",
        permanent: true,
      },
      {
        source: "/general-7",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wip",
        destination: "/",
        permanent: true,
      },
      // Canadian provinces moved under /regions/canada/
      {
        source: "/regions/british-columbia",
        destination: "/regions/canada/british-columbia",
        permanent: true,
      },
      {
        source: "/regions/alberta",
        destination: "/regions/canada/alberta",
        permanent: true,
      },
      {
        source: "/regions/saskatchewan",
        destination: "/regions/canada/saskatchewan",
        permanent: true,
      },
      {
        source: "/regions/ontario",
        destination: "/regions/canada/ontario",
        permanent: true,
      },
      {
        source: "/regions/newfoundland-and-labrador",
        destination: "/regions/canada/newfoundland-and-labrador",
        permanent: true,
      },
      {
        source: "/regions/nova-scotia",
        destination: "/regions/canada/nova-scotia",
        permanent: true,
      },
      {
        source: "/regions/new-brunswick",
        destination: "/regions/canada/new-brunswick",
        permanent: true,
      },
      {
        source: "/regions/manitoba",
        destination: "/regions/canada/manitoba",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
