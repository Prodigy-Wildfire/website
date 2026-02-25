import Link from "next/link";

export function CtaBanner() {
  return (
    <section id="contact" className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          Contact Our <span className="text-accent">Team</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
          Ready to protect your property? Our wildfire specialists are standing
          by to design a custom solution for your home, business, or community.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/consultation"
            className="rounded bg-accent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Schedule a Consultation
          </Link>
          <a
            href="mailto:sales@prodigywildfire.com"
            className="rounded border-2 border-accent px-8 py-3.5 text-base font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
