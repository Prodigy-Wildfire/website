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
    "Canadian Wildfire Seasons Are Getting Worse. Here's How to Protect Your Home | Prodigy Wildfire",
  description:
    "Canada's wildfire seasons are intensifying year after year. Learn why ember attack is the biggest threat to your home and how permanent sprinkler systems are keeping Canadian properties standing.",
  keywords: [
    "wildfire protection for homes Canada",
    "wildfire sprinkler system Canada",
    "ember attack protection",
    "home wildfire defence Canada",
    "wildfire season Canada",
  ],
  alternates: { canonical: "/insights/wildfire-protection-homes-canada" },
  openGraph: {
    type: "article",
    title: "Canadian Wildfire Seasons Are Getting Worse. Here's How to Protect Your Home",
    description:
      "Canada's wildfire seasons are intensifying year after year. Learn why ember attack is the biggest threat to your home and how permanent sprinkler systems are keeping Canadian properties standing.",
    images: [{ url: "/images/insights/wildfire-protection-homes-canada.jpg", width: 1200, height: 630, alt: "Canadian Wildfire Seasons Are Getting Worse. Here's How to Protect Your Home" }],
    publishedTime: "2026-03-03",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Canada's Wildfire Crisis Is Here, And Your Home Needs More Than a Garden Hose",
  description:
    "Canada's wildfire seasons are intensifying year after year. Learn why ember attack is the biggest threat to your home and how permanent sprinkler systems are keeping Canadian properties standing.",
  image:
    "https://www.prodigywildfire.com/images/insights/wildfire-protection-homes-canada.jpg",
  datePublished: "2026-03-03",
  dateModified: "2026-03-03",
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
  mainEntityOfPage: "https://www.prodigywildfire.com/insights/wildfire-protection-homes-canada",
};

export default function WildfireProtectionHomesCanadaArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Insights", href: "/insights" },
          { name: "Canadian Wildfire Seasons Are Getting Worse. Here's How to Protect Your Home" },
        ]}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary pt-32 pb-16 md:pb-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="flex items-center justify-center gap-3 text-sm text-primary-foreground/60">
              <span>3 March 2026</span>
              <span>&middot;</span>
              <span>Homeowner</span>
              <span>&middot;</span>
              <span>Canada</span>
            </div>
            <h1 className="mt-6 font-heading text-3xl font-bold leading-tight tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              Canada&apos;s Wildfire Crisis Is Here, And Your Home Needs More
              Than a Garden Hose
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
              Canada&apos;s wildfire seasons are intensifying year after year.
              Learn why ember attack is the biggest threat to your home and how
              permanent sprinkler systems are keeping Canadian properties
              standing.
            </p>
          </div>
        </section>

        <ArticleAuthor date="3 March 2026" />

        {/* Featured Image */}
        <section className="bg-muted">
          <div className="mx-auto max-w-4xl px-6">
            <div className="relative -mt-8 aspect-[16/9] overflow-hidden rounded shadow-lg">
              <Image
                src="/images/insights/wildfire-protection-homes-canada.jpg"
                alt="Canadian home in a forest setting with visible roofline sprinkler system"
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
              If the last few years have taught Canadian homeowners anything,
              it&apos;s that wildfire season is no longer a distant concern for
              someone else&apos;s province. From British Columbia to Nova Scotia,
              Alberta to Ontario, fire seasons are arriving earlier, burning
              hotter, and affecting communities that never expected to see flames
              anywhere near their property.
            </p>
            <p>
              In 2023, Canada experienced its worst wildfire season in recorded
              history, with over 18 million hectares burned. In 2024, the Jasper
              wildfire destroyed 358 structures in a town that many considered
              well-protected, causing $880 million in insurance claims and
              displacing thousands. These aren&apos;t one-off events.
              They&apos;re the new pattern.
            </p>
            <p>
              For homeowners, the question has shifted from &ldquo;could a
              wildfire reach my area?&rdquo; to &ldquo;when it does, will my
              home survive?&rdquo;
            </p>

            <h2>Understanding the Real Threat</h2>
            <p>
              The image most people have of wildfire (a roaring front of flames
              crashing through the trees) is terrifying but misleading when it
              comes to understanding how homes are actually lost. Around 90% of
              structures destroyed during wildfire events are lost to ember
              attack.
            </p>
            <p>
              Embers are burning fragments: bark, leaves, pine needles,
              construction debris. They are carried on wind currents ahead of the
              main fire front. They can travel over 20 kilometres, landing on
              roofs, decks, gutters, and any exposed surface. A single ember can
              reach temperatures above 650&deg;C. When one lands on dry material
              (and it takes remarkably little) ignition happens fast.
            </p>
            <p>
              This is why homes burn when the fire front is still kilometres
              away. This is why metal roofs aren&apos;t a guaranteed defence,
              because embers can slide off or be blown against walls, fences, and
              vegetation around the home. And this is why traditional
              preparation, while essential, has a ceiling on how much protection
              it can provide.
            </p>

            <h2>The Jasper Story That Matters</h2>
            <p>
              When the 2024 Jasper wildfire swept through the town, destroying a
              third of its structures, a homeowner named Lee Declercq made a
              decision that would prove critical. Before following the evacuation
              order, he climbed onto his roof and activated a rooftop sprinkler,
              leaving it running to soak his property continuously.
            </p>
            <p>
              Two days later, when the fire burned through his neighbourhood and
              levelled dozens of homes, his wood-clad house (a structure that the
              local fire chief suggested should have been among the first to
              burn) survived. And because it survived, it helped protect the
              neighbouring homes that also remained standing.
            </p>
            <p>
              Jasper&apos;s fire chief attributed the survival directly to the
              sprinkler keeping the property saturated. It&apos;s a story that
              underscores a principle that firefighters have understood for
              decades: if it&apos;s wet, it&apos;s much harder to burn.
            </p>
            <p>
              In Nova Scotia, this principle was demonstrated at scale. During
              recent wildfire events, sprinkler systems were deployed on 88 homes
              near the Long Lake fire. Eighty-five of those homes survived, a
              result so compelling that the provincial government is now
              purchasing additional sprinkler units for future deployment.
            </p>

            <h2>Why Permanent Protection Is Different</h2>
            <p>
              After stories like Jasper, there&apos;s always a spike in people
              buying garden sprinklers for their roofs. The instinct is right.
              Water on your property during a fire event absolutely helps. But a
              garden sprinkler on a roof peak is a vastly different thing from an
              engineered wildfire protection system.
            </p>
            <p>
              A garden sprinkler provides uneven, limited coverage. It wastes
              water spraying in directions that don&apos;t matter while leaving
              critical areas exposed. It requires manual setup and can&apos;t be
              activated remotely. If you&apos;re evacuated (as you should be)
              there&apos;s no way to adjust, restart, or manage it.
            </p>
            <p>
              At Prodigy Wildfire, we design and install permanent, roof-mounted
              sprinkler systems that are custom-engineered for every property we
              protect. Our systems provide up to 50 feet of sprinkler range and
              achieve full coverage within three minutes of activation. They can
              be controlled remotely from anywhere in the world through the
              Prodigy Wildfire App, so when the evacuation order comes, you
              leave, and your home&apos;s defence stays active.
            </p>
            <p>
              We don&apos;t sell a generic product. We assess your property,
              looking at its layout, roof type, surrounding vegetation, local
              fire risk, and specific vulnerabilities, and design a system that
              addresses exactly what your home needs. Our systems have been
              developed alongside professional firefighters from multiple
              countries, combined with over 40 years of experience in the
              construction industry.
            </p>
            <p>
              We&apos;ve already installed systems across Canada for major
              commercial operations including the Banff Gondola, Bow Valley
              Regional Housing, Lake Minnewanka Cruise Terminal, and Golden
              Skybridge, as well as numerous residential properties. We install
              nationwide within three weeks, weather dependent.
            </p>

            <h2>The Cost of Waiting</h2>
            <p>
              Every fire season that passes without protection is a season you
              got lucky. And in Canada right now, the odds of needing that
              protection are increasing, not decreasing.
            </p>
            <p>
              Insurance premiums in fire-prone areas are climbing. Coverage is
              becoming harder to secure. And the gap between the number of homes
              at risk and the number of firefighters available to protect them
              continues to widen.
            </p>
            <p>
              Taking action before fire season isn&apos;t just about protecting
              your property. It&apos;s about protecting your family&apos;s
              financial security, your insurability, and your ability to come
              home to something still standing.
            </p>

            <p className="mt-10 text-base font-semibold text-foreground">
              How prepared is your home? Take our free Wildfire Readiness Quiz.
              Fifteen questions that give you a clear picture of your risk and
              what you can do about it.
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
