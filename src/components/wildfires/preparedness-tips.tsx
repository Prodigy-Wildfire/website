import { Fuel, Backpack, MapPinned } from "lucide-react";

const tips = [
  {
    icon: Fuel,
    title: "Keep Your Vehicle Fuelled",
    description:
      "Always maintain a full tank so you can evacuate quickly if wildfire conditions change. Being ready to move at a moment\u2019s notice can save lives and reduce stress in an emergency.",
  },
  {
    icon: Backpack,
    title: "Pack an Emergency Bag",
    description:
      "Prepare a go-bag with essentials, water, medications, important documents, and protective gear, so you\u2019re ready to leave safely at any time. A well-stocked emergency kit ensures you have what you need when minutes count.",
  },
  {
    icon: MapPinned,
    title: "Have a Plan",
    description:
      "Develop and rehearse an evacuation plan with your family or team, including multiple escape routes and safe meeting points. Knowing exactly what to do ahead of time minimises confusion and keeps everyone safe.",
  },
];

export function PreparednessTips() {
  return (
    <section className="bg-muted py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {tips.map((tip) => {
            const Icon = tip.icon;
            return (
              <div
                key={tip.title}
                className="flex flex-col items-center rounded bg-card p-8 text-center shadow-sm"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-card-foreground">
                  {tip.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {tip.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
