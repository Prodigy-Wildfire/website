import Link from "next/link"

export function ResidentialInvestmentSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-8">
          <p className="font-heading text-sm font-semibold tracking-widest uppercase text-accent mb-3">
            Protect Your Home
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Residential Wildfire Sprinkler System{" "}
            <span className="text-accent">Cost</span>
          </h2>
        </div>

        <div className="text-base leading-relaxed text-muted-foreground space-y-5">
          <p>
            Residential wildfire sprinkler systems from Prodigy Wildfire
            Solutions start at around $15,000 and can range up to and above
            $100,000 depending on the size of your property, the number of
            structures requiring protection, and the water supply infrastructure
            needed. Every home is different, and our team designs each system
            based on a detailed site assessment of your roofline, terrain,
            vegetation, and exposure to wildfire risk. Where required, we provide
            pumps and tanks as part of the installation, or we can bore in a
            dedicated well to ensure your system has a reliable, independent
            water supply during a wildfire event.
          </p>
          <p>
            The Prodigy exterior wildfire sprinkler system protects your home
            from ember attack by creating a humidity bubble around the entire
            property. When activated, the system saturates your roof, walls,
            decking, and surrounding vegetation, making every surface damp and
            significantly harder to ignite. This moisture barrier prevents
            airborne embers from landing on or near your structure and catching
            fire, which is the leading cause of home ignition during wildfire
            events across the USA, Canada, and Australia. By maintaining high
            humidity levels around your home, the system neutralises ember
            attack, reduces radiant heat exposure, and provides a critical
            layer of active defence that passive measures alone cannot match.
          </p>
          <p>
            Homeowners in fire-prone areas need a permanent wildfire protection
            solution because the alternative is simply not sustainable. Setting
            up and pulling down temporary systems every year during wildfire
            season is a significant burden, and it introduces real safety risks
            for homeowners climbing ladders and working on rooftops. A
            permanently installed Prodigy system eliminates that risk entirely.
            It is always ready, always in place, and requires no manual setup
            when fire danger increases. Our systems also feature remote
            activation through the Prodigy Wildfire app, so if you have already
            been evacuated, you can activate your wildfire sprinkler system from
            another state or even another country with a single tap on your
            phone.
          </p>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/consultation"
            className="inline-block rounded bg-accent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Schedule a Consultation
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Schedule a free consultation to find out how a Prodigy system
            can protect your home from wildfire.
          </p>
        </div>
      </div>
    </section>
  )
}
