import Image from "next/image"

export function ContactHero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      <Image
        src="/images/wildfire-sprinklers-commercial.jpeg"
        alt="Wildfire burning through forest landscape"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          <span className="text-balance">Contact Prodigy Wildfire Solutions</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          Ready to safeguard your home or business from wildfire? Our team of
          experts is standing by to design a custom fire protection solution
          tailored to your property.
        </p>
      </div>
    </section>
  )
}
