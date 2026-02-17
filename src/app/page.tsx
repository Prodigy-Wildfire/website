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
  title: "Prodigy Wildfire | Wildfire Protection Systems for Homes & Businesses",
  description:
    "Protect your property with Prodigy's engineered wildfire sprinkler systems. Remotely activated, ember-proof protection across USA, Canada & Australia.",
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
