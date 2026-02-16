import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/images/Banff Gondola Wildfire Sprinkler.MOV" type="video/mp4" />
        <source src="/images/Banff Gondola Wildfire Sprinkler.MOV" type="video/quicktime" />
      </video>
      <div className="absolute inset-0 bg-background/35" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
          Commercial Wildfire Defence
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight text-balance">
          Protect<br />
          <span className="text-primary">Your Business</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed">
          Commercial-grade wildfire suppression systems for resorts, critical
          infrastructure, and commercial properties across the United States,
          Canada, and Australia. Engineered to scale.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="/contact/commercial"
            className="rounded bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request a Commercial Assessment
          </Link>
          <Link
            href="/case-studies"
            className="rounded border border-foreground/30 px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
