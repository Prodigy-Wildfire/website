import Image from "next/image";
import Link from "next/link";

export function WildfiresHero() {
  return (
    <section className="relative flex min-h-[85vh] items-end overflow-hidden pb-24">
      <Image
        src="/images/Jasper national park.png"
        alt="Wildfire devastation in Jasper National Park showing burned forest and the Athabasca River valley"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary/50" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
          Education &amp; Awareness
        </p>
        <h1 className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
          Understanding Wildfire
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
          How wildfires start, how they spread, and what you can do to prepare
          and protect your property across the United States, Canada, and
          Australia.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#emergency-plan"
            className="rounded bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Read the Emergency Plan
          </a>
          <Link
            href="https://quiz.prodigywildfire.com/wildfirereadiness"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-primary-foreground/30 px-8 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Take the Readiness Quiz
          </Link>
        </div>
      </div>
    </section>
  );
}
