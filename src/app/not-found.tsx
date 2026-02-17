import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main>
      <Header />
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          404
        </p>
        <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="rounded border border-foreground/30 px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Contact Us
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
