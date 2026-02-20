import Image from "next/image";

const services = [
  {
    title: "EXTERIOR WILDFIRE SPRINKLER SYSTEMS",
    anchor: "sprinklers",
    image: "/images/wildfire-sprinkler-system-closeup.jpg",
    imageAlt: "Prodigy Wildfire exterior sprinkler system with copper piping installed on residential roofline for wildfire defence",
    stats: [
      { value: "50 ft", label: "Sprinkler Range" },
      { value: "3 min", label: "Full Coverage" },
    ],
    description:
      "Custom-engineered for your property using durable type L copper piping (316 stainless steel in Australia), routed discreetly along rooflines and ridges. Delivers up to 50 feet of sprinkler coverage and achieves full property saturation in under three minutes - proven, permanent wildfire protection without compromising your property's appearance.",
    reverse: false,
  },
  {
    title: "REMOTE ACTIVATION & EMBER WATCH",
    anchor: "remote-activation",
    image: "/images/wildfire-app-phone-render.avif",
    imageAlt: "Prodigy Wildfire app for remote sprinkler activation and real-time ember detection alerts",
    stats: [
      { value: "Global", label: "Activate Anywhere" },
      { value: "Real-Time", label: "Fire Tracking" },
    ],
    description:
      "Control your wildfire protection system from anywhere in the world with the Prodigy app. Schedule custom activation cycles, monitor system status, and manage multiple properties from a single account. Ember Watch uses live fire detection to alert you the moment a fire is identified in your watch zone, delivering forecasts, estimated travel times, and projected paths directly to your device.",
    reverse: true,
  },
  {
    title: "ADVANCED EMBER & FLAME DETECTION",
    anchor: "detection",
    image: "/images/wildfire-flame-sensor.jpg",
    imageAlt: "Prodigy Wildfire advanced ember and flame detection sensor providing 24/7 wildfire monitoring",
    stats: [
      { value: "360°", label: "Perimeter Scanning" },
      { value: "24/7", label: "Automated Monitoring" },
    ],
    description:
      "Fully automated wildfire detection that requires zero human intervention. Weather-resistant sensors continuously monitor for airborne embers and flame activity with 360-degree perimeter scanning. When a threat is detected, the system automatically activates your sprinkler system, ensuring your property is defended even when you're away, asleep, or evacuated.",
    reverse: false,
  },
];

export function ServiceDetails() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-24">
          {services.map((service) => (
            <div
              key={service.title}
              id={service.anchor}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                service.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground md:text-2xl">
                  {service.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-3">
                  {service.stats.map((stat) => (
                    <span
                      key={stat.label}
                      className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5"
                    >
                      <span className="font-heading text-sm font-bold text-accent">
                        {stat.value}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {stat.label}
                      </span>
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
