export function CtaBanner() {
  return (
    <section id="contact" className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-primary-foreground md:text-5xl text-balance">
          Contact Our Team
        </h2>
        <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
          Ready to protect your property? Our wildfire specialists are standing
          by to design a custom solution for your home, business, or community.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:sales@prodigywildfire.com"
            className="bg-background text-foreground px-8 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-background/90 transition-colors"
          >
            Email Us
          </a>
          <a
            href="tel:+1-800-000-0000"
            className="border border-primary-foreground/40 text-primary-foreground px-8 py-3.5 text-sm font-semibold uppercase tracking-wider hover:border-primary-foreground/70 transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
