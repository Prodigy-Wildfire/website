import { Header } from "@/components/header"
import { HeroSection } from "@/components/businesses/hero-section"
import { StatsSection } from "@/components/businesses/stats-section"
import { FactsSection } from "@/components/businesses/facts-section"
import { WhyProdigySection } from "@/components/businesses/why-prodigy-section"
import { GettingProtectedSection } from "@/components/businesses/getting-protected-section"
import { ProcessSection } from "@/components/businesses/process-section"
import { LeadMagnetSection } from "@/components/lead-magnet-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Commercial Wildfire Protection | Prodigy Wildfire",
  description:
    "Protect your commercial property with engineered wildfire defense systems. Full-service from design through installation and year-round maintenance.",
};

export default function Page() {
  return (
    <main>
      <Header />
      <HeroSection />
      <StatsSection />
      <FactsSection />
      <WhyProdigySection />
      <GettingProtectedSection />
      <ProcessSection />
      <LeadMagnetSection />
      <Footer />
    </main>
  )
}
