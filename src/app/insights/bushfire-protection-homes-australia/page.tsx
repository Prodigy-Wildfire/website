import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MailingListSection } from "@/components/mailing-list-section";

export const metadata: Metadata = {
  title:
    "Is Your Home Ready for Bushfire Season? A Practical Guide to Protecting Your Property | Prodigy Wildfire",
  description:
    "Bushfire season is getting longer and more unpredictable. Learn what Australian homeowners can do right now to protect their property, and why permanent sprinkler systems are changing the game.",
  keywords: [
    "bushfire protection for homes Australia",
    "bushfire sprinkler system",
    "ember attack protection",
    "home bushfire defence",
    "wildfire protection Australia",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Is Your Home Ready for Bushfire Season? A Practical Guide for Australian Homeowners",
  description:
    "Bushfire season is getting longer and more unpredictable. Learn what Australian homeowners can do right now to protect their property, and why permanent sprinkler systems are changing the game.",
  image:
    "https://www.prodigywildfire.com/images/insights/bushfire-protection-homes-australia.jpg",
  datePublished: "2026-02-23",
  author: {
    "@type": "Organization",
    name: "Prodigy Wildfire",
    url: "https://www.prodigywildfire.com",
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
};

export default function BushfireProtectionArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary pt-32 pb-16 md:pb-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <div className="flex items-center justify-center gap-3 text-sm text-primary-foreground/60">
              <span>23 February 2026</span>
              <span>·</span>
              <span>Homeowner</span>
              <span>·</span>
              <span>Australia</span>
            </div>
            <h1 className="mt-6 font-heading text-3xl font-bold leading-tight tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              Is Your Home Ready for Bushfire Season? A Practical Guide for
              Australian Homeowners
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
              Bushfire season is getting longer and more unpredictable. Learn
              what Australian homeowners can do right now to protect their
              property, and why permanent sprinkler systems are changing the
              game.
            </p>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-muted">
          <div className="mx-auto max-w-4xl px-6">
            <div className="relative -mt-8 aspect-[16/9] overflow-hidden rounded shadow-lg">
              <Image
                src="/images/insights/bushfire-protection-homes-australia.jpg"
                alt="Australian bushland property with visible sprinkler system on the roofline"
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
              Every year, bushfire season arrives a little earlier and stays a
              little longer. For homeowners across New South Wales, Victoria,
              South Australia, Western Australia, and beyond, that shift
              isn&apos;t just a statistic. It&apos;s the smell of smoke drifting
              through your windows in October, the anxiety of watching fire
              danger ratings climb, and the nagging question that keeps coming
              back: if a fire reached my street, would my home survive?
            </p>
            <p>
              The truth is, most homes lost during bushfire events aren&apos;t
              destroyed by a raging wall of flame crashing through the front
              door. That&apos;s the image most of us carry, but it&apos;s not
              how the majority of property loss actually happens.
            </p>

            <h2>
              The Real Threat Isn&apos;t the Fire Front. It&apos;s What Comes
              Before It.
            </h2>
            <p>
              Around 90% of homes lost during bushfires are destroyed by ember
              attack. These are burning fragments, sometimes as small as a leaf,
              sometimes as large as a piece of bark, that are carried by wind
              well ahead of the main fire front. Embers can travel over 20
              kilometres from the active blaze, landing on roofs, decking,
              gutters, and any dry surface they can find. A single ember can
              reach temperatures above 650°C. That&apos;s more than enough to
              ignite dry leaves in a gutter, a timber deck, or an exposed eave.
            </p>
            <p>
              This is why so many homes burn even when the fire front never
              reaches them directly. The embers arrive first, sometimes hours
              before the flames, and they find every vulnerability your property
              has.
            </p>

            <h2>What You Can Do Right Now</h2>
            <p>
              There are practical steps every homeowner can take to reduce their
              risk, and most of them don&apos;t require a major investment.
            </p>
            <p>
              Start with your immediate surroundings. Clear gutters of leaves
              and debris regularly. Move firewood, mulch, and other combustible
              materials well away from the house. Trim overhanging branches and
              keep grass short within a 20-metre radius of your home. These
              steps form what&apos;s known as a defensible space, and they
              significantly reduce the chance of embers finding fuel close to
              your walls and roof.
            </p>
            <p>
              Next, look at your home&apos;s construction. Seal gaps under
              eaves, around vents, and beneath decking. These are the entry
              points where embers sneak in and start fire inside wall cavities
              or roof spaces. Metal mesh screens rated for ember protection can
              make a real difference.
            </p>
            <p>
              But even with the best preparation, there&apos;s a gap that
              defensible space and construction upgrades alone can&apos;t fill.
            </p>

            <h2>When Preparation Meets Technology</h2>
            <p>
              This is where permanent wildfire defence systems come in. At
              Prodigy Wildfire, we design and install custom roof-mounted
              sprinkler systems that create a protective moisture barrier around
              your entire property. When activated, the system saturates your
              roof, walls, and the surrounding area within three minutes,
              creating conditions that are simply too wet for embers to ignite.
            </p>
            <p>
              What makes this different from dragging a garden hose onto your
              roof is precision, coverage, and the fact that you don&apos;t need
              to be home to use it. Our systems can be activated remotely from
              anywhere in the world through the Prodigy Wildfire app. If
              you&apos;re evacuated (as you should be when told to leave) you
              can still protect your property from wherever you are.
            </p>
            <p>
              Every system we install is custom-designed for the specific
              property it&apos;s protecting. We work with you to understand your
              home&apos;s layout, its vulnerabilities, the surrounding
              landscape, and the local fire risk. There&apos;s no
              one-size-fits-all approach because no two properties face the same
              threat.
            </p>
            <p>
              Our systems have been designed alongside professional firefighters
              from multiple countries, combined with over 40 years of experience
              in the construction industry. We know how buildings work, we know
              how fire behaves, and we build protection that bridges the two.
            </p>

            <h2>
              The Question Isn&apos;t Whether a Fire Will Come. It&apos;s
              Whether You&apos;ll Be Ready.
            </h2>
            <p>
              Australia&apos;s fire seasons are intensifying. The 2019-2020
              Black Summer burned over 18 million hectares. Communities that
              were never considered high-risk are now finding themselves in the
              firing line. Insurance premiums are climbing, and in some regions,
              coverage is becoming harder to get at all.
            </p>
            <p>
              Taking action now, before the next fire season, is the most
              practical decision you can make. Whether that starts with clearing
              your gutters or investing in a system that protects your home
              while you&apos;re hundreds of kilometres away, every step forward
              reduces your risk.
            </p>

            <p className="mt-10 text-base font-semibold text-foreground">
              Wondering how prepared your property really is? Take our free
              Wildfire Readiness Quiz. It takes just a few minutes and gives you
              a clear picture of where you stand and what you can do next.
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
