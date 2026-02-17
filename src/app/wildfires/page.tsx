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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Wildfires Spread and How to Protect Against Them",
  description:
    "Learn how wildfires spread, why ember attack is the #1 cause of property loss, and how modern protection systems can safeguard your property.",
  author: {
    "@type": "Organization",
    name: "Prodigy Wildfire Solutions",
    url: "https://www.prodigywildfire.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Prodigy Wildfire Solutions",
    logo: {
      "@type": "ImageObject",
      url: "https://www.prodigywildfire.com/images/pws-logo-white-text.png",
    },
  },
  mainEntityOfPage: "https://www.prodigywildfire.com/wildfires",
  about: [
    { "@type": "Thing", name: "Wildfire" },
    { "@type": "Thing", name: "Ember Attack" },
    { "@type": "Thing", name: "Wildfire Preparedness" },
  ],
};

export default function WildfiresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
