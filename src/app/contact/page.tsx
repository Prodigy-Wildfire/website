import { Header } from "@/components/header"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactCta } from "@/components/contact/contact-cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contact Us | Get a Free Wildfire Protection Assessment",
  description:
    "Contact Prodigy Wildfire Solutions for a personalized wildfire defense assessment. Serving homeowners and businesses across the USA, Canada, and Australia with custom exterior sprinkler systems.",
};

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactHero />
      <ContactForm />
      <ContactCta />
      <Footer />
    </main>
  )
}
