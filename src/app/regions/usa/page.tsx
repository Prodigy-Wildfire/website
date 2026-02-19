import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { RegionPageTemplate } from "@/components/regions/region-page-template";
import { getRegionsByCountry } from "@/lib/regions";

export const metadata: Metadata = {
  title: "Wildfire Protection in the USA | Prodigy Wildfire",
  description:
    "Prodigy delivers wildfire sprinkler systems, ember detection, and remote activation for homes and businesses across the United States. From California to Colorado, protect your property from wildfire.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Prodigy Wildfire Solutions - USA",
  url: "https://www.prodigywildfire.com/regions/usa",
  description:
    "Wildfire sprinkler systems, ember detection, and remote activation for homes and businesses across the United States.",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Prodigy Wildfire Solutions",
    url: "https://www.prodigywildfire.com",
  },
};

const stats = [
  { value: "64,897", label: "Wildfires in the USA (2024)" },
  { value: "8.9M", label: "Acres Burned (2024)" },
  { value: "50+", label: "States at Risk" },
  { value: "24/7", label: "Remote Monitoring" },
];

export default function UsaRegionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <RegionPageTemplate
          name="U.S.A"
          heroImage="/images/usa-wildfire-home-under-threat.jpg"
          heroAlt="American home under threat from approaching wildfire"
          description="From California and Colorado to the Pacific Northwest and beyond, our U.S. team partners with property owners, builders, and communities to deliver custom-engineered exterior wildfire sprinkler systems built for America's evolving wildfire environment."
          detail="The United States faces an escalating wildfire crisis. In 2024, over 64,000 wildfires burned nearly 9 million acres, with the western states bearing the heaviest impact. Prodigy's wildfire protection systems combine world-class engineering with local expertise, providing reliable and proactive defence for homes, businesses, and critical infrastructure across the country. Our exterior wildfire sprinkler systems, ember attack protection sensors, and remote activation technology are designed to meet NFPA standards and address the unique challenges of the American wildfire landscape."
          stats={stats}
          subRegions={getRegionsByCountry("usa")}
          subRegionLabel="State"
          subRegionBasePath="/regions/usa"
        />
      </main>
      <Footer />
    </>
  );
}
