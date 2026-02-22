import Link from "next/link";
import { Flame, Sun, TreePine } from "lucide-react";

const mechanisms = [
  {
    icon: Flame,
    title: "Ember Attack",
    description:
      "Windborne embers are the number one cause of structure loss during wildfires. Embers can travel over 20 kilometres ahead of the fire front, reaching 1,200 degrees, igniting dry material and starting new fires far from the main blaze.",
  },
  {
    icon: Sun,
    title: "Radiant Heat",
    description:
      "Radiant heat from a nearby wildfire can exceed 1,000 degrees Celsius, igniting materials without direct contact. This intense heat can crack windows, melt siding, and weaken structural elements, allowing embers to enter even before flames arrive.",
  },
  {
    icon: TreePine,
    title: "Direct Flame Contact",
    description:
      "When the fire front reaches a structure, direct flame contact ignites anything in its path. However, research shows this is actually the least common cause of home loss - most structures are destroyed by embers and radiant heat well before the fire front arrives.",
  },
];

export function ProtectCards() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            How Wildfires <span className="text-accent">Destroy</span> Homes and Businesses
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground">
            Understanding the three mechanisms of wildfire damage is the first step toward effective protection. Most people assume direct flames cause the most destruction, but the reality is very different.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {mechanisms.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded border border-border bg-card p-8 text-center transition-all hover:shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/homeowners"
            className="rounded bg-accent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Protect My Home
          </Link>
          <Link
            href="/businesses"
            className="rounded border-2 border-accent px-7 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Protect My Business
          </Link>
        </div>
      </div>
    </section>
  );
}
