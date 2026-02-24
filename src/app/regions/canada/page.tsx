import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { RegionPageTemplate } from "@/components/regions/region-page-template";


export const metadata: Metadata = {
  title: "Wildfire Protection in Canada | Prodigy Wildfire",
  description:
    "Prodigy delivers wildfire sprinkler systems, ember detection, and remote activation for homes and businesses across Canada. From British Columbia to Ontario, protect your property from wildfire.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Prodigy Wildfire Solutions - Canada",
  url: "https://www.prodigywildfire.com/regions/canada",
  description:
    "Wildfire sprinkler systems, ember detection, and remote activation for homes and businesses across Canada.",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Prodigy Wildfire Solutions",
    url: "https://www.prodigywildfire.com",
  },
};

const stats = [
  { value: "5,475", label: "Wildfires in Canada (2023)" },
  { value: "17.3M", label: "Hectares Burned (2023)" },
  { value: "200+", label: "Communities at Risk" },
];

const caseStudies = [
  {
    name: "Banff Gondola",
    description:
      "Protecting one of Canada's most iconic tourism destinations with a custom wildfire sprinkler system engineered for extreme alpine terrain.",
    href: "/case-studies#banff-gondola",
  },
  {
    name: "Lake Minnewanka",
    description:
      "Safeguarding critical lakeside infrastructure in Banff National Park with advanced ember detection and automated sprinkler activation.",
    href: "/case-studies",
  },
  {
    name: "UBC Research Forest",
    description:
      "Partnering with the University of British Columbia to protect research facilities and surrounding forest with wildfire defence systems.",
    href: "/case-studies#ubc-campus",
  },
  {
    name: "Golden Skybridge",
    description:
      "Engineering wildfire protection for Canada's highest suspension bridge and surrounding tourism infrastructure in the Columbia Valley.",
    href: "/case-studies#golden-skybridge",
  },
];

export default function CanadaRegionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <RegionPageTemplate
          name="Canada"
          heroImage="/images/jasper-national-park-wildfire.jpg"
          heroAlt="Wildfire devastation in Jasper National Park with burned forest overlooking the Rocky Mountains"
          description="Serving some of the world's most wildfire-prone landscapes, our Canadian team delivers advanced exterior wildfire sprinkler systems, ember detection, and remote activation technology for homes, businesses, and communities from British Columbia to Ontario."
          detail="Canada's wildfire seasons are growing longer and more severe. In 2023 alone, over 17.3 million hectares burned across the country, displacing tens of thousands and destroying critical infrastructure. Prodigy's wildfire protection systems are custom-engineered for diverse Canadian terrain, from coastal forests to interior grasslands. Our roof sprinkler systems, ember attack protection sensors, and remote activation technology provide permanent, proactive defence for homeowners, businesses, and communities facing escalating wildfire risk."
          stats={stats}
          statsSource="CIFFC"
          statsSourceUrl="https://ciffc.net/statistics"
          caseStudies={caseStudies}
        />
      </main>
      <Footer />
    </>
  );
}
