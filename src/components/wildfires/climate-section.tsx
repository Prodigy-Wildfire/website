import Image from "next/image";
import Link from "next/link";
import { Thermometer, Droplets, Wind } from "lucide-react";

const factors = [
  { icon: Thermometer, label: "Rising Temperatures" },
  { icon: Droplets, label: "Prolonged Drought" },
  { icon: Wind, label: "Unpredictable Winds" },
];

export function ClimateSection() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            WHY?
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
            Drought, Heat &amp; High Winds Are Fuelling More Wildfires.
          </h2>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/homeowners"
            className="rounded bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Protect My Home
          </Link>
          <Link
            href="/businesses"
            className="rounded border border-primary-foreground/30 px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Protect My Business
          </Link>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative h-80 overflow-hidden rounded lg:h-[420px]">
            <Image
              src="/images/Jasper national park.png"
              alt="Wildfire devastation in Jasper National Park showing burned forest hillside overlooking the Athabasca River valley and Rocky Mountains"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <div className="mb-8 flex flex-wrap gap-4">
              {factors.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-2 text-sm text-primary-foreground/80"
                >
                  <Icon className="h-4 w-4 text-accent" />
                  {label}
                </span>
              ))}
            </div>

            <p className="text-base leading-relaxed text-primary-foreground/70">
              Our changing climate is rewriting the wildfire landscape across
              North America and Australia. Hotter temperatures, drier seasons,
              and more extreme weather are creating conditions where fires ignite
              faster, spread farther, and burn with unprecedented intensity.
              Communities across the United States, Canada, and Australia are
              facing longer fire seasons, more severe fire behaviour, and
              record-breaking destruction  - making proactive wildfire protection
              systems essential for every home and business in fire-prone regions.
            </p>

            <div className="mt-8 rounded border-l-4 border-accent bg-primary-foreground/5 px-6 py-5">
              <p className="text-sm italic leading-relaxed text-primary-foreground/80">
                {'"As the planet warms \u2026 decreasing summer rainfall are all contributing to increased (wild)fire activity."'}
              </p>
              <p className="mt-3 text-xs font-medium text-accent">
                NASA Science on climate-driven wildfire trends
              </p>
            </div>

            <Link
              href="https://science.nasa.gov/earth/climate-change/wildfires/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm font-semibold text-accent transition-colors hover:text-accent/80"
            >
              Read More &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
