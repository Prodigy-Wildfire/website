import Image from "next/image"

export function MissionSection() {
  return (
    <section id="mission" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            Our Mission
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Peace of Mind in a{" "}
            <span className="text-accent">Changing Climate</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="text-muted-foreground leading-relaxed text-sm">
              Our philosophy is defined by precision, protection, and peace of mind. From concept to commissioning, every Prodigy exterior wildfire sprinkler system reflects our commitment to excellence. Serving homeowners, businesses, and communities across the United States, Canada, and Australia, we take responsibility for every detail so our clients can feel secure knowing their property is defended by the industry&apos;s most advanced wildfire protection technology.
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed text-sm">
              Prodigy Wildfire Solutions has set a new benchmark for wildfire defence, merging engineering innovation, ember detection technology, and remote activation capabilities to create systems that perform without compromise in the world&apos;s most fire-prone regions.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded">
            <Image
              src="/images/wildfire-customer-sprinkler-demo.avif"
              alt="Prodigy Wildfire Solutions exterior sprinkler system demonstration"
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
