import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-sm bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">P</span>
              </div>
              <span className="text-foreground font-semibold text-lg tracking-tight">
                PRODIGY
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Redefining wildfire defence for homes, businesses, and communities
              across Canada, the USA, and Australia.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Solutions
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/#protection"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Home Protection
                </Link>
              </li>
              <li>
                <Link
                  href="/#protection"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Business Protection
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Water Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Remote Activation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/#why-prodigy"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Why Prodigy
                </Link>
              </li>
              <li>
                <Link
                  href="https://website-ten-lilac-49.vercel.app/assessment"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Readiness Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Get in Touch
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ready to protect your property? Contact our team for a
              personalized wildfire defence assessment.
            </p>
            <Link
              href="https://website-ten-lilac-49.vercel.app/assessment"
              className="mt-4 inline-block rounded-sm bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Prodigy Wildfire Solutions Inc. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground">
              Canada &middot; USA &middot; Australia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
