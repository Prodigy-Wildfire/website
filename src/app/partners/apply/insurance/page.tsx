import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PartnerApplyForm } from "@/components/partners/partner-apply-form"

export const metadata: Metadata = {
  title: "Insurance Partner Program | Prodigy Wildfire Solutions",
  description:
    "Partner with Prodigy to reduce wildfire risk exposure for your policyholders. Offer proven exterior sprinkler systems that lower structure ignition risk across the USA, Canada, and Australia.",
}

export default function InsuranceApplyPage() {
  return (
    <>
      <Header />
      <main>
        <PartnerApplyForm partnerType="insurance" />
      </main>
      <Footer />
    </>
  )
}
