import Link from "next/link"
import { Globe, MapPin, HelpCircle } from "lucide-react"

const supportItems = [
  {
    icon: Globe,
    title: "My Country is Not Listed",
    description:
      "We are continually expanding our global installation reach. Although our current teams are based in Canada, the U.S., and Australia, we would love to speak with you about your property and explore what's possible in your region.",
    cta: "Contact Us",
    href: "/contact/international",
  },
  {
    icon: MapPin,
    title: "I Live in a Remote Area",
    description:
      "We recognize that remote properties often face higher-than-normal wildfire risk. With advanced satellite imaging, flexible water-source options, and specialized engineering, we can design effective protection systems for even the most isolated locations.",
    cta: "Contact Us",
    href: "/contact",
  },
  {
    icon: HelpCircle,
    title: "I Have More Questions",
    description:
      "Explore our FAQs or reach out to us directly. Our wildfire specialist team is always happy to assist.",
    cta: "FAQs",
    href: "/faq",
    secondaryCta: "Contact Us",
    secondaryHref: "/contact",
  },
]

export function SupportSection() {
  return (
    <section id="faq" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            We&apos;re Here to <span className="text-accent">Help</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {supportItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded border border-border bg-card p-8 text-center flex flex-col items-center"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>
                <div className="flex gap-3">
                  <Link
                    href={item.href}
                    className="rounded bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
                  >
                    {item.cta}
                  </Link>
                  {item.secondaryCta && item.secondaryHref && (
                    <Link
                      href={item.secondaryHref}
                      className="rounded border-2 border-accent px-6 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                    >
                      {item.secondaryCta}
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
