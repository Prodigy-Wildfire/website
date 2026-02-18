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
    href: "/system",
    linkLabel: "Learn More",
  },
  {
    icon: Smartphone,
    title: "Remote Activation & Ember Watch",
    stats: [
      { label: "Activate from Anywhere", value: "Global", anchor: "#remote-activation" },
      { label: "Fire Tracking & Alerts", value: "Real-Time", anchor: "#ember-watch" },
    ],
    description:
      "Control your wildfire sprinkler system from anywhere in the world with the Prodigy app. Run custom activation cycles, monitor system status, and receive real-time Ember Watch alerts with live fire tracking, estimated travel times, and projected fire paths.",
    href: "/system",
    linkLabel: "Read More",
  },
  {
    icon: ScanEye,
    title: "Advanced Ember & Flame Detection",
    stats: [
      { label: "Perimeter Scanning", value: "360°", anchor: "#detection" },
      { label: "Automated Monitoring", value: "24 / 7", anchor: "#detection" },
    ],
    description:
      "Prodigy's next-generation ember and flame detection sensors provide 360-degree perimeter scanning with 24/7 automated monitoring. Weather-resistant and engineered for extreme conditions, our sensors detect ignition risks early and alert you instantly via the Prodigy app.",
    href: "/system",
    linkLabel: "Read More",
  },
];

export function ServicesCards() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            What We Offer
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
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
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-card-foreground">
                {service.title}
              </h3>

              <div className="mt-4 flex justify-center gap-3">
                {service.stats.map((stat) => (
                  <Link
                    key={stat.label}
                    href={`/system${stat.anchor}`}
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

              <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="mt-6 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
              >
                {service.linkLabel} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
