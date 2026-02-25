import { Header } from "@/components/header"
import { HeroSection } from "@/components/faq/hero-section"
import { VideoFaqSection } from "@/components/faq/video-faq-section"
import { ContactSection } from "@/components/faq/contact-section"
import { Footer } from "@/components/footer"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld"

export const metadata = {
  title: "Wildfire Protection FAQ | Prodigy Wildfire",
  description:
    "Answers to common questions about wildfire sprinkler systems, installation, costs, maintenance, and how Prodigy protects your property.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Wildfire Protection FAQ | Prodigy Wildfire",
    description:
      "Answers to common questions about wildfire sprinkler systems, installation, costs, maintenance, and how Prodigy protects your property.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wildfire Protection FAQ | Prodigy Wildfire",
    description:
      "Answers to common questions about wildfire sprinkler systems, installation, costs, maintenance, and how Prodigy protects your property.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I still need a wildfire sprinkler system if my roof is metal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Metal roofs resist sparks but don't stop homes from igniting via airborne embers, radiant heat, or vulnerable openings like vents and eaves. Prodigy's exterior wildfire sprinkler system protects the entire structure by creating a high-humidity zone that cools surfaces and prevents embers from starting fires.",
      },
    },
    {
      "@type": "Question",
      name: "When is the best time to activate my system during a wildfire event?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upon receiving your evacuation notice we recommend monitoring your local wildfire app so you can track the live movements of the fire. We also offer fully autonomous systems equipped with thermal imaging and AI monitoring that can detect heat signatures up to 15 kilometers away and automatically activate protection.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I invest in this system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because wildfire protection works best in layers. Even with a metal roof or cleared vegetation, embers and radiant heat can still ignite your property. The Prodigy system provides the final active defence when passive measures aren't enough.",
      },
    },
    {
      "@type": "Question",
      name: "Does the system run continuously or in cycles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On installation we carry out a runtime test, and off the back of that we give you your programmable cycle times. This approach conserves water while still keeping humidity levels high enough to block embers and radiant heat.",
      },
    },
    {
      "@type": "Question",
      name: "How much water does an exterior wildfire sprinkler system use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prodigy's wildfire sprinkler systems are engineered for maximum water efficiency. Using programmable cycle times and precision nozzle placement, our systems use significantly less water than a single fire truck, yet provide comprehensive property coverage.",
      },
    },
    {
      "@type": "Question",
      name: "How do I monitor my wildfire protection system remotely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every Prodigy wildfire protection system comes with app-based remote monitoring and activation technology. From anywhere in the world, you can check system status, receive real-time EmberWatch alerts, run activation cycles, and control your exterior sprinkler system with one tap.",
      },
    },
    {
      "@type": "Question",
      name: "Does a wildfire sprinkler system increase my property value?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A Prodigy exterior wildfire sprinkler system is widely regarded as a premium property feature that enhances resale value, particularly in fire-prone areas. It can also help with insurance eligibility and premiums in high-risk wildfire zones.",
      },
    },
    {
      "@type": "Question",
      name: "Can I draw water from a nearby lake?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Prodigy's app-controlled, gas-powered fire pump lets you draw unlimited water from lakes for wildfire protection. Our team will guide you through any required permissions or permits.",
      },
    },
    {
      "@type": "Question",
      name: "What falls under homeowner responsibility?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prodigy offers a one-year service plan standard with installations, covering winterisation and spring activation. After that, most clients choose our subscription model, which keeps Prodigy responsible for ongoing system maintenance. Alternatively, you can manage winterisation and spring activation yourself.",
      },
    },
  ],
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BreadcrumbJsonLd items={[{ name: "FAQ", href: "/faq" }]} />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <VideoFaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
