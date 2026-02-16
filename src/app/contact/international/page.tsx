import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InternationalForm } from "@/components/contact/international-form"

export const metadata: Metadata = {
  title: "International Inquiry | Wildfire Protection Beyond USA, Canada & Australia",
  description:
    "Interested in Prodigy wildfire protection outside of the USA, Canada, or Australia? Register your interest and we'll explore what's possible in your region.",
}

export default function InternationalContactPage() {
  return (
    <>
      <Header />
      <main>
        <InternationalForm />
      </main>
      <Footer />
    </>
  )
}
