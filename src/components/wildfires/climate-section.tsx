import Image from "next/image";

export function ClimateSection() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            The Impact of Drought, Heat and <span className="text-accent">High Winds</span>
          </h2>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative h-80 overflow-hidden rounded lg:h-[420px]">
            <Image
              src="/images/Dry-landscape.jpg"
              alt="Dry eucalyptus forest landscape with fallen branches and debris"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="text-center">
            <p className="text-base leading-relaxed text-primary-foreground/70">
              Our changing climate is rewriting the wildfire landscape across
              North America and Australia. Hotter temperatures, drier seasons,
              and more extreme weather are creating conditions where fires ignite
              faster, spread farther, and burn with unprecedented intensity.
              Communities across the USA, Canada, and Australia are
              facing longer fire seasons, more severe fire behaviour, and
              record-breaking destruction, making proactive wildfire sprinkler
              systems essential for every home and business in fire-prone regions.
            </p>

            <div className="mt-8 rounded border-l-4 border-accent bg-primary-foreground/5 px-6 py-5">
              <p className="text-sm italic leading-relaxed text-primary-foreground/80">
                {'"Climate change has been a key factor in increasing the risk and extent of wildfires. Rising temperatures, more frequent droughts, and decreasing summer rainfall are all contributing to longer fire seasons and increased wildfire activity across the globe."'}
              </p>
              <p className="mt-3 text-xs font-medium text-accent">
                NASA Science - Climate-Driven Wildfire Trends
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
