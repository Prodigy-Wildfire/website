import Image from "next/image";
import Link from "next/link";
import { Droplets, Smartphone, Pipette, Wrench } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Discreet Copper Piping",
    description:
      "Type L copper piping routes discreetly along your rooflines and ridges, creating a low-profile system that blends with your home's architecture.",
  },
  {
    icon: Smartphone,
    title: "Remote App Activation",
    description:
      "Activate your system from anywhere in the world through the Prodigy app. Protect your home even during evacuation, from the safety of your vehicle.",
  },
  {
    icon: Pipette,
    title: "Connects to Existing Water Supply",
    description:
      "Our systems integrate with your existing water supply, municipal connection, well, tank, or even a nearby lake or pool for maximum flexibility.",
  },
  {
    icon: Wrench,
    title: "Annual Maintenance Included",
    description:
      "Every residential system comes with an annual maintenance program including spring commissioning, system checks, and winterisation in cold climates.",
  },
];

export function EmberFacts() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <Image
        src="/images/ember-attack.jpg"
        alt="Exterior wildfire sprinkler system protecting a residential home"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            Residential Systems
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            What a Prodigy Home System Looks Like
          </h2>
          <p className="mx-auto mt-4 text-4xl font-bold text-accent md:text-5xl">
            Full Roof Coverage in Under 3 Minutes
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading text-base font-semibold text-primary-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}
