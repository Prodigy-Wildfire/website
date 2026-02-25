import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { MailingListSection } from "@/components/mailing-list-section";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Wildfire Protection Insights | News, Tips & Expert Advice",
  description:
    "Stay informed with the latest wildfire protection insights, fire safety tips, and expert advice from Prodigy Wildfire Solutions. Covering wildfire preparedness for homes and businesses across the USA, Canada, and Australia.",
};

const posts = [
  {
    title: "Protecting What Matters: How Prodigy Is Defending Canadian Landmarks, Businesses, and Homes",
    excerpt:
      "Prodigy Wildfire has installed protection systems for some of Canada's most iconic facilities. Here's why these organizations chose active wildfire defence, and what it means for your property.",
    image: "/images/insights/prodigy-wildfire-installs-canada.jpg",
    date: "6 March 2026",
    slug: "/insights/prodigy-wildfire-installs-canada",
  },
  {
    title: "The Wildfire Insurance Crisis in Canada: What Property Owners Need to Know, And What They Can Do About It",
    excerpt:
      "Canadian homeowners in fire-prone areas are facing rising premiums and shrinking coverage. Learn how engineered wildfire protection systems are helping property owners take control of their risk profile.",
    image: "/images/insights/wildfire-protection-insurance-canada.jpg",
    date: "5 March 2026",
    slug: "/insights/wildfire-protection-insurance-cana",
  },
  {
    title: "Building for the Fire Seasons Ahead: Why Canadian Developers Are Making Wildfire Protection Standard",
    excerpt:
      "Building in fire-prone areas of Canada? Learn why forward-thinking developers are integrating wildfire sprinkler systems at the construction stage, and how it's becoming a competitive advantage.",
    image: "/images/insights/wildfire-protection-new-builds-canada.jpg",
    date: "4 March 2026",
    slug: "/insights/wildfire-protection-new-builds-canada",
  },
  {
    title: "Canada's Wildfire Crisis Is Here, And Your Home Needs More Than a Garden Hose",
    excerpt:
      "Canada's wildfire seasons are intensifying year after year. Learn why ember attack is the biggest threat to your home and how permanent sprinkler systems are keeping Canadian properties standing.",
    image: "/images/insights/wildfire-protection-homes-canada.jpg",
    date: "3 March 2026",
    slug: "/insights/wildfire-protection-homes-canada",
  },
  {
    title:
      "What the LA Fires Taught Us: The Homes That Survived Had One Thing in Common",
    excerpt:
      "The 2025 LA fires destroyed over 16,000 structures. But homes with active wildfire protection survived at remarkably high rates. Here’s what every property owner in fire-prone America needs to learn from that.",
    image: "/images/insights/la-wildfire-protection-lessons.jpg",
    date: "2 March 2026",
    slug: "/insights/la-wildfire-protection-lessons",
  },
  {
    title:
      "Wildfire Risk and Commercial Property: Why Landlords and Property Managers Can't Afford to Wait",
    excerpt:
      "Commercial landlords, property managers, and multi-unit building owners in fire-prone areas face unique wildfire risks. Learn how engineered sprinkler systems protect assets and ensure business continuity.",
    image: "/images/insights/wildfire-protection-commercial-usa.jpg",
    date: "1 March 2026",
    slug: "/insights/wildfire-protection-commercial-usa",
  },
  {
    title:
      "Building in Fire Country: Why the Smartest US Developers Are Designing Wildfire Protection Into Every Project",
    excerpt:
      "Developing property in fire-prone areas of the western US? Learn why integrating wildfire sprinkler systems at the build stage is becoming a competitive advantage for developers and builders.",
    image: "/images/insights/wildfire-protection-new-construction-usa.jpg",
    date: "28 February 2026",
    slug: "/insights/wildfire-protection-new-construction-usa",
  },
  {
    title:
      "Your Home's Biggest Wildfire Threat Isn't the Flames. It's What You Can't See Coming.",
    excerpt:
      "Living in the wildland-urban interface means living with wildfire risk. Learn what every homeowner should know about protecting their property, and why roof-mounted sprinkler systems are the next essential step.",
    image: "/images/insights/wildfire-protection-homes-usa.jpg",
    date: "27 February 2026",
    slug: "/insights/wildfire-protection-homes-usa",
  },
  {
    title: "Rising Premiums, Shrinking Coverage: How Wildfire Protection Is Changing the Insurance Equation in Australia",
    excerpt:
      "Struggling with rising insurance premiums or reduced coverage in bushfire-prone areas? Learn how engineered wildfire protection systems are changing the conversation with insurers.",
    image: "/images/insights/bushfire-protection-insurance-australia.jpg",
    date: "26 February 2026",
    slug: "/insights/bushfire-protection-insurance-australia",
  },
  {
    title: "Protecting Your Business From Bushfire: Why Commercial Properties Need More Than an Evacuation Plan",
    excerpt:
      "Hotels, resorts, and commercial buildings in bushfire-prone areas face unique risks. Learn how purpose-built wildfire suppression systems protect assets, guests, and business continuity.",
    image: "/images/insights/bushfire-protection-commercial-australia.jpg",
    date: "25 February 2026",
    slug: "/insights/bushfire-protection-commercial-australia",
  },
  {
    title: "Building in Bushfire Country: Why Australian Developers Are Integrating Wildfire Protection From Day One",
    excerpt:
      "Building in a bushfire-prone area? Learn why integrating wildfire protection systems into new developments is becoming essential for compliance, insurance, and buyer confidence in Australia.",
    image: "/images/insights/bushfire-protection-new-builds-australia.jpg",
    date: "24 February 2026",
    slug: "/insights/bushfire-protection-new-builds-australia",
  },
  {
    title: "Is Your Home Ready for Bushfire Season? A Practical Guide for Australian Homeowners",
    excerpt:
      "Bushfire season is getting longer and more unpredictable. Learn what Australian homeowners can do right now to protect their property, and why permanent sprinkler systems are changing the game.",
    image: "/images/insights/bushfire-protection-homes-australia.jpg",
    date: "23 February 2026",
    slug: "/insights/bushfire-protection-homes-australia",
  },
  {
    title: "Understanding Ember Attack: The #1 Cause of Property Loss During Wildfires",
    excerpt:
      "Ember attack is responsible for up to 90% of structure ignition during wildfire events. Learn how airborne embers travel, why they are so dangerous, and what you can do to protect your home or business.",
    image: "/images/climate-change-fire.jpg",
    date: "Coming Soon",
    slug: "#",
  },
  {
    title: "How Exterior Wildfire Sprinkler Systems Defend Your Property",
    excerpt:
      "Discover how Prodigy's permanent roof-mounted sprinkler systems create a humidity barrier that suppresses embers, reduces radiant heat, and cools exterior surfaces before flames arrive.",
    image: "/images/water-system.jpg",
    date: "Coming Soon",
    slug: "#",
  },
  {
    title: "Wildfire Season 2026: What Homeowners in the USA, Canada, and Australia Need to Know",
    excerpt:
      "With longer fire seasons driven by climate change, property owners in fire-prone regions must prepare earlier than ever. Here is what the experts are saying and how to get ahead of the threat.",
    image: "/images/wildfire-spread.jpg",
    date: "Coming Soon",
    slug: "#",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Wildfire Protection Insights",
  description:
    "Expert advice, wildfire preparedness tips, and the latest news on protecting homes and businesses across the USA, Canada, and Australia.",
  url: "https://www.prodigywildfire.com/insights",
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

export default function InsightsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd items={[{ name: "Insights", href: "/insights" }]} />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary pt-24 md:min-h-[85vh]">
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Wildfire Protection Insights
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
              Expert advice, wildfire preparedness tips, behind-the-scenes
              stories from some of our most remarkable installations, and the
              latest news on protecting homes and businesses across the USA,
              Canada, and Australia.
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="bg-muted py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => {
                const Wrapper = post.slug === "#" ? "div" : Link;
                const wrapperProps =
                  post.slug === "#" ? {} : { href: post.slug };
                return (
                  <Wrapper
                    key={post.title}
                    {...wrapperProps}
                    className="group overflow-hidden rounded border border-border bg-card transition-all hover:shadow-lg"
                  >
                    <article>
                      <div className="relative h-52 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-xs font-medium text-accent">
                          {post.date}
                        </p>
                        <h2 className="mt-2 font-heading text-lg font-bold leading-snug text-card-foreground">
                          {post.title}
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {post.excerpt}
                        </p>
                        {post.slug !== "#" && (
                          <span className="mt-4 inline-block text-sm font-semibold text-accent">
                            Read Article &rarr;
                          </span>
                        )}
                      </div>
                    </article>
                  </Wrapper>
                );
              })}
            </div>

            <div className="mt-16 text-center">
              <p className="text-muted-foreground">
                More insights coming soon. Want to be notified?
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
        <MailingListSection />
      </main>
      <Footer />
    </>
  );
}
