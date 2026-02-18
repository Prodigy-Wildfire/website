export function EmberAttack() {
  return (
    <section className="relative overflow-hidden py-32">
      <img
        src="/images/ember-attack.jpg"
        alt="Glowing embers in wildfire smoke"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/75" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          The Hidden Threat
        </p>
        <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
          90% of Wildfire Damage is caused by Ember <span className="text-accent">Attack.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground leading-relaxed">
          The greatest threat to property is not always the fire front itself; it
          is the embers that it generates. These large burning fragments can
          travel over 12.5 miles ahead of the flames, igniting roofs, decks,
          vents, and siding. Prodigy&apos;s ember attack protection systems are engineered to intercept this threat before it reaches your structure.
        </p>
      </div>
    </section>
  );
}
