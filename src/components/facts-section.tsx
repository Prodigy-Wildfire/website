import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    image: "/images/banff-gondola-wildfire-protection.png",
    title: "Banff Gondola",
    location: "Banff, Alberta, Canada",
    result: "34 sprinkler heads installed across the upper and lower terminal buildings at 7,500ft elevation in the Canadian Rockies.",
    href: "/case-studies#banff-gondola",
  },
  {
    image: "/images/golden-skybridge-wildfire-protection.png",
    title: "Golden Skybridge",
    location: "Golden, British Columbia, Canada",
    result: "Complete wildfire suppression for multi-structure tourism attraction in dense forest.",
    href: "/case-studies#golden-skybridge",
  },
  {
    image: "/images/ubc-logo.png",
    imageClassName: "object-contain p-10",
    title: "UBC Campus Facilities",
    location: "British Columbia, Canada",
    result: "Multi-building campus deployment protecting research facilities and student housing.",
    href: "/case-studies#ubc-campus",
  },
];

export function FactsSection() {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Projects That Speak for <span className="text-accent">Themselves</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group overflow-hidden rounded border border-border bg-background transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`${project.imageClassName || "object-cover"} transition-transform duration-500 group-hover:scale-105`}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-heading text-base font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-accent">
                  {project.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.result}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/businesses"
            className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
