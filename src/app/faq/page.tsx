import { Header } from "@/components/header"
import { HeroSection } from "@/components/faq/hero-section"
import { VideoFaqSection } from "@/components/faq/video-faq-section"
import { FaqSection } from "@/components/faq/faq-section"
import { ContactSection } from "@/components/faq/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "FAQ | Wildfire Sprinkler System Questions Answered",
  description:
    "Get answers to frequently asked questions about Prodigy's exterior wildfire sprinkler systems, ember detection, remote activation, water usage, and installation across the USA, Canada, and Australia.",
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
