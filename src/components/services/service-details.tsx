import Image from "next/image";

const services = [
  {
    title: "Exterior Wildfire Sprinkler Systems",
    anchor: "sprinklers",
    image: "/images/wildfire-sprinkler-system-closeup.jpg",
    imageAlt: "Prodigy Wildfire exterior sprinkler system with copper piping installed on residential roofline for wildfire defence",
    stats: [
      { value: "50 ft", label: "Sprinkler Range" },
      { value: "3 min", label: "Full Coverage" },
    ],
    description:
      "Every Prodigy sprinkler system is custom-engineered to match your property's layout, roofline geometry, and surrounding terrain. We use durable type L copper piping in North America and 316 stainless steel in Australia, routed discreetly along rooflines, ridges, and eaves to maintain your property's appearance. Each sprinkler head delivers up to 50 feet of coverage, and the full system achieves complete property saturation in under three minutes. Once activated, the system creates a humidity bubble — a moisture-rich barrier that cools surfaces, raises ambient humidity, and makes structures significantly harder to ignite from ember attack or radiant heat.",
    reverse: false,
  },
  {
    title: "Remote Activation and EmberWatch",
    anchor: "remote-activation",
    image: "/images/wildfire-app-phone-render.avif",
    imageAlt: "Prodigy Wildfire app for remote sprinkler activation and real-time ember detection alerts",
    stats: [
      { value: "Global", label: "Activation" },
      { value: "Real-Time", label: "Fire Tracking" },
    ],
    description:
      "The Prodigy app gives you full control of your wildfire protection system from anywhere in the world. Schedule custom activation cycles based on fire danger ratings, monitor real-time system status including water pressure and flow rates, and manage multiple properties from a single account. EmberWatch integrates live satellite and ground-based fire detection to alert you the moment a fire is identified within your watch zone. You'll receive detailed forecasts, estimated travel times to your property, projected fire paths, and wind direction data — giving you the information you need to act early or activate your system remotely before conditions escalate.",
    reverse: true,
  },
  {
    title: "Advanced Ember and Flame Detection",
    anchor: "detection",
    image: "/images/wildfire-flame-sensor.png",
    imageAlt: "Prodigy Wildfire advanced ember and flame detection sensor providing 24/7 wildfire monitoring",
    imageClassName: "object-contain scale-[4]",
    stats: [
      { value: "360°", label: "Perimeter Scanning" },
      { value: "24/7", label: "Auto Monitoring" },
    ],
    description:
      "Prodigy's ember and flame detection sensors provide a fully automated layer of protection that requires zero human intervention. Engineered to withstand extreme heat, wind, and smoke conditions, these weather-resistant sensors deliver continuous 360-degree perimeter scanning for airborne embers and flame activity around your property. When a threat is detected, the system automatically triggers your sprinkler system without delay — ensuring your property is actively defended even when you're away, asleep, or evacuated. Combined with the Prodigy Wildfire app, you'll receive instant notifications of any activation event, so you always know your property's status.",
    reverse: false,
  },
];

export function ServiceDetails() {
  return (
    <section className="bg-background pb-20 md:pb-28">
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
                  className={service.imageClassName || "object-cover"}
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="font-heading text-xl font-bold tracking-wide text-foreground md:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {service.stats.map((stat) => (
                    <span
                      key={stat.label}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2"
                    >
                      <span className="font-heading text-sm font-bold leading-none text-accent">
                        {stat.value}
                      </span>
                      <span className="text-[10px] leading-none text-muted-foreground">
                        {stat.label}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
