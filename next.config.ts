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
    ];
  },
};

export default nextConfig;
