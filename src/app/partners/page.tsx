import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PartnersHero } from "@/components/partners/partners-hero";
import { BenefitsGrid } from "@/components/partners/benefits-grid";
import { PartnerTypes } from "@/components/partners/partner-types";
import { PartnerForm } from "@/components/partners/partner-form";

export const metadata: Metadata = {
  title: "Partner With Prodigy | Wildfire Protection Installer & Reseller Program",
  description:
    "Join Prodigy Wildfire's partner program for builders, insurance companies, HOAs, and certified installers. Offer exterior wildfire sprinkler systems to your clients across the USA, Canada, and Australia.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Partner With Prodigy Wildfire",
  description:
    "Join Prodigy Wildfire's partner program for builders, insurance companies, HOAs, and certified installers.",
  mainEntity: {
    "@type": "Organization",
    name: "Prodigy Wildfire Solutions",
    url: "https://www.prodigywildfire.com",
    memberOf: [
      { "@type": "ProgramMembership", name: "Certified Installer Program" },
      { "@type": "ProgramMembership", name: "Builder Partner Program" },
      { "@type": "ProgramMembership", name: "Insurance Partner Program" },
      { "@type": "ProgramMembership", name: "HOA Partner Program" },
    ],
  },
};

export default function PartnersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <PartnersHero />
        <BenefitsGrid />
        <PartnerTypes />
        <PartnerForm />
      </main>
      <Footer />
    </>
  );
}
