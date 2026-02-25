import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { RegionContactForm } from "@/components/regions/region-contact-form";

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
  heroTitle?: string;
  heroImage: string;
  heroAlt: string;
  description: string;
  detail: string;
  stats: Stat[];
  statsSource?: string;
  statsSourceUrl?: string;
  descriptionHeading?: ReactNode;
  caseStudies?: CaseStudy[];
  subRegions?: SubRegion[];
  subRegionLabel?: string;
  subRegionBasePath?: string;
  beforeCta?: ReactNode;
  ctaDescription?: string;
  ctaQuizLabel?: string;
  showContactForm?: boolean;
  contactRegionLabel?: string;
  contactCountry?: string;
}

export function RegionPageTemplate({
  name,
  heroTitle,
  heroImage,
  heroAlt,
  description,
  detail,
  stats,
  statsSource,
  statsSourceUrl,
  descriptionHeading,
  caseStudies,
  subRegions,
  subRegionLabel = "Region",
  subRegionBasePath = "/regions",
  beforeCta,
  ctaDescription,
  ctaQuizLabel,
  showContactForm = false,
  contactRegionLabel = "Province",
  contactCountry = "Canada",
}: RegionPageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 md:min-h-[85vh]">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/55" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            {heroTitle ? (
              <>{heroTitle} <span className="text-accent">{name}</span></>
            ) : (
              <>Wildfire Protection in{" "}<span className="text-accent">{name}</span></>
            )}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            {description}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className={`grid gap-8 ${stats.length <= 2 ? "sm:grid-cols-2" : stats.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
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
          {statsSource && statsSourceUrl && (
            <p className="mt-6 text-center">
              <a
                href={statsSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground/60 underline transition-colors hover:text-accent"
              >
                Source: {statsSource}
              </a>
            </p>
          )}
        </div>
      </section>

      {/* Description */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {descriptionHeading || <><span className="text-accent">Wildfire Protection</span> Services in {name}</>}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {detail}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/consultation"
              className="rounded bg-accent px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/systems"
              className="rounded border-2 border-accent px-8 py-3.5 text-center text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
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
                <div
                  key={sub.slug}
                  className="rounded border border-border bg-card px-6 py-4 text-sm font-semibold text-card-foreground"
                >
                  {sub.name}
                </div>
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
              Case Studies in <span className="text-accent">{name}</span>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {caseStudies.map((study) => (
                <Link
                  key={study.name}
                  href={study.href}
                  className="flex flex-col items-center rounded border border-border bg-card p-8 text-center transition-all hover:border-accent hover:shadow-lg"
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

      {/* Contact Form */}
      {showContactForm && <RegionContactForm regionName={name} regionLabel={contactRegionLabel} country={contactCountry} />}

      {beforeCta}

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Protect Your Property in {name}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
            {ctaDescription || "Get a free wildfire risk assessment and learn how Prodigy can protect your home or business with a custom-engineered wildfire sprinkler system."}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/consultation"
              className="rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/assessment"
              className="rounded border-2 border-accent px-8 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
            >
              {ctaQuizLabel || "Take the Wildfire Preparedness Quiz"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
