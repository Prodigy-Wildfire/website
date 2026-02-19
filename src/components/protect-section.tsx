import Image from "next/image";
import Link from "next/link";

const items = [
  {
    image: "/images/protect-home.jpg",
    title: "For Homeowners",
    description:
      "Custom-designed exterior sprinkler systems that protect your home from ember attack. Activate remotely and defend your property even during evacuation.",
    href: "/homeowners",
  },
  {
    image: "/images/Banff Gondola Business image.png",
    title: "For Businesses",
    description:
      "Commercial-grade wildfire suppression engineered for resorts, campuses, critical infrastructure, and commercial properties at any scale.",
    href: "/businesses",
  },
];

export function ProtectSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
            Who We Protect
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Protect What&apos;s Important to <span className="text-accent">You</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded border border-border bg-card transition-all hover:shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                {item.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  >
                    <source src={item.video} type="video/mp4" />
                    <source src={item.video} type="video/quicktime" />
                  </video>
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-8 text-center">
                <h3 className="font-heading text-xl font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-block text-sm font-semibold text-accent transition-colors hover:text-accent/80"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
