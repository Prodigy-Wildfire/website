import { AlertTriangle } from "lucide-react";

const facts = [
  {
    text: "Embers can travel over 12.5 miles from the wildfire front.",
    source: "US Forest Service",
  },
  {
    text: "Metal roofs don\u2019t stop radiant heat or ember intrusion on their own.",
    source: "Fire Research",
  },
  {
    text: "A single ember can reach 1200\u00B0F, enough to ignite dry material.",
    source: "Fire Science",
  },
  {
    text: "North America faces a 40\u201350% shortfall in wildfire firefighters.",
    source: "Workforce Data",
  },
  {
    text: "#1 cause of property loss during a wildfire event is ember ignition.",
    source: "Fire Research",
  },
  {
    text: "4 out of 5 wildfires are caused by human activity.",
    source: "US Forest Service",
  },
];

export function Facts() {
  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact) => (
            <div
              key={fact.text}
              className="rounded-sm border border-border bg-background p-6 flex items-start gap-4"
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-primary/10">
                <AlertTriangle className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  {fact.text}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {fact.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
