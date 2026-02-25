import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Cookie Policy | Prodigy Wildfire Solutions",
  description:
    "Cookie policy for Prodigy Wildfire Solutions. Learn how we use cookies and similar technologies on our website.",
  alternates: { canonical: "/cookies" },
};

export default function Page() {
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-3xl px-6 pb-20 pt-32">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground">
          Cookie Policy
        </h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: February 2026
        </p>

        <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. What Are Cookies</h2>
            <p className="mt-3">
              Cookies are small text files that are stored on your device when you visit a
              website. They are widely used to make websites work more efficiently and to
              provide information to website owners. Prodigy Wildfire Solutions uses cookies
              and similar technologies to improve your experience on our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. How We Use Cookies</h2>
            <p className="mt-3">We use cookies for the following purposes:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-foreground">Essential Cookies:</strong> Required for
                the website to function properly, including navigation, form submissions, and
                security features.
              </li>
              <li>
                <strong className="text-foreground">Analytics Cookies:</strong> Help us
                understand how visitors interact with our website by collecting anonymous usage
                data, allowing us to improve our content and user experience.
              </li>
              <li>
                <strong className="text-foreground">Functional Cookies:</strong> Remember your
                preferences and settings to provide a more personalised experience on return
                visits.
              </li>
              <li>
                <strong className="text-foreground">Marketing Cookies:</strong> Used to deliver
                relevant advertisements and track the effectiveness of our marketing campaigns
                across platforms.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. Third-Party Cookies</h2>
            <p className="mt-3">
              Some cookies on our website are set by third-party services that appear on our
              pages. These may include analytics providers, advertising networks, and social
              media platforms. We do not control these third-party cookies and recommend
              reviewing their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. Managing Cookies</h2>
            <p className="mt-3">
              Most web browsers allow you to control cookies through their settings. You can
              choose to block or delete cookies, although this may affect the functionality
              of our website. You can typically find cookie settings in the
              &quot;Options&quot; or &quot;Preferences&quot; menu of your browser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Cookie Policy from time to time to reflect changes in our
              practices or for other operational, legal, or regulatory reasons. We encourage
              you to review this page periodically for the latest information on our cookie
              practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. Contact Us</h2>
            <p className="mt-3">
              If you have any questions about our use of cookies, please contact us at{" "}
              <a
                href="/contact"
                className="text-accent underline underline-offset-4 hover:text-accent/80"
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
