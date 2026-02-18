import { RefreshCw, ShieldCheck, Maximize } from "lucide-react";

const benefits = [
  {
    icon: RefreshCw,
    title: "Business Continuity",
    description:
      "Keep operations running. Remote activation through the Prodigy app means your system protects your business even during evacuation, minimising downtime, revenue loss, and operational disruption. Your business stays defended while you focus on employee safety.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance and Compliance",
    description:
      "Support evolving insurance requirements and municipal wildfire resilience standards across the United States, Canada, and Australia. A Prodigy system can assist with policy renewals, premium negotiations, and demonstrates proactive risk mitigation to underwriters.",
  },
  {
    icon: Maximize,
    title: "Scalable Systems",
    description:
      "From single-building installations to multi-structure campus deployments, our commercial systems scale to match your footprint. Whether you operate one location or manage a portfolio of properties, Prodigy Wildfire Solutions engineers each system for your exact requirements.",
  },
];

export function WhyProdigySection() {
  return (
    <section id="why-prodigy" className="py-20 md:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-heading text-sm font-semibold tracking-widest uppercase text-accent mb-3">
            Commercial Advantage
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Business Continuity &amp;{" "}
            <span className="text-accent">Compliance</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-base leading-relaxed">
            Commercial properties face unique wildfire risks including
            liability, business interruption, and regulatory compliance. Prodigy Wildfire Solutions
            addresses all three with commercial wildfire protection systems engineered for resilience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-card border border-border rounded p-8 text-center transition-all hover:shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
