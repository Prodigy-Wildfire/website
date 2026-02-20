"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const questions = [
  {
    id: "location",
    question: "Where is your property located?",
    subtext: "This helps us understand your regional bushfire risk.",
    options: [
      { text: "Within 100m of bushland", score: 10 },
      { text: "Within 1km of bushland", score: 8 },
      { text: "Rural property surrounded by bushland", score: 10 },
      { text: "Suburban area with some nearby bushland", score: 5 },
      { text: "Urban area with minimal bushland", score: 2 },
    ],
  },
  {
    id: "state",
    question: "Which state is your property in?",
    options: [
      { text: "New South Wales", score: 3 },
      { text: "Victoria", score: 3 },
      { text: "Queensland", score: 3 },
      { text: "South Australia", score: 3 },
      { text: "Western Australia", score: 3 },
      { text: "Tasmania", score: 3 },
      { text: "Northern Territory", score: 2 },
      { text: "ACT", score: 2 },
    ],
  },
  {
    id: "evacuated",
    question:
      "Have you ever been evacuated or directly impacted by a bushfire?",
    subtext:
      "This includes property damage, loss, or being under evacuation orders.",
    options: [
      {
        text: "Yes, I've lost property or been significantly impacted",
        score: 10,
      },
      { text: "Yes, I've been evacuated before", score: 8 },
      { text: "Yes, someone close to me has been impacted", score: 6 },
      { text: "No, but I've had close calls or near-misses", score: 5 },
      { text: "No direct experience", score: 2 },
    ],
  },
  {
    id: "current_protection",
    question:
      "What bushfire protection measures do you currently have in place?",
    options: [
      { text: "None \u2013 just garden hoses", score: 8 },
      {
        text: "Basic sprinklers or a pump system I set up myself",
        score: 6,
      },
      {
        text: "Some protection but it's not professionally installed",
        score: 5,
      },
      { text: "A professional system that needs upgrading", score: 7 },
      {
        text: "Comprehensive professional system already installed",
        score: 1,
      },
    ],
  },
  {
    id: "preparedness",
    question:
      "How would you rate your property's current bushfire preparedness?",
    subtext: "Be honest \u2013 this helps us understand where you're at.",
    options: [
      { text: "Not prepared at all \u2013 it worries me", score: 9 },
      { text: "Somewhat prepared but significant gaps", score: 7 },
      { text: "Reasonably prepared but could be better", score: 5 },
      { text: "Well prepared \u2013 just looking to improve", score: 4 },
      { text: "Very well prepared", score: 1 },
    ],
  },
  {
    id: "ownership",
    question: "Do you own your home?",
    options: [
      { text: "Yes, I own it outright", score: 10 },
      { text: "Yes, with a mortgage", score: 10 },
      { text: "I'm in the process of buying", score: 6 },
      { text: "No, I rent", score: 0, disqualifier: true },
      {
        text: "It's a holiday home / investment property I own",
        score: 8,
      },
    ],
  },
  {
    id: "stay_duration",
    question: "How long do you plan to stay in this property?",
    options: [
      { text: "10+ years \u2013 it's our forever home", score: 10 },
      { text: "5\u201310 years", score: 8 },
      { text: "2\u20135 years", score: 5 },
      { text: "Less than 2 years", score: 2 },
      { text: "Unsure at this stage", score: 3 },
    ],
  },
  {
    id: "thinking_duration",
    question:
      "How long have you been thinking about improving your bushfire protection?",
    options: [
      {
        text: "Over 12 months \u2013 it's been on my mind for a while",
        score: 10,
      },
      { text: "6\u201312 months", score: 8 },
      { text: "3\u20136 months", score: 6 },
      { text: "1\u20133 months", score: 4 },
      {
        text: "This is the first time I've really considered it",
        score: 2,
      },
    ],
  },
  {
    id: "budget",
    question:
      "Our bushfire protection systems typically start at $18,000 depending on property size. How does that sit with your budget?",
    subtext:
      "We also offer flexible finance options through our partner, Finance Easy.",
    options: [
      { text: "That's within my budget", score: 10 },
      {
        text: "A bit more than expected, but manageable for the right solution",
        score: 8,
      },
      { text: "I'd be interested in finance options", score: 7 },
      {
        text: "I'd need to save for this \u2013 maybe next year",
        score: 3,
      },
      { text: "That's outside my budget for now", score: 1 },
    ],
  },
  {
    id: "timeline",
    question: "When would you ideally want a system installed?",
    options: [
      { text: "Within the next month", score: 10 },
      { text: "Within 2\u20133 months", score: 9 },
      { text: "Before next bushfire season", score: 7 },
      { text: "Within the next 12 months", score: 5 },
      { text: "Just researching for now", score: 2 },
    ],
  },
  {
    id: "decision_maker",
    question: "Are you the main decision-maker for your property?",
    options: [
      { text: "Yes, I can make this decision myself", score: 5 },
      {
        text: "I'll discuss with my partner but we're aligned",
        score: 4,
      },
      { text: "I'll need to convince my partner/family", score: 3 },
      {
        text: "Multiple people are involved in this decision",
        score: 2,
      },
      { text: "I'm researching on behalf of someone else", score: 1 },
    ],
  },
];

