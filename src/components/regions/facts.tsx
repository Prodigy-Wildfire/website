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
    text: "A single ember can reach 1200\u00B0, enough to ignite dry material.",
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
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact) => {
            const Icon = fact.icon
            return (
              <div
                key={fact.text}
                className="group border border-border bg-card p-8 hover:border-primary/40 transition-colors"
              >
                <Icon className="mb-4 h-8 w-8 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                  {fact.text}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#why-prodigy"
            className="bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="border border-foreground/30 text-foreground px-8 py-3.5 text-sm font-semibold uppercase tracking-wider hover:border-foreground/60 transition-colors"
          >
            Get Protected
          </a>
        </div>
      </div>
    </section>
  )
}
