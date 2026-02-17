import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function EngineeringSection() {
  return (
    <section id="engineering" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Engineering
              <span className="text-primary block">Excellence</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              At Prodigy Wildfire Solutions, we believe effective wildfire defence is built on innovation, reliability, and integrity. Every exterior sprinkler system we design is precision-engineered to protect lives, homes, businesses, and critical infrastructure across the USA, Canada, and Australia. Our mission is to provide lasting security and confidence in the face of increasingly severe wildfire seasons driven by climate change.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {"Our wildfire protection systems are not mass-produced  - they're custom-designed, reviewed, and installed with care. Precision means getting every connection, angle, and coverage zone right. It's this attention to detail that defines our reputation and ensures reliability when it's needed most."}
            </p>
            <a
              href="#team"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg order-1 lg:order-2">
            <Image
              src="/images/engineering.jpg"
              alt="Prodigy Wildfire precision-engineered exterior wildfire sprinkler system installation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
