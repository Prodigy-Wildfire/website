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

export default function PartnersPage() {
  return (
    <>
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
