import { Header } from "@/components/header"
import { HeroSection } from "@/components/businesses/hero-section"
import { StatsSection } from "@/components/businesses/stats-section"
import { FactsSection } from "@/components/businesses/facts-section"
import { InvestmentSection } from "@/components/businesses/investment-section"
import { WhyProdigySection } from "@/components/businesses/why-prodigy-section"
import { GettingProtectedSection } from "@/components/businesses/getting-protected-section"
import { ProcessSection } from "@/components/businesses/process-section"
import { BusinessCta } from "@/components/businesses/business-cta"
import { Footer } from "@/components/footer"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld"

export const metadata = {
  title: "Commercial Wildfire Protection | Prodigy Wildfire",
  description:
    "Protect your commercial property with engineered wildfire defence systems. Full-service from design through installation and year-round maintenance.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Wildfire Protection",
  provider: {
    "@type": "Organization",
    name: "Prodigy Wildfire Solutions",
    url: "https://www.prodigywildfire.com",
  },
  description:
    "Protect your commercial property with engineered wildfire defence systems. Full-service from design through installation and year-round maintenance.",
  serviceType: "Commercial Wildfire Sprinkler System",
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

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd items={[{ name: "Businesses", href: "/businesses" }]} />
      <Header />
      <HeroSection />
      <StatsSection />
      <FactsSection />
      <InvestmentSection />
      <WhyProdigySection />
      <GettingProtectedSection />
      <ProcessSection />
      <BusinessCta />
      <Footer />
    </main>
  )
}
