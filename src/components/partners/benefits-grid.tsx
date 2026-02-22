import {
  DollarSign,
  GraduationCap,
  Megaphone,
  MapPinned,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Revenue Opportunity",
    description:
      "Earn competitive margins on every wildfire sprinkler system installation. Our partners benefit from growing demand in fire-prone markets across the USA, Canada, and Australia.",
  },
  {
    icon: GraduationCap,
    title: "Training & Certification",
    description:
      "Receive comprehensive training on Prodigy Wildfire Solutions' exterior wildfire sprinkler systems, ember detection technology, and remote activation platform.",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    description:
      "Access co-branded marketing materials, lead generation support, and listing on the Prodigy Wildfire Solutions partner directory to attract clients in your region.",
  },
  {
    icon: MapPinned,
    title: "Territory Opportunities",
    description:
      "Establish your presence in high-demand wildfire protection markets with territory-based partnership models tailored to your region.",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Risk for Clients",
    description:
      "Help your clients lower their wildfire risk with proven exterior sprinkler systems. Properties protected by Prodigy Wildfire Solutions demonstrate proactive risk mitigation, which can support insurance renewals and premium negotiations.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Get priority access to our engineering team, technical support, and project management resources for every installation.",
  },
];

export function BenefitsGrid() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Built for Mutual <span className="text-accent">Success</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Prodigy Wildfire Solutions partners gain access to industry-leading wildfire protection
            technology, training, and support to grow their business in the
            fastest-growing segment of property defence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded border border-border bg-card p-8 text-center transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <benefit.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-bold text-card-foreground">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
