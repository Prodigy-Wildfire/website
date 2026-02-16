import Image from "next/image"
import { Crosshair, Shield, Heart } from "lucide-react"

const pillars = [
  { icon: Crosshair, label: "Precision" },
  { icon: Shield, label: "Protection" },
  { icon: Heart, label: "Peace of Mind" },
]

export function WhyProdigy() {
  return (
    <section id="why-prodigy" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold text-center mb-2">
          Why Prodigy
        </p>
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-foreground text-center md:text-5xl text-balance">
          A Fully Custom Approach to{" "}
          <span className="text-primary">Wildfire Protection.</span>
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/custom-approach.jpg"
              alt="Prodigy custom engineered wildfire protection system installation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          <div>
            <div className="flex flex-wrap gap-4 mb-8">
              {pillars.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={pillar.label}
                    className="flex items-center gap-2 border border-border px-4 py-2"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-sm uppercase tracking-wider text-foreground font-medium">
                      {pillar.label}
                    </span>
                  </div>
                )
              })}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              From initial design to system commissioning, every Prodigy
              installation reflects our unwavering commitment to excellence. We
              manage every detail so you can feel confident knowing your property
              is safeguarded by the industry&#39;s most advanced wildfire defense.
            </p>

            <a
              href="#regions"
              className="inline-block bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
