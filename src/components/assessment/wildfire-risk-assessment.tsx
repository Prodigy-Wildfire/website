"use client"

import React, { useState } from "react"
import Image from "next/image"

const inputClass =
  "w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"

interface Terminology {
  fire: string
  Fire: string
  fires: string
  Fires: string
  land: string
  season: string
  currency: string
  budgetAmount: string
  hasFinance: boolean
  phonePlaceholder: string
  phonePrefix: string
}

type CountryKey = "australia" | "usa" | "canada"

const countryLabels: Record<CountryKey, string> = {
  australia: "Australia",
  usa: "United States",
  canada: "Canada",
}

const terminology: Record<CountryKey, Terminology> = {
  australia: {
    fire: "bushfire",
    Fire: "Bushfire",
    fires: "bushfires",
    Fires: "Bushfires",
    land: "bushland",
    season: "bushfire season",
    currency: "AUD",
    budgetAmount: "15,000",
    hasFinance: true,
    phonePlaceholder: "04XX XXX XXX",
    phonePrefix: "+61",
  },
  usa: {
    fire: "wildfire",
    Fire: "Wildfire",
    fires: "wildfires",
    Fires: "Wildfires",
    land: "forested area",
    season: "fire season",
    currency: "USD",
    budgetAmount: "15,000",
    hasFinance: false,
    phonePlaceholder: "(XXX) XXX-XXXX",
    phonePrefix: "+1",
  },
  canada: {
    fire: "wildfire",
    Fire: "Wildfire",
    fires: "wildfires",
    Fires: "Wildfires",
    land: "forested area",
    season: "fire season",
    currency: "CAD",
    budgetAmount: "12,000",
    hasFinance: false,
    phonePlaceholder: "(XXX) XXX-XXXX",
    phonePrefix: "+1",
  },
}

const regions: Record<CountryKey, string[]> = {
  australia: [
    "New South Wales",
    "Victoria",
    "Queensland",
    "South Australia",
    "Western Australia",
    "Tasmania",
    "Northern Territory",
    "ACT",
  ],
  usa: [
    "Arizona",
    "California",
    "Colorado",
    "Hawaii",
    "Idaho",
    "Montana",
    "Nevada",
    "New Mexico",
    "North Dakota",
    "Oklahoma",
    "Oregon",
    "South Dakota",
    "Texas",
    "Utah",
    "Washington",
    "Wyoming",
  ],
  canada: [
    "British Columbia",
    "Alberta",
    "Saskatchewan",
    "Manitoba",
    "Ontario",
    "Quebec",
    "New Brunswick",
    "Nova Scotia",
  ],
}

interface QuestionOption {
  text: string
  score: number
  disqualifier?: boolean
}

interface Question {
  id: string
  question: string
  subtext?: string | null
  options: QuestionOption[]
}

