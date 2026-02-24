import type { Metadata } from "next"
import Image from "next/image"
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
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
          <Image
            src="/images/wildfire-sprinklers-commercial.jpeg"
            alt="Wildfire protection systems"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/35" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              International Inquiries
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              <span className="text-balance">Expanding Worldwide</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
              Our teams currently operate in the USA, Canada, and Australia, but
              we{"'"}re actively expanding. Register your interest and we{"'"}ll
              reach out as we grow into your region.
            </p>
          </div>
        </section>
        <InternationalForm />
      </main>
      <Footer />
    </>
  )
}
