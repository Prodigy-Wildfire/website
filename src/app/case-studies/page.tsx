import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero";
import { CaseStudyGrid } from "@/components/case-studies/case-study-grid";

export const metadata: Metadata = {
  title: "Wildfire Protection Case Studies | Real Installations Across USA, Canada & Australia",
  description:
    "See how Prodigy Wildfire Solutions protects homes, resorts, and critical infrastructure with custom exterior sprinkler systems. Real case studies from installations across the United States, Canada, and Australia.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Wildfire Protection Case Studies",
  description:
    "See how Prodigy Wildfire Solutions protects homes, resorts, and critical infrastructure with custom exterior sprinkler systems across the USA, Canada, and Australia.",
  mainEntity: {
    "@type": "ItemList",
    name: "Prodigy Wildfire Case Studies",
    itemListElement: [],
  },
  provider: {
    "@type": "Organization",
    name: "Prodigy Wildfire Solutions",
    url: "https://www.prodigywildfire.com",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <CaseStudiesHero />
        <CaseStudyGrid />
      </main>
      <Footer />
    </>
  );
}
