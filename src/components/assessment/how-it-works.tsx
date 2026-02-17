import { Flame, Shield } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Card 1: How Wildfires Spread */}
          <div className="group relative overflow-hidden rounded-sm border border-border bg-background">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/images/wildfire-spread.jpg"
                alt="Wildfire spreading across terrain"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/40" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary">
                  <Flame className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  How Do Wildfires Spread?
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                A fire needs three elements: fuel, oxygen, and heat. When these
                conditions align with human activity, drought, and high winds,
                even a small spark can become a weeks-long event affecting tens
                of thousands of acres. With four out of five wildfires caused by
                people, environmental conditions now determine how far and fast
                they spread.
              </p>
            </div>
          </div>

          {/* Card 2: How To Protect */}
          <div className="group relative overflow-hidden rounded-sm border border-border bg-background">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/images/protect-home.jpg"
                alt="Home protected by sprinkler system"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/40" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary">
                  <Shield className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  How to Protect Your House from Wildfire
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                For decades, wildfire experts have used water-based suppression
                systems to cool structures and prevent embers from taking hold.
                Today, engineered exterior systems build on this proven
                principle, creating moisture-rich protective zones around
                buildings that help block embers, reduce radiant heat, and
                stabilise surface temperatures before flames arrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
