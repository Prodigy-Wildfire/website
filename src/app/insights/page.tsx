import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Wildfire Protection Insights | News, Tips & Expert Advice",
  description:
    "Stay informed with the latest wildfire protection insights, fire safety tips, and expert advice from Prodigy Wildfire Solutions. Covering wildfire preparedness for homes and businesses across the USA, Canada, and Australia.",
};

const posts = [
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

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary pt-32 pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
              Prodigy Wildfire
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
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
              {posts.map((post) => (
                <article
                  key={post.title}
                  className="group overflow-hidden rounded border border-border bg-card transition-all hover:shadow-lg"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
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
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-muted-foreground">
                More insights coming soon. Want to be notified?
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
