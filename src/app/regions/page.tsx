import { Header } from "@/components/header"
import { Hero } from "@/components/regions/hero"
import { Stats } from "@/components/regions/stats"
import { Facts } from "@/components/regions/facts"
import { WhyProdigy } from "@/components/regions/why-prodigy"
import { Regions } from "@/components/regions/regions"
import { SupportSection } from "@/components/regions/support-section"
import { CtaBanner } from "@/components/regions/cta-banner"
import { MailingListSection } from "@/components/mailing-list-section"
import { Footer } from "@/components/footer"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld"

export const metadata = {
  title: "Wildfire Protection by Region | Prodigy Wildfire",
  description:
    "Prodigy provides wildfire protection across high-risk regions in Canada, the USA, and Australia. Find coverage in your area.",
  alternates: { canonical: "/regions" },
  openGraph: {
    title: "Wildfire Protection by Region",
    description: "Prodigy provides wildfire protection across high-risk regions in Canada, the USA, and Australia. Find coverage in your area.",
    images: [{ url: "/images/wildfire-ember-attack-cayetano-gil.avif", width: 1200, height: 630, alt: "Wildfire ember attack" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wildfire Protection by Region",
    description: "Prodigy provides wildfire protection across high-risk regions in Canada, the USA, and Australia. Find coverage in your area.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Prodigy Wildfire Solutions",
  url: "https://www.prodigywildfire.com",
  description:
    "Prodigy provides wildfire protection across high-risk regions in Canada, the USA, and Australia.",
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Canada",
      description:
        "Serving wildfire-prone landscapes from British Columbia to Ontario with advanced exterior wildfire sprinkler systems, ember detection, and remote activation technology.",
    },
    {
      "@type": "AdministrativeArea",
      name: "United States",
      description:
        "From California and Colorado to the Pacific Northwest, delivering custom-engineered exterior wildfire sprinkler systems for America's evolving wildfire environment.",
    },
    {
      "@type": "AdministrativeArea",
      name: "Australia",
      description:
        "Defending homes, rural properties, and communities from ember attack and radiant heat across every Australian state and territory.",
    },
  ],
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd items={[{ name: "Regions", href: "/regions" }]} />
      <Header />
      <Hero />
      <Stats />
      <Facts />
      <WhyProdigy />
      <Regions />
      <SupportSection />
      <MailingListSection />
      <Footer />
    </main>
  )
}
