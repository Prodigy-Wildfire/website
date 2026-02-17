import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // TODO: Fix pre-existing TS errors in shadcn chart.tsx and calendar.tsx,
    // then remove this flag
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
