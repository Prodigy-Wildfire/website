import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { RegionPageTemplate } from "@/components/regions/region-page-template";
import { regions, getRegionBySlug } from "@/lib/regions";

export function generateStaticParams() {
  return regions.map((r) => ({ slug: r.slug }));
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
    alternates: { canonical: `/regions/${params.slug}` },
  };
}

export default function RegionSubPage({
  params,
}: {
  params: { slug: string };
}) {
  const region = getRegionBySlug(params.slug);
  if (!region) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Prodigy Wildfire Solutions - ${region.name}`,
    url: `https://www.prodigywildfire.com/regions/${region.slug}`,
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
        />
      </main>
      <Footer />
    </>
  );
}
