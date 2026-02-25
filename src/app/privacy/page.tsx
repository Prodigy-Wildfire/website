import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Prodigy Wildfire Solutions. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy",
    description:
      "Privacy policy for Prodigy Wildfire Solutions. Learn how we collect, use, and protect your personal information.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy",
    description:
      "Privacy policy for Prodigy Wildfire Solutions. Learn how we collect, use, and protect your personal information.",
  },
};

export default function Page() {
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-3xl px-6 pb-20 pt-32">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: February 2026
        </p>

        <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
            <p className="mt-3">
              Prodigy Wildfire Solutions (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to
              protecting your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website or use
              our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
            <p className="mt-3">
              We may collect personal information that you voluntarily provide to us when
              you contact us, request an assessment, or otherwise interact with our
              services. This may include your name, email address, phone number, property
              address, and any other information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
            <p className="mt-3">
              We use the information we collect to provide and improve our wildfire
              protection services, respond to your inquiries, send you relevant
              communications, and comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. Information Sharing</h2>
            <p className="mt-3">
              We do not sell your personal information. We may share your information with
              trusted service providers who assist us in operating our website and
              conducting our business, provided they agree to keep this information
              confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. Data Security</h2>
            <p className="mt-3">
              We implement appropriate technical and organizational measures to protect
              your personal information. However, no method of transmission over the
              Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. Your Rights</h2>
            <p className="mt-3">
              Depending on your location, you may have certain rights regarding your
              personal information, including the right to access, correct, or delete your
              data. To exercise these rights, please contact us using the information
              below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">7. Contact Us</h2>
            <p className="mt-3">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a
                href="/contact"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                our contact page
              </a>.
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
