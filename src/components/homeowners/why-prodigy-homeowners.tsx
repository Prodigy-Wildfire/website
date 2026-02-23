import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, TrendingUp } from "lucide-react";

export function WhyProdigyHomeowners() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Insurance, Property Value &amp; Peace of <span className="text-accent">Mind</span>
            </h2>

            <div className="mt-10 space-y-8">
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-accent/10">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Insurance Benefits
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Insurers across the USA, Canada, and Australia are
                    dropping coverage or raising premiums for homes in wildfire
                    zones. A Prodigy exterior sprinkler system demonstrates
                    proactive risk mitigation to your insurer, which may support
                    your ability to maintain coverage and meet evolving wildfire
                    resilience requirements. Results vary by provider and region.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-accent/10">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Property Value
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Homes with installed wildfire protection systems are
                    increasingly valued by buyers in Wildland-Urban Interface
                    (WUI) communities. As fire seasons grow longer and more
                    severe, a permanent protection system is becoming a key
                    differentiator in the real estate market, protecting both
                    your investment and your ability to sell.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/quote"
              className="mt-10 inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              Protect Your Home
            </Link>
          </div>

          <div className="relative h-96 overflow-hidden rounded lg:h-[500px]">
            <Image
              src="/images/custom-approach.jpg"
              alt="Close-up of copper piping and sprinkler head installed along the edge of a residential roofline"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