function getQuestions(selectedCountry: CountryKey): Question[] {
  const t = terminology[selectedCountry]
  const regionList = regions[selectedCountry]
  const regionLabel = selectedCountry === "canada" ? "province" : "state"

  return [
    {
      id: "location",
      question: "Where is your property located?",
      subtext: `This helps us understand your regional ${t.fire} risk.`,
      options: [
        { text: `Within 100m of ${t.land}`, score: 10 },
        { text: `Within 1km of ${t.land}`, score: 8 },
        { text: `Rural property surrounded by ${t.land}`, score: 10 },
        { text: `Suburban area with some nearby ${t.land}`, score: 5 },
        { text: `Urban area with minimal ${t.land}`, score: 2 },
      ],
    },
    {
      id: "region",
      question: `Which ${regionLabel} is your property in?`,
      options: regionList.map((region) => ({ text: region, score: 3 })),
    },
    {
      id: "evacuated",
      question: `Have you ever been evacuated or directly impacted by a ${t.fire}?`,
      subtext: "This includes property damage, loss, or being under evacuation orders.",
      options: [
        { text: "Yes, I've lost property or been significantly impacted", score: 10 },
        { text: "Yes, I've been evacuated before", score: 8 },
        { text: "Yes, someone close to me has been impacted", score: 6 },
        { text: "No, but I've had close calls or near-misses", score: 5 },
        { text: "No direct experience", score: 2 },
      ],
    },
    {
      id: "current_protection",
      question: `What ${t.fire} protection measures do you currently have in place?`,
      options: [
        { text: "None - just garden hoses", score: 8 },
        { text: "Basic sprinklers or a pump system I set up myself", score: 6 },
        { text: "Some protection but it's not professionally installed", score: 5 },
        { text: "A professional system that needs upgrading", score: 7 },
        { text: "Comprehensive professional system already installed", score: 1 },
      ],
    },
    {
      id: "preparedness",
      question: `How would you rate your property's current ${t.fire} preparedness?`,
      subtext: "Be honest - this helps us understand where you're at.",
      options: [
        { text: "Not prepared at all - it worries me", score: 9 },
        { text: "Somewhat prepared but significant gaps", score: 7 },
        { text: "Reasonably prepared but could be better", score: 5 },
        { text: "Well prepared - just looking to improve", score: 4 },
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
        { text: "It's a holiday home / investment property I own", score: 8 },
      ],
    },
    {
      id: "stay_duration",
      question: "How long do you plan to stay in this property?",
      options: [
        { text: "10+ years - it's our forever home", score: 10 },
        { text: "5-10 years", score: 8 },
        { text: "2-5 years", score: 5 },
        { text: "Less than 2 years", score: 2 },
        { text: "Unsure at this stage", score: 3 },
      ],
    },
    {
      id: "thinking_duration",
      question: `How long have you been thinking about improving your ${t.fire} protection?`,
      options: [
        { text: "Over 12 months - it's been on my mind for a while", score: 10 },
        { text: "6-12 months", score: 8 },
        { text: "3-6 months", score: 6 },
        { text: "1-3 months", score: 4 },
        { text: "This is the first time I've really considered it", score: 2 },
      ],
    },
    {
      id: "budget",
      question: `Our ${t.fire} protection systems typically start at ${t.budgetAmount} ${t.currency} depending on property size. How does that sit with your budget?`,
      subtext: t.hasFinance
        ? "We also offer flexible finance options through our partner, Finance Easy."
        : null,
      options: [
        { text: "That's within my budget", score: 10 },
        { text: "A bit more than expected, but manageable for the right solution", score: 8 },
        ...(t.hasFinance
          ? [{ text: "I'd be interested in finance options", score: 7 }]
          : []),
        { text: "I'd need to save for this - maybe next year", score: 3 },
        { text: "That's outside my budget for now", score: 1 },
      ],
    },
    {
      id: "timeline",
      question: "When would you ideally want a system installed?",
      options: [
        { text: "Within the next month", score: 10 },
        { text: "Within 2-3 months", score: 9 },
        { text: `Before next ${t.season}`, score: 7 },
        { text: "Within the next 12 months", score: 5 },
        { text: "Just researching for now", score: 2 },
      ],
    },
    {
      id: "decision_maker",
      question: "Are you the main decision-maker for your property?",
      options: [
        { text: "Yes, I can make this decision myself", score: 5 },
        { text: "I'll discuss with my partner but we're aligned", score: 4 },
        { text: "I'll need to convince my partner/family", score: 3 },
        { text: "Multiple people are involved in this decision", score: 2 },
        { text: "I'm researching on behalf of someone else", score: 1 },
      ],
    },
  ]
}

