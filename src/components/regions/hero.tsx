import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster-regions.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/images/wildfire-protection-hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary font-semibold">
          Regions | Prodigy Wildfire
        </p>
        <h1 className="font-display text-5xl font-bold uppercase leading-tight tracking-wide text-primary-foreground md:text-7xl lg:text-8xl">
          Wildfire Protection Across{" "}
          <span className="text-primary">USA, Canada</span>{" "}
          &amp; Australia
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
          From North America to Australia, Prodigy Wildfire Solutions sets the
          standard in engineered wildfire defense. Our global team builds
          world-class protection with innovation and integrity.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#regions"
            className="bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Read More
          </a>
          <a
            href="#contact"
            className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 text-sm font-semibold uppercase tracking-wider hover:border-primary-foreground/60 transition-colors"
          >
            Protect Your Property Now
          </a>
        </div>
      </div>

      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}
