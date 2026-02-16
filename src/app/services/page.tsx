import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicesHero } from "@/components/services/services-hero";
import { OurApproach } from "@/components/services/our-approach";
import { InnovationSection } from "@/components/services/innovation-section";
import { HowItWorks } from "@/components/services/how-it-works";
import { ServiceDetails } from "@/components/services/service-details";

export const metadata: Metadata = {
  title: "Wildfire Protection Services | Sprinklers, Ember Detection & Remote Activation",
  description:
    "Explore Prodigy's permanent exterior wildfire sprinkler systems, advanced ember and flame detection sensors, and remote activation technology protecting homes and businesses across the USA, Canada, and Australia.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <OurApproach />
        <InnovationSection />
        <HowItWorks />
        <ServiceDetails />
      </main>
      <Footer />
    </>
  );
}
