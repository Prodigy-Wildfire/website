import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { RegionPageTemplate } from "@/components/regions/region-page-template";
import { getRegionsByCountry } from "@/lib/regions";

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
  { value: "3,094", label: "Homes Destroyed (Black Summer)" },
  { value: "46M", label: "Acres Burned (2019-20)" },
  { value: "3B+", label: "Animals Affected" },
  { value: "24/7", label: "Remote Monitoring" },
];

export default function AustraliaRegionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <RegionPageTemplate
          name="Australia"
          heroImage="/images/australia-bushfires-kangaroo.avif"
          heroAlt="Australian bushfire with kangaroo silhouette against fire-lit sky"
          description="In one of the most bushfire-challenged regions on the planet, our Australian team brings unmatched field expertise and cutting-edge wildfire protection technology to defend homes, rural properties, and entire communities from ember attack and radiant heat."
          detail="Australia's Black Summer of 2019-20 burned over 46 million acres and destroyed more than 3,000 homes, a catastrophic reminder of the bushfire threat facing every state and territory. Prodigy's exterior wildfire sprinkler systems and ember detection sensors are engineered to perform in Australia's extreme conditions, supporting bushfire resilience, readiness, and long-term property protection. Whether you are in New South Wales, Victoria, South Australia, or Western Australia, our systems provide permanent, proactive defence against ember attack and radiant heat."
          stats={stats}
          subRegions={getRegionsByCountry("australia")}
          subRegionLabel="State and Territory"
          subRegionBasePath="/regions/australia"
        />

        {/* Bushfire Risk Assessment CTA */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              How Prepared Is Your Property?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Take our free Bushfire Risk Assessment to understand your
              property&apos;s risk level and discover how Prodigy can help
              protect your home from ember attack and radiant heat.
            </p>
            <Link
              href="/regions/australia/bushfire-risk-assessment"
              className="mt-8 inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              Take the Bushfire Risk Assessment
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
