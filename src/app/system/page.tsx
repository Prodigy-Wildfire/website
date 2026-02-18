import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicesHero } from "@/components/services/services-hero";
import { OurApproach } from "@/components/services/our-approach";
import { InnovationSection } from "@/components/services/innovation-section";
import { HowItWorks } from "@/components/services/how-it-works";
import { ServiceDetails } from "@/components/services/service-details";
import { SystemCta } from "@/components/services/system-cta";

export const metadata: Metadata = {
  title: "The Prodigy System | Prodigy Wildfire Solutions",
  description:
    "Exterior wildfire sprinkler systems, remote activation, and ember detection technology. Prodigy delivers end-to-end wildfire defence for properties of all sizes.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "Organization",
    name: "Prodigy Wildfire Solutions",
    url: "https://www.prodigywildfire.com",
  },
  serviceType: "Wildfire Protection",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wildfire Protection Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Exterior Wildfire Sprinkler Systems",
          description:
            "Custom-engineered permanent roof-mounted sprinkler systems using type L copper (316 Stainless steel in Australia) piping. Delivers up to 50 feet of coverage and full property saturation in under 3 minutes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Remote Activation & Ember Watch",
          description:
            "App-based remote monitoring and one-tap activation from anywhere in the world. Real-time fire tracking, ember alerts, and programmable activation cycles.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Advanced Ember & Flame Detection",
          description:
            "360-degree perimeter scanning sensors with 24/7 automated monitoring. Weather-resistant sensors detect airborne embers and flame activity with instant app alerts.",
        },
      },
    ],
  },
};

export default function SystemPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <ServicesHero />
        <OurApproach />
        <InnovationSection />
        <HowItWorks />
        <ServiceDetails />
        <SystemCta />
      </main>
      <Footer />
    </>
  );
}
