import Image from "next/image"

export function ContactHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/wildfire-sprinklers-commercial.jpeg"
        alt="Wildfire burning through forest landscape"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary/35" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Get in Touch
        </p>
        <h1 className="font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
          <span className="text-balance">Protect Your Property Now.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
          Ready to safeguard your home or business from wildfire? Our team of
          experts is standing by to design a custom fire protection solution
          tailored to your property.
        </p>
      </div>
    </section>
  )
}
