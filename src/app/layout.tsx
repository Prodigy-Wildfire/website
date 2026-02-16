import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
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
        {children}
        <StickyCtaBar />
        <ChatWidget />
      </body>
    </html>
  );
}
