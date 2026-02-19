import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { RegionPageTemplate } from "@/components/regions/region-page-template";
import { getRegionBySlug, getRegionsByCountry } from "@/lib/regions";

const australiaSlugs = getRegionsByCountry("australia").map((r) => r.slug);

export function generateStaticParams() {
  return australiaSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region) return {};

  return {
    title: region.metaTitle,
    description: region.metaDescription,
  };
}

export default async function AustraliaStatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region || region.country !== "australia") notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Prodigy Wildfire Solutions - ${region.name}`,
    url: `https://www.prodigywildfire.com/regions/australia/${region.slug}`,
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
          contactRegionLabel="State/Territory"
          contactCountry="Australia"
        />
      </main>
      <Footer />
    </>
  );
}
