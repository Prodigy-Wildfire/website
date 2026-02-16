import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PartnerApplyForm } from "@/components/partners/partner-apply-form"

export const metadata: Metadata = {
  title: "HOA & Community Partner Program | Prodigy Wildfire Solutions",
  description:
    "Protect your community with coordinated wildfire defence. Prodigy partners with HOAs and community associations to design multi-property protection plans across the USA, Canada, and Australia.",
}

export default function HoaApplyPage() {
  return (
    <>
      <Header />
      <main>
        <PartnerApplyForm partnerType="hoa" />
      </main>
      <Footer />
    </>
  )
}
