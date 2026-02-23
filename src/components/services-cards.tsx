import Link from "next/link";
import { Droplets, Smartphone, ScanEye } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Exterior Wildfire Sprinklers",
    stats: [
      { label: "Sprinkler Range", value: "Up to 50 ft", anchor: "#sprinklers" },
      { label: "to Full Coverage", value: "3 minutes", anchor: "#sprinklers" },
    ],
    description:
      "Prodigy's exterior wildfire sprinkler systems are the first line of defence for homes and businesses in fire-prone regions across the USA, Canada, and Australia. Custom-engineered with durable copper piping, each system creates a protective humidity barrier that suppresses embers and radiant heat.",
  },
  {
    icon: Smartphone,
    title: "Remote Activation",
    titleLine2: "and EmberWatch",
    stats: [
      { label: "Global Activation", value: "Global", anchor: "#remote-activation" },
      { label: "Fire Tracking & Alerts", value: "Real-Time", anchor: "#ember-watch" },
    ],
    description:
      "Control your wildfire sprinkler system from anywhere in the world with the Prodigy Wildfire app. Run custom activation cycles, monitor system status, and receive real-time Ember Watch alerts with live fire tracking, estimated travel times, and projected fire paths.",
  },
  {
    icon: ScanEye,
    title: "Advanced Ember",
    titleLine2: "and Flame Detection",
    stats: [
      { label: "Perimeter Scanning", value: "360°", anchor: "#detection" },
      { label: "Auto Monitoring", value: "24/7", anchor: "#detection" },
    ],
    description:
      "Prodigy's next-generation ember and flame detection sensors provide 360-degree perimeter scanning with 24/7 automated monitoring. Weather-resistant and engineered for extreme conditions, our sensors detect ignition risks early and alert you instantly via the Prodigy Wildfire app.",
  },
];

export function ServicesCards() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Wildfire Protection <span className="text-accent">Features</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded border border-border bg-card p-8 text-center transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded bg-accent/10">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-bold tracking-wide text-card-foreground">
                {service.title}
                {service.titleLine2 && (
                  <>
                    <br />
                    {service.titleLine2}
                  </>
                )}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {service.stats.map((stat) => (
                  <Link
                    key={stat.label}
                    href={`/systems${stat.anchor}`}
                    className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 transition-colors hover:bg-accent/20"
                  >
                    <p className="font-heading text-sm font-bold text-accent">
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {stat.label}
                    </p>
                  </Link>
                ))}
              </div>

            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/systems"
            className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
