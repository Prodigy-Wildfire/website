import Image from "next/image";

export function HowItWorks() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Permanent wildfire protection engineered for any size property.
            Prodigy systems activate to create a controlled, exterior defense
            layer built to reduce ignition risk before wildfire conditions
            intensify. From family homes to commercial properties and large-scale
            developments, every Prodigy installation reflects the same
            engineering intelligence, meticulous craftsmanship, and
            design-forward integration.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded">
            <Image
              src="/images/humidity-bubble.jpg"
              alt="Humidity bubble protective barrier created by Prodigy sprinkler system"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                What Is a Humidity Bubble?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A humidity bubble is a moisture-rich protective barrier created
                when a Prodigy system activates. Our engineered exterior
                sprinklers disperse water in a controlled pattern that increases
                humidity and cools the air around your structure. This creates a
                stable microclimate &mdash; an elevated moisture zone &mdash;
                that surrounds roofs, walls, eaves, and vulnerable openings. The
                result is a temporary, precisely engineered shield that prepares
                your property before wildfire conditions intensify.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                How Does This Protect Against Wildfires?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Wildfires ignite structures primarily through ember attacks and
                radiant heat, not direct flame. A humidity bubble disrupts both.
                Higher humidity makes surfaces far harder to ignite, while cooler
                temperatures reduce the heat needed for ignition. The moisture
                layer also helps block ember attacks by dampening vulnerable
                areas such as roofs, vents, and decks &mdash; preventing embers
                from landing, smoldering, or taking hold. By reducing heat,
                raising moisture, and stabilising structural surfaces, the
                humidity bubble creates an active, science-driven defense long
                before flames reach your property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
