import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: "steve-whistler",
    name: "Steve S.",
    location: "Whistler, British Columbia",
    quote:
      "Surrounded by forest in Whistler, we installed a Prodigy Wildfire Suppression System to protect our home from ember-driven wildfire risk. It's a smart preventative investment that gives us peace of mind.",
    posterSrc: "/images/protect-home.jpg",
  },
  {
    id: "peterson-family",
    name: "The Peterson Family",
    location: "Kelowna, British Columbia",
    quote:
      "We can finally leave for the summer without worrying. The remote start feature gives us complete peace of mind.",
    posterSrc: "/images/custom-approach.jpg",
  },
];

export function VideoTestimonials() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <Image
        src="/images/protect-home.jpg"
        alt="Wildfire protection for homes"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Hear From Homeowners We <span className="text-accent">Protect</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
            Real stories from property owners across the USA, Canada, and
            Australia who trust Prodigy to defend their homes from wildfire.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden rounded">
                <Image
                  src={t.posterSrc}
                  alt={`${t.name} testimonial`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Quote & Info */}
              <div className="mt-5">
                <Quote className="h-5 w-5 text-accent" />
                <p className="mt-2 text-sm italic leading-relaxed text-primary-foreground/80">
                  {t.quote}
                </p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-primary-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-primary-foreground/50">
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
