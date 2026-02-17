import Image from "next/image";

export function PartnersHero() {
  return (
    <section className="relative flex min-h-[60vh] items-end justify-center overflow-hidden pb-20">
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
        <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
          Partner Program
        </p>
        <h1 className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          Partner With Prodigy Wildfire
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
          Join a growing network of builders, insurers, HOAs, and certified
          installers delivering wildfire protection across the USA, Canada, and
          Australia.
        </p>
        <a
          href="#partner-form"
          className="mt-8 inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
        >
          Become a Partner
        </a>
      </div>
    </section>
  );
}
