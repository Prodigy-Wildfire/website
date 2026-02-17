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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Prodigy Wildfire Solutions",
    url: "https://www.prodigywildfire.com",
    email: "sales@prodigywildfire.com",
    image: "https://www.prodigywildfire.com/images/pws-logo-white-text.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Whistler",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "sales@prodigywildfire.com",
        contactType: "sales",
        availableLanguage: "English",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <ContactHero />
      <ContactForm />
      <ContactCta />
      <Footer />
    </main>
  )
}
