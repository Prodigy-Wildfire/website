import Image from "next/image"
import Link from "next/link"
import { Shield, Smartphone, Eye } from "lucide-react"

const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "A Customised Approach to Wildfire Protection",
    description:
      "Custom-engineered exterior roof-mounted sprinkler systems designed to defend homes and businesses from ember attack, radiant heat, and direct flame contact.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Remote Activation and Fire Alerts",
    description:
      "Control your wildfire sprinkler system from anywhere in the world with the Prodigy Wildfire app. Get real-time fire tracking and alerts using Prodigy Wildfire's EmberWatch for when every second counts.",
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
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Features */}
        <div className="mb-14 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            A Fully Custom Approach to{" "}
            <span className="text-accent">Wildfire Protection</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded border border-border bg-card p-8 text-center transition-all hover:shadow-lg"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
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
        <div className="relative mt-20 overflow-hidden rounded">
          <Image
            src="/images/sprinkler-system.jpg"
            alt="Prodigy fire sprinkler system protecting a home"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/90" />
          <div className="relative z-10 px-8 py-16 text-center md:py-20">
            <h3 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
              90% of Homes Lost in Wildfires Are Due to Ember Attack
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground">
              Embers can travel over 20km ahead of the flames, igniting
              roofs, decks, vents, and siding. Prodigy&apos;s exterior wildfire
              sprinkler systems protect your roofline, the number one point of
              ignition, for homes and businesses across the USA, Canada, and
              Australia.
            </p>
            <Link
              href="/systems"
              className="mt-8 inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              View Our Systems
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
