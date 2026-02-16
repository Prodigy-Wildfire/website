import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { PreparednessSection } from "@/components/preparedness-section";
import { EmberSection } from "@/components/ember-section";
import { ProtectSection } from "@/components/protect-section";
import { ServicesCards } from "@/components/services-cards";
import { WhyProdigy } from "@/components/why-prodigy";
import { FactsSection } from "@/components/facts-section";
import { StatsBar } from "@/components/stats-bar";
import { TrustedSection } from "@/components/trusted-section";
import { LeadMagnetSection } from "@/components/lead-magnet-section";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Wildfire Protection Systems for Homes & Businesses | USA, Canada & Australia",
  description:
    "Prodigy Wildfire delivers permanent exterior sprinkler systems, real-time ember detection, and remote activation technology to defend homes, businesses, and critical infrastructure from wildfire across the United States, Canada, and Australia.",
};

export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <PreparednessSection />
        <EmberSection />
        <ProtectSection />
        <ServicesCards />
        <WhyProdigy />
        <LeadMagnetSection />
        <FactsSection />
        <StatsBar />
        <TrustedSection />
      </main>
      <Footer />
    </div>
  );
}
