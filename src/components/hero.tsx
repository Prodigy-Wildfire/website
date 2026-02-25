import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 md:min-h-[85vh]">
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
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          <span className="text-balance">Wildfire Protection <span className="text-accent">Systems</span></span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          For Homes &amp; Businesses Across the USA, Canada &amp; Australia
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/consultation"
            className="rounded bg-accent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Schedule a Consultation
          </Link>
          <Link
            href="https://website-ten-lilac-49.vercel.app/assessment"
            className="rounded border-2 border-accent px-8 py-3.5 text-base font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Take the Wildfire Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
