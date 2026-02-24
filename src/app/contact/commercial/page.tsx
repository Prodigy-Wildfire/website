import { Header } from "@/components/header"
import { CommercialForm } from "@/components/contact/commercial-form"
import { Footer } from "@/components/footer"
import Image from "next/image"

export const metadata = {
  title: "Commercial Wildfire Protection Quote | Prodigy Wildfire Solutions",
  description:
    "Request a commercial wildfire protection assessment for your business, resort, campus, or critical infrastructure. Custom proposals for properties across the USA, Canada, and Australia.",
}

export default function CommercialContactPage() {
  return (
    <main>
      <Header />
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/wildfire-sprinklers-commercial.jpeg"
          alt="Commercial wildfire protection system installation"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-secondary/35" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Commercial Inquiries
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">Protect Your Business</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
            From single-building installations to multi-site portfolio
            deployments, our commercial team will design a wildfire suppression
            system engineered for your operations.
          </p>
        </div>
      </section>
      <CommercialForm />
      <Footer />
    </main>
  )
}
