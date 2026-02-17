import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HomeownersHero } from "@/components/homeowners/homeowners-hero";
import { RiskSection } from "@/components/homeowners/risk-section";
import { EmberFacts } from "@/components/homeowners/ember-facts";
import { WhyProdigyHomeowners } from "@/components/homeowners/why-prodigy-homeowners";
import { GettingProtected } from "@/components/homeowners/getting-protected";
import { Testimonials } from "@/components/homeowners/testimonials";
import { VideoTestimonials } from "@/components/video-testimonials";
import { LeadMagnetSection } from "@/components/lead-magnet-section";

export const metadata: Metadata = {
  title: "Home Wildfire Protection Systems | Prodigy Wildfire",
  description:
    "Custom-designed, permanent roof-mounted sprinkler systems that protect your home from ember attack. Remotely activated from anywhere in the world.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Residential Wildfire Protection",
  provider: {
    "@type": "Organization",
    name: "Prodigy Wildfire Solutions",
    url: "https://www.prodigywildfire.com",
  },
  description:
    "Custom-designed, permanent roof-mounted sprinkler systems that protect your home from ember attack. Remotely activated from anywhere in the world.",
  serviceType: "Residential Wildfire Sprinkler System",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    eligibleRegion: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
    ],
  },
};

export default function HomeownersPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <HomeownersHero />
        <RiskSection />
        <EmberFacts />
        <WhyProdigyHomeowners />
        <GettingProtected />
        <LeadMagnetSection />
        <Testimonials />
        <VideoTestimonials />
      </main>
      <Footer />
    </div>
  );
}
