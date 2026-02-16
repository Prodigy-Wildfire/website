import Image from "next/image";

const trustedLogos = [
  { src: "/images/golden-skybridge-wildfire-protection.png", alt: "Golden Skybridge" },
  { src: "/images/pursuit-group-wildfire-protection.png", alt: "Pursuit" },
  { src: "/images/banff-gondola-wildfire-protection.png", alt: "Banff Gondola" },
  { src: "/images/forest-park-hotel-wildfire-protection.png", alt: "Forest Park Hotel" },
  { src: "/images/ubc-wildfire-protection.png", alt: "UBC" },
  { src: "/images/lake-minnewanka-wildfire-protection.png", alt: "Lake Minnewanka" },
];

export function TrustedBy() {
  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Collaboration
        </p>
        <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Trusted By
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
          Organizations across North America and Australia rely on Prodigy to
          safeguard their people, assets, and operations from wildfire risk.
        </p>

        <div className="mt-12 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-6">
          {trustedLogos.map((logo) => (
            <div key={logo.alt} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={80}
                className="h-16 w-auto object-contain grayscale transition-all hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground italic">
          Trusted to Protect What Matters Most
        </p>
      </div>
    </section>
  );
}
