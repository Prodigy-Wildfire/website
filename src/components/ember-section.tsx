import { Droplets, Smartphone, CloudRain } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Droplets,
    title: "Roof-Mounted Sprinklers",
    description:
      "Discreet, permanently installed copper sprinkler heads line your roofline. Engineered for full coverage, they saturate your roof, walls, and surrounding defencible space within minutes of activation.",
  },
  {
    icon: Smartphone,
    title: "Remote Activation",
    description:
      "Activate your system from anywhere using the Prodigy app. Whether you are at home, evacuating, or kilometres away, one tap triggers your wildfire defence. No manual setup required.",
  },
  {
    icon: CloudRain,
    title: "Protective Moisture Layer",
    description:
      "Water creates a protective moisture layer around your property, neutralising airborne embers before they land and cooling surfaces against radiant heat. The #1 defence against ember attack.",
  },
];

export function EmberSection() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            How It Works
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            <span className="text-accent">Three</span> Steps to Wildfire Defence
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            Prodigy systems combine permanent hardware, smart technology, and
            proven water-based suppression into one seamless wildfire protection
            solution.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded border border-primary-foreground/10 bg-primary-foreground/5 p-8 text-center"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent/30 bg-accent/10">
                <step.icon className="h-7 w-7 text-accent" />
              </div>
              <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-widest text-accent">
                Step {index + 1}
              </p>
              <h3 className="font-heading text-lg font-bold text-primary-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/system"
            className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Explore Our Systems
          </Link>
        </div>
      </div>
    </section>
  );
}
