import Link from "next/link";

const regions = [
  {
    flag: "🇦🇺",
    title: "Australia",
    description:
      "Serving homes, rural properties, and communities across every state and territory with bushfire sprinkler systems engineered for Australia's extreme conditions.",
    link: "/regions/australia",
  },
  {
    flag: "🇨🇦",
    title: "Canada",
    description:
      "Serving homes, businesses, and communities across every province and territory with advanced exterior wildfire sprinkler systems and ember detection technology.",
    link: "/regions/canada",
  },
  {
    flag: "🇺🇸",
    title: "USA",
    description:
      "Serving homes, businesses, and communities across all 50 states with custom-engineered wildfire sprinkler systems built for America's evolving fire environment.",
    link: "/regions/usa",
  },
];

export function WhyProdigy() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Serving Three Countries, <span className="text-accent">One Mission</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Prodigy Wildfire Solutions designs, installs, and maintains wildfire sprinkler systems
            across the USA, Canada, and Australia. Wherever wildfire
            risk exists, we deliver protection engineered for local conditions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {regions.map((region) => (
            <Link
              key={region.title}
              href={region.link}
              className="group rounded border border-border bg-card p-8 text-center transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent/30 bg-accent/5">
                <span className="text-3xl leading-none">{region.flag}</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-card-foreground">
                {region.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {region.description}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
