import Image from "next/image";
import Link from "next/link";

export function ServicesHero() {
  return (
    <section className="relative flex min-h-[85vh] items-end justify-center overflow-hidden pb-24">
      <Image
        src="/images/services-hero.jpg"
        alt="Prodigy wildfire sprinkler system installed on residential roofline"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary/35" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          <span className="text-balance">Wildfire Protection Services</span>
          <br />
          <span className="text-accent">Wildfire Sprinkler Systems, Remote Activation &amp; Ember Detection</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          At Prodigy Wildfire Solutions, we provide permanent exterior wildfire
          protection systems designed to defend homes, businesses, and critical
          infrastructure from ember ignition, radiant heat, and direct flame
          contact.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block rounded bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Protect Your Property Now.
          </Link>
        </div>
      </div>
    </section>
  );
}
