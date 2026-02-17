import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    image: "/images/banff-gondola-wildfire-protection.png",
    title: "Banff Gondola Upper Terminal",
    location: "Banff, Alberta, Canada",
    result: "34 sprinkler heads installed across the upper and lower terminal buildings at 7,500ft elevation in the Canadian Rockies",
  },
  {
    image: "/images/golden-skybridge-wildfire-protection.png",
    title: "Golden Skybridge",
    location: "Golden, British Columbia, Canada",
    result: "Complete wildfire suppression for multi-structure tourism attraction in dense forest",
  },
  {
    image: "/images/ubc-wildfire-protection.png",
    title: "UBC Campus Facilities",
    location: "British Columbia, Canada",
    result: "Multi-building campus deployment protecting research facilities and student housing",
  },
];

export function FactsSection() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            Proven Results
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Projects That Speak for Themselves
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded border border-primary-foreground/10 bg-primary-foreground/5"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-base font-bold text-primary-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-accent">
                  {project.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
                  {project.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/businesses"
            className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
