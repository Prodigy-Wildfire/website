import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WildfiresHero } from "@/components/wildfires/wildfires-hero";
import { ProtectCards } from "@/components/wildfires/protect-cards";
import { ClimateSection } from "@/components/wildfires/climate-section";
import { GettingPrepared } from "@/components/wildfires/getting-prepared";
import { PreparednessTips } from "@/components/wildfires/preparedness-tips";
import { WildfireStats } from "@/components/wildfires/wildfire-stats";
import { OnTheRise } from "@/components/wildfires/on-the-rise";
import { LeadMagnetSection } from "@/components/lead-magnet-section";

export const metadata: Metadata = {
  title: "Understanding Wildfire Risks | How Wildfires Spread & How to Prepare",
  description:
    "Learn how wildfires spread through ember attack, radiant heat, and direct flame contact. Understand wildfire risks driven by climate change and discover how to protect your home and business in the USA, Canada, and Australia.",
};

export default function WildfiresPage() {
  return (
    <>
      <Header />
      <main>
        <WildfiresHero />
        <ProtectCards />
        <ClimateSection />
        <GettingPrepared />
        <PreparednessTips />
        <WildfireStats />
        <OnTheRise />
        <LeadMagnetSection />
      </main>
      <Footer />
    </>
  );
}
