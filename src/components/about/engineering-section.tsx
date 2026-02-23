import Image from "next/image"
import Link from "next/link"

export function EngineeringSection() {
  return (
    <section id="engineering" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded">
            <Image
              src="/images/engineering.jpg"
              alt="Prodigy Wildfire precision-engineered exterior wildfire sprinkler system installation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Built to Perform When It{" "}
              <span className="text-accent">Matters Most</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-sm">
              Every Prodigy system is custom-designed for the specific property it protects. Our engineers assess terrain, vegetation, water supply, and structural layout to ensure complete coverage. No two installations are alike because no two properties face the same wildfire risk.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
              Our wildfire protection systems are not mass-produced. They are reviewed, tested, and installed with precision. Every connection, angle, and coverage zone is engineered to deliver reliable performance under the most extreme conditions across the USA, Canada, and Australia.
            </p>
            <div className="mt-8">
              <Link
                href="/systems"
                className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
              >
                Explore Our Systems
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
