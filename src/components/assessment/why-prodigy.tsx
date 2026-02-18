import { Crosshair, HeartHandshake, ShieldCheck } from "lucide-react";

export function WhyProdigy() {
  return (
    <section id="why-prodigy" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why Prodigy Wildfire Solutions
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
            A Fully Custom Approach to Wildfire <span className="text-accent">Protection.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-muted-foreground leading-relaxed">
            From initial design to system commissioning, every Prodigy
            installation reflects our unwavering commitment to excellence. We
            manage every detail so you can feel confident knowing your property
            is safeguarded by the industry{"'"}s most advanced wildfire defence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Crosshair,
              title: "Precision",
              description:
                "Every system is custom-engineered to the unique contours and vulnerabilities of your property.",
            },
            {
              icon: HeartHandshake,
              title: "Peace of Mind",
              description:
                "24/7 monitoring and remote activation let you protect your property from anywhere in the world.",
            },
            {
              icon: ShieldCheck,
              title: "Protection",
              description:
                "Industry-leading ember detection and suppression technology built to defend when it matters most.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-sm border border-border bg-card p-8 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-primary">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
