import Link from "next/link"
import { Crosshair, Shield, Heart } from "lucide-react"

const pillars = [
  { icon: Crosshair, label: "Precision" },
  { icon: Shield, label: "Protection" },
  { icon: Heart, label: "Peace of\u00A0Mind" },
]

export function WhyProdigy() {
  return (
    <section id="why-prodigy" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          A Customised Approach to{" "}
          <span className="text-accent">Wildfire Protection</span>
        </h2>

        <div className="mt-10 grid grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.label}
                className="flex flex-col items-center gap-3"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <span className="text-sm font-semibold text-foreground">
                  {pillar.label}
                </span>
              </div>
            )
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-muted-foreground leading-relaxed">
          From initial design to system commissioning, every Prodigy
          installation reflects our unwavering commitment to excellence. We
          manage every detail so you can feel confident knowing your property
          is safeguarded by the industry&#39;s most advanced wildfire defence.
        </p>

        <Link
          href="/systems"
          className="mt-8 inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
        >
          Explore Our Systems
        </Link>
      </div>
    </section>
  )
}
