import Image from "next/image";
import { Droplets, Smartphone, ScanEye } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "EXTERIOR WILDFIRE SPRINKLER SYSTEMS",
    image: "/images/water-system.jpg",
    imageAlt: "Prodigy Wildfire exterior sprinkler system with copper piping installed on residential roofline for wildfire defense",
    stats: [
      { value: "50 ft", label: "Sprinkler Range" },
      { value: "3 min", label: "to Full Property Coverage" },
    ],
    description:
      "Prodigy's exterior wildfire sprinkler systems are the first and most critical line of defense for homes and businesses in fire-prone regions across the USA, Canada, and Australia. Each system is custom-engineered to your property, creating a controlled humidity barrier that cools exterior surfaces, raises ambient moisture levels, and suppresses airborne embers and radiant heat  - the leading causes of structure ignition during wildfires. Serving homeowners and businesses across the United States, Canada, and Australia, our systems are installed using durable type L copper (316 Stainless steel in Australia) piping routed discreetly along your rooflines and ridges, delivering up to 50 feet of sprinkler coverage and achieving full property saturation in under three minutes  - proven, permanent wildfire protection without compromising your home's appearance. Our roof sprinkler systems are designed to provide complete coverage at a wildfire protection system cost tailored to your property's specific needs.",
    reverse: false,
  },
  {
    icon: Smartphone,
    title: "REMOTE ACTIVATION & EMBER WATCH",
    image: "/images/remote-activation.jpg",
    imageAlt: "Prodigy Wildfire app for remote sprinkler activation and real-time ember detection alerts",
    stats: [
      { value: "Global", label: "Activate from Anywhere" },
      { value: "Real-Time", label: "Fire Tracking & Alerts" },
    ],
    description:
      "Take full control of your wildfire protection system from anywhere in the world with the Prodigy app. Schedule and run custom activation cycles, monitor system status in real time, and manage multiple properties from a single account. Our Ember Watch feature uses live fire detection to alert you the moment a fire is identified in your predetermined watch zone  - delivering up-to-date forecasts, estimated fire travel times, and projected paths directly to your device. Whether you're at home or across the globe, you'll have the situational awareness and one-tap activation to defend your property before the threat arrives.",
    reverse: true,
  },
  {
    icon: ScanEye,
    title: "ADVANCED EMBER & FLAME DETECTION",
    image: "/images/wildfire-flame-sensor.jpg",
    imageAlt: "Prodigy Wildfire advanced ember and flame detection sensor providing 24/7 wildfire monitoring for homes and businesses",
    stats: [
      { value: "360\u00b0", label: "Perimeter Scanning" },
      { value: "24/7", label: "Automated Monitoring" },
    ],
    description:
      "Prodigy's smart flame detection sensors provide property owners across the USA, Canada, and Australia with fully automated wildfire protection that requires zero human intervention. With 360-degree perimeter scanning, our weather-resistant sensors continuously monitor for airborne embers and flame activity - detecting ignition risks long before they reach your structure. When a threat is perceived, the system automatically activates your wildfire sprinkler system without any manual input, ensuring your property is defended even when you're away, asleep, or evacuated. This autonomous wildfire detection and response technology eliminates the critical delay between threat identification and sprinkler activation - giving your home or business the fastest possible defense against ember attack, radiant heat, and spot fires. Engineered to withstand extreme heat, wind, and harsh conditions, our detection technology provides reliable, round-the-clock wildfire monitoring for homes, businesses, and critical infrastructure in high-risk fire zones.",
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
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                service.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden rounded ${service.title === "REMOTE ACTIVATION" ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={service.title === "REMOTE ACTIVATION" ? "object-contain" : "object-cover"}
                />
              </div>

              {/* Content */}
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-accent/10">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>

                <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground md:text-2xl">
                  {service.title}
                </h3>

                <div className="mt-5 flex gap-8">
                  {service.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-heading text-3xl font-bold text-accent">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
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
