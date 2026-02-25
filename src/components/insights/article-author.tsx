import Image from "next/image";

export function ArticleAuthor({ date }: { date: string }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <div className="flex items-start gap-5 rounded border border-border bg-card p-6">
        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
          <Image
            src="/images/george-harris-ceo.jpg"
            alt="George Harris, CEO of Prodigy Wildfire Solutions"
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground">
            By George Harris, CEO, Prodigy Wildfire Solutions
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            George Harris is the CEO and founder of Prodigy Wildfire Solutions,
            bringing years of hands-on experience in wildfire protection system
            design and installation across the USA, Canada, and Australia.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span>Published {date}</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
              Expert Reviewed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
