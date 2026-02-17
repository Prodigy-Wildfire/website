import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { PreparednessSection } from "@/components/preparedness-section";
import { EmberSection } from "@/components/ember-section";
import { ProtectSection } from "@/components/protect-section";
import { ServicesCards } from "@/components/services-cards";
import { WhyProdigy } from "@/components/why-prodigy";
import { FactsSection } from "@/components/facts-section";
import { StatsBar } from "@/components/stats-bar";
import { TrustedSection } from "@/components/trusted-section";
import { LeadMagnetSection } from "@/components/lead-magnet-section";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Prodigy Wildfire | Wildfire Protection Systems for Homes & Businesses",
  description:
    "Protect your property with Prodigy's engineered wildfire sprinkler systems. Remotely activated, ember-proof protection across USA, Canada & Australia.",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Prodigy Wildfire Solutions",
    url: "https://www.prodigywildfire.com",
    description:
      "Protect your property with Prodigy's engineered wildfire sprinkler systems. Remotely activated, ember-proof protection across USA, Canada & Australia.",
    image: "https://www.prodigywildfire.com/images/pws-logo-white-text.png",
    logo: "https://www.prodigywildfire.com/images/pws-logo-white-text.png",
    email: "sales@prodigywildfire.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Whistler",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
    ],
    serviceType: [
      "Wildfire Protection",
      "Exterior Sprinkler Systems",
      "Ember Detection",
      "Remote Activation Systems",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "2",
      bestRating: "5",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Prodigy Wildfire Solutions",
    url: "https://www.prodigywildfire.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.prodigywildfire.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
];

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <PreparednessSection />
        <EmberSection />
        <ProtectSection />
        <ServicesCards />
        <WhyProdigy />
        <LeadMagnetSection />
        <FactsSection />
        <StatsBar />
        <TrustedSection />
      </main>
      <Footer />
    </div>
  );
}
