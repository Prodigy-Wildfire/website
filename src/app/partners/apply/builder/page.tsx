import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PartnerApplyForm } from "@/components/partners/partner-apply-form"

export const metadata: Metadata = {
  title: "Builder & Contractor Partner Program | Prodigy Wildfire Solutions",
  description:
    "Join Prodigy's builder and contractor partner program. Integrate wildfire protection systems into new builds and renovations across the USA, Canada, and Australia.",
}

export default function BuilderApplyPage() {
  return (
    <>
      <Header />
      <main>
        <PartnerApplyForm partnerType="builder" />
      </main>
      <Footer />
    </>
  )
}
