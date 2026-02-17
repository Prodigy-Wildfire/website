import { Header } from "@/components/header"
import { HeroSection } from "@/components/about/hero-section"
import { MissionSection } from "@/components/about/mission-section"
import { EngineeringSection } from "@/components/about/engineering-section"
import { TeamSection } from "@/components/about/team-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About Prodigy Wildfire | The Future of Wildfire Protection",
  description:
    "Meet the team redefining wildfire defense across North America and Australia. Engineering excellence meets innovation in every installation.",
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
