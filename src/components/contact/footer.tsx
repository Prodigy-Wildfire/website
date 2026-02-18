import Link from "next/link"

const footerLinks = {
  Solutions: [
    { label: "Residential", href: "#" },
    { label: "Commercial", href: "#" },
    { label: "Community", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Why Prodigy?", href: "#" },
    { label: "Our Team", href: "#" },
  ],
  Regions: [
    { label: "United States", href: "#" },
    { label: "Canada", href: "#" },
    { label: "Australia", href: "#" },
  ],
  Resources: [
    { label: "Wildfire Readiness Quiz", href: "#" },
    { label: "How Wildfires Spread", href: "#" },
    { label: "Contact Us", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary">
                <span className="font-heading text-sm font-bold text-primary-foreground">P</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-primary-foreground">
                  Prodigy
                </span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-primary-foreground/60">
                  Wildfire Solutions
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              Redefining Wildfire Defence. Protecting homes, businesses, and
              communities across North America and Australia.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/60 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/40">
            &copy; 2026 Prodigy Wildfire Solutions Inc. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-primary-foreground/40 transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-primary-foreground/40 transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
