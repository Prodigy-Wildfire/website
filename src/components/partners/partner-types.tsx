import Link from "next/link";
import { Hammer, Building2, Users, Wrench } from "lucide-react";

const partnerTypes = [
  {
    icon: Hammer,
    title: "Builders & Contractors",
    description:
      "Integrate wildfire protection into new builds and renovation projects. Offer your clients a premium upgrade that adds property value, meets emerging building codes, and differentiates your projects in fire-prone markets.",
    href: "/partners/apply/builder",
  },
  {
    icon: Building2,
    title: "Insurance Companies",
    description:
      "Reduce wildfire risk exposure across your portfolio by partnering with Prodigy. Offer policyholders access to proven exterior sprinkler systems that lower structure ignition risk and can support reduced premiums.",
    href: "/partners/apply/insurance",
  },
  {
    icon: Users,
    title: "HOAs & Communities",
    description:
      "Protect entire neighborhoods and developments with coordinated wildfire defense programs. Prodigy works with HOAs and community associations to design multi-property protection plans at scale.",
    href: "/partners/apply/hoa",
  },
  {
    icon: Wrench,
    title: "Certified Installers",
    description:
      "Become a Prodigy-certified installer and join our growing network. Receive full training, certification, and ongoing support to install and maintain Prodigy's exterior wildfire sprinkler systems in your region.",
    href: "/partners/apply/installer",
  },
];

export function PartnerTypes() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            Partnership Models
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Find the Right Partnership for You
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {partnerTypes.map((type) => (
            <div
              key={type.title}
              className="flex gap-5 rounded border border-border bg-card p-8 transition-all hover:shadow-lg"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent/10">
                <type.icon className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-card-foreground">
                  {type.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {type.description}
                </p>
                <Link
                  href={type.href}
                  className="mt-4 inline-block text-sm font-semibold text-accent transition-colors hover:text-accent/80"
                >
                  Apply Now &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
