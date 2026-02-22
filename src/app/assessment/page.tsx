import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WildfireRiskAssessment } from "@/components/assessment/wildfire-risk-assessment"

export const metadata: Metadata = {
  title: "Fire Risk Assessment | How Prepared Is Your Property?",
  description:
    "Take our free fire risk assessment to discover your property's vulnerability score and get personalized protection recommendations.",
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <WildfireRiskAssessment />
      </main>
      <Footer />
    </>
  )
}
