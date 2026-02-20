import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  Radio,
  PackageCheck,
  Car,
  ShieldCheck,
  Home,
  Building2,
  Flame,
  Smartphone,
} from "lucide-react";

const emergencySteps = [
  {
    icon: AlertTriangle,
    title: "Step 1: Know Your Wildfire Risk Level",
    description:
      "Check local fire danger ratings from CAL FIRE (USA), Alberta Wildfire (Canada), or the CFA (Australia). Sign up for emergency alerts and know your evacuation zones and routes before fire season begins.",
  },
  {
    icon: Home,
    title: "Step 2: Prepare Your Property",
    description:
      "Close all windows, doors, and vents. Move flammable materials away from your structure. Shut off gas and propane. Clear gutters and remove debris within 10 metres. Connect garden hoses and fill water tanks if time allows.",
  },
  {
    icon: PackageCheck,
    title: "Step 3: Prepare an Emergency Go-Bag",
    description:
      "Pack essential documents, medications, phone chargers, cash, N95 masks, and 72 hours of supplies. Keep your go-bag near the door and ready at all times during fire season.",
  },
  {
    icon: Radio,
    title: "Step 4: Monitor Conditions",
    description:
      "During high fire danger days, monitor local fire agencies, weather services, and emergency broadcasts. Track wind speed, humidity, and fire weather warnings, conditions can change in minutes.",
  },
  {
    icon: Car,
    title: "Step 5: Evacuate Early",
    description:
      "When a wildfire warning is issued, leave immediately. Do not wait for a mandatory evacuation order. Roads can become blocked within minutes. Back your car in for a fast exit, keep windows up, and drive slowly through smoke.",
  },
  {
    icon: Building2,
    title: "Step 6: Get to Your Evacuation Centre",
    description:
      "Travel to your predetermined evacuation centre as directed by FEMA (USA), Emergency Management Alberta (Canada), or your state SES (Australia). Register with officials on arrival and mark yourself as safe.",
  },
  {
    icon: Smartphone,
    title: "Step 7: Activate Your Protection System Remotely",
    description:
      "Once safely at your evacuation centre, activate your Prodigy wildfire sprinkler system remotely via the Prodigy app. Our systems defend your property while you are safely away, wetting the roof, walls, and surroundings to reduce ember ignition risk.",
  },
  {
    icon: Flame,
    title: "Step 8: After the Fire, Return Safely",
    description:
      "Only return when authorities confirm it is safe. Watch for hot spots and damaged power lines. Document all damage for insurance. Check your Prodigy system for any required maintenance before the next fire event.",
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
            Your Step-by-Step Wildfire <span className="text-accent">Preparedness</span> Guide
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Wildfires across the United States, Canada, and Australia can
            escalate from warning to evacuation in minutes. This emergency action
            plan will help you protect your family, your property, and your
            livelihood before, during, and after a wildfire event.
          </p>
        </div>

        {/* Image + intro row */}
        <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative h-72 overflow-hidden rounded lg:h-96">
            <Image
              src="/images/getting-prepared.jpg"
              alt="Homeowner preparing property for wildfire season with exterior sprinkler system in a fire-prone area"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="text-center lg:text-left">
            <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground">
              Why Every Minute Counts During a Wildfire
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              During the 2023 Jasper wildfire in Alberta, residents had less than
              30 minutes to evacuate. In the 2025 Los Angeles fires, entire
              neighbourhoods were destroyed within hours. The difference between
              those who lost everything and those who saved their property often
              came down to one thing: preparation.
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
                className="group rounded border border-border bg-card p-6 text-center transition-all hover:shadow-md"
              >
                <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading text-base font-semibold text-card-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/quote"
            className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Get a Free Property Assessment
          </a>
          <Link
            href="/assessment"
            className="inline-block rounded border-2 border-accent px-8 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Take the Wildfire Preparedness Quiz
          </Link>
        </div>
      </div>
    </section>
  );
}
