import Image from "next/image";

export function OnTheRise() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <Image
        src="/images/wildfire-spread.jpg"
        alt="Wildfire spreading across dry grassland and forest"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/75" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
          Wildfires are on the <span className="text-accent">Rise.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/70 md:text-lg">
          Wildfires are becoming more frequent, more intense, and more
          destructive across the USA, Canada, and Australia. Longer fire
          seasons, extreme heat, and drier conditions are accelerating the
          threat, putting homes, businesses, and critical infrastructure at
          greater risk than ever before. Proactive wildfire protection  -
          including exterior sprinkler systems, ember detection, and remote
          activation  - is no longer optional.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/contact"
            className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Protect Your Property Now
          </a>
          <a
            href="/services"
            className="inline-block rounded border border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Explore Our Systems
          </a>
        </div>
      </div>
    </section>
  );
}
