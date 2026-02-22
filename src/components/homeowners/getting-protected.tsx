import Link from "next/link";
import { DollarSign, Clock, ClipboardCheck, Ruler, Wrench } from "lucide-react";

const faqs = [
  {
    icon: DollarSign,
    title: "How Much Does a Wildfire Protection System Cost?",
    description:
      "Residential pricing depends on your property size, roof complexity, number of sprinkler zones required, water supply location, and local installation standards. Systems in the United States, Canada, and Australia are priced to reflect regional materials and labour. We provide a detailed quote after your free home assessment, so you know exactly what to expect.",
  },
  {
    icon: Clock,
    title: "How Long Does It Last?",
    description:
      "Prodigy residential systems are built with Type L copper (316 Stainless steel in Australia) piping and commercial-grade components designed for decades of service. Every part is serviceable and replaceable. Our optional annual maintenance program includes a spring commissioning check, system flush, nozzle inspection, and winterisation in cold climates to keep your system ready year after year.",
  },
];

const steps = [
  {
    icon: ClipboardCheck,
    title: "Home Assessment",
    description:
      "We assess your property to identify ember entry points, defensible space gaps, roof exposure zones, and water supply options. Depending on your location, this can be done on-site with one of our surveyors or remotely using satellite imagery and a guided virtual walkthrough. Either way, you get a detailed protection plan designed specifically for your property.",
  },
  {
    icon: Ruler,
    title: "Custom Home Design",
    description:
      "We engineer a sprinkler layout specific to your roofline, ridge lines, and property shape. Every system is designed to meet NFPA wildfire protection standards while sitting discreetly along your roofline.",
  },
  {
    icon: Wrench,
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

        <div className="grid gap-8 md:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.title}
              className="rounded border border-border bg-card p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-accent/10">
                <faq.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-card-foreground">
                {faq.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {faq.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="mb-8 text-center font-heading text-2xl font-bold tracking-tight text-foreground">
            Our Residential Process
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded border border-border bg-card p-8"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                    {i + 1}
                  </div>
                  <step.icon className="h-5 w-5 text-accent" />
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
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/system"
            className="rounded border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Learn About Our Systems
          </Link>
          <Link
            href="/quote"
            className="rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Book Your Free Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
