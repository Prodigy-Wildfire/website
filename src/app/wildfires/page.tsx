import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { WildfiresHero } from "@/components/wildfires/wildfires-hero";
import { ProtectCards } from "@/components/wildfires/protect-cards";
import { ClimateSection } from "@/components/wildfires/climate-section";
import { GettingPrepared } from "@/components/wildfires/getting-prepared";
import { PreparednessTips } from "@/components/wildfires/preparedness-tips";
import { WildfireStats } from "@/components/wildfires/wildfire-stats";
import { OnTheRise } from "@/components/wildfires/on-the-rise";
import { MailingListSection } from "@/components/mailing-list-section";

export const metadata: Metadata = {
  title: "Understanding Wildfires | How They Spread & How to Protect",
  description:
    "Learn how wildfires spread, why ember attack is the #1 cause of property loss, and how modern protection systems can safeguard your property.",
  alternates: { canonical: "/wildfires" },
  openGraph: {
    title: "Understanding Wildfires",
    description: "Learn how wildfires spread, why ember attack is the #1 cause of property loss, and how modern protection systems can safeguard your property.",
    images: [{ url: "/images/Wildfire-page-hero.png", width: 1200, height: 630, alt: "Wildfire spreading across landscape" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Understanding Wildfires",
    description: "Learn how wildfires spread, why ember attack is the #1 cause of property loss, and how modern protection systems can safeguard your property.",
  },
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
    {
      "@type": "DefinedTerm",
      name: "Ember Attack",
      description:
        "Ember attack is the process by which windborne burning fragments, carried ahead of a wildfire front, land on or near structures and ignite them.",
    },
    {
      "@type": "DefinedTerm",
      name: "Wildland-Urban Interface (WUI)",
      description:
        "The wildland-urban interface (WUI) is the zone where developed land meets undeveloped wildland vegetation, and where the majority of wildfire property losses occur.",
    },
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
      <BreadcrumbJsonLd items={[{ name: "Wildfires", href: "/wildfires" }]} />
      <Header />
      <main>
        <WildfiresHero />
        <ProtectCards />
        <ClimateSection />
        <GettingPrepared />
        <PreparednessTips />
        <WildfireStats />
        <OnTheRise />
        <MailingListSection />
      </main>
      <Footer />
    </>
  );
}
