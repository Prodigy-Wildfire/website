import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { StickyCtaBar } from "@/components/sticky-cta-bar";
import { ChatWidget } from "@/components/chat-widget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prodigywildfire.com"),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "Prodigy Wildfire | Exterior Wildfire Sprinkler Systems for Homes & Businesses",
    template: "%s | Prodigy Wildfire Solutions",
  },
  description:
    "Prodigy Wildfire provides permanent exterior wildfire sprinkler systems, ember detection, and remote activation technology to protect homes, businesses, and communities across the USA, Canada, and Australia.",
  keywords: ["wildfire protection", "exterior sprinkler system", "ember detection", "wildfire defense", "fire sprinkler", "wildfire preparedness", "USA", "Canada", "Australia"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Prodigy Wildfire Solutions",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Prodigy Wildfire Solutions - Wildfire Protection Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-default.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1d23",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Prodigy Wildfire Solutions",
              url: "https://www.prodigywildfire.com",
              logo: "https://www.prodigywildfire.com/images/pws-logo-white-text.png",
              description:
                "Prodigy Wildfire provides permanent exterior wildfire sprinkler systems, ember detection, and remote activation technology to protect homes, businesses, and communities across the USA, Canada, and Australia.",
              contactPoint: {
                "@type": "ContactPoint",
                email: "sales@prodigywildfire.com",
                contactType: "sales",
              },
              sameAs: [],
              areaServed: [
                { "@type": "Country", name: "United States" },
                { "@type": "Country", name: "Canada" },
                { "@type": "Country", name: "Australia" },
              ],
            }),
          }}
        />
        {children}
        <StickyCtaBar />
        <ChatWidget />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
