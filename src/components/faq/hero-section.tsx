import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <Image
        src="/images/wildfire-protection-faq-hero.avif"
        alt="Prodigy Wildfire sprinkler system protecting property from wildfire"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary/65" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-balance font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Wildfire Protection FAQ
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/70">
            Get in touch with our team. Share a question, make a request, or
            provide feedback. Our Wildfire Protection Specialists are here to
            help.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Protect Your Property Now
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
