import Image from "next/image";
import {
  AlertTriangle,
  Radio,
  PackageCheck,
  Car,
  ShieldCheck,
  Home,
  Building2,
  Flame,
} from "lucide-react";

const emergencySteps = [
  {
    icon: AlertTriangle,
    title: "Step 1: Know Your Wildfire Risk Level",
    description:
      "Check local fire danger ratings from agencies like CAL FIRE (USA), Alberta Wildfire (Canada), or the CFA (Australia). Sign up for emergency alerts including Wireless Emergency Alerts, the Alberta Emergency Alert app, or VicEmergency. Know your community evacuation zones and routes before fire season begins.",
    href: "/wildfires",
  },
  {
    icon: Home,
    title: "Step 2: Prepare Your Home Before Fire Season",
    description:
      "Close all windows, doors, and vents. Move flammable furniture and doormats away from the house. Shut off gas and propane. Clear gutters and remove debris within 10 metres of the structure. If time allows, connect garden hoses and fill pools, hot tubs, or water tanks. These steps help reduce ignition points for windborne embers.",
    href: "/homeowners",
  },
  {
    icon: PackageCheck,
    title: "Step 3: Prepare an Emergency Go-Bag",
    description:
      "Pack essential documents (insurance papers, IDs, property records), medications, phone chargers, cash, N95 masks, and enough supplies for 72 hours. Keep your go-bag near the door and ready at all times during fire season. Include pet supplies and a backup plan for livestock if you live in a rural fire-prone area.",
    href: "/wildfires",
  },
  {
    icon: Radio,
    title: "Step 4: Monitor Conditions and Stay Informed",
    description:
      "During high fire danger days, monitor local fire agencies, weather services, and emergency broadcasts. Track wind speed and direction, humidity levels, and fire weather warnings. In the United States, Canada, and Australia, conditions can change in minutes. Early awareness gives you more time to act.",
    href: "/wildfires",
  },
  {
    icon: Car,
    title: "Step 5: Evacuate Early, Not Late",
    description:
      "When a wildfire warning is issued, leave immediately. Do not wait for a mandatory evacuation order. Roads can become blocked by fallen trees, downed power lines, or heavy smoke within minutes. Back your car into the driveway for a fast exit, keep windows up, headlights on, and drive slowly through smoke.",
    href: "/wildfires",
  },
  {
    icon: ShieldCheck,
    title: "Step 6: Activate Your Wildfire Protection System",
    description:
      "If you have a Prodigy exterior sprinkler system, activate it remotely before you evacuate. Our systems are designed to defend your property while you are safely away, wetting the roof, walls, and surrounding vegetation to reduce ember ignition risk. Remote activation through the Prodigy app means your home or business stays protected even after you leave.",
    href: "/services",
  },
  {
    icon: Building2,
    title: "Step 7: Get to Your Evacuation Centre and Mark Yourself Safe",
    description:
      "Travel to your predetermined evacuation centre as directed by local government agencies such as FEMA (USA), Emergency Management Alberta (Canada), or your state SES (Australia). Register with officials on arrival and mark yourself as safe so emergency services can account for all residents. If evacuation centres are at capacity, reach out to a friend or family member nearby for temporary shelter. Keep your phone charged and stay connected to official updates until authorities confirm it is safe to return.",
    href: "/contact",
  },
  {
    icon: Flame,
    title: "Step 8: After the Fire, Return Safely",
    description:
      "Only return when authorities confirm it is safe. Watch for hot spots, weakened trees, and damaged power lines. Wear protective clothing and an N95 mask. Document all damage with photos and video for your insurance claim. Contact your insurance provider immediately and check your Prodigy system for any required maintenance before the next fire event.",
    href: "/contact",
  },
];

export function GettingPrepared() {
  return (
    <section id="emergency-plan" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            Wildfire Emergency Plan
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Your Step-by-Step Wildfire Preparedness Guide
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Wildfires across the United States, Canada, and Australia can
            escalate from warning to evacuation in minutes. Whether you are a
            homeowner in California, a business owner in Alberta, or a property
            manager in New South Wales, this emergency action plan will help you
            protect your family, your property, and your livelihood before,
            during, and after a wildfire event.
          </p>
        </div>

        {/* Image + intro row */}
        <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative h-72 overflow-hidden rounded lg:h-96">
            <Image
              src="/images/getting-prepared.jpg"
              alt="Homeowner preparing property for wildfire season with exterior sprinkler system in a fire-prone area"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground">
              Why Every Minute Counts During a Wildfire
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              During the 2023 Jasper wildfire in Alberta, residents had less than
              30 minutes to evacuate. In the 2025 Los Angeles fires, entire
              neighbourhoods were destroyed within hours. Across Australia,
              catastrophic fire days can push bushfires through communities
              faster than people can respond. The difference between those who
              lost everything and those who saved their property often came down
              to one thing: preparation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Follow these eight steps to build a wildfire emergency plan that
              protects your home, business, and family no matter where you live.
            </p>
          </div>
        </div>

        {/* Step cards grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {emergencySteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="group rounded border border-border bg-card p-6 transition-all hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-card-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/contact"
            className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Get a Free Assessment
          </a>
          <a
            href="https://quiz.prodigywildfire.com/wildfirereadiness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Take the Readiness Quiz
          </a>
        </div>
      </div>
    </section>
  );
}
