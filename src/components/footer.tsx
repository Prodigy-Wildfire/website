import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    heading: "Education",
    links: [
      { label: "Wildfires", href: "/wildfires" },
      { label: "Insights", href: "/insights" },
      { label: "Assessment", href: "/assessment" },
    ],
  },
  {
    heading: "Protection",
    links: [
      { label: "Our Systems", href: "/systems" },
      { label: "Homeowners", href: "/homeowners" },
      { label: "Businesses", href: "/businesses" },
      { label: "Regions", href: "/regions" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Partners", href: "/partners" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="text-center md:text-center flex flex-col items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/pws-logo-white-text.png"
                alt="Prodigy Wildfire Solutions"
                width={280}
                height={80}
                className="h-28 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              Redefining wildfire defence for homes, businesses, and communities
              across Canada, the USA and Australia.
            </p>
          </div>

          {footerLinks.map((group, index) => (
            <div key={group.heading} className={`text-center ${index === 0 ? "md:pl-8" : ""}`}>

              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground">
                {group.heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/60 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-xs text-primary-foreground/40">
              &copy; 2026 Prodigy Wildfire Solutions Inc. All rights
              reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-primary-foreground/40 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
