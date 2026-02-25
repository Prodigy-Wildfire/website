import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MailingListSection } from "@/components/mailing-list-section";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { ArticleAuthor } from "@/components/insights/article-author";

export const metadata: Metadata = {
  title:
    "What the LA Fires and Rising Wildfire Risk Mean for Homeowners Across the Western US | Prodigy Wildfire",
  description:
    "The 2025 LA fires destroyed over 16,000 structures. But homes with active wildfire protection survived. Here's what every property owner in fire-prone America needs to learn from that.",
  keywords: [
    "LA wildfire protection lessons",
    "wildfire sprinkler system effectiveness",
    "homes saved wildfire",
    "wildfire defence system",
    "proactive wildfire protection USA",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "What the LA Fires Taught Us: The Homes That Survived Had One Thing in Common",
  description:
    "The 2025 LA fires destroyed over 16,000 structures. But homes with active wildfire protection survived. Here's what every property owner in fire-prone America needs to learn from that.",
  image:
    "https://www.prodigywildfire.com/images/insights/la-wildfire-protection-lessons.jpg",
  datePublished: "2026-03-02",
  author: {
    "@type": "Person",
    name: "George Harris",
    jobTitle: "CEO",
    affiliation: {
      "@type": "Organization",
      name: "Prodigy Wildfire Solutions",
      url: "https://www.prodigywildfire.com",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Prodigy Wildfire Solutions",
    url: "https://www.prodigywildfire.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.prodigywildfire.com/images/pws-logo-white-text.png",
    },
  },
  mainEntityOfPage: "https://www.prodigywildfire.com/insights/la-wildfire-protection-lessons",
};

export default function LaWildfireProtectionLessonsArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Insights", href: "/insights" },
          { name: "What the LA Fires and Rising Wildfire Risk Mean for Homeowners Across the Western US" },
        ]}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary pt-32 pb-16 md:pb-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="flex items-center justify-center gap-3 text-sm text-primary-foreground/60">
              <span>2 March 2026</span>
              <span>·</span>
              <span>Community</span>
              <span>·</span>
              <span>USA</span>
            </div>
            <h1 className="mt-6 font-heading text-3xl font-bold leading-tight tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              What the LA Fires Taught Us: The Homes That Survived Had One Thing
              in Common
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
              The 2025 LA fires destroyed over 16,000 structures. But homes with
              active wildfire protection survived. Here&apos;s what every
              property owner in fire-prone America needs to learn from that.
            </p>
          </div>
        </section>

        <ArticleAuthor date="2 March 2026" />

        {/* Featured Image */}
        <section className="bg-muted">
          <div className="mx-auto max-w-4xl px-6">
            <div className="relative -mt-8 aspect-[16/9] overflow-hidden rounded shadow-lg">
              <Image
                src="/images/insights/la-wildfire-protection-lessons.jpg"
                alt="Aerial view of a fire-affected US community showing contrast between damaged and surviving structures"
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="bg-muted py-16 md:py-20">
          <article className="prose-article mx-auto max-w-3xl px-6">
            <p>
              In January 2025, wildfires tore through the greater Los Angeles
              area with a speed and ferocity that overwhelmed one of the most
              resourced fire departments in the world. The Eaton and Palisades
              fires alone burned roughly 57,000 acres, destroying nearly 40,000
              acres of developed land and claiming over 16,000 structures.
              Insurance industry losses exceeded $40 billion.
            </p>
            <p>
              The scale of destruction was staggering. But within that
              devastation, something stood out: homes that had active wildfire
              protection systems survived at remarkably high rates, even in the
              hardest-hit neighborhoods. Properties with engineered sprinkler
              systems (the kind that saturate roofs, eaves, and surrounding
              areas to prevent ember ignition) remained standing while homes on
              either side were reduced to ash.
            </p>
            <p>
              This wasn&apos;t luck. It was preparation. And it carries a lesson
              for every property owner living in a fire-prone area of the United
              States.
            </p>

            <h2>The Gap Between Fire Response and Fire Reality</h2>
            <p>
              The LA fires exposed a truth that wildfire professionals have been
              warning about for years: when a fire event reaches a certain
              scale, traditional firefighting resources simply cannot protect
              every property. LA County Fire Chief Anthony Marrone acknowledged
              publicly that the departments were not prepared for widespread
              disaster on that scale.
            </p>
            <p>
              This isn&apos;t a criticism of firefighters. It&apos;s a
              recognition of the mathematical reality. There are more homes in
              the wildland-urban interface than there are fire crews to defend
              them. North America faces a 40–50% shortfall in wildfire
              firefighters, and that gap widens every year as more people move
              into fire-prone areas and fire seasons grow longer and more
              intense.
            </p>
            <p>
              The implication is straightforward: if you&apos;re relying solely
              on emergency services to save your property during a major
              wildfire event, you may be relying on resources that can&apos;t
              reach you in time.
            </p>

            <h2>The Evidence for Active Protection Is Growing</h2>
            <p>
              The LA fires produced some of the most compelling evidence yet for
              the effectiveness of engineered wildfire defence systems. Homes
              equipped with sprinkler-based protection survived in
              neighbourhoods where nearly everything else burned.
            </p>
            <p>
              But this evidence isn&apos;t new. In Jasper, Alberta, during the
              catastrophic 2024 wildfire that destroyed 358 structures, a
              homeowner who had activated a rooftop sprinkler before evacuating
              is credited with saving his home and several neighbouring
              properties. The Jasper fire chief attributed the survival of those
              homes directly to the sprinkler system keeping the properties
              saturated.
            </p>
            <p>
              In Nova Scotia, sprinkler systems deployed on 88 homes during
              wildfire events saved 85 of them, a success rate that prompted the
              provincial government to purchase additional units. In northern
              Saskatchewan, an off-grid cabin survived a wildfire because its
              owner had installed a system of elevated sprinklers that soaked
              the property with overlapping coverage.
            </p>
            <p>
              The pattern is consistent: water-based suppression systems that
              keep properties saturated are highly effective at preventing the
              ember ignition that causes 90% of structure loss during wildfires.
            </p>

            <h2>Why Permanent Systems Are Different</h2>
            <p>
              After every major fire event, there&apos;s a spike in interest in
              DIY wildfire protection: garden sprinklers on roofs, hoses left
              running during evacuations, portable pump systems. While the
              instinct to protect your property is understandable, these
              approaches carry significant limitations.
            </p>
            <p>
              Garden sprinklers aren&apos;t designed for the sustained,
              high-coverage application needed during a fire event. They waste
              water through poor targeting, and if you leave them running during
              an evacuation, you&apos;re potentially reducing the water pressure
              firefighters need. Portable systems require someone to set them
              up, and during an evacuation, you need to leave, not be climbing
              onto your roof.
            </p>
            <p>
              Permanent, engineered systems address all of these limitations.
              They&apos;re designed for comprehensive coverage of the specific
              property they&apos;re installed on. They use water efficiently,
              targeting the areas where embers are most likely to ignite. They
              can be activated remotely, from a phone, from across the country,
              so you can protect your home while following evacuation orders.
            </p>
            <p>
              At Prodigy Wildfire, every system we install is custom-designed
              for the property it protects. Our team combines the expertise of
              professional firefighters from multiple countries with over 40
              years in construction, and we install nationwide across the US
              within three weeks. Our systems can be activated remotely through
              the Prodigy Wildfire App, giving you control over your home&apos;s
              defence from wherever you are.
            </p>

            <h2>The Time to Act Is Before Fire Season</h2>
            <p>
              If the LA fires, Jasper, and Nova Scotia have shown us anything,
              it&apos;s that the difference between a home that survives and one
              that doesn&apos;t often comes down to a decision made months or
              years before the fire arrives.
            </p>
            <p>
              Defensible space, fire-resistant construction, and community
              preparedness are all important layers of protection. But they work
              best when combined with an active defence system that addresses
              the primary threat (ember attack) head on.
            </p>
            <p className="mt-10 text-base font-semibold text-foreground">
              Don&apos;t wait for the next headline. Take our free Wildfire
              Readiness Quiz to understand your property&apos;s risk and what
              you can do about it.
            </p>

            <div className="mt-6 text-center">
              <Link
                href="/assessment"
                className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
              >
                Take the Wildfire Readiness Quiz
              </Link>
            </div>
          </article>
        </section>

        {/* Back to Insights */}
        <section className="bg-background py-12">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Link
              href="/insights"
              className="text-sm font-semibold text-accent transition-colors hover:text-accent/80"
            >
              &larr; Back to Insights
            </Link>
          </div>
        </section>

        <MailingListSection />
      </main>
      <Footer />
    </>
  );
}

