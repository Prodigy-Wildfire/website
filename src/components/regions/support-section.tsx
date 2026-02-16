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
    href: "#contact",
  },
  {
    icon: HelpCircle,
    title: "I Have More Questions.",
    description:
      "Explore our FAQs or reach out to us directly. Our wildfire specialist team is always happy to assist.",
    cta: "FAQs",
    href: "#faq",
    secondaryCta: "Contact Us",
    secondaryHref: "#contact",
  },
]

export function SupportSection() {
  return (
    <section id="faq" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {supportItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="border border-border bg-background p-8 flex flex-col"
              >
                <Icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>
                <div className="flex gap-3">
                  <a
                    href={item.href}
                    className="bg-primary text-primary-foreground px-6 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors"
                  >
                    {item.cta}
                  </a>
                  {item.secondaryCta && (
                    <a
                      href={item.secondaryHref}
                      className="border border-foreground/30 text-foreground px-6 py-2.5 text-xs font-semibold uppercase tracking-wider hover:border-foreground/60 transition-colors"
                    >
                      {item.secondaryCta}
                    </a>
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
