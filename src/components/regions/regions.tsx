import Image from "next/image"
import Link from "next/link"

const regions = [
  {
    name: "Canada",
    href: "/regions/canada",
    image: "/images/jasper-national-park-wildfire.jpg",
    description:
      "Serving some of the world's most wildfire-prone landscapes, our Canadian team delivers advanced exterior wildfire sprinkler systems, ember detection, and remote activation technology for homes, businesses, and communities from British Columbia to Ontario.",
    detail:
      "With deep expertise in diverse Canadian terrain, from coastal forests to the interior, we provide custom-engineered wildfire protection systems backed by science and built to withstand Canada's most severe fire seasons.",
  },
  {
    name: "U.S.A",
    href: "/regions/usa",
    image: "/images/usa-wildfire-home-under-threat.jpg",
    description:
      "From California and Colorado to the Pacific Northwest and beyond, our U.S. team partners with property owners, builders, and communities to deliver custom-engineered exterior wildfire sprinkler systems built for America's evolving wildfire environment.",
    detail:
      "We combine world-class wildfire protection engineering with local insight to provide reliable, proactive defence for homes, businesses, and critical infrastructure across the United States.",
  },
  {
    name: "Australia",
    href: "/regions/australia",
    image: "/images/australia-bushfires-kangaroo.avif",
    description:
      "In one of the most bushfire-challenged regions on the planet, our Australian team brings unmatched field expertise and cutting-edge wildfire protection technology to defend homes, rural properties, and entire communities from ember attack and radiant heat.",
    detail:
      "Our exterior wildfire sprinkler systems and ember detection sensors are engineered to perform in Australia's extreme conditions, supporting bushfire resilience, readiness, and long-term property protection across every state and territory.",
  },
]

export function Regions() {
  return (
    <section id="regions" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Systems Are Engineered to{" "}
            <span className="text-accent">Protect What Matters</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-base leading-relaxed">
            Our mission is to provide lasting security and confidence in our
            changing climate. Every system we build is custom engineered to
            protect homes, businesses and communities without compromise.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {regions.map((region, i) => (
            <div
              key={region.name}
              className="grid gap-10 lg:grid-cols-2 lg:items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[16/10] overflow-hidden rounded">
                  <Image
                    src={region.image}
                    alt={`${region.name} wildfire-prone landscape`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={`text-center lg:text-left ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4 md:text-3xl">
                  {region.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {region.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {region.detail}
                </p>
                <Link
                  href={region.href}
                  className="mt-4 inline-block text-sm font-semibold text-accent transition-colors hover:text-accent/80"
                >
                  Wildfire Protection in {region.name} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
