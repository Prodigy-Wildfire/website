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
    "Wildfire Protection for Homeowners: What You Need to Know Before Fire Season | Prodigy Wildfire",
  description:
    "Living in the wildland-urban interface means living with wildfire risk. Learn what every homeowner should know about protecting their property, and why roof-mounted sprinkler systems are the next essential step.",
  keywords: [
    "wildfire protection for homes USA",
    "wildfire sprinkler system",
    "ember attack protection",
    "home wildfire defence",
    "WUI fire protection",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Your Home's Biggest Wildfire Threat Isn't the Flames. It's What You Can't See Coming.",
  description:
    "Living in the wildland-urban interface means living with wildfire risk. Learn what every homeowner should know about protecting their property, and why roof-mounted sprinkler systems are the next essential step.",
  image:
    "https://www.prodigywildfire.com/images/insights/wildfire-protection-homes-usa.jpg",
  datePublished: "2026-02-27",
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
  mainEntityOfPage: "https://www.prodigywildfire.com/insights/wildfire-protection-homes-usa",
};

export default function WildfireProtectionHomesUsaArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Insights", href: "/insights" },
          { name: "Wildfire Protection for Homeowners: What You Need to Know Before Fire Season" },
        ]}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary pt-32 pb-16 md:pb-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="flex items-center justify-center gap-3 text-sm text-primary-foreground/60">
              <span>27 February 2026</span>
              <span>·</span>
              <span>Homeowner</span>
              <span>·</span>
              <span>USA</span>
            </div>
            <h1 className="mt-6 font-heading text-3xl font-bold leading-tight tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              Your Home&apos;s Biggest Wildfire Threat Isn&apos;t the Flames.
              It&apos;s What You Can&apos;t See Coming.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
              Living in the wildland-urban interface means living with wildfire
              risk. Learn what every homeowner should know about protecting
              their property, and why roof-mounted sprinkler systems are the
              next essential step.
            </p>
          </div>
        </section>

        <ArticleAuthor date="27 February 2026" />

        {/* Featured Image */}
        <section className="bg-muted">
          <div className="mx-auto max-w-4xl px-6">
            <div className="relative -mt-8 aspect-[16/9] overflow-hidden rounded shadow-lg">
              <Image
                src="/images/insights/wildfire-protection-homes-usa.jpg"
                alt="Western US home with visible roofline sprinkler system in a mountain setting"
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
              When most people picture a wildfire threatening their home, they
              imagine a towering wall of flames bearing down on their street.
              It&apos;s dramatic, terrifying, and, for the vast majority of
              homes lost during wildfire events, not actually how it happens.
            </p>
            <p>
              The reality is quieter, faster, and far more insidious. Embers.
              Burning fragments carried by wind, sometimes over 12 miles ahead
              of the fire front, landing on roofs, decks, gutters, and vents. A
              single ember can reach 1,200°F, more than enough to ignite dry
              leaves, exposed wood, or any combustible material it lands on.
              Around 90% of homes destroyed during wildfire events are lost to
              ember attack, not direct flame contact.
            </p>
            <p>
              If you live anywhere in the wildland-urban interface (and millions
              of Americans do) this is the threat you need to understand,
              because it&apos;s the one that determines whether your home
              survives or doesn&apos;t.
            </p>

            <h2>Defensible Space Is Essential, But It&apos;s Not Enough On Its Own</h2>
            <p>
              If you&apos;ve been following wildfire preparedness guidance,
              you&apos;ve probably heard about defensible space. Clear
              vegetation within 30 feet of your home. Reduce ladder fuels that
              allow ground fires to climb into tree canopy. Use fire-resistant
              landscaping. Keep your gutters clean and your roof free of debris.
            </p>
            <p>
              All of this matters, and you should absolutely do it. Defensible
              space is a foundational layer of protection that reduces the
              chance of fire reaching your structure and gives firefighters a
              safer environment to work in if they can reach your property.
            </p>
            <p>
              But here&apos;s the hard truth: defensible space reduces risk. It
              doesn&apos;t eliminate it. Embers don&apos;t care about your
              landscaping. They travel on wind currents, and they will find any
              vulnerability your property has, whether that&apos;s a gap under
              an eave, a buildup in a gutter, or a corner of decking that dried
              out in the afternoon heat.
            </p>
            <p>
              And there&apos;s another reality to face. North America currently
              faces a 40–50% shortfall in wildfire firefighters. When a major
              fire event hits, there simply aren&apos;t enough crews to defend
              every home. Many properties will not have a firetruck on the
              street when the embers arrive.
            </p>

            <h2>What Active Protection Looks Like</h2>
            <p>
              This is where engineered wildfire defence systems close the gap
              between preparation and survival. At Prodigy Wildfire, we design
              and install permanent, roof-mounted sprinkler systems that
              saturate your home and the surrounding area with water, creating a
              protective moisture barrier that prevents ember ignition.
            </p>
            <p>
              Our systems are custom-designed for every property we protect. We
              look at your home&apos;s layout, roof geometry, surrounding
              vegetation, local fire risk, and specific vulnerabilities. Then we
              engineer a system that provides comprehensive coverage, not a
              generic, one-size-fits-all solution, but a defence tailored to
              your home.
            </p>
            <p>
              What sets Prodigy apart starts with who designed the system. Our
              technology has been developed alongside professional firefighters
              from multiple countries, combined with more than 40 years of
              experience in the construction industry. We understand both how
              fire behaves and how buildings are constructed, which means we
              build protection that addresses real-world scenarios, not
              theoretical ones.
            </p>
            <p>
              And critically, our systems can be activated remotely from
              anywhere in the world through the Prodigy Wildfire App. When an
              evacuation order comes (and you should always follow it) you can
              protect your home from wherever you are. You don&apos;t need to be
              standing on your roof with a garden hose. You need to be safe,
              with your family, knowing that your property is defended.
            </p>

            <h2>Real Stories, Real Evidence</h2>
            <p>
              In Jasper, Alberta, a homeowner made the decision to activate a
              rooftop sprinkler before evacuating ahead of the devastating 2024
              wildfire. That fire destroyed a third of the town, 358 structures
              out of 1,113. But his wood-clad home, which the local fire chief
              described in terms that suggested it should have been one of the
              first to go, survived. And because it survived, it helped protect
              the neighbouring homes that were still standing when residents
              returned.
            </p>
            <p>
              In Nova Scotia, during recent wildfire events, sprinkler systems
              were deployed on 88 homes. Eighty-five of those homes were saved.
              The results were so compelling that the provincial government
              began purchasing additional units.
            </p>
            <p>
              These stories aren&apos;t about Prodigy systems specifically.
              They&apos;re about the principle that water-based suppression
              works against ember attack. And they demonstrate why having a
              permanent, professionally engineered system on your property,
              ready to activate at a moment&apos;s notice, is fundamentally
              different from hoping the fire stays on the other side of the
              ridge.
            </p>

            <h2>What You Can Do Today</h2>
            <p>
              Start with what you can control right now. Clear your defensible
              space. Inspect your home&apos;s exterior for ember entry points.
              Make a wildfire action plan for your family.
            </p>
            <p>
              Then take the next step. Understand your actual risk, and explore
              what engineered protection could look like for your specific
              property.
            </p>
            <p className="mt-10 text-base font-semibold text-foreground">
              Take our free Wildfire Readiness Quiz. It walks you through 15
              questions about your property and gives you a clear picture of
              where you stand and what actions will make the biggest difference.
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

