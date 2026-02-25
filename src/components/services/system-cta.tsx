import Link from "next/link";

export function SystemCta() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          Ready to <span className="text-accent">Protect</span> Your Property?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
          Getting started is simple. Request a free property assessment and our
          team will survey your property, design a custom wildfire protection
          system, and provide a detailed quote. From assessment to installation,
          we handle every step.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/consultation"
            className="rounded bg-accent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Schedule a Consultation
          </Link>
          <Link
            href="/contact"
            className="rounded border-2 border-accent px-8 py-3.5 text-base font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
