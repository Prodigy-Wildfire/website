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

export default function Page() {
  return (
    <main>
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
