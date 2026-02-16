import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PartnerApplyForm } from "@/components/partners/partner-apply-form"

export const metadata: Metadata = {
  title: "Certified Installer Program | Prodigy Wildfire Solutions",
  description:
    "Become a Prodigy-certified wildfire sprinkler installer. Receive full training, certification, and ongoing support to install and maintain systems across the USA, Canada, and Australia.",
}

export default function InstallerApplyPage() {
  return (
    <>
      <Header />
      <main>
        <PartnerApplyForm partnerType="installer" />
      </main>
      <Footer />
    </>
  )
}
