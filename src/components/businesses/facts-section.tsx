import { Mountain, Zap, Hotel, GraduationCap, Landmark, Building } from "lucide-react";

const sectors = [
  {
    icon: Mountain,
    title: "Resorts and Tourism",
    description:
      "Gondolas, lodges, ski resorts, and tourist attractions in remote fire-prone locations across North America and Australia.",
  },
  {
    icon: Zap,
    title: "Critical Infrastructure",
    description:
      "Power stations, water treatment plants, communications towers, and essential service facilities that communities depend on.",
  },
  {
    icon: Hotel,
    title: "Hotels and Hospitality",
    description:
      "Boutique hotels, retreat centres, and accommodation providers in wildland-urban interface areas across all three countries.",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description:
      "Universities, colleges, and campus facilities located in fire-prone regions, protecting students, staff, and research assets.",
  },
  {
    icon: Landmark,
    title: "Government and Public Facilities",
    description:
      "Municipal buildings, fire halls, community centres, and public infrastructure requiring wildfire resilience compliance.",
  },
  {
    icon: Building,
    title: "Commercial Real Estate",
    description:
      "Office parks, warehouses, mixed-use developments, and commercial properties where wildfire protection supports insurance and value.",
  },
];

export function FactsSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-heading text-sm font-semibold tracking-widest uppercase text-accent mb-3">
            Commercial Expertise
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Industries We <span className="text-accent">Protect</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-base leading-relaxed">
            From mountain-top gondola terminals to urban campus facilities,
            Prodigy Wildfire Solutions designs and installs commercial wildfire suppression systems
            tailored to every industry and environment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.title}
                className="bg-card border border-border rounded p-8 text-center transition-all hover:shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-base font-bold text-foreground">
                  {sector.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {sector.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
