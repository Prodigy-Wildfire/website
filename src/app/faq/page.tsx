import { Header } from "@/components/header"
import { HeroSection } from "@/components/faq/hero-section"
import { VideoFaqSection } from "@/components/faq/video-faq-section"
import { FaqSection } from "@/components/faq/faq-section"
import { ContactSection } from "@/components/faq/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Wildfire Protection FAQ | Prodigy Wildfire",
  description:
    "Answers to common questions about wildfire sprinkler systems, installation, costs, maintenance, and how Prodigy protects your property.",
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <VideoFaqSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
