import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { PreparednessSection } from "@/components/preparedness-section";
import { EmberSection } from "@/components/ember-section";
import { ProtectSection } from "@/components/protect-section";
import { ServicesCards } from "@/components/services-cards";
import { WhyProdigy } from "@/components/why-prodigy";
import { FactsSection } from "@/components/facts-section";
import { TrustedSection } from "@/components/trusted-section";
import { LeadMagnetSection } from "@/components/lead-magnet-section";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Prodigy Wildfire | Wildfire Protection Systems for Homes & Businesses",
  description:
    "Protect your property with Prodigy's engineered wildfire sprinkler systems. Remotely activated, ember-proof protection across USA, Canada & Australia.",
  alternates: { canonical: "/" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Prodigy Wildfire Solutions",
    url: "https://www.prodigywildfire.com",
    logo: "https://www.prodigywildfire.com/images/pws-logo-white-text.png",
    description:
      "Prodigy Wildfire Solutions designs, installs, and maintains permanent exterior wildfire sprinkler systems, ember detection sensors, and remote activation technology for homes, businesses, and communities across the USA, Canada, and Australia.",
    email: "sales@prodigywildfire.com",
    foundingLocation: {
      "@type": "Place",
      name: "Whistler, British Columbia, Canada",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "sales@prodigywildfire.com",
      contactType: "sales",
      areaServed: ["US", "CA", "AU"],
      availableLanguage: "English",
    },
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Prodigy Wildfire Solutions",
    url: "https://www.prodigywildfire.com",
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
    priceRange: "$15,000 - $1,200,000",
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
        <TrustedSection />
      </main>
      <Footer />
    </div>
  );
}
