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
    "From the Banff Gondola to Your Backyard: How Prodigy Is Protecting Canadian Communities From Wildfire | Prodigy Wildfire",
  description:
    "Prodigy Wildfire has installed protection systems for some of Canada's most iconic facilities. Here's why these organizations chose active wildfire defence, and what it means for your property.",
  keywords: [
    "Prodigy Wildfire install Canada",
    "Banff Gondola wildfire protection",
    "wildfire sprinkler system Canada",
    "Lake Minnewanka fire protection",
    "Golden Skybridge wildfire defence",
  ],
  alternates: { canonical: "/insights/prodigy-wildfire-installs-canada" },
  openGraph: {
    type: "article",
    title: "From the Banff Gondola to Your Backyard: How Prodigy Is Protecting Canadian Communities From Wildfire",
    description:
      "Prodigy Wildfire has installed protection systems for some of Canada's most iconic facilities. Here's why these organizations chose active wildfire defence, and what it means for your property.",
    images: [{ url: "/images/insights/prodigy-wildfire-installs-canada.jpg", width: 1200, height: 630, alt: "From the Banff Gondola to Your Backyard: How Prodigy Is Protecting Canadian Communities From Wildfire" }],
    publishedTime: "2026-03-06",
  },
  twitter: {
    card: "summary_large_image",
    title: "From the Banff Gondola to Your Backyard: How Prodigy Is Protecting Canadian Communities From Wildfire",
    description:
      "Prodigy Wildfire has installed protection systems for some of Canada's most iconic facilities. Here's why these organizations chose active wildfire defence, and what it means for your property.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Protecting What Matters: How Prodigy Is Defending Canadian Landmarks, Businesses, and Homes",
  description:
    "Prodigy Wildfire has installed protection systems for some of Canada's most iconic facilities. Here's why these organizations chose active wildfire defence, and what it means for your property.",
  image:
    "https://www.prodigywildfire.com/images/insights/prodigy-wildfire-installs-canada.jpg",
  datePublished: "2026-03-06",
  dateModified: "2026-03-06",
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
  mainEntityOfPage: "https://www.prodigywildfire.com/insights/prodigy-wildfire-installs-canada",
};

export default function ProdigyWildfireInstallsCanadaArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Insights", href: "/insights" },
          { name: "From the Banff Gondola to Your Backyard: How Prodigy Is Protecting Canadian Communities From Wildfire" },
        ]}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary pt-32 pb-16 md:pb-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="flex items-center justify-center gap-3 text-sm text-primary-foreground/60">
              <span>6 March 2026</span>
              <span>&middot;</span>
              <span>Community</span>
              <span>&middot;</span>
              <span>Canada</span>
            </div>
            <h1 className="mt-6 font-heading text-3xl font-bold leading-tight tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              Protecting What Matters: How Prodigy Is Defending Canadian
              Landmarks, Businesses, and Homes
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
              Prodigy Wildfire has installed protection systems for some of
              Canada&apos;s most iconic facilities. Here&apos;s why these
              organizations chose active wildfire defence, and what it means for
              your property.
            </p>
          </div>
        </section>

        <ArticleAuthor date="6 March 2026" />

        {/* Featured Image */}
        <section className="bg-muted">
          <div className="mx-auto max-w-4xl px-6">
            <div className="relative -mt-8 aspect-[16/9] overflow-hidden rounded shadow-lg">
              <Image
                src="/images/insights/prodigy-wildfire-installs-canada.jpg"
                alt="Iconic Canadian Rocky Mountain landscape with subtle presence of protection infrastructure"
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
              There&apos;s a gondola that carries visitors high above the Bow
              Valley in Banff, Alberta, offering some of the most spectacular
              mountain views in the world. There&apos;s a cruise terminal on
              Lake Minnewanka where families and tourists board boats to explore
              the glacial waters of the Canadian Rockies. There&apos;s a
              skybridge in Golden, British Columbia, where visitors walk
              suspended above a canyon surrounded by old-growth forest.
            </p>
            <p>
              These are places that draw people from around the world.
              They&apos;re also places that sit squarely in some of Canada&apos;s
              most wildfire-prone landscapes. And they all share something in
              common: they&apos;re protected by Prodigy Wildfire.
            </p>

            <h2>Why These Organizations Chose Active Protection</h2>
            <p>
              When the operators of the Banff Gondola, Golden Skybridge, Lake
              Minnewanka Cruise Terminal, and Bow Valley Regional Housing
              evaluated their wildfire risk, they faced a reality that many
              Canadian organizations are now confronting.
            </p>
            <p>
              These facilities are surrounded by the same forests that make them
              beautiful, forests that also represent significant fuel loads
              during fire season. They serve hundreds or thousands of visitors
              daily, creating a responsibility that extends far beyond the
              physical structure. They carry substantial replacement and
              rebuilding costs that would disrupt operations for months or years.
              And they operate in regions where recent wildfire events have
              demonstrated that no location is truly safe from fire.
            </p>
            <p>
              Traditional fire preparedness (vegetation management, construction
              standards, emergency evacuation plans) is necessary but limited.
              These organizations needed active defence: a system that could
              protect their facilities during a fire event, even if firefighting
              resources couldn&apos;t reach them.
            </p>
            <p>
              That&apos;s what Prodigy provides. Our custom-designed,
              roof-mounted sprinkler systems create a moisture barrier that
              saturates the building and surrounding area, specifically
              engineered to prevent ember ignition, the cause of approximately
              90% of structure loss during wildfires. Activated remotely through
              the Prodigy Wildfire App, these systems give facility managers the
              ability to protect their operations from anywhere, at any time.
            </p>

            <h2>Scaling Down From Commercial to Residential</h2>
            <p>
              There&apos;s a perception that engineered wildfire protection is
              only for large commercial operations, the kind of thing that makes
              sense for a gondola station or a cruise terminal but is somehow too
              complex or too expensive for a regular home.
            </p>
            <p>That perception is wrong.</p>
            <p>
              The same engineering principles that protect a commercial facility
              work at a residential scale. The same ember attack that threatens a
              gondola station threatens your roof. The same wind-driven embers
              that can ignite a cruise terminal can ignite your deck. The physics
              doesn&apos;t change because the building is smaller.
            </p>
            <p>
              At Prodigy, every system we design (whether it&apos;s for a
              commercial landmark or a family home) is custom-engineered for that
              specific structure. We assess the property&apos;s layout, roof
              type, surrounding landscape, and local fire risk, and we design a
              solution that provides comprehensive coverage. A residential system
              might be simpler in scope than a commercial installation, but
              it&apos;s built with the same expertise, the same materials, and
              the same commitment to protection.
            </p>
            <p>
              Our residential installations typically take one to three days, and
              we install nationwide across Canada within three weeks, weather
              dependent. The system includes remote activation through the
              Prodigy Wildfire App, giving homeowners the same capability that
              the operators of the Banff Gondola have: the ability to protect
              their property from anywhere in the world.
            </p>

            <h2>The Growing Case for Proactive Protection</h2>
            <p>
              Every wildfire season in Canada adds evidence to the case for
              active protection. The Jasper wildfire of 2024 destroyed 358
              structures in a community that had fire response resources in
              place. The 2023 season burned 18 million hectares across the
              country. Nova Scotia (a province that many Canadians never
              associated with wildfire risk) saw sprinkler systems save 85 out of
              88 homes during recent fire events.
            </p>
            <p>
              The organizations that chose Prodigy didn&apos;t wait for a fire to
              reach their doorstep before acting. They assessed the risk,
              evaluated the options, and made a decision to invest in protection
              before it was needed. That decision means their facilities are
              ready, not for the fire they&apos;ve already experienced, but for
              the ones that haven&apos;t happened yet.
            </p>
            <p>
              The same option is available to every homeowner in Canada.
            </p>

            <h2>The Community Effect</h2>
            <p>
              There&apos;s one more dimension worth considering. When one home in
              a neighbourhood is protected, it reduces the risk for surrounding
              homes as well. A saturated property is less likely to become a
              source of ember generation that threatens its neighbours. In
              Jasper, the home that survived thanks to a rooftop sprinkler helped
              protect the homes around it.
            </p>
            <p>
              Wildfire protection isn&apos;t just a personal decision. It&apos;s
              a community contribution. Every property that&apos;s defended is
              one less source of fuel, one less source of embers, and one more
              anchor of survival in a neighbourhood under threat.
            </p>
            <p>
              If you&apos;re thinking about what you can do before the next fire
              season, start by understanding your risk.
            </p>

            <p className="mt-10 text-base font-semibold text-foreground">
              Take our free Wildfire Readiness Quiz. Fifteen questions that give
              you a clear picture of how prepared your property is and what steps
              will make the biggest difference.
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
