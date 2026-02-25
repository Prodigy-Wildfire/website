import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { RegionPageTemplate } from "@/components/regions/region-page-template";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { getRegionBySlug, getRegionsByCountry } from "@/lib/regions";

const usaSlugs = getRegionsByCountry("usa").map((r) => r.slug);

export function generateStaticParams() {
  return usaSlugs.map((slug) => ({ slug }));
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
    alternates: { canonical: `/regions/usa/${slug}` },
    openGraph: {
      title: region.metaTitle,
      description: region.metaDescription,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: region.metaTitle,
      description: region.metaDescription,
    },
  };
}

export default async function UsaStatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region || region.country !== "usa") notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Prodigy Wildfire Solutions - ${region.name}`,
    url: `https://www.prodigywildfire.com/regions/usa/${region.slug}`,
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
      <BreadcrumbJsonLd items={[{ name: "Regions", href: "/regions" }, { name: "USA", href: "/regions/usa" }, { name: region.name }]} />
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
          contactRegionLabel="State"
          contactCountry="United States"
        />
      </main>
      <Footer />
    </>
  );
}
