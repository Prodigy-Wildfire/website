import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicesHero } from "@/components/services/services-hero";
import { OurApproach } from "@/components/services/our-approach";
import { InnovationSection } from "@/components/services/innovation-section";
import { HowItWorks } from "@/components/services/how-it-works";
import { ServiceDetails } from "@/components/services/service-details";
import { SystemCta } from "@/components/services/system-cta"
import { MailingListSection } from "@/components/mailing-list-section";

export const metadata: Metadata = {
  title: "Exterior Wildfire Sprinkler Systems | Prodigy Wildfire Solutions",
  description:
    "Exterior wildfire sprinkler systems, remote activation, and ember detection technology. Prodigy delivers end-to-end wildfire defence for properties of all sizes.",
  alternates: { canonical: "/systems" },
  openGraph: {
    title: "The Prodigy System",
    description: "Exterior wildfire sprinkler systems, remote activation, and ember detection technology. Prodigy delivers end-to-end wildfire defence for properties of all sizes.",
    images: [{ url: "/images/services-hero.jpg", width: 1200, height: 630, alt: "Prodigy wildfire sprinkler system" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Prodigy System",
    description: "Exterior wildfire sprinkler systems, remote activation, and ember detection technology. Prodigy delivers end-to-end wildfire defence for properties of all sizes.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Prodigy Exterior Wildfire Sprinkler System",
    description:
      "Custom-engineered permanent roof-mounted wildfire sprinkler systems using type L copper piping (316 stainless steel in Australia). Delivers up to 50 feet of coverage and full property saturation in under 3 minutes.",
    brand: {
      "@type": "Brand",
      name: "Prodigy Wildfire Solutions",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Prodigy Wildfire Solutions",
      url: "https://www.prodigywildfire.com",
    },
    category: "Wildfire Protection Systems",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "15000",
      highPrice: "1200000",
      offerCount: "3",
      availability: "https://schema.org/InStock",
      eligibleRegion: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "Australia" },
      ],
    },
    hasVariant: [
      {
        "@type": "Product",
        name: "Exterior Wildfire Sprinkler System",
        description:
          "Permanent roof-mounted copper piping sprinkler system with up to 50 feet of coverage per head and full property saturation in under 3 minutes.",
      },
      {
        "@type": "Product",
        name: "Remote Activation and EmberWatch",
        description:
          "App-based remote monitoring and one-tap activation from anywhere in the world. Real-time fire tracking, ember alerts, and programmable activation cycles.",
      },
      {
        "@type": "Product",
        name: "Advanced Ember and Flame Detection Sensor",
        description:
          "360-degree perimeter scanning sensors with 24/7 automated monitoring. Weather-resistant sensors detect airborne embers and flame activity with instant app alerts.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.prodigywildfire.com" },
      { "@type": "ListItem", position: 2, name: "Our Systems" },
    ],
  },
];

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
        <MailingListSection />
      </main>
      <Footer />
    </>
  );
}
