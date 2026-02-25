import Link from "next/link"
import { DollarSign, Droplets, ShieldCheck, Smartphone } from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Custom-Designed Pricing",
    description:
      "Residential systems start at around $15,000 and can range above $100,000 depending on the size of your property, the number of structures, and the water supply infrastructure needed. Every system is designed from a detailed site assessment of your roofline, terrain, vegetation, and exposure to wildfire risk.",
  },
  {
    icon: Droplets,
    title: "The Humidity Bubble",
    description:
      "A humidity bubble is a saturated zone of moisture created around a structure by an exterior wildfire sprinkler system, designed to prevent ember ignition and reduce radiant heat exposure. The Prodigy system creates this humidity bubble by saturating your roof, walls, decking, and surrounding vegetation, making every surface significantly harder to ignite.",
  },
  {
    icon: ShieldCheck,
    title: "Permanent Protection",
    description:
      "A permanently installed Prodigy system eliminates the burden and safety risks of setting up temporary systems every fire season. It is always ready, always in place, and requires no manual setup when fire danger increases.",
  },
  {
    icon: Smartphone,
    title: "Remote Activation",
    description:
      "Our systems feature remote activation through the Prodigy Wildfire app. If you have already been evacuated, you can activate your wildfire sprinkler system from another state or even another country with a single tap on your phone.",
  },
]

export function ResidentialInvestmentSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <p className="font-heading text-sm font-semibold tracking-widest uppercase text-accent mb-3">
            Protect Your Home
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Residential Wildfire Sprinkler System{" "}
            <span className="text-accent">Cost</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base leading-relaxed text-muted-foreground">
            Every home is different. Prodigy designs each system based on your
            property, delivering permanent wildfire defence with independent
            water supply, ember suppression, and remote activation.
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
            href="/consultation"
            className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
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
