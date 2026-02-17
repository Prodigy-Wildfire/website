import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/assessment/hero";
import { QuizCta } from "@/components/assessment/quiz-cta";
import { HowItWorks } from "@/components/assessment/how-it-works";
import { EmberAttack } from "@/components/assessment/ember-attack";
import { Protection } from "@/components/assessment/protection";
import { Features } from "@/components/assessment/features";
import { WhyProdigy } from "@/components/assessment/why-prodigy";
import { Facts } from "@/components/assessment/facts";
import { Stats } from "@/components/assessment/stats";
import { TrustedBy } from "@/components/assessment/trusted-by";

export const metadata = {
  title: "Wildfire Readiness Quiz | How Prepared Is Your Property?",
  description:
    "Take our wildfire readiness assessment to discover your property's vulnerability score and get personalized protection recommendations.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Wildfire Readiness Quiz",
  url: "https://quiz.prodigywildfire.com/wildfirereadiness",
  description:
    "Take our wildfire readiness assessment to discover your property's vulnerability score and get personalized protection recommendations.",
  applicationCategory: "UtilityApplication",
  operatingSystem: "All",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  provider: {
    "@type": "Organization",
    name: "Prodigy Wildfire Solutions",
    url: "https://www.prodigywildfire.com",
  },
};

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <QuizCta />
      <HowItWorks />
      <EmberAttack />
      <Protection />
      <Features />
      <WhyProdigy />
      <Facts />
      <Stats />
      <TrustedBy />
      <Footer />
    </main>
  );
}
