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
      // US states moved under /regions/usa/
      {
        source: "/regions/california",
        destination: "/regions/usa/california",
        permanent: true,
      },
      {
        source: "/regions/oregon",
        destination: "/regions/usa/oregon",
        permanent: true,
      },
      {
        source: "/regions/washington",
        destination: "/regions/usa/washington",
        permanent: true,
      },
      {
        source: "/regions/idaho",
        destination: "/regions/usa/idaho",
        permanent: true,
      },
      {
        source: "/regions/montana",
        destination: "/regions/usa/montana",
        permanent: true,
      },
      {
        source: "/regions/wyoming",
        destination: "/regions/usa/wyoming",
        permanent: true,
      },
      {
        source: "/regions/nevada",
        destination: "/regions/usa/nevada",
        permanent: true,
      },
      {
        source: "/regions/utah",
        destination: "/regions/usa/utah",
        permanent: true,
      },
      {
        source: "/regions/arizona",
        destination: "/regions/usa/arizona",
        permanent: true,
      },
      {
        source: "/regions/colorado",
        destination: "/regions/usa/colorado",
        permanent: true,
      },
      {
        source: "/regions/hawaii",
        destination: "/regions/usa/hawaii",
        permanent: true,
      },
      {
        source: "/regions/texas",
        destination: "/regions/usa/texas",
        permanent: true,
      },
      // Quote page renamed to Consultation
      {
        source: "/quote",
        destination: "/consultation",
        permanent: true,
      },
      {
        source: "/contact/commercial",
        destination: "/commercial-consultation",
        permanent: true,
      },
      // Australian states/territories moved under /regions/australia/
      {
        source: "/regions/new-south-wales",
        destination: "/regions/australia/new-south-wales",
        permanent: true,
      },
      {
        source: "/regions/victoria",
        destination: "/regions/australia/victoria",
        permanent: true,
      },
      {
        source: "/regions/queensland",
        destination: "/regions/australia/queensland",
        permanent: true,
      },
      {
        source: "/regions/south-australia",
        destination: "/regions/australia/south-australia",
        permanent: true,
      },
      {
        source: "/regions/western-australia",
        destination: "/regions/australia/western-australia",
        permanent: true,
      },
      {
        source: "/regions/tasmania",
        destination: "/regions/australia/tasmania",
        permanent: true,
      },
      {
        source: "/regions/northern-territory",
        destination: "/regions/australia/northern-territory",
        permanent: true,
      },
      {
        source: "/regions/act",
        destination: "/regions/australia/act",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
