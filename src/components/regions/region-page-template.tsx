import Image from "next/image";
import Link from "next/link";

interface Stat {
  value: string;
  label: string;
}

interface CaseStudy {
  name: string;
  description: string;
  href: string;
}

interface SubRegion {
  name: string;
  slug: string;
}

interface RegionPageTemplateProps {
  name: string;
  heroImage: string;
  heroAlt: string;
  description: string;
  detail: string;
  stats: Stat[];
  caseStudies?: CaseStudy[];
  subRegions?: SubRegion[];
  subRegionLabel?: string;
}

export function RegionPageTemplate({
  name,
  heroImage,
  heroAlt,
  description,
  detail,
  stats,
  caseStudies,
  subRegions,
  subRegionLabel = "Region",
}: RegionPageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end justify-center overflow-hidden pb-20">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Wildfire Protection in{" "}
            <span className="text-accent">{name}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            {description}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl font-bold text-accent md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Wildfire Protection Services in {name}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {detail}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded bg-accent px-8 py-3.5 text-center text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Get a Free Assessment
            </Link>
            <Link
              href="/services"
              className="rounded border border-border px-8 py-3.5 text-center text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Explore Our Systems
            </Link>
          </div>
        </div>
      </section>

      {/* Sub-Regions */}
      {subRegions && subRegions.length > 0 && (
        <section className="bg-muted py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-12 text-center font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Wildfire Protection by {subRegionLabel}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {subRegions.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/regions/${sub.slug}`}
                  className="rounded border border-border bg-card px-6 py-4 text-sm font-semibold text-card-foreground transition-all hover:border-accent hover:text-accent hover:shadow-md"
                >
                  {sub.name} &rarr;
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies */}
      {caseStudies && caseStudies.length > 0 && (
        <section className="bg-muted py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-12 text-center font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Case Studies in {name}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {caseStudies.map((study) => (
                <Link
                  key={study.name}
                  href={study.href}
                  className="rounded border border-border bg-card p-8 transition-all hover:border-accent hover:shadow-lg"
                >
                  <h3 className="font-heading text-lg font-bold text-card-foreground">
                    {study.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {study.description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-accent">
                    Read More &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Protect Your Property in {name}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
            Get a free wildfire risk assessment and learn how Prodigy can protect
            your home or business with a custom-engineered wildfire sprinkler
            system.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Get Protected
            </Link>
            <Link
              href="https://quiz.prodigywildfire.com/wildfirereadiness"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Take the Wildfire Preparedness Quiz
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
