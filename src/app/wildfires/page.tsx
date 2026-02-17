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
  title: "Understanding Wildfires | How They Spread & How to Protect",
  description:
    "Learn how wildfires spread, why ember attack is the #1 cause of property loss, and how modern protection systems can safeguard your property.",
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
