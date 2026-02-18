import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      <Image
        src="/images/sprinkler-system.jpg"
        alt="Roof mounted wildfire protection sprinkler system"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          <span className="text-balance">About Prodigy Wildfire Solutions</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          Redefining wildfire defence for homes, businesses, and communities
          across Canada, the United States, and Australia.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block rounded bg-accent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
