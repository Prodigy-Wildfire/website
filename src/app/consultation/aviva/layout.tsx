import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviva Customer Consultation | Prodigy Wildfire Solutions",
  description:
    "Exclusive consultation for Aviva insurance customers. Get a custom wildfire protection proposal from Prodigy Wildfire Solutions, tailored to your home and policy.",
  alternates: { canonical: "/consultation/aviva" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Aviva Customer Consultation | Prodigy Wildfire Solutions",
    description:
      "Exclusive consultation for Aviva insurance customers. Get a custom wildfire protection proposal from Prodigy Wildfire Solutions, tailored to your home and policy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviva Customer Consultation | Prodigy Wildfire Solutions",
    description:
      "Exclusive consultation for Aviva insurance customers. Get a custom wildfire protection proposal from Prodigy Wildfire Solutions, tailored to your home and policy.",
  },
}

export default function AvivaConsultationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
