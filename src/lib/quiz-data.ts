export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How close is your property to a wildland-urban interface (WUI) zone?",
    options: [
      { text: "Within a WUI zone", score: 0 },
      { text: "Less than 1 mile away", score: 1 },
      { text: "1-5 miles away", score: 2 },
      { text: "More than 5 miles away", score: 3 },
    ],
  },
  {
    id: 2,
    question: "What type of roofing material does your property have?",
    options: [
      { text: "Wood shake or shingles", score: 0 },
      { text: "Standard asphalt shingles", score: 1 },
      { text: "Metal roofing (no ember guards)", score: 2 },
      { text: "Class A fire-rated with ember protection", score: 3 },
    ],
  },
  {
    id: 3,
    question: "Do you have defensible space around your property?",
    options: [
      { text: "No defensible space", score: 0 },
      { text: "Some vegetation clearing (under 30 ft)", score: 1 },
      { text: "Zone 1 cleared (0-30 ft)", score: 2 },
      { text: "Full defensible space (Zones 1-3, up to 100+ ft)", score: 3 },
    ],
  },
  {
    id: 4,
    question: "How do you maintain vegetation around your home?",
    options: [
      { text: "Rarely or never maintained", score: 0 },
      { text: "Occasional trimming and cleanup", score: 1 },
      { text: "Regular seasonal maintenance", score: 2 },
      { text: "Professional fire-smart landscaping maintained year-round", score: 3 },
    ],
  },
  {
    id: 5,
    question: "Do you have an exterior sprinkler or suppression system?",
    options: [
      { text: "No exterior water systems", score: 0 },
      { text: "Garden hose and portable sprinklers only", score: 1 },
      { text: "Basic exterior sprinkler setup", score: 2 },
      { text: "Professionally installed roof-mounted sprinkler system", score: 3 },
    ],
  },
  {
    id: 6,
    question: "Can you remotely activate your property's fire defense systems?",
    options: [
      { text: "No remote capabilities", score: 0 },
      { text: "I can call a neighbor to help", score: 1 },
      { text: "Smart home integration with limited fire controls", score: 2 },
      { text: "Full remote activation via dedicated app", score: 3 },
    ],
  },
  {
    id: 7,
    question: "Are your home's vents and openings protected from ember intrusion?",
    options: [
      { text: "No ember protection on vents or openings", score: 0 },
      { text: "Some vents have basic screening", score: 1 },
      { text: "Most vents have 1/8\" mesh screening", score: 2 },
      { text: "All vents, eaves, and openings are ember-resistant", score: 3 },
    ],
  },
  {
    id: 8,
    question: "What is the condition of your home's gutters and roof?",
    options: [
      { text: "Gutters full of debris, roof has accumulated material", score: 0 },
      { text: "Cleaned occasionally", score: 1 },
      { text: "Cleaned each fire season", score: 2 },
      { text: "Regularly cleared with gutter guards installed", score: 3 },
    ],
  },
  {
    id: 9,
    question: "Do you have a wildfire evacuation plan for your household?",
    options: [
      { text: "No evacuation plan", score: 0 },
      { text: "A general idea but nothing documented", score: 1 },
      { text: "Written plan with identified routes", score: 2 },
      { text: "Practiced plan with go-bags, meeting points, and pet/livestock procedures", score: 3 },
    ],
  },
  {
    id: 10,
    question: "Do you monitor wildfire alerts and fire weather conditions?",
    options: [
      { text: "I don't monitor fire conditions", score: 0 },
      { text: "I occasionally check the news", score: 1 },
      { text: "I follow local fire agency alerts", score: 2 },
      { text: "I use dedicated apps and subscribe to real-time fire alerts", score: 3 },
    ],
  },
  {
    id: 11,
    question: "What is your home's siding or exterior wall material?",
    options: [
      { text: "Wood or vinyl siding", score: 0 },
      { text: "Fiber cement or engineered wood", score: 1 },
      { text: "Stucco or brick veneer", score: 2 },
      { text: "Non-combustible materials (stone, concrete, metal)", score: 3 },
    ],
  },
  {
    id: 12,
    question: "How is your deck or outdoor living area constructed?",
    options: [
      { text: "Wood deck with combustible items underneath", score: 0 },
      { text: "Wood deck, cleared underneath", score: 1 },
      { text: "Composite decking with fire-resistant features", score: 2 },
      { text: "Non-combustible decking or enclosed with fire-resistant barriers", score: 3 },
    ],
  },
  {
    id: 13,
    question: "Do you have an independent water supply for fire suppression?",
    options: [
      { text: "No independent water supply", score: 0 },
      { text: "Standard municipal water only", score: 1 },
      { text: "Water tank or cistern on property", score: 2 },
      { text: "Dedicated water supply with pump system for fire defense", score: 3 },
    ],
  },
  {
    id: 14,
    question: "Does your insurance policy specifically cover wildfire damage?",
    options: [
      { text: "I'm not sure about my coverage", score: 0 },
      { text: "Standard homeowners policy only", score: 1 },
      { text: "Policy with some wildfire provisions", score: 2 },
      { text: "Comprehensive wildfire coverage with documented mitigation discounts", score: 3 },
    ],
  },
  {
    id: 15,
    question: "Have you had a professional wildfire risk assessment of your property?",
    options: [
      { text: "Never had an assessment", score: 0 },
      { text: "Self-assessed using online resources", score: 1 },
      { text: "Had a basic assessment from local fire department", score: 2 },
      { text: "Professional assessment with an action plan in place", score: 3 },
    ],
  },
];

export interface QuizResult {
  level: string;
  title: string;
  description: string;
  color: string;
}

export function getQuizResult(score: number): QuizResult {
  const maxScore = quizQuestions.length * 3;
  const percentage = (score / maxScore) * 100;

  if (percentage <= 25) {
    return {
      level: "Critical",
      title: "Immediate Action Required",
      description:
        "Your property faces significant wildfire risk with minimal protections in place. We strongly recommend a professional assessment and immediate steps to create defensible space and protect vulnerable areas.",
      color: "destructive",
    };
  }
  if (percentage <= 50) {
    return {
      level: "At Risk",
      title: "Important Improvements Needed",
      description:
        "You've taken some initial steps, but there are critical gaps in your wildfire preparedness. Focus on ember protection, defensible space, and establishing a reliable suppression system.",
      color: "ember",
    };
  }
  if (percentage <= 75) {
    return {
      level: "Moderate",
      title: "Good Foundation, Room to Improve",
      description:
        "You have a solid foundation of wildfire preparedness. To reach full protection, consider upgrading to professional-grade systems, remote activation, and comprehensive ember detection.",
      color: "primary",
    };
  }
  return {
    level: "Well Prepared",
    title: "Excellent Wildfire Readiness",
    description:
      "Your property is well-protected against wildfire threats. Continue maintaining your systems, stay current with the latest technology, and consider helping your community improve their preparedness.",
    color: "primary",
  };
}
