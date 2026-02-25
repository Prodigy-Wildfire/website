import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HomeownersHero } from "@/components/homeowners/homeowners-hero";
import { RiskSection } from "@/components/homeowners/risk-section";
import { EmberFacts } from "@/components/homeowners/ember-facts";
import { WhyProdigyHomeowners } from "@/components/homeowners/why-prodigy-homeowners";
import { ResidentialInvestmentSection } from "@/components/homeowners/residential-investment-section";
import { GettingProtected } from "@/components/homeowners/getting-protected";
import { VideoTestimonials } from "@/components/video-testimonials";
import { LeadMagnetSection } from "@/components/lead-magnet-section";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "Wildfire Sprinkler Systems for Homes | Prodigy Wildfire",
  description:
    "Custom-designed, permanent roof-mounted sprinkler systems that protect your home from ember attack. Remotely activated from anywhere in the world.",
  alternates: { canonical: "/homeowners" },
  openGraph: {
    title: "Wildfire Sprinkler Systems for Homes",
    description: "Custom-designed, permanent roof-mounted sprinkler systems that protect your home from ember attack. Remotely activated from anywhere in the world.",
    images: [{ url: "/images/homeowners-hero.jpg", width: 1200, height: 630, alt: "Wildfire sprinkler system protecting a home" }],
  },
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Residential Wildfire Protection Terms",
    itemListElement: [
      {
        "@type": "DefinedTerm",
        name: "Humidity Bubble",
        description:
          "A humidity bubble is a saturated zone of moisture created around a structure by an exterior wildfire sprinkler system, designed to prevent ember ignition and reduce radiant heat exposure.",
      },
      {
        "@type": "DefinedTerm",
        name: "Defensible Space",
        description:
          "Defensible space is the buffer zone around a structure where vegetation and other combustible materials have been managed to reduce wildfire exposure.",
      },
    ],
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    eligibleRegion: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "2",
    bestRating: "5",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Steve S." },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Surrounded by forest in Whistler, we installed a Prodigy Wildfire Suppression System to protect our home from ember-driven wildfire risk. It's a smart preventative investment that gives us peace of mind.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "The Peterson Family" },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "We can finally leave for the summer without worrying. The remote start feature gives us complete peace of mind.",
    },
  ],
};

export default function HomeownersPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd items={[{ name: "Homeowners", href: "/homeowners" }]} />
      <Header />
      <main>
        <HomeownersHero />
        <RiskSection />
        <EmberFacts />
        <WhyProdigyHomeowners />
        <ResidentialInvestmentSection />
        <GettingProtected />
        <LeadMagnetSection />
        <VideoTestimonials />
        <section className="bg-muted py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Ready to Protect Your <span className="text-accent">Home</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Get a free property assessment and find out how a Prodigy exterior
              wildfire sprinkler system can defend your home from ember attack,
              radiant heat, and direct flame contact.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/consultation"
                className="rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/assessment"
                className="rounded border-2 border-accent px-8 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
              >
                Take the Wildfire Readiness Quiz
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
