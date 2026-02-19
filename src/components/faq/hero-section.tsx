import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 md:min-h-[85vh]">
      <Image
        src="/images/wildfire-getting-prepared-truettner.avif"
        alt="Prodigy Wildfire sprinkler system protecting property from wildfire"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary/65" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          <span className="text-balance">Wildfire Protection <span className="text-accent">FAQ</span></span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          Find answers to the most common questions about our exterior wildfire
          sprinkler systems, installation process, water usage, remote
          monitoring, and property protection.
        </p>
        <div className="mt-10">
          <a
            href="#faq"
            className="inline-block rounded bg-accent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent/90"
          >
            View Questions
          </a>
        </div>
      </div>
    </section>
  )
}
