import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Join Our Mailing List | Prodigy Wildfire Solutions",
  description:
    "Get wildfire protection insights, seasonal preparedness tips, and product updates delivered straight to your inbox.",
  openGraph: {
    title: "Join Our Mailing List | Prodigy Wildfire Solutions",
    description:
      "Get wildfire protection insights, seasonal preparedness tips, and product updates delivered straight to your inbox.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Our Mailing List | Prodigy Wildfire Solutions",
    description:
      "Get wildfire protection insights, seasonal preparedness tips, and product updates delivered straight to your inbox.",
  },
}

export default function SubscribeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
