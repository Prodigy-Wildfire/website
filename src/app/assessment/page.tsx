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
  title: "Wildfire Risk Assessment | Is Your Property Protected?",
  description:
    "Take Prodigy's wildfire risk assessment to evaluate your property's vulnerability to ember attack, radiant heat, and wildfire ignition. Discover custom protection solutions for homes and businesses in the USA, Canada, and Australia.",
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
