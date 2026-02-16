export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-sm bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm font-display">
                  P
                </span>
              </div>
              <span className="text-foreground font-display text-lg tracking-wider uppercase">
                Prodigy Wildfire
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Setting the standard in engineered wildfire defense across the
              globe. Precision. Protection. Peace of Mind.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Regions
            </h4>
            <ul className="flex flex-col gap-2">
              {["Canada", "U.S.A", "Australia"].map((region) => (
                <li key={region}>
                  <a
                    href="#regions"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {region}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2">
              {["About", "FAQs", "Contact", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Prodigy Wildfire Solutions. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
