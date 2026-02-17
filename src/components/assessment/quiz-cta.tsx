import Link from "next/link";

export function QuizCta() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
          How Prepared Are You? Take the Wildfire Preparedness Quiz.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground leading-relaxed">
          As wildfire seasons grow longer and more severe, preparation is no
          longer optional. Understanding the risks, and acting early, remains
          the most effective way to protect what matters most.
        </p>
        <Link
          href="https://quiz.prodigywildfire.com/wildfirereadiness"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
        >
          Take the Quiz
        </Link>
      </div>
    </section>
  );
}
