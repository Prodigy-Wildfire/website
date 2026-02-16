import { Home, Building2 } from "lucide-react";

export function Protection() {
  return (
    <section id="protection" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
            {"Protect What's Important to You."}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-muted-foreground leading-relaxed">
            Prodigy Wildfire is dedicated to safeguarding homes, businesses, and
            communities across Canada, the United States and Australia from the
            devastating effects of wildfires. Our innovative, remotely activated,
            permanent roof-mounted sprinkler systems are expertly designed to
            prevent ember ignition - the leading cause of property loss during
            wildfire events.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Home */}
          <div className="group relative overflow-hidden rounded-sm border border-border bg-card">
            <div className="relative h-72 overflow-hidden">
              <img
                src="/images/protect-home.jpg"
                alt="Residential wildfire protection system"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary">
                  <Home className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Protect Your Home
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every property carries its own wildfire vulnerabilities, and
                understanding them is where true protection begins. We uncover
                those risks, engineer targeted and customized solutions, and
                provide end-to-end wildfire defence that performs when it matters
                most.
              </p>
            </div>
          </div>

          {/* Business */}
          <div className="group relative overflow-hidden rounded-sm border border-border bg-card">
            <div className="relative h-72 overflow-hidden">
              <img
                src="/images/protect-business.jpg"
                alt="Commercial wildfire protection system"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary">
                  <Building2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Protect Your Business
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                What sets Prodigy apart is our full-service approach and seamless
                integration of form and function. From initial design through
                installation, activation, and year-round maintenance, we ensure
                every system works flawlessly while complementing architectural
                vision, enhancing property value, and meeting evolving insurance
                and resilience standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
