import { RefreshCw, ShieldCheck, Maximize } from "lucide-react";

const benefits = [
  {
    icon: RefreshCw,
    title: "Business Continuity",
    description:
      "Keep operations running. Remote activation through the Prodigy app means your system protects your property even during evacuation, minimising downtime, revenue loss, and operational disruption. Your business stays defended while you focus on employee safety.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance and Compliance",
    description:
      "Meet evolving insurance requirements and municipal wildfire resilience standards across the United States, Canada, and Australia. A Prodigy system supports policy renewals, premium negotiations, and demonstrates proactive risk mitigation to underwriters.",
  },
  {
    icon: Maximize,
    title: "Scalable Systems",
    description:
      "From single-building installations to multi-structure campus deployments, our commercial systems scale to match your footprint. Whether you operate one location or manage a portfolio of properties, Prodigy engineers each system for your exact requirements.",
  },
];

export function WhyProdigySection() {
  return (
    <section id="why-prodigy" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Commercial Advantage
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
            Business Continuity &amp;{" "}
            <span className="text-primary">Compliance</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-base leading-relaxed">
            Commercial properties face unique wildfire risks including
            liability, business interruption, and regulatory compliance. Prodigy
            addresses all three.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-card border border-border rounded-lg p-8 text-center flex flex-col items-center gap-4 hover:border-primary/50 transition-colors"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
