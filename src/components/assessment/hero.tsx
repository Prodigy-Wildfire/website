import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/images/hero_wildfire.mov" type="video/quicktime" />
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/35" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center">
        <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
          <span className="text-balance">
            Prepare. Protect.{" "}
            <span className="text-primary">Prodigy.</span>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed md:text-xl">
          Redefining Wildfire Defense
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://quiz.prodigywildfire.com/wildfirereadiness"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Protect Your Property Now
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
