import Link from "next/link";

const regions = [
  {
    flag: "🇺🇸",
    title: "United States",
    description:
      "Currently serving California, Colorado, Oregon, and wildfire-prone states across the West, with coverage expanding across the United States.",
    link: "/regions",
  },
  {
    flag: "🇨🇦",
    title: "Canada",
    description:
      "Currently serving British Columbia, Alberta, and communities across the wildland-urban interface, with coverage expanding across Canada.",
    link: "/regions",
  },
  {
    flag: "🇦🇺",
    title: "Australia",
    description:
      "Currently serving New South Wales, Victoria, and bushfire-prone regions, with coverage expanding across Australia.",
    link: "/regions",
  },
];

export function WhyProdigy() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            Where We Protect
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Serving Three Countries, <span className="text-accent">One Mission</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Prodigy Wildfire Solutions designs, installs, and maintains wildfire sprinkler systems
            across the United States, Canada, and Australia. Wherever wildfire
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

        <div className="mt-10 text-center">
          <Link
            href="/regions"
            className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            View All Regions
          </Link>
        </div>
      </div>
    </section>
  );
}
