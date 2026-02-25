import Link from "next/link";

const steps = [
  {
    title: "Home Assessment",
    description:
      "We assess your property to identify ember entry points, defensible space gaps, roof exposure zones, and water supply options. Depending on your location, this can be done on-site with one of our surveyors or remotely using satellite imagery and a guided virtual walkthrough. Either way, you get a detailed protection plan designed specifically for your property.",
  },
  {
    title: "Custom Home Design",
    description:
      "We engineer a sprinkler layout specific to your roofline, ridge lines, and property shape. Every system is designed to meet NFPA wildfire protection standards while sitting discreetly along your roofline.",
  },
  {
    title: "Residential Installation",
    description:
      "Our team installs discreet copper piping along rooflines and ridges in a single day for most homes, with minimal disruption to your landscaping. You receive full training on system operation, app activation, and seasonal maintenance.",
  },
];

export function GettingProtected() {
  return (
      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              From Assessment to <span className="text-accent">Installation</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              Our residential protection process is designed to be straightforward
              and stress-free. From your first home assessment to a fully
              operational system, we handle every step.
            </p>
          </div>

          <div className="mb-8 text-center font-heading text-2xl font-bold tracking-tight text-foreground">
            Our Residential Process
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center rounded border border-border bg-card p-8 text-center"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {i + 1}
                </div>
                <h4 className="font-heading text-lg font-semibold text-card-foreground">
                  {step.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/systems"
              className="rounded border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Learn About Our Systems
            </Link>
            <Link
              href="/consultation"
              className="rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
  );
}
