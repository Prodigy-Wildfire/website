import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/sprinkler-system.jpg"
        alt="Roof mounted wildfire protection sprinkler system"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-background/35" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block">About</span>
          <span className="block text-primary">Prodigy Wildfire</span>
          <span className="block">Redefining</span>
          <span className="block">Wildfire Defense</span>
        </h1>

        <a
          href="#mission"
          className="mt-12 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          LEARN MORE
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-primary py-4">
        <p className="text-center text-sm font-semibold text-primary-foreground tracking-wide">
          Protect Your Property Now.
        </p>
      </div>
    </section>
  )
}
