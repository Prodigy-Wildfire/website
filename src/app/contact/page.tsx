import { Header } from "@/components/header"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactCta } from "@/components/contact/contact-cta"
import { Footer } from "@/components/footer"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld"

export const metadata = {
  title: "Contact Prodigy Wildfire | Schedule a Consultation",
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
      <BreadcrumbJsonLd items={[{ name: "Contact", href: "/contact" }]} />
      <Header />
      <ContactHero />

      {/* About Section */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            About <span className="text-accent">Prodigy Wildfire Solutions</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Prodigy Wildfire Solutions designs and installs custom-engineered exterior wildfire sprinkler systems for homes, businesses, and critical infrastructure across the United States, Canada, and Australia. Our permanent roof-mounted systems create a high-humidity barrier that defends against ember attack, radiant heat, and direct flame contact — the three mechanisms responsible for property loss during wildfires.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Every Prodigy system is built to the unique specifications of your property, using durable copper or stainless steel piping designed to withstand extreme conditions. With app-based remote activation, real-time fire tracking through EmberWatch, and optional fully autonomous ember detection sensors, you can protect your property from anywhere in the world — whether you are home or away.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our team has protected some of the most iconic properties and landmarks in North America and Australia. Whether you are a homeowner in a fire-prone area, a resort operator, a property developer, or a facilities manager responsible for critical infrastructure, Prodigy has the expertise and technology to safeguard what matters most.
          </p>
        </div>
      </section>

      <ContactForm />
      <ContactCta />
      <Footer />
    </main>
  )
}
