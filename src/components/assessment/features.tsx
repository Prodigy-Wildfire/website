import { Droplets, Smartphone, ScanEye } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "WILDFIRE SPRINKLER SYSTEMS",
    stats: [
      { value: "Up to 50 ft", label: "Sprinkler Range" },
      { value: "3 minutes", label: "to Full Coverage" },
    ],
    description:
      "The first step in protecting your property against wildfires is through water systems. Essential in all structures, big or small, Prodigy's water systems are custom designed to fit your needs.",
  },
  {
    icon: Smartphone,
    title: "REMOTE ACTIVATION",
    stats: [
      { value: "Global", label: "Coverage" },
      { value: "Multiple", label: "Systems per Account" },
    ],
    description:
      "Remote activation gives you the peace of mind to control your water systems from anywhere in the world. If you are away from home when danger strikes, our app allows you to initiate your protective barrier whenever you need.",
  },
  {
    icon: ScanEye,
    title: "EMBER DETECTION",
    stats: [
      { value: "360\u00B0", label: "Coverage" },
      { value: "24/7", label: "Monitoring" },
    ],
    description:
      "The epitome of protection services stems from our ember detection technology. With high-end sensors scanning the surrounding areas for embers, you will have the best chance of protecting your property near or far.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-sm border border-border bg-background p-8 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary">
                  <feature.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
                  {feature.title}
                </h3>
              </div>

              <div className="flex gap-8 mb-6">
                {feature.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
