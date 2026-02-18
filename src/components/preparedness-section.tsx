import Link from "next/link";
import { Flame, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: Flame,
    title: "Understanding Wildfire Risk",
    description:
      "Learn how wildfires start, spread through ember attack, and what makes your property vulnerable.",
    href: "/wildfires",
  },
  {
    icon: ShieldCheck,
    title: "Getting Protected",
    description:
      "Explore how Prodigy systems work, what installation involves, and how to get started with a free assessment.",
    href: "/system",
  },
];

export function PreparednessSection() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How Prepared Are <span className="text-accent">You</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Wildfire seasons are growing longer and more severe across the USA,
            Canada, and Australia. Understanding the risk is the first step
            toward protecting your property.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group rounded border border-border bg-card p-8 transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-accent/10 mx-auto">
                <card.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-card-foreground text-center">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-center">
                {card.description}
              </p>
              <div className="mt-6 text-center">
                <Link
                  href={card.href}
                  className="inline-block text-sm font-semibold text-accent transition-colors hover:text-accent/80"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
