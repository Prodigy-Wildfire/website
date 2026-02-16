import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function MissionSection() {
  return (
    <section id="mission" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
          Our Mission
        </p>

        <h2 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl max-w-2xl">
          Peace of Mind in a{" "}
          <span className="text-primary">Changing Climate</span>
        </h2>

        {/* Content grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our philosophy is defined by precision, protection, and peace of mind. From concept to commissioning, every Prodigy exterior wildfire sprinkler system reflects our commitment to excellence. Serving homeowners, businesses, and communities across the United States, Canada, and Australia, we take responsibility for every detail so our clients can feel secure knowing their property is defended by the industry&apos;s most advanced wildfire protection technology.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Prodigy has set a new benchmark for wildfire defence, merging engineering innovation, ember detection technology, and remote activation capabilities to create systems that perform without compromise in the world&apos;s most fire-prone regions.
            </p>
            <a
              href="#engineering"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/customer-demo.jpg"
              alt="Prodigy Wildfire exterior sprinkler system demonstration for wildfire protection"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
