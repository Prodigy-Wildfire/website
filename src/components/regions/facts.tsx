import Link from "next/link"
import { Flame, Wind, ShieldAlert, Thermometer, Users, AlertTriangle } from "lucide-react"

const facts = [
  {
    icon: Wind,
    text: "Up to 90% of homes lost to wildfires ignite from windborne embers.",
  },
  {
    icon: AlertTriangle,
    text: "Embers can travel over 20km from the fire front.",
  },
  {
    icon: ShieldAlert,
    text: "Metal roofs don't stop radiant heat or ember intrusion on their own.",
  },
  {
    icon: Thermometer,
    text: "A single ember can reach 1,200\u00B0, enough to ignite dry material.",
  },
  {
    icon: Users,
    text: "North America faces a 40\u201350% shortfall in wildfire firefighters.",
  },
  {
    icon: Flame,
    text: "#1 cause of property loss during a wildfire event is ember ignition.",
  },
]

export function Facts() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What You Need to <span className="text-accent">Know</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact) => {
            const Icon = fact.icon
            return (
              <div
                key={fact.text}
                className="rounded border border-border bg-card p-5 text-center"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {fact.text}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/quote"
            className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Get Protected
          </Link>
        </div>
      </div>
    </section>
  )
}
