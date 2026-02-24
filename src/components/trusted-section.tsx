import Image from "next/image";
import Link from "next/link";

const trustedLogos = [
  { src: "/images/golden-skybridge-wildfire-protection.png", alt: "Golden Skybridge" },
  { src: "/images/pursuit-group-wildfire-protection.png", alt: "Pursuit" },
  { src: "/images/banff-gondola-wildfire-protection.png", alt: "Banff Gondola" },
  { src: "/images/forest-park-hotel-wildfire-protection.png", alt: "Forest Park Hotel" },
  { src: "/images/ubc-logo.png", alt: "UBC" },
  { src: "/images/lake-minnewanka-wildfire-protection.png", alt: "Lake Minnewanka" },
];

export function TrustedSection() {
  return (
    <section className="bg-muted py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Wildfire Protection <span className="text-accent">Trusted</span> By:
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Organisations across North America and Australia rely on Prodigy Wildfire Solutions to
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

        <div className="mt-10">
          <Link
            href="/quote"
            className="inline-block rounded bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
