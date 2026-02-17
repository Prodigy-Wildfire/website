import { Header } from "@/components/header"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactCta } from "@/components/contact/contact-cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contact Prodigy Wildfire | Get a Quote",
  description:
    "Get in touch with Prodigy Wildfire for a property assessment and custom wildfire protection quote. Serving USA, Canada, and Australia.",
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