function generatePdf(
  formData: { firstName: string; lastName: string; email: string; phone: string; address: string },
  country: CountryKey,
  answers: Record<string, { option: QuestionOption; index: number }>,
  riskLevel: string,
  riskDescription: string,
  category: string,
  t: Terminology,
  totalScore: number,
) {
  import("jspdf").then(({ jsPDF }) => {
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 20
    const contentWidth = pageWidth - margin * 2
    let y = 20

    // Header bar
    doc.setFillColor(26, 29, 35) // primary color
    doc.rect(0, 0, pageWidth, 40, "F")
    doc.setFillColor(180, 150, 12) // accent color
    doc.rect(0, 40, pageWidth, 3, "F")

    doc.setFont("helvetica", "bold")
    doc.setFontSize(20)
    doc.setTextColor(212, 175, 55) // accent gold
    doc.text("Prodigy Wildfire Solutions", margin, 22)
    doc.setFontSize(12)
    doc.setTextColor(200, 200, 200)
    doc.text(`${t.Fire} Risk Assessment Report`, margin, 33)

    y = 55

    // Customer details
    doc.setFontSize(14)
    doc.setTextColor(26, 29, 35)
    doc.setFont("helvetica", "bold")
    doc.text("Assessment Summary", margin, y)
    y += 10

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(80, 80, 80)

    const details = [
      `Name: ${formData.firstName} ${formData.lastName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      ...(formData.address ? [`Property: ${formData.address}`] : []),
      `Country: ${countryLabels[country]}`,
      ...(answers.region ? [`Region: ${answers.region.option.text}`] : []),
      `Date: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`,
    ]

    details.forEach((line) => {
      doc.text(line, margin, y)
      y += 6
    })

    y += 6

    // Risk level box
    const riskColors: Record<string, [number, number, number]> = {
      High: [220, 38, 38],
      Moderate: [245, 158, 11],
      Lower: [16, 185, 129],
    }
    const riskColor = riskColors[riskLevel] || [100, 100, 100]

    doc.setFillColor(riskColor[0], riskColor[1], riskColor[2])
    doc.roundedRect(margin, y, contentWidth, 28, 3, 3, "F")

    doc.setFont("helvetica", "bold")
    doc.setFontSize(16)
    doc.setTextColor(255, 255, 255)
    doc.text(`${riskLevel} Risk`, margin + 10, y + 12)

    doc.setFont("helvetica", "normal")
    doc.setFontSize(9)
    const descLines = doc.splitTextToSize(riskDescription, contentWidth - 20)
    doc.text(descLines, margin + 10, y + 20)

    y += 36

    // Key answers
    doc.setFont("helvetica", "bold")
    doc.setFontSize(12)
    doc.setTextColor(26, 29, 35)
    doc.text("Your Key Responses", margin, y)
    y += 8

    doc.setFont("helvetica", "normal")
    doc.setFontSize(9)
    doc.setTextColor(80, 80, 80)

    const keyAnswerIds = [
      { id: "location", label: "Property Location" },
      { id: "current_protection", label: "Current Protection" },
      { id: "preparedness", label: "Preparedness Level" },
      { id: "ownership", label: "Home Ownership" },
      { id: "timeline", label: "Desired Timeline" },
      { id: "budget", label: "Budget Alignment" },
    ]

    keyAnswerIds.forEach((item) => {
      const answer = answers[item.id]
      if (answer) {
        doc.setFont("helvetica", "bold")
        doc.text(`${item.label}:`, margin, y)
        doc.setFont("helvetica", "normal")
        const answerText = doc.splitTextToSize(answer.option.text, contentWidth - 50)
        doc.text(answerText, margin + 48, y)
        y += answerText.length > 1 ? 10 : 6
      }
    })

    y += 6

    // Recommendation
    doc.setFont("helvetica", "bold")
    doc.setFontSize(12)
    doc.setTextColor(26, 29, 35)
    doc.text("Recommended Next Steps", margin, y)
    y += 8

    doc.setFont("helvetica", "normal")
    doc.setFontSize(9)
    doc.setTextColor(80, 80, 80)

    let recommendation = ""
    if (category === "hot") {
      recommendation = `Based on your assessment score, your property has significant ${t.fire} risk factors. We strongly recommend booking a free consultation with one of our ${t.fire} protection specialists to discuss a tailored protection system for your property.`
    } else if (category === "warm") {
      recommendation = `Your assessment indicates notable ${t.fire} risk factors. We recommend speaking with our team to explore protection options that fit your situation and timeline.`
    } else {
      recommendation = `While your immediate risk factors are lower, staying prepared is important. We recommend reviewing our ${t.fire} preparation resources and reaching out when you're ready to take the next step.`
    }

    const recLines = doc.splitTextToSize(recommendation, contentWidth)
    doc.text(recLines, margin, y)
    y += recLines.length * 5 + 10

    // Footer
    doc.setFillColor(26, 29, 35)
    doc.rect(0, 275, pageWidth, 22, "F")
    doc.setFontSize(9)
    doc.setTextColor(212, 175, 55)
    doc.setFont("helvetica", "bold")
    doc.text("Prodigy Wildfire Solutions", margin, 285)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(180, 180, 180)
    doc.text("www.prodigywildfire.com  |  sales@prodigywildfire.com", margin, 291)

    doc.save(`${t.Fire}-Risk-Assessment-${formData.lastName}.pdf`)
  })
}

