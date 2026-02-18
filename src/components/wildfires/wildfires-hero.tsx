import Image from "next/image";
import Link from "next/link";

export function WildfiresHero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      <Image
        src="/images/wildfire-ember-attack-cayetano-gil.avif"
        alt="Intense wildfire ember attack with burning embers flying through the air"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary/50" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          <span className="text-balance">How Wildfires Spread</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          How wildfires start, how they spread, and what you can do to prepare
          and protect your property across the United States, Canada, and
          Australia.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#emergency-plan"
            className="rounded bg-accent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Read the Emergency Plan
          </a>
          <Link
            href="/assessment"
            className="rounded border-2 border-accent px-8 py-3.5 text-base font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Take the Wildfire Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
