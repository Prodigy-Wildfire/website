import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Banff Gondola Upper Terminal",
    location: "Banff, Alberta, Canada",
    scope: "34 sprinkler heads installed across the upper and lower terminal buildings at 7,500ft elevation in the Canadian Rockies.",
    image: "/images/banff-gondola-wildfire-protection.png",
    imageAlt: "Banff Gondola wildfire protection system installation",
    anchor: "banff-gondola",
  },
  {
    name: "Golden Skybridge",
    location: "Golden, British Columbia, Canada",
    scope: "Complete wildfire suppression for multi-structure tourism attraction in dense forest.",
    image: "/images/golden-skybridge-wildfire-protection.png",
    imageAlt: "Golden Skybridge wildfire protection system",
    anchor: "golden-skybridge",
  },
  {
    name: "UBC Campus Facilities",
    location: "British Columbia, Canada",
    scope: "Multi-building campus deployment protecting research facilities and student housing.",
    image: "/images/ubc-logo.png",
    imageAlt: "UBC campus wildfire protection installation",
    imageClassName: "object-contain p-10",
    anchor: "ubc-campus",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-heading text-sm font-semibold tracking-widest uppercase text-accent mb-3">
            Our Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Commercial <span className="text-accent">Projects</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-base leading-relaxed">
            From mountain-top gondola terminals to university campuses, see how
            Prodigy delivers commercial wildfire protection at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.name}
              href={`/case-studies#${project.anchor}`}
              className="bg-background border border-border rounded overflow-hidden group hover:border-accent/50 hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`${project.imageClassName || "object-cover"} group-hover:scale-105 transition-transform duration-500`}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-heading text-base font-bold text-foreground">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-accent">
                  {project.location}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {project.scope}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/case-studies"
            className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
