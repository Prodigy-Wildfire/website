import Image from "next/image";

export function CaseStudiesHero() {
  return (
    <section className="relative flex min-h-[60vh] items-end justify-center overflow-hidden pb-20">
      <Image
        src="/images/services-hero.jpg"
        alt="Prodigy Wildfire exterior sprinkler system installation on commercial property"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
          Our Work
        </p>
        <h1 className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          Wildfire Protection Case Studies
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
          Real installations protecting homes, resorts, and critical
          infrastructure across the USA, Canada, and Australia.
        </p>
      </div>
    </section>
  );
}