interface Answer {
  option: (typeof questions)[number]["options"][number];
  index: number;
}

export default function BushfireRiskAssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [showResults, setShowResults] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const handleAnswer = (
    questionId: string,
    option: (typeof questions)[number]["options"][number],
    index: number,
  ) => {
    const newAnswers = { ...answers, [questionId]: { option, index } };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      let score = 0;
      let isRenter = false;
      Object.keys(newAnswers).forEach((key) => {
        const answer = newAnswers[key];
        const question = questions.find((q) => q.id === key);
        if (question) {
          const selectedOption = question.options[answer.index];
          score += selectedOption.score;
          if ("disqualifier" in selectedOption && selectedOption.disqualifier) {
            isRenter = true;
          }
        }
      });

      if (isRenter) {
        score = 0;
      }

      setTotalScore(score);
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const getLeadCategory = () => {
    if (totalScore >= 75) return "hot";
    if (totalScore >= 50) return "warm";
    return "cool";
  };

  const getRiskLevel = () => {
    if (totalScore >= 75)
      return {
        level: "High",
        className: "bg-red-600",
        borderClassName: "border-red-600",
        description:
          "Your property has significant bushfire risk factors that warrant immediate attention.",
      };
    if (totalScore >= 50)
      return {
        level: "Moderate",
        className: "bg-amber-500",
        borderClassName: "border-amber-500",
        description:
          "Your property has notable bushfire risk factors that should be addressed.",
      };
    return {
      level: "Lower",
      className: "bg-emerald-500",
      borderClassName: "border-emerald-500",
      description:
        "Your property has some bushfire risk factors to be aware of.",
    };
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const category = getLeadCategory();
    const risk = getRiskLevel();

    return (
      <div className="min-h-screen bg-primary px-5 py-10 pt-28">
        <div className="mx-auto max-w-[600px] overflow-hidden rounded-2xl bg-white shadow-2xl">
          {/* Header */}
          <div className="border-b-4 border-accent bg-primary px-8 py-8 text-center">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/images/pws-logo-white-text.png"
                alt="Prodigy Wildfire Solutions"
                width={220}
                height={63}
                className="h-14 w-auto"
              />
            </Link>
            <div
              className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full ${risk.className}`}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="mb-2 font-heading text-2xl font-bold text-accent">
              Your Bushfire Risk Assessment
            </h1>
            <p className="text-base text-primary-foreground/60">
              Assessment Complete
            </p>
          </div>

          {/* Risk Result */}
          <div className="p-8">
            <div
              className={`mb-6 rounded-xl border-l-4 bg-muted p-6 ${risk.borderClassName}`}
            >
              <div className="mb-4 flex items-center gap-4">
                <span
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold text-white ${risk.className}`}
                >
                  {risk.level} Risk
                </span>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                {risk.description}
              </p>
            </div>

            {category === "hot" && (
              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-foreground">
                  Let&apos;s Protect Your Property
                </h2>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Based on your assessment, your property would benefit
                  significantly from a professional bushfire protection system.
                  Book a 15-minute call with one of our bushfire protection
                  specialists to discuss your options.
                </p>
                <Link
                  href="/quote"
                  className="mb-4 block rounded-lg bg-accent px-8 py-4 text-center text-lg font-bold text-white transition-colors hover:bg-accent/90"
                >
                  Book Your Free Consultation
                </Link>
                <Link
                  href="/contact"
                  className="block rounded-lg border-2 border-foreground px-8 py-4 text-center font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  I&apos;d like a call, but don&apos;t have a specific time
                </Link>
              </div>
            )}

            {category === "warm" && (
              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-foreground">
                  Take the Next Step
                </h2>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  You&apos;re clearly thinking seriously about protecting your
                  property. We&apos;d love to chat about how our systems work
                  and whether it&apos;s the right fit for you.
                </p>
                <Link
                  href="/quote"
                  className="mb-4 block rounded-lg bg-accent px-8 py-4 text-center text-lg font-bold text-white transition-colors hover:bg-accent/90"
                >
                  Book Your Free Consultation
                </Link>
                <Link
                  href="/contact"
                  className="mb-4 block rounded-lg border-2 border-foreground px-8 py-4 text-center font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  I&apos;d like a call, but don&apos;t have a specific time
                </Link>
                <Link
                  href="/regions/australia"
                  className="block text-center font-semibold text-accent transition-colors hover:text-accent/80"
                >
                  Download our Bushfire Preparation Guide &rarr;
                </Link>
              </div>
            )}

            {category === "cool" && (
              <div>
                <h2 className="mb-4 font-heading text-xl font-bold text-foreground">
                  Thanks for Completing Your Assessment
                </h2>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  We&apos;ll send through some helpful resources on bushfire
                  preparation to help you stay informed. When you&apos;re ready
                  to take the next step, we&apos;ll be here.
                </p>
                <Link
                  href="/regions/australia"
                  className="mb-4 block rounded-lg bg-primary px-8 py-4 text-center text-lg font-bold text-accent transition-colors hover:bg-primary/90"
                >
                  Download Our Free Bushfire Preparation Guide
                </Link>
                <p className="text-center text-sm text-muted-foreground">
                  We&apos;ll also send you occasional tips and updates on
                  bushfire safety.
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-border bg-muted px-8 py-5 text-center">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">
                Prodigy Wildfire Solutions
              </strong>{" "}
              &ndash; Protecting Australian homes from bushfire
            </p>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-primary px-5 py-10 pt-28">
      <div className="mx-auto max-w-[600px] overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="border-b-4 border-accent bg-primary px-8 py-6">
          <Link href="/" className="mb-3 inline-block">
            <Image
              src="/images/pws-logo-white-text.png"
              alt="Prodigy Wildfire Solutions"
              width={220}
              height={63}
              className="h-12 w-auto"
            />
          </Link>
          <h1 className="font-heading text-xl font-bold text-accent">
            Bushfire Risk Assessment
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="px-8 pt-5">
          <div className="mb-2 flex justify-between">
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(progress)}% complete
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-accent transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="p-8">
          <h2
            className={`text-lg font-semibold leading-snug text-foreground ${currentQ.subtext ? "mb-2" : "mb-6"}`}
          >
            {currentQ.question}
          </h2>

          {currentQ.subtext && (
            <p className="mb-6 text-[15px] leading-relaxed text-muted-foreground">
              {currentQ.subtext}
            </p>
          )}

          {/* Options */}
          <div className="flex flex-col gap-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(currentQ.id, option, index)}
                className={`w-full rounded-xl border-2 px-5 py-4 text-left text-base font-medium transition-all duration-200 ${
                  answers[currentQ.id]?.index === index
                    ? "border-accent bg-primary text-accent"
                    : "border-border bg-muted text-foreground hover:border-accent/50"
                }`}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border bg-muted px-8 py-4">
          <p className="text-center text-[13px] text-muted-foreground">
            Your answers help us understand how we can best protect your
            property.
          </p>
        </div>
      </div>
    </div>
  );
}
