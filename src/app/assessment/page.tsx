import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld"
import { WildfireRiskAssessment } from "@/components/assessment/wildfire-risk-assessment"

export const metadata: Metadata = {
  title: "Free Wildfire Risk Assessment | How Prepared Is Your Property?",
  description:
    "Take our free 2-minute wildfire risk assessment to discover your property's vulnerability to wildfire, bushfire, and ember attack. Get a personalised risk score and protection recommendations for properties in the USA, Canada, and Australia.",
  alternates: { canonical: "/assessment" },
  keywords: [
    "wildfire risk assessment",
    "bushfire risk assessment",
    "fire risk assessment",
    "wildfire preparedness",
    "property wildfire risk",
    "ember attack risk",
    "wildfire protection",
    "bushfire protection",
    "home wildfire assessment",
    "free wildfire assessment",
  ],
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Wildfire Risk Assessment",
  description:
    "Free 2-minute wildfire risk assessment that evaluates your property's vulnerability to wildfire, bushfire, and ember attack. Receive a personalised risk score and actionable protection recommendations.",
  provider: {
    "@type": "Organization",
    name: "Prodigy Wildfire Solutions",
    url: "https://www.prodigywildfire.com",
  },
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd items={[{ name: "Wildfire Risk Assessment", href: "/assessment" }]} />
      <Header />
      <main>
        <WildfireRiskAssessment />
      </main>
      <Footer />
    </>
  )
}
