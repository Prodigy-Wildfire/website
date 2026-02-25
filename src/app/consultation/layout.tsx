import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Schedule a Free Consultation | Prodigy Wildfire Solutions",
  description:
    "Schedule a free consultation with Prodigy Wildfire Solutions. Get a custom wildfire protection proposal for your home or business in the USA, Canada, or Australia.",
  alternates: { canonical: "/consultation" },
  openGraph: {
    title: "Schedule a Free Consultation | Prodigy Wildfire Solutions",
    description:
      "Schedule a free consultation with Prodigy Wildfire Solutions. Get a custom wildfire protection proposal for your home or business in the USA, Canada, or Australia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Schedule a Free Consultation | Prodigy Wildfire Solutions",
    description:
      "Schedule a free consultation with Prodigy Wildfire Solutions. Get a custom wildfire protection proposal for your home or business in the USA, Canada, or Australia.",
  },
}

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
