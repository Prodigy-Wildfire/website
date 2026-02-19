import Image from "next/image";

export function CaseStudiesHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 md:min-h-[85vh]">
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
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          <span className="text-balance">Wildfire Protection <span className="text-accent">Case Studies</span></span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          Real installations protecting homes, resorts, and critical
          infrastructure across the USA, Canada, and Australia.
        </p>
      </div>
    </section>
  );
}
