import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrackingForm } from "@/components/tracking-form"
import { trackingPages } from "@/lib/tracking-pages"

export function generateStaticParams() {
  return trackingPages.map((page) => ({ slug: page.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const page = trackingPages.find((p) => p.slug === params.slug)
  if (!page) return {}

  return {
    title: page.headline || "Get Your Free Wildfire Protection Assessment",
    description:
      "Request a free wildfire protection assessment from Prodigy Wildfire Solutions. Permanent exterior sprinkler systems for homes and businesses across the USA, Canada, and Australia.",
    robots: { index: false, follow: false },
  }
}

export default function TrackingPage({
  params,
}: {
  params: { slug: string }
}) {
  const page = trackingPages.find((p) => p.slug === params.slug)
  if (!page) notFound()

  return (
    <>
      <Header />
      <main>
        <TrackingForm page={page} />
      </main>
      <Footer />
    </>
  )
}
