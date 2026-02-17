import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      <Image
        src="/images/prodigy-global-connections.png"
        alt="Prodigy Wildfire global coverage map showing service areas across USA, Canada, and Australia"
        fill
        sizes="100vw"
        className="object-cover object-top"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] font-semibold text-accent">
          Regions | Prodigy Wildfire
        </p>
        <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          Wildfire Protection Across{" "}
          <span className="text-accent">USA, Canada</span>{" "}
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
            className="rounded bg-accent px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Read More
          </a>
          <a
            href="#contact"
            className="rounded border border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Protect Your Property Now
          </a>
        </div>
      </div>

      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-primary-foreground/60 transition-colors hover:text-primary-foreground"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
}
