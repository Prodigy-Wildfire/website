import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      <Image
        src="/images/wildfire-ember-attack-cayetano-gil.avif"
        alt="Wildfire ember attack demonstrating the need for regional wildfire protection"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          <span className="text-balance">Wildfire Defence Across USA, Canada &amp; Australia</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          From North America to Australia, Prodigy Wildfire Solutions sets the
          standard in engineered wildfire defence. Our global team builds
          world-class protection with innovation and integrity.
        </p>
        <div className="mt-10">
          <Link
            href="/about"
            className="inline-block rounded bg-accent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent/90"
          >
            About Prodigy
          </Link>
        </div>
      </div>
    </section>
  );
}
