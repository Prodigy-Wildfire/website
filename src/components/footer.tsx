import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    heading: "Wildfires",
    href: "/wildfires",
    links: [
      { label: "Wildfire Risks", href: "/wildfires" },
      { label: "Assessment", href: "https://quiz.prodigywildfire.com/wildfirereadiness" },
    ],
  },
  {
    heading: "Protection",
    links: [
      { label: "Our System", href: "/system" },
      { label: "Homeowners", href: "/homeowners" },
      { label: "Businesses", href: "/businesses" },
      { label: "Regions", href: "/regions" },
    ],
  },
  {
    heading: "Prodigy Wildfire Solutions",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Partners", href: "/partners" },
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Insights", href: "/insights" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/images/pws-logo-white-text.png"
                alt="Prodigy Wildfire Solutions"
                width={280}
                height={80}
                className="h-20 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              Redefining wildfire defence for homes, businesses, and communities
              across Canada, the United States and Australia.
            </p>
          </div>

          {footerLinks.map((group, index) => (
            <div key={group.heading} className={index === 0 ? "md:pl-8" : ""}>

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

        <div className="mt-14 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            &copy; 2026 Prodigy Wildfire Solutions Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
