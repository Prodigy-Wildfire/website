import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 md:min-h-[85vh]">
      <Image
        src="/images/hero-poster-businesses.jpg"
        alt="Commercial wildfire protection system installed on business property"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          <span className="text-balance">Commercial Wildfire Protection <span className="text-accent">Solutions</span></span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          Commercial wildfire sprinkler systems for resorts, critical
          infrastructure, and commercial properties across the USA,
          Canada, and Australia. Engineered to scale.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="https://website-ten-lilac-49.vercel.app/contact/commercial"
            className="rounded bg-accent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Request a Commercial Quote
          </Link>
          <Link
            href="/case-studies"
            className="rounded border-2 border-accent px-8 py-3.5 text-base font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
