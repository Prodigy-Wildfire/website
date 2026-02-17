import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster-home.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/images/wildfire-hero-canada-australia-usa.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-primary/35" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
          <span className="text-balance">Wildfire Protection Systems</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
          For Homes &amp; Businesses Across the USA, Canada &amp; Australia
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="rounded bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Protect Your Property Now.
          </Link>
          <Link
            href="https://quiz.prodigywildfire.com/wildfirereadiness"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-primary-foreground/30 px-8 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Take the Quiz
          </Link>
        </div>
      </div>
    </section>
  );
}
