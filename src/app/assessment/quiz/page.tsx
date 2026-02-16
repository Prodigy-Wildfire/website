import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WildfireQuiz } from "@/components/assessment/wildfire-quiz";

export const metadata = {
  title: "Wildfire Readiness Quiz | Prodigy Wildfire",
  description:
    "Take our 15-question wildfire readiness quiz to evaluate your risk and discover actionable steps to protect your property.",
};

export default function QuizPage() {
  return (
    <main>
      <Header />
      <section className="min-h-screen bg-background pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <WildfireQuiz />
        </div>
      </section>
      <Footer />
    </main>
  );
}
