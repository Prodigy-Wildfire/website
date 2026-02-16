import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Banff Gondola Upper Terminal",
    location: "Banff, Alberta, Canada",
    scope: "34 sprinkler heads installed across the upper and lower terminal buildings at 7,500ft elevation in the Canadian Rockies",
    image: "/images/banff-gondola-wildfire-protection.png",
    imageAlt: "Banff Gondola wildfire protection system installation",
  },
  {
    name: "Golden Skybridge",
    location: "Golden, British Columbia, Canada",
    scope: "Complete wildfire suppression for multi-structure tourism attraction in dense forest",
    image: "/images/golden-skybridge-wildfire-protection.png",
    imageAlt: "Golden Skybridge wildfire protection system",
  },
  {
    name: "UBC Campus Facilities",
    location: "British Columbia, Canada",
    scope: "Multi-building campus deployment protecting research facilities and student housing",
    image: "/images/ubc-wildfire-protection.png",
    imageAlt: "UBC campus wildfire protection installation",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Our Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
            Commercial <span className="text-primary">Projects</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-base leading-relaxed">
            From mountain-top gondola terminals to university campuses, see how
            Prodigy delivers commercial wildfire protection at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-foreground">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-primary">
                  {project.location}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {project.scope}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-block rounded bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
