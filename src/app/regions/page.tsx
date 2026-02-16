import { Header } from "@/components/header"
import { Hero } from "@/components/regions/hero"
import { Stats } from "@/components/regions/stats"
import { Facts } from "@/components/regions/facts"
import { WhyProdigy } from "@/components/regions/why-prodigy"
import { Regions } from "@/components/regions/regions"
import { SupportSection } from "@/components/regions/support-section"
import { CtaBanner } from "@/components/regions/cta-banner"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Service Regions | Wildfire Protection in USA, Canada & Australia",
  description:
    "Prodigy Wildfire provides custom-engineered exterior sprinkler systems and wildfire defense solutions for homes, businesses, and communities across the United States, Canada, and Australia.",
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Facts />
      <WhyProdigy />
      <Regions />
      <SupportSection />
      <CtaBanner />
      <Footer />
    </main>
  )
}
