import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { RegionPageTemplate } from "@/components/regions/region-page-template";
import { getRegionBySlug, getRegionsByCountry } from "@/lib/regions";

const canadianSlugs = getRegionsByCountry("canada").map((r) => r.slug);

export function generateStaticParams() {
  return canadianSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const region = getRegionBySlug(params.slug);
  if (!region) return {};

  return {
    title: region.metaTitle,
    description: region.metaDescription,
  };
}

export default function CanadaProvincePage({
  params,
}: {
  params: { slug: string };
}) {
  const region = getRegionBySlug(params.slug);
  if (!region || region.country !== "canada") notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Prodigy Wildfire Solutions - ${region.name}`,
    url: `https://www.prodigywildfire.com/regions/canada/${region.slug}`,
    description: region.metaDescription,
    areaServed: {
      "@type": region.areaServedType,
      name: region.areaServedName,
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Prodigy Wildfire Solutions",
      url: "https://www.prodigywildfire.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <RegionPageTemplate
          name={region.name}
          heroImage={region.heroImage}
          heroAlt={region.heroAlt}
          description={region.description}
          detail={region.detail}
          stats={region.stats}
          showContactForm
        />
      </main>
      <Footer />
    </>
  );
}
