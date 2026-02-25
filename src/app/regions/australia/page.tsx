import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { RegionPageTemplate } from "@/components/regions/region-page-template";


export const metadata: Metadata = {
  title: "Wildfire Protection in Australia | Prodigy Wildfire",
  description:
    "Prodigy delivers bushfire sprinkler systems, ember detection, and remote activation for homes and properties across Australia. Protect your home from ember attack and radiant heat.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Prodigy Wildfire Solutions - Australia",
  url: "https://www.prodigywildfire.com/regions/australia",
  description:
    "Bushfire sprinkler systems, ember detection, and remote activation for homes and properties across Australia.",
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Prodigy Wildfire Solutions",
    url: "https://www.prodigywildfire.com",
  },
};

const stats = [
  { value: "46.9M", label: "Hectares Burned (2016/17 - 2020/21)" },
  { value: "35%", label: "Of Australia's Total Forest Area" },
];

export default function AustraliaRegionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd items={[{ name: "Regions", href: "/regions" }, { name: "Australia", href: "/regions/australia" }]} />
      <Header />
      <main>
        <RegionPageTemplate
          name="Australia"
          heroTitle="Bushfire Protection in"
          heroImage="/images/australia-bushfires-kangaroo.avif"
          heroAlt="Australian bushfire with kangaroo silhouette against fire-lit sky"
          description="In one of the most bushfire-challenged regions on the planet, our Australian team brings unmatched field expertise and cutting-edge wildfire protection technology to defend homes, rural properties, and entire communities from ember attack and radiant heat."
          detail="Australia's Black Summer of 2019-20 burned over 46 million acres and destroyed more than 3,000 homes, a catastrophic reminder of the bushfire threat facing every state and territory. Prodigy's exterior wildfire sprinkler systems and ember detection sensors are engineered to perform in Australia's extreme conditions, supporting bushfire resilience, readiness, and long-term property protection. Whether you are in New South Wales, Victoria, South Australia, or Western Australia, our systems provide permanent, proactive defence against ember attack and radiant heat."
          stats={stats}
          statsSource="Australian Government"
          statsSourceUrl="https://www.agriculture.gov.au/abares/forestsaustralia/forest-data-maps-and-tools/data-by-topic/fire"
          descriptionHeading={<><span className="text-accent">Bushfire Protection</span> Services in Australia</>}
          ctaDescription="Take our free Bushfire Risk Assessment to understand your property's risk level and discover how Prodigy can help protect your home from ember attack and radiant heat."
          ctaQuizLabel="Take the Bushfire Preparedness Quiz"
        />
      </main>
      <Footer />
    </>
  );
}
