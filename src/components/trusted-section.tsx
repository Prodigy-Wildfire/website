import Image from "next/image";

const trustedLogos = [
  { src: "/images/golden-skybridge-wildfire-protection.png", alt: "Golden Skybridge" },
  { src: "/images/pursuit-group-wildfire-protection.png", alt: "Pursuit" },
  { src: "/images/banff-gondola-wildfire-protection.png", alt: "Banff Gondola" },
  { src: "/images/forest-park-hotel-wildfire-protection.png", alt: "Forest Park Hotel" },
  { src: "/images/ubc-wildfire-protection.png", alt: "UBC" },
  { src: "/images/lake-minnewanka-wildfire-protection.png", alt: "Lake Minnewanka" },
];

export function TrustedSection() {
  return (
    <section className="bg-muted py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent">
          Collaboration
        </p>
        <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Trusted By:
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Organizations across North America and Australia rely on Prodigy Wildfire Solutions to
          safeguard their people, assets, and operations from wildfire risk.
        </p>

        <div className="mt-10 grid grid-cols-2 items-center gap-10 sm:grid-cols-3 max-w-4xl mx-auto">
          {trustedLogos.map((logo) => (
            <div key={logo.alt} className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-white p-8">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={560}
                height={560}
                className="h-full w-full object-contain grayscale transition-all hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm font-medium text-foreground/60">
          Trusted to Protect What Matters Most
        </p>
      </div>
    </section>
  );
}
