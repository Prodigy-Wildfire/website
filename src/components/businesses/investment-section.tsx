import Link from "next/link"

export function InvestmentSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-8">
          <p className="font-heading text-sm font-semibold tracking-widest uppercase text-accent mb-3">
            Protect Your Investment
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Commercial Wildfire Sprinkler System{" "}
            <span className="text-accent">Cost</span>
          </h2>
        </div>

        <div className="text-base leading-relaxed text-muted-foreground space-y-5">
          <p>
            A commercial wildfire sprinkler system is not just an expense — it is
            a strategic investment in the longevity, resilience, and continuity
            of your business. Wildfire events can cause catastrophic damage to
            commercial properties, resulting in months of operational downtime,
            millions in lost revenue, and insurance claims that may not fully
            cover the cost of rebuilding. An engineered exterior wildfire
            protection system from Prodigy Wildfire Solutions safeguards your
            physical assets, protects your employees and customers, and ensures
            your business can recover faster — or avoid damage entirely.
          </p>
          <p>
            Typical commercial wildfire protection projects start at{" "}
            <strong className="text-foreground">$25,000</strong> for smaller
            single-structure installations and can range up to{" "}
            <strong className="text-foreground">$1.2 million</strong> or more
            for large-scale, multi-building campuses, critical infrastructure
            facilities, and high-complexity sites. The final cost depends on
            factors including the number of structures requiring protection,
            total roof and perimeter coverage area, water supply infrastructure,
            zone configuration, terrain and access challenges, and any
            municipal code or insurance compliance requirements specific to
            your region in the USA, Canada, or Australia.
          </p>
          <p>
            Every commercial project is unique. Whether you operate a hotel,
            resort, warehouse, healthcare facility, school, or industrial site
            in a wildfire-prone area, Prodigy Wildfire Solutions provides a
            comprehensive site assessment, custom system design, and a detailed
            proposal tailored to your property and budget. Our team will walk
            you through every aspect of the system — from design and
            installation through to ongoing maintenance and emergency
            activation protocols.
          </p>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/commercial-consultation"
            className="inline-block rounded bg-accent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent/90"
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
