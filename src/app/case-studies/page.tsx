import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero";
import { CaseStudyGrid } from "@/components/case-studies/case-study-grid";

export const metadata: Metadata = {
  title: "Wildfire Protection Case Studies | Real Installations Across USA, Canada & Australia",
  description:
    "See how Prodigy Wildfire Solutions protects homes, resorts, and critical infrastructure with custom exterior sprinkler systems. Real case studies from installations across the USA, Canada, and Australia.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Wildfire Protection Case Studies",
    description: "See how Prodigy Wildfire Solutions protects homes, resorts, and critical infrastructure with custom exterior sprinkler systems.",
    images: [{ url: "/images/services-hero.jpg", width: 1200, height: 630, alt: "Prodigy Wildfire case study installation" }],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Wildfire Protection Case Studies",
    description:
      "See how Prodigy Wildfire Solutions protects homes, resorts, and critical infrastructure with custom exterior sprinkler systems across the USA, Canada, and Australia.",
    mainEntity: {
      "@type": "ItemList",
      name: "Prodigy Wildfire Case Studies",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Article",
            headline: "Banff Gondola by Pursuit",
            description:
              "A world-renowned mountain resort required a wildfire protection system that could defend its upper terminal and surrounding infrastructure at over 7,000 ft elevation.",
            author: { "@type": "Organization", name: "Prodigy Wildfire Solutions" },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Article",
            headline: "Golden Skybridge",
            description:
              "One of Canada's premier tourism attractions needed comprehensive wildfire protection for its bridge structures and visitor facilities in the Columbia Valley.",
            author: { "@type": "Organization", name: "Prodigy Wildfire Solutions" },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Article",
            headline: "University of British Columbia",
            description:
              "UBC required wildfire protection for critical campus buildings on the shoreline of Loon Lake, utilising the lake as a water source for the suppression system.",
            author: { "@type": "Organization", name: "Prodigy Wildfire Solutions" },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Article",
            headline: "Private Residence - Whistler",
            description:
              "A luxury mountain home in Whistler's wildfire interface zone needed discreet, permanent wildfire protection that preserved the property's aesthetic.",
            author: { "@type": "Organization", name: "Prodigy Wildfire Solutions" },
          },
        },
      ],
    },
    provider: {
      "@type": "Organization",
      name: "Prodigy Wildfire Solutions",
      url: "https://www.prodigywildfire.com",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.prodigywildfire.com" },
      { "@type": "ListItem", position: 2, name: "Case Studies" },
    ],
  },
];

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