export function WildfireRiskAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, { option: QuestionOption; index: number }>>({})
  const [showResults, setShowResults] = useState(false)
  const [showCaptureForm, setShowCaptureForm] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)
  const [totalScore, setTotalScore] = useState(0)
  const [country, setCountry] = useState<CountryKey | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    description: "",
  })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.firstName && formData.lastName && formData.email && formData.phone) {
      setShowCaptureForm(false)
      setShowResults(true)
    }
  }

  const handleCountrySelect = (selectedCountry: CountryKey) => {
    setCountry(selectedCountry)
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    } else {
      setCountry(null)
    }
  }

  const handleAnswer = (questionId: string, option: QuestionOption, index: number) => {
    if (!country) return
    const questions = getQuestions(country)
    const newAnswers = { ...answers, [questionId]: { option, index } }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300)
    } else {
      // Quiz is done, calculate score and show contact form
      let score = 0
      let isRenter = false
      Object.keys(newAnswers).forEach((key) => {
        const answer = newAnswers[key]
        const question = questions.find((q) => q.id === key)
        if (question && answer) {
          const selectedOption = question.options[answer.index]
          if (selectedOption) {
            score += selectedOption.score
            if (selectedOption.disqualifier) {
              isRenter = true
            }
          }
        }
      })

      if (isRenter) score = 0

      setTotalScore(score)
      setQuizComplete(true)
      setTimeout(() => setShowCaptureForm(true), 300)
    }
  }

  const getLeadCategory = () => {
    if (totalScore >= 75) return "hot"
    if (totalScore >= 50) return "warm"
    return "cool"
  }

  const getRiskLevel = () => {
    const t = terminology[country!]
    if (totalScore >= 75)
      return {
        level: "High",
        color: "bg-red-600",
        textColor: "text-red-600",
        borderColor: "border-red-600",
        description: `Your property has significant ${t.fire} risk factors that warrant immediate attention.`,
      }
    if (totalScore >= 50)
      return {
        level: "Moderate",
        color: "bg-amber-500",
        textColor: "text-amber-500",
        borderColor: "border-amber-500",
        description: `Your property has notable ${t.fire} risk factors that should be addressed.`,
      }
    return {
      level: "Lower",
      color: "bg-emerald-500",
      textColor: "text-emerald-500",
      borderColor: "border-emerald-500",
      description: `Your property has some ${t.fire} risk factors to be aware of.`,
    }
  }

  const questions = country ? getQuestions(country) : []
  const progress = country
    ? quizComplete
      ? 100
      : ((currentQuestion + 1) / questions.length) * 100
    : 0
  const t = country ? terminology[country] : null

  // Country Selection
  if (!country) {
    return (
      <div className="flex items-start justify-center bg-primary px-5 py-16 pt-28">
        <div className="w-full max-w-[600px] overflow-hidden rounded-2xl bg-white shadow-2xl">
          <div className="border-b-4 border-accent bg-primary p-8 text-center">
            <div className="mx-auto mb-5">
              <Image
                src="/images/pws-logo-white-text.png"
                alt="Prodigy Wildfire Solutions"
                width={200}
                height={57}
                className="mx-auto h-14 w-auto"
              />
            </div>
            <h1 className="mb-2 font-heading text-2xl font-bold text-accent">
              Fire Risk Assessment
            </h1>
            <p className="text-sm text-primary-foreground/60">
              Get your free property risk assessment in 2 minutes
            </p>
          </div>

          <div className="p-8">
            <h2 className="mb-6 text-xl font-semibold text-foreground">
              Which country is your property located in?
            </h2>

            <div className="flex flex-col gap-3">
              {(["australia", "usa", "canada"] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => handleCountrySelect(key)}
                  className="w-full rounded-lg border-2 border-border bg-muted px-5 py-4 text-left text-lg font-medium text-foreground transition-all hover:border-accent hover:bg-accent/5"
                >
                  {countryLabels[key]}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-border bg-muted px-8 py-4">
            <p className="text-center text-xs text-muted-foreground">
              This helps us tailor the assessment to your region.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Contact Form (after quiz, before results)
  if (showCaptureForm && !showResults) {
    return (
      <div className="flex items-start justify-center bg-primary px-5 py-16 pt-28">
        <div className="w-full max-w-[500px] overflow-hidden rounded-2xl bg-white shadow-2xl">
          <div className="border-b-4 border-accent bg-primary p-8 text-center">
            <h1 className="mb-2 font-heading text-2xl font-bold text-accent">
              Almost There!
            </h1>
            <p className="text-sm text-primary-foreground/60">
              Enter your details to see your results and receive a PDF copy
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="p-8">
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-foreground">
                  First Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-foreground">
                  Last Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="mb-1.5 block text-sm font-semibold text-foreground">
                Email Address <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClass}
              />
            </div>

            <div className="mb-4">
              <label className="mb-1.5 block text-sm font-semibold text-foreground">
                Phone Number <span className="text-accent">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={inputClass}
              />
            </div>

            <div className="mb-4">
              <label className="mb-1.5 block text-sm font-semibold text-foreground">
                Property Address <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Street address, city, postcode"
                className={inputClass}
              />
            </div>

            <div className="mb-6">
              <label className="mb-1.5 block text-sm font-semibold text-foreground">
                Tell us about your property <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Any details about your property or situation that might be helpful..."
                rows={3}
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-accent py-4 text-lg font-bold text-white transition-colors hover:bg-accent/90"
            >
              See My Results
            </button>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              Your information is secure and will never be shared.
            </p>
          </form>
        </div>
      </div>
    )
  }

  // Results Screen
  if (showResults) {
    const category = getLeadCategory()
    const risk = getRiskLevel()

    const handleDownloadPdf = () => {
      generatePdf(formData, country, answers, risk.level, risk.description, category, t!, totalScore)
    }

    return (
      <div className="flex items-start justify-center bg-primary px-5 py-16 pt-28">
        <div className="w-full max-w-[600px] overflow-hidden rounded-2xl bg-white shadow-2xl">
          <div className="border-b-4 border-accent bg-primary p-8 text-center">
            <div className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full ${risk.color}`}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="mb-2 font-heading text-2xl font-bold text-accent">
              Your {t!.Fire} Risk Assessment
            </h1>
            <p className="text-base text-primary-foreground/60">Assessment Complete</p>
          </div>

          <div className="p-8">
            <div className={`mb-6 rounded-xl border-l-4 ${risk.borderColor} bg-muted p-6`}>
              <div className="mb-3">
                <span className={`inline-block rounded-full ${risk.color} px-4 py-1.5 text-sm font-semibold text-white`}>
                  {risk.level} Risk
                </span>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">{risk.description}</p>
            </div>

            {/* Download PDF */}
            <button
              onClick={handleDownloadPdf}
              className="mb-6 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-accent bg-accent/5 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download Your Assessment (PDF)
            </button>

            {category === "hot" && (
              <div>
                <h2 className="mb-3 text-xl font-bold text-foreground">
                  Let&apos;s Protect Your Property
                </h2>
                <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                  Based on your assessment, your property would benefit significantly from a
                  professional {t!.fire} protection system. Book a 15-minute call with one of our{" "}
                  {t!.fire} protection specialists to discuss your options.
                </p>
                <a
                  href="/quote"
                  className="mb-4 block rounded-lg bg-accent py-4 text-center text-lg font-bold text-white transition-colors hover:bg-accent/90"
                >
                  Book Your Free Consultation
                </a>
                <a
                  href="/contact"
                  className="block w-full rounded-lg border-2 border-foreground py-4 text-center text-base font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  I&apos;d like a call, but don&apos;t have a specific time
                </a>
              </div>
            )}

            {category === "warm" && (
              <div>
                <h2 className="mb-3 text-xl font-bold text-foreground">Take the Next Step</h2>
                <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                  You&apos;re clearly thinking seriously about protecting your property. We&apos;d
                  love to chat about how our systems work and whether it&apos;s the right fit for
                  you.
                </p>
                <a
                  href="/quote"
                  className="mb-4 block rounded-lg bg-accent py-4 text-center text-lg font-bold text-white transition-colors hover:bg-accent/90"
                >
                  Book Your Free Consultation
                </a>
                <a
                  href="/contact"
                  className="mb-4 block w-full rounded-lg border-2 border-foreground py-4 text-center text-base font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  I&apos;d like a call, but don&apos;t have a specific time
                </a>
                <a
                  href="/wildfires"
                  className="block text-center text-base font-semibold text-accent transition-colors hover:text-accent/80"
                >
                  Download our {t!.Fire} Preparation Guide &rarr;
                </a>
              </div>
            )}

            {category === "cool" && (
              <div>
                <h2 className="mb-3 text-xl font-bold text-foreground">
                  Thanks for Completing Your Assessment
                </h2>
                <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                  We&apos;ll send through some helpful resources on {t!.fire} preparation to help
                  you stay informed. When you&apos;re ready to take the next step, we&apos;ll be
                  here.
                </p>
                <a
                  href="/wildfires"
                  className="mb-4 block rounded-lg bg-primary py-4 text-center text-lg font-bold text-accent transition-colors hover:bg-primary/90"
                >
                  Download Our Free {t!.Fire} Preparation Guide
                </a>
                <p className="text-center text-sm text-muted-foreground">
                  We&apos;ll also send you occasional tips and updates on {t!.fire} safety.
                </p>
              </div>
            )}
          </div>

          <div className="border-t border-border bg-muted px-8 py-5 text-center">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Prodigy Wildfire Solutions</strong> - Protecting
              homes from {t!.fire}
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Quiz Questions
  const currentQ = questions[currentQuestion]

  return (
    <div className="flex items-start justify-center bg-primary px-5 py-16 pt-28">
      <div className="w-full max-w-[600px] overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="border-b-4 border-accent bg-primary px-8 py-6">
          <h1 className="mb-1 font-heading text-xl font-bold text-accent">
            {t!.Fire} Risk Assessment
          </h1>
          <p className="text-sm text-primary-foreground/60">Prodigy Wildfire Solutions</p>
        </div>

        <div className="px-8 pt-5">
          <div className="mb-2 flex justify-between">
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% complete</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-accent transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="p-8">
          <h2 className="mb-2 text-xl font-semibold leading-snug text-foreground">
            {currentQ.question}
          </h2>

          {currentQ.subtext && (
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{currentQ.subtext}</p>
          )}

          {!currentQ.subtext && <div className="mb-6" />}

          <div className="flex flex-col gap-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(currentQ.id, option, index)}
                className={`w-full rounded-lg border-2 px-5 py-4 text-left text-base font-medium transition-all ${
                  answers[currentQ.id]?.index === index
                    ? "border-accent bg-primary text-accent"
                    : "border-border bg-muted text-foreground hover:border-accent hover:bg-accent/5"
                }`}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border bg-muted px-8 py-4">
          <button
            type="button"
            onClick={handleBack}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            &larr; Back
          </button>
          <p className="text-xs text-muted-foreground">
            Your answers help us understand how we can best protect your property.
          </p>
        </div>
      </div>
    </div>
  )
}
