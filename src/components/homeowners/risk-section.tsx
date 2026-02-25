import Link from "next/link";
import {
  Home,
  Wind,
  Fence,
  SquareStack,
  TreePine,
  Fuel,
} from "lucide-react";

const vulnerabilities = [
  {
    icon: Home,
    title: "Roof and Gutters",
    description:
      "Leaves, pine needles, and debris accumulate in gutters and on rooftops, providing fuel for windborne embers. A single ember landing in a clogged gutter can ignite your home from the top down.",
  },
  {
    icon: Wind,
    title: "Vents and Eaves",
    description:
      "Gaps in soffit vents, ridge vents, and eave openings allow embers to enter attic spaces and wall cavities. Once inside, embers can smoulder undetected until the structure ignites from within.",
  },
  {
    icon: Fence,
    title: "Decks and Fences",
    description:
      "Attached timber decks, pergolas, and wooden fences provide a direct fuel pathway from your yard to your home. Embers igniting a fence 20 metres away can burn all the way to the structure.",
  },
  {
    icon: SquareStack,
    title: "Windows and Glass Doors",
    description:
      "Radiant heat from an approaching wildfire can crack and shatter single-pane windows and glass doors, allowing embers and flames direct entry into the interior of your home.",
  },
  {
    icon: TreePine,
    title: "Landscaping Within 10 Metres",
    description:
      "Trees, shrubs, mulch, and garden beds close to the house create fuel that bridges the gap between wildfire and structure. Defensible space is the buffer zone around a structure where vegetation and other combustible materials have been managed to reduce wildfire exposure. Maintaining defensible space is critical in fire-prone areas across the USA, Canada, and Australia.",
  },
  {
    icon: Fuel,
    title: "Propane and Gas Lines",
    description:
      "Exterior propane tanks, natural gas metres, and fuel storage near your home present explosion and ignition risks during wildfire events. Shutting off gas before evacuating is an essential safety step.",
  },
];

export function RiskSection() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Your Home's Wildfire "}<span className="text-accent">Vulnerabilities</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Understanding how to protect your house from wildfire starts with
            knowing where embers and radiant heat can exploit gaps in your
            defences. Identifying your home&apos;s most vulnerable points is
            the first step toward effective protection.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vulnerabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center rounded border border-border bg-card p-6 text-center transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading text-base font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/consultation"
            className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
