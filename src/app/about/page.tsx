import { Header } from "@/components/header"
import { HeroSection } from "@/components/about/hero-section"
import { MissionSection } from "@/components/about/mission-section"
import { EngineeringSection } from "@/components/about/engineering-section"
import { TeamSection } from "@/components/about/team-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About Us - Wildfire Defense Experts in USA, Canada & Australia",
  description:
    "Meet the Prodigy Wildfire team redefining wildfire defense with precision-engineered exterior sprinkler systems for homes, businesses, and communities across the United States, Canada, and Australia.",
};

export default function Page() {
  return (
    <main>
      <Header />
      <HeroSection />
      <MissionSection />
      <EngineeringSection />
      <TeamSection />
      <Footer />
    </main>
  )
}
