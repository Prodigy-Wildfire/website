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
  title: "Wildfire Protection by Region | Prodigy Wildfire",
  description:
    "Prodigy provides wildfire protection across high-risk regions in Canada, the United States, and Australia. Find coverage in your area.",
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
