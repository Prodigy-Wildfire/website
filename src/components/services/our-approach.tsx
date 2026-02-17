import Link from "next/link";
import { PenTool, Users, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: PenTool,
    title: "Custom Design",
    description:
      "Every property is different. We design and fit suppression systems specifically for your property and provide training on system operation, maintenance, and wildfire preparedness.",
  },
  {
    icon: Users,
    title: "Skilled Professionals",
    description:
      "From our surveyors to our installers to our customer service experts, the Prodigy Wildfire team is made up of highly skilled individuals dedicated to delivering the highest quality experience for our customers.",
  },
  {
    icon: ShieldCheck,
    title: "High Standards",
    description:
      "Not all suppression systems are built equal. Our system is designed alongside Structural Protection fire fighters and installed by qualified plumbers using the highest quality materials designed to withstand the most extreme conditions.",
  },
];

export function OurApproach() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Approach to Wildfire Protection
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We believe effective wildfire defense is built on innovation,
            reliability, and integrity. Every system we design is engineered to
            protect lives, homes, businesses and communities without compromise.
            Our mission is to provide lasting security and confidence in the face
            of a changing climate.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col items-center rounded border border-border bg-card p-8 text-center transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <pillar.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-bold text-card-foreground">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="https://quiz.prodigywildfire.com/wildfirereadiness"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-accent bg-transparent px-8 py-3.5 text-base font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Take the Wildfire Readiness Quiz
          </Link>
          <Link
            href="/contact"
            className="rounded bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Get Protected
          </Link>
        </div>
      </div>
    </section>
  );
}
