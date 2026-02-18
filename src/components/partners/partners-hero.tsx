import Image from "next/image";

export function PartnersHero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      <Image
        src="/images/engineering.jpg"
        alt="Prodigy Wildfire partner installation team working on exterior sprinkler system"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          <span className="text-balance">Partner With Prodigy Wildfire Solutions</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          Join a growing network of builders, insurers, HOAs, and certified
          installers delivering wildfire protection across the USA, Canada, and
          Australia.
        </p>
        <div className="mt-10">
          <a
            href="#partner-form"
            className="inline-block rounded bg-accent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
}
