import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicesHero } from "@/components/services/services-hero";
import { OurApproach } from "@/components/services/our-approach";
import { InnovationSection } from "@/components/services/innovation-section";
import { HowItWorks } from "@/components/services/how-it-works";
import { ServiceDetails } from "@/components/services/service-details";

export const metadata: Metadata = {
  title: "Our Wildfire Protection Services | Prodigy Wildfire",
  description:
    "Water systems, remote activation, and ember detection technology. Prodigy delivers end-to-end wildfire defence for properties of all sizes.",
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
