import Image from "next/image"
import { Shield, Smartphone, Eye } from "lucide-react"

const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Engineered Wildfire Protection",
    description:
      "Custom-engineered exterior roof-mounted sprinkler systems designed to defend homes and businesses from ember attack, radiant heat, and direct flame contact.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Remote Activation & Ember Watch",
    description:
      "Control your wildfire sprinkler system from anywhere in the world with the Prodigy app. Real-time fire tracking, alerts, and one-tap activation when every second counts.",
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Advanced Ember Detection",
    description:
      "24/7 automated monitoring with next-generation sensors providing 360-degree perimeter scanning to detect embers and flame activity before they reach your property.",
  },
]

export function ContactCta() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Features */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Why Prodigy
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              A Fully Custom Approach to Wildfire Protection
            </span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-sm border border-border p-8 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {feature.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-20 overflow-hidden rounded-sm">
          <Image
            src="/images/sprinkler-system.jpg"
            alt="Prodigy fire sprinkler system protecting a home"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-secondary/90" />
          <div className="relative z-10 px-8 py-16 text-center md:py-20">
            <h3 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
              90% of Wildfire Damage is Caused by Ember Attack
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">
              Embers can travel over 12.5 miles ahead of the flames, igniting
              roofs, decks, vents, and siding. Prodigy&apos;s exterior wildfire
              sprinkler systems protect your roofline  - the number one point of
              ignition  - for homes and businesses across the USA, Canada, and
              Australia.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start Your Protection Plan
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
