import Image from "next/image"
import Link from "next/link"
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
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            A Fully Custom Approach to{" "}
            <span className="text-accent">Wildfire Protection</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded">
            <Image
              src="/images/custom-approach.jpg"
              alt="Prodigy custom engineered wildfire protection system installation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="text-center lg:text-left">
            <div className="flex flex-wrap justify-center gap-4 mb-8 lg:justify-start">
              {pillars.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={pillar.label}
                    className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2"
                  >
                    <Icon className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">
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
              is safeguarded by the industry&#39;s most advanced wildfire defence.
            </p>

            <Link
              href="/system"
              className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              Explore Our Systems
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
