import Link from "next/link"
import { DollarSign, Building2, FileCheck, Wrench } from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Investment Range",
    description:
      "Commercial wildfire protection projects start at $25,000 for smaller single-structure installations and can range up to $1.2 million or more for large-scale, multi-building campuses, critical infrastructure, and high-complexity sites.",
  },
  {
    icon: Building2,
    title: "Strategic Asset Protection",
    description:
      "A commercial wildfire sprinkler system is a strategic investment in the longevity, resilience, and continuity of your business. It safeguards physical assets, protects employees and customers, and ensures your business can recover faster or avoid damage entirely.",
  },
  {
    icon: FileCheck,
    title: "Custom Proposals",
    description:
      "Whether you operate a hotel, resort, warehouse, healthcare facility, school, or industrial site, Prodigy provides a comprehensive site assessment, custom system design, and a detailed proposal tailored to your property and budget.",
  },
  {
    icon: Wrench,
    title: "Cost Factors",
    description:
      "Final cost depends on the number of structures, total roof and perimeter coverage, water supply infrastructure, zone configuration, terrain and access challenges, and any municipal code or insurance compliance requirements specific to your region.",
  },
]

export function InvestmentSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <p className="font-heading text-sm font-semibold tracking-widest uppercase text-accent mb-3">
            Protect Your Investment
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Commercial Wildfire Sprinkler System{" "}
            <span className="text-accent">Cost</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base leading-relaxed text-muted-foreground">
            Every commercial project is unique. Prodigy engineers each system
            for your exact requirements, from single-building installations to
            multi-structure campus deployments across the USA, Canada, and
            Australia.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="rounded border border-border bg-card p-8 transition-all hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/commercial-consultation"
            className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Request a Commercial Consultation
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Schedule a free consultation to receive a tailored proposal for
            your commercial wildfire protection needs.
          </p>
        </div>
      </div>
    </section>
  )
}
