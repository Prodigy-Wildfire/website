"use client";

import { useState } from "react";
import { quizQuestions, getQuizResult } from "@/lib/quiz-data";
import { ChevronRight, ChevronLeft, RotateCcw, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function WildfireQuiz() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);

  const question = quizQuestions[currentQuestion];
  const totalQuestions = quizQuestions.length;
  const progress = ((currentQuestion + (completed ? 1 : 0)) / totalQuestions) * 100;

  const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
  const result = getQuizResult(totalScore);

  function handleSelect(optionIndex: number) {
    setSelectedOption(optionIndex);
  }

  function handleNext() {
    if (selectedOption === null) return;

    const newAnswers = {
      ...answers,
      [question.id]: question.options[selectedOption].score,
    };
    setAnswers(newAnswers);

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(
        newAnswers[quizQuestions[currentQuestion + 1]?.id] !== undefined
          ? quizQuestions[currentQuestion + 1].options.findIndex(
              (o) => o.score === newAnswers[quizQuestions[currentQuestion + 1].id]
            )
          : null
      );
    } else {
      setCompleted(true);
    }
  }

  function handlePrev() {
    if (currentQuestion > 0) {
      const prevQ = quizQuestions[currentQuestion - 1];
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(
        answers[prevQ.id] !== undefined
          ? prevQ.options.findIndex((o) => o.score === answers[prevQ.id])
          : null
      );
    }
  }

  function handleReset() {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setSelectedOption(null);
    setCompleted(false);
  }

  // Intro screen
  if (!started) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-sm bg-primary">
          <ShieldCheck className="h-8 w-8 text-primary-foreground" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          Wildfire Readiness Quiz
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
          Take our 15-question assessment to evaluate your wildfire risk and
          readiness. Discover actionable steps to better protect your property.
        </p>
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="mt-8 rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
        >
          Start Assessment
        </button>
      </div>
    );
  }

  // Results screen
  if (completed) {
    const maxScore = totalQuestions * 3;
    const percentage = Math.round((totalScore / maxScore) * 100);

    return (
      <div className="py-12">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Your Results
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            {result.title}
          </h2>
        </div>

        {/* Score Circle */}
        <div className="flex justify-center mb-10">
          <div className="relative flex h-40 w-40 items-center justify-center">
            <svg className="absolute h-full w-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth="6"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${percentage * 2.83} ${283 - percentage * 2.83}`}
              />
            </svg>
            <div className="text-center">
              <span className="text-3xl font-bold text-foreground">{totalScore}</span>
              <span className="text-sm text-muted-foreground">/{maxScore}</span>
            </div>
          </div>
        </div>

        {/* Result Badge */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-sm bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            {result.level} - {percentage}% Ready
          </span>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            {result.description}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-2 rounded-sm border border-border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-border"
          >
            <RotateCcw className="h-4 w-4" />
            Retake Quiz
          </button>
          <Link
            href="/"
            className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Explore Prodigy Solutions
          </Link>
        </div>
      </div>
    );
  }

  // Question screen
  return (
    <div className="py-8">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground">
            Question {currentQuestion + 1} of {totalQuestions}
          </span>
          <span className="text-xs text-muted-foreground">
            {Math.round(progress)}% complete
          </span>
        </div>
        <div className="h-1.5 w-full rounded-sm bg-secondary overflow-hidden">
          <div
            className="h-full rounded-sm bg-primary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h3 className="text-xl font-semibold text-foreground leading-relaxed md:text-2xl">
        {question.question}
      </h3>

      {/* Options */}
      <div className="mt-8 flex flex-col gap-3">
        {question.options.map((option, index) => (
          <button
            key={option.text}
            type="button"
            onClick={() => handleSelect(index)}
            className={`w-full rounded-sm border p-4 text-left text-sm transition-all ${
              selectedOption === index
                ? "border-primary bg-primary/10 text-foreground"
                : "border-border bg-card text-muted-foreground hover:border-muted-foreground hover:text-foreground"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-medium ${
                  selectedOption === index
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-muted-foreground text-muted-foreground"
                }`}
              >
                {String.fromCharCode(65 + index)}
              </div>
              <span className="leading-relaxed">{option.text}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentQuestion === 0}
          className="flex items-center gap-1 rounded-sm border border-border px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={selectedOption === null}
          className="flex items-center gap-1 rounded-sm bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {currentQuestion === totalQuestions - 1 ? "See Results" : "Next"}
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
