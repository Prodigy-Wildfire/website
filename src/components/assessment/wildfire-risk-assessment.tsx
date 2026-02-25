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
  usa: "USA",
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
    "Australian Capital Territory",
    "New South Wales",
    "Northern Territory",
    "Queensland",
    "South Australia",
    "Tasmania",
    "Victoria",
    "Western Australia",
  ],
  usa: [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ],
  canada: [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon",
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
    const pageHeight = doc.internal.pageSize.getHeight()
    const margin = 20
    const contentWidth = pageWidth - margin * 2

    // Colors
    const primary: [number, number, number] = [26, 29, 35]
    const accent: [number, number, number] = [212, 175, 55]
    const accentDark: [number, number, number] = [180, 150, 12]
    const textDark: [number, number, number] = [26, 29, 35]
    const textMuted: [number, number, number] = [100, 100, 100]
    const riskColors: Record<string, [number, number, number]> = {
      High: [220, 38, 38],
      Moderate: [245, 158, 11],
      Lower: [16, 185, 129],
    }
    const riskColor = riskColors[riskLevel] || [100, 100, 100]

    function addFooter() {
      doc.setFillColor(...primary)
      doc.rect(0, pageHeight - 18, pageWidth, 18, "F")
      doc.setFontSize(8)
      doc.setTextColor(...accent)
      doc.setFont("helvetica", "bold")
      doc.text("Prodigy Wildfire Solutions", margin, pageHeight - 8)
      doc.setFont("helvetica", "normal")
      doc.setTextColor(180, 180, 180)
      doc.text("www.prodigywildfire.com  |  sales@prodigywildfire.com", pageWidth - margin, pageHeight - 8, { align: "right" })
    }

    function checkPageBreak(needed: number, y: number): number {
      if (y + needed > pageHeight - 30) {
        addFooter()
        doc.addPage()
        addHeader()
        return 55
      }
      return y
    }

    function addHeader() {
      doc.setFillColor(...primary)
      doc.rect(0, 0, pageWidth, 40, "F")
      doc.setFillColor(...accentDark)
      doc.rect(0, 40, pageWidth, 3, "F")
      doc.setFont("helvetica", "bold")
      doc.setFontSize(18)
      doc.setTextColor(...accent)
      doc.text("PRODIGY WILDFIRE SOLUTIONS", margin, 20)
      doc.setFontSize(10)
      doc.setTextColor(200, 200, 200)
      doc.text(`${t.Fire} Risk Assessment Report`, margin, 30)
      doc.setFontSize(8)
      doc.text(`Prepared: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`, pageWidth - margin, 30, { align: "right" })
    }

    function sectionHeading(title: string, y: number): number {
      y = checkPageBreak(20, y)
      doc.setFillColor(245, 245, 245)
      doc.rect(margin, y - 5, contentWidth, 12, "F")
      doc.setFillColor(...accentDark)
      doc.rect(margin, y - 5, 3, 12, "F")
      doc.setFont("helvetica", "bold")
      doc.setFontSize(12)
      doc.setTextColor(...textDark)
      doc.text(title, margin + 8, y + 3)
      return y + 14
    }

    function wrappedText(text: string, y: number, fontSize = 9, color: [number, number, number] = textMuted): number {
      doc.setFont("helvetica", "normal")
      doc.setFontSize(fontSize)
      doc.setTextColor(...color)
      const lines = doc.splitTextToSize(text, contentWidth)
      for (const line of lines) {
        y = checkPageBreak(6, y)
        doc.text(line, margin, y)
        y += 5
      }
      return y
    }

    // ===== PAGE 1: Cover & Summary =====
    addHeader()
    let y = 55

    // Prepared for
    doc.setFont("helvetica", "normal")
    doc.setFontSize(9)
    doc.setTextColor(...textMuted)
    doc.text("PREPARED FOR", margin, y)
    y += 7
    doc.setFont("helvetica", "bold")
    doc.setFontSize(16)
    doc.setTextColor(...textDark)
    doc.text(`${formData.firstName} ${formData.lastName}`, margin, y)
    y += 8
    doc.setFont("helvetica", "normal")
    doc.setFontSize(10)
    doc.setTextColor(...textMuted)
    const contactLines = [
      formData.email,
      formData.phone,
      ...(formData.address ? [formData.address] : []),
      `${answers.region ? answers.region.option.text + ", " : ""}${countryLabels[country]}`,
    ]
    contactLines.forEach((line) => {
      doc.text(line, margin, y)
      y += 6
    })
    y += 8

    // Risk level banner
    doc.setFillColor(...riskColor)
    doc.roundedRect(margin, y, contentWidth, 32, 3, 3, "F")
    doc.setFont("helvetica", "bold")
    doc.setFontSize(18)
    doc.setTextColor(255, 255, 255)
    doc.text(`${riskLevel} Risk`, margin + 10, y + 14)
    doc.setFont("helvetica", "normal")
    doc.setFontSize(9)
    const descLines = doc.splitTextToSize(riskDescription, contentWidth - 20)
    doc.text(descLines, margin + 10, y + 23)
    y += 42

    // Executive summary
    y = sectionHeading("Executive Summary", y)

    const locationAnswer = answers.location?.option.text || "an unspecified location"
    const regionAnswer = answers.region?.option.text || countryLabels[country]
    const protectionAnswer = answers.current_protection?.option.text || ""
    const preparednessAnswer = answers.preparedness?.option.text || ""
    const evacuatedAnswer = answers.evacuated?.option.text || ""

    let summaryText = ""
    if (category === "hot") {
      summaryText = `This report has been prepared for ${formData.firstName} ${formData.lastName}, whose property is located ${locationAnswer.toLowerCase()} in ${regionAnswer}. Based on the responses provided, your property has been assessed as ${riskLevel} Risk for ${t.fire} exposure. This indicates that your property faces significant ${t.fire} risk factors that warrant immediate attention and proactive protection measures. The combination of your property's proximity to ${t.land}, current protection level, and regional ${t.fire} history places your property in a high-vulnerability category.`
    } else if (category === "warm") {
      summaryText = `This report has been prepared for ${formData.firstName} ${formData.lastName}, whose property is located ${locationAnswer.toLowerCase()} in ${regionAnswer}. Based on the responses provided, your property has been assessed as ${riskLevel} Risk for ${t.fire} exposure. While not in the highest risk category, your property has notable vulnerability factors that should be addressed to improve your ${t.fire} resilience and protect your investment.`
    } else {
      summaryText = `This report has been prepared for ${formData.firstName} ${formData.lastName}, whose property is located ${locationAnswer.toLowerCase()} in ${regionAnswer}. Based on the responses provided, your property has been assessed as ${riskLevel} Risk for ${t.fire} exposure. While your immediate risk factors are comparatively lower, it is important to remain prepared. ${t.Fires} are unpredictable, and conditions in ${regionAnswer} can change rapidly during ${t.season}.`
    }
    y = wrappedText(summaryText, y)
    y += 6

    // ===== Property Risk Profile =====
    y = sectionHeading("Your Property Risk Profile", y)

    // Location analysis
    doc.setFont("helvetica", "bold")
    doc.setFontSize(10)
    doc.setTextColor(...textDark)
    y = checkPageBreak(8, y)
    doc.text("Property Location & Exposure", margin, y)
    y += 6

    let locationAnalysis = ""
    if (answers.location) {
      const locScore = answers.location.option.score
      if (locScore >= 9) {
        locationAnalysis = `Your property is situated ${locationAnswer.toLowerCase()}, placing it in a high-exposure zone. Properties in direct proximity to ${t.land} are the most vulnerable to ember attack, radiant heat, and direct flame contact during ${t.fire} events. Windborne embers can travel over 20km ahead of a fire front, and properties within 100m of ${t.land} are statistically the most likely to be impacted. Creating and maintaining defensible space around your home is critical, and a professionally installed exterior sprinkler system provides a vital additional layer of protection.`
      } else if (locScore >= 7) {
        locationAnalysis = `Your property is located ${locationAnswer.toLowerCase()}, which places it within the ${t.fire} risk zone. While not directly adjacent to dense ${t.land}, properties within 1km remain highly susceptible to ember attack. Embers carried by wind can ignite dry materials on roofs, gutters, decks, and landscaping at significant distances from the fire front. We recommend assessing your property's ember entry points and considering a permanent protection system.`
      } else if (locScore >= 4) {
        locationAnalysis = `Your property is in a ${locationAnswer.toLowerCase()}. While suburban properties have some buffer from dense ${t.land}, they are not immune to ${t.fire} risk. During severe ${t.fire} events, ember showers can affect properties several kilometres from the fire front. Maintaining clear gutters, using fire-resistant landscaping, and ensuring you have a ${t.fire} emergency plan are all important steps.`
      } else {
        locationAnalysis = `Your property is located in ${locationAnswer.toLowerCase()}, which typically has lower direct ${t.fire} exposure. However, it is worth noting that ${t.fire} conditions are changing rapidly due to climate change, and areas previously considered low-risk are increasingly being impacted. Staying informed about local ${t.fire} conditions and having an emergency plan in place is always recommended.`
      }
    }
    y = wrappedText(locationAnalysis, y)
    y += 4

    // Evacuation history
    if (answers.evacuated) {
      y = checkPageBreak(8, y)
      doc.setFont("helvetica", "bold")
      doc.setFontSize(10)
      doc.setTextColor(...textDark)
      doc.text("Previous Fire Experience", margin, y)
      y += 6

      let evacAnalysis = ""
      const evacScore = answers.evacuated.option.score
      if (evacScore >= 8) {
        evacAnalysis = `You indicated that you have been directly impacted by ${t.fire} previously (${evacuatedAnswer.toLowerCase()}). This personal experience underscores the very real threat that ${t.fires} pose to properties in your area. Research consistently shows that property owners who have experienced ${t.fire} firsthand are significantly more proactive about implementing protection measures, and that proactive measures dramatically reduce the likelihood of property loss in subsequent events.`
      } else if (evacScore >= 5) {
        evacAnalysis = `You indicated that you or someone close to you has had experience with ${t.fire} events. This awareness of the real impact of ${t.fires} is valuable. Understanding the speed at which ${t.fires} can escalate and the importance of early evacuation and property protection measures can significantly influence outcomes during future events.`
      } else {
        evacAnalysis = `While you have not been directly impacted by ${t.fire} to date, this does not diminish the importance of being prepared. Many properties lost to ${t.fires} belonged to owners who had never experienced a fire event before. Preparation and proactive protection are your best defence.`
      }
      y = wrappedText(evacAnalysis, y)
      y += 4
    }

    // Current protection
    if (answers.current_protection) {
      y = checkPageBreak(8, y)
      doc.setFont("helvetica", "bold")
      doc.setFontSize(10)
      doc.setTextColor(...textDark)
      doc.text("Current Protection Measures", margin, y)
      y += 6

      let protAnalysis = ""
      const protScore = answers.current_protection.option.score
      if (protScore >= 7) {
        protAnalysis = `Your current protection level is: "${protectionAnswer}". This represents a significant gap in your property's ${t.fire} defences. Garden hoses and basic DIY systems are insufficient during a real ${t.fire} event. Water pressure drops dramatically when multiple homes in a neighbourhood are drawing from the same supply, and garden hoses cannot provide the sustained, high-coverage water delivery needed to suppress embers across your entire roof and property perimeter. A professionally engineered exterior sprinkler system delivers full property coverage in under 3 minutes and can be activated remotely, even after you have evacuated.`
      } else if (protScore >= 5) {
        protAnalysis = `Your current protection level is: "${protectionAnswer}". While having some protection measures in place is better than none, non-professional systems often have critical gaps in coverage, may not withstand the extreme conditions of a ${t.fire} event, and cannot be activated remotely. A professionally designed system ensures complete coverage of all vulnerable areas, uses durable materials rated for extreme heat, and provides remote activation through the Prodigy Wildfire app.`
      } else if (protScore >= 2) {
        protAnalysis = `Your current protection level is: "${protectionAnswer}". Having a professional system in place is excellent. If your system needs upgrading, our team can assess your existing infrastructure and recommend improvements including remote activation capability, ember detection sensors, and expanded coverage zones to ensure your property has the most comprehensive protection available.`
      } else {
        protAnalysis = `Your current protection level is: "${protectionAnswer}". Having a comprehensive professional system already installed places your property in the best possible position for ${t.fire} defence. We recommend regular maintenance and system checks to ensure continued peak performance, particularly ahead of each ${t.season}.`
      }
      y = wrappedText(protAnalysis, y)
      y += 4
    }

    // Preparedness
    if (answers.preparedness) {
      y = checkPageBreak(8, y)
      doc.setFont("helvetica", "bold")
      doc.setFontSize(10)
      doc.setTextColor(...textDark)
      doc.text("Overall Preparedness", margin, y)
      y += 6

      let prepAnalysis = ""
      const prepScore = answers.preparedness.option.score
      if (prepScore >= 7) {
        prepAnalysis = `You rated your preparedness as: "${preparednessAnswer}". Acknowledging gaps in your preparedness is an important first step. The good news is that there are practical, proven steps you can take to significantly improve your property's resilience. These include creating defensible space (clearing vegetation within 10 metres of your structure), ensuring gutters and roofs are clear of debris, sealing gaps in eaves and vents, and installing a permanent exterior sprinkler system that provides automated, remote-activated protection.`
      } else if (prepScore >= 4) {
        prepAnalysis = `You rated your preparedness as: "${preparednessAnswer}". You have clearly taken some steps toward protecting your property, and there is an opportunity to strengthen your defences further. Consider a professional property assessment to identify any remaining vulnerabilities. Even well-prepared properties can benefit from a comprehensive exterior sprinkler system that provides an additional layer of automated protection during ${t.fire} events.`
      } else {
        prepAnalysis = `You rated your preparedness as: "${preparednessAnswer}". Being well prepared is an excellent foundation. Continuing to maintain your defensible space, reviewing your emergency plan regularly, and ensuring your protection systems are serviced ahead of each ${t.season} will keep your property in the strongest position possible.`
      }
      y = wrappedText(prepAnalysis, y)
      y += 4
    }

    // ===== Tailored Recommendations =====
    y = sectionHeading("Tailored Recommendations", y)

    const recommendations: string[] = []

    if (category === "hot") {
      recommendations.push(
        `Schedule a Free Consultation: Given your property's risk profile, we strongly recommend booking a free consultation with one of our ${t.fire} protection specialists. Our team will conduct a detailed assessment of your property, identify all vulnerability points, and design a custom protection system tailored to your specific needs.`,
        `Install a Professional Exterior Sprinkler System: A Prodigy exterior ${t.fire} sprinkler system is custom-engineered for your property's roofline, terrain, and exposure zones. Our systems use durable copper piping (or stainless steel in Australia), provide full property coverage in under 3 minutes, and can be activated remotely from anywhere in the world via the Prodigy Wildfire app.`,
        `Create and Maintain Defensible Space: Clear vegetation, debris, and flammable materials within at least 10 metres of your structure. Trim trees so branches are at least 3 metres from your roofline. Keep gutters clear and store firewood well away from buildings.`,
        `Develop a ${t.Fire} Emergency Plan: Prepare a documented evacuation plan, including routes, meeting points, and a go-bag with essential documents, medications, and supplies. Ensure every member of your household knows the plan.`,
      )
    } else if (category === "warm") {
      recommendations.push(
        `Explore Your Protection Options: Your assessment indicates that your property would benefit from professional ${t.fire} protection. We recommend scheduling a free consultation to understand the options available for your property and budget.`,
        `Assess Your Property's Vulnerabilities: Walk your property and identify potential ember entry points including gutters, vents, eaves, decks, and fences. These are the areas where windborne embers are most likely to lodge and ignite.`,
        `Consider a Phased Approach: If budget is a consideration, our team can design a phased installation plan that addresses the highest-risk areas first, with the option to expand coverage over time.`,
        `Review Your Emergency Plan: Ensure you have a documented evacuation plan and that your household is prepared for ${t.fire} events. Preparation significantly improves outcomes.`,
      )
    } else {
      recommendations.push(
        `Stay Informed: Monitor local ${t.fire} conditions and sign up for emergency alerts from your regional fire authority. Conditions can change rapidly.`,
        `Maintain Your Property: Continue keeping vegetation cleared, gutters clean, and flammable materials stored away from structures. Regular maintenance is your first line of defence.`,
        `Review Our Resources: Visit prodigywildfire.com for ${t.fire} preparation guides, educational content, and information about our protection systems. Being informed is being prepared.`,
        `Consider Future Protection: As ${t.fire} conditions evolve, properties that were previously lower-risk may face increased exposure. A professional protection system is a long-term investment in your property's safety and value.`,
      )
    }

    recommendations.forEach((rec, i) => {
      y = checkPageBreak(12, y)
      doc.setFont("helvetica", "bold")
      doc.setFontSize(10)
      doc.setTextColor(...accent)
      doc.text(`${i + 1}.`, margin, y)
      const colonIdx = rec.indexOf(":")
      const heading = rec.substring(0, colonIdx + 1)
      const body = rec.substring(colonIdx + 1).trim()
      doc.setTextColor(...textDark)
      doc.text(heading, margin + 8, y)
      y += 6
      y = wrappedText(body, y)
      y += 4
    })

    // ===== About Prodigy =====
    y = sectionHeading("About Prodigy Wildfire Solutions", y)

    const aboutText = `Prodigy Wildfire Solutions is a global leader in ${t.fire} protection, delivering custom-engineered exterior sprinkler systems for homes, businesses, and critical infrastructure across the USA, Canada, and Australia. Our systems are designed by ${t.fire} protection specialists and installed by qualified professionals using the highest quality materials. Every system includes remote activation via the Prodigy Wildfire app, allowing property owners to protect their property from anywhere in the world. From the Banff Gondola in the Canadian Rockies to private residences in California and rural properties in New South Wales, our team has protected some of the most ${t.fire}-exposed properties on the planet.`
    y = wrappedText(aboutText, y)
    y += 4

    const ctaText = `To schedule your free consultation and take the next step in protecting your property, visit prodigywildfire.com/consultation or email sales@prodigywildfire.com.`
    doc.setFont("helvetica", "bold")
    doc.setFontSize(9)
    doc.setTextColor(...accentDark)
    const ctaLines = doc.splitTextToSize(ctaText, contentWidth)
    for (const line of ctaLines) {
      y = checkPageBreak(6, y)
      doc.text(line, margin, y)
      y += 5
    }

    // ===== Disclaimer =====
    y += 4
    y = checkPageBreak(20, y)
    doc.setDrawColor(200, 200, 200)
    doc.line(margin, y, margin + contentWidth, y)
    y += 6
    const disclaimer = `Disclaimer: This report is generated based on self-reported information and is intended for general guidance purposes only. It does not constitute a professional ${t.fire} risk assessment, engineering report, or insurance evaluation. Actual ${t.fire} risk depends on many factors including weather, terrain, vegetation, building materials, and local conditions that cannot be fully captured in a questionnaire. For a comprehensive property assessment, please contact our team directly.`
    doc.setFont("helvetica", "normal")
    doc.setFontSize(7)
    doc.setTextColor(150, 150, 150)
    const discLines = doc.splitTextToSize(disclaimer, contentWidth)
    for (const line of discLines) {
      y = checkPageBreak(5, y)
      doc.text(line, margin, y)
      y += 4
    }

    // Add footer to final page
    addFooter()

    // Add watermark logo text to each page
    const totalPages = doc.getNumberOfPages()
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i)
      doc.setFont("helvetica", "bold")
      doc.setFontSize(60)
      doc.setTextColor(240, 240, 240)
      doc.text("PRODIGY", pageWidth / 2, pageHeight / 2, {
        align: "center",
        angle: 45,
      })
    }

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
      <>
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
              <h2 className="mb-6 text-center text-xl font-semibold text-foreground">
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

        {/* SEO Introduction */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              What Is a <span className="text-accent">Wildfire Risk Assessment</span>?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A wildfire risk assessment evaluates your property{"'"}s vulnerability to wildfire, bushfire, and ember attack based on your location, surrounding vegetation, building materials, existing protection measures, and regional fire history. Whether you{"'"}re in the USA, Canada, or Australia, understanding your risk level is the critical first step toward protecting your home, business, or community.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our free 2-minute assessment analyses key risk factors specific to your region, including proximity to wildland areas, local fire season severity, and your current level of preparedness. At the end, you{"'"}ll receive a personalised risk rating along with actionable recommendations tailored to your property.
            </p>
          </div>
        </section>

        <section className="bg-muted py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-center font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              What You{"'"}ll <span className="text-accent">Learn</span>
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="rounded border border-border bg-card p-6 text-center">
                <h3 className="font-heading text-lg font-bold text-card-foreground">Your Property{"'"}s Risk Level</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Receive a clear risk rating based on your property{"'"}s location, terrain, vegetation, and structural exposure to wildfire and ember attack.
                </p>
              </div>
              <div className="rounded border border-border bg-card p-6 text-center">
                <h3 className="font-heading text-lg font-bold text-card-foreground">Region-Specific Insights</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Our assessment is tailored to wildfire conditions in the USA, bushfire seasons in Australia, and fire-prone regions across Canada, so your results reflect real local risk.
                </p>
              </div>
              <div className="rounded border border-border bg-card p-6 text-center">
                <h3 className="font-heading text-lg font-bold text-card-foreground">Personalised Recommendations</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Based on your answers, we{"'"}ll provide tailored next steps, from improving defensible space to installing a professional exterior wildfire sprinkler system.
                </p>
              </div>
              <div className="rounded border border-border bg-card p-6 text-center">
                <h3 className="font-heading text-lg font-bold text-card-foreground">A Downloadable Report</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  At the end of your assessment, download a PDF summary of your risk score and recommendations to share with your family, insurer, or local fire authority.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Why Wildfire Preparedness <span className="text-accent">Matters</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Wildfires and bushfires are increasing in frequency, intensity, and unpredictability. In 2023, Canada experienced its worst wildfire season on record with over 17 million hectares burned. The 2025 Los Angeles fires destroyed entire neighbourhoods in hours. Across Australia, bushfire seasons are starting earlier and lasting longer each year.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Up to 90% of homes lost during wildfire events are ignited by windborne embers, not direct flame contact. This means that even properties kilometres from the fire front are at risk. Understanding your vulnerability and taking proactive steps, such as installing an exterior wildfire sprinkler system, maintaining defensible space, and having an evacuation plan, can be the difference between saving and losing your property.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              This assessment is designed by Prodigy Wildfire Solutions, a global leader in wildfire and bushfire protection systems. We protect homes, businesses, and critical infrastructure across the USA, Canada, and Australia with custom-engineered exterior sprinkler systems, ember detection technology, and remote activation through the Prodigy Wildfire app.
            </p>
          </div>
        </section>
      </>
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
              <div className="mb-3 text-center">
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
                <h2 className="mb-3 text-center text-xl font-bold text-foreground">
                  Let&apos;s Protect Your Property
                </h2>
                <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                  Based on your assessment, your property would benefit significantly from a
                  professional {t!.fire} protection system. Book a 15-minute call with one of our{" "}
                  {t!.fire} protection specialists to discuss your options.
                </p>
                <a
                  href="/consultation"
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
                <h2 className="mb-3 text-center text-xl font-bold text-foreground">Take the Next Step</h2>
                <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                  You&apos;re clearly thinking seriously about protecting your property. We&apos;d
                  love to chat about how our systems work and whether it&apos;s the right fit for
                  you.
                </p>
                <a
                  href="/consultation"
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
                <h2 className="mb-3 text-center text-xl font-bold text-foreground">
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
          <h2 className="mb-2 text-center text-xl font-semibold leading-snug text-foreground">
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
