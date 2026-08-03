export interface ProjectDetail {
  slug: string;
  title: string;
  category: string;
  filterTag: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  features: string[];
  technologies: string[];
  challenges: string[];
  impact: string;
}

export const projects: ProjectDetail[] = [
  {
    slug: "unihive",
    title: "UniHive",
    category: "AI and Full-Stack Development",
    filterTag: "AI/ML",
    summary:
      "UniHive is an AI-powered university admissions platform that helps students identify suitable universities, compare programs, manage applications, and receive personalized guidance.",
    problem:
      "Students often search through multiple websites and unorganized sources to understand university requirements, deadlines, and admission chances.",
    solution:
      "UniHive organizes university information in one platform and uses student profile data to provide personalized university recommendations.",
    role: "I worked on the product design, frontend development, resume intelligence workflow, recommendation logic, and university information structure.",
    features: [
      "University recommendation system",
      "Student profile analysis",
      "Resume intelligence",
      "University comparison",
      "Application tracking",
      "AI admissions advisor",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "RAG",
      "SQL",
      "AI/LLM",
      "Tailwind CSS",
    ],
    challenges: [
      "Organizing large amounts of university data",
      "Combining student profile information from multiple sources",
      "Designing a simple user flow for a complex admissions process",
    ],
    impact:
      "The platform helps students reduce research time and manage the university application process from one dashboard.",
  },
  {
    slug: "resume-intelligence",
    title: "Resume Intelligence System",
    category: "Generative AI",
    filterTag: "AI/ML",
    summary:
      "The Resume Intelligence System extracts academic, technical, and professional information from student resumes and converts it into a structured profile.",
    problem:
      "Students repeatedly enter the same academic and professional information during onboarding and application processes.",
    solution:
      "The system parses resumes, identifies important profile details, calculates readiness scores, and prefills relevant profile fields.",
    role: "I designed the data schema, scoring system, extraction workflow, storage logic, and profile analysis interface.",
    features: [
      "Resume text extraction",
      "Academic information detection",
      "Skills and experience extraction",
      "Profile completeness scoring",
      "Strength and risk analysis",
      "Automatic onboarding prefill",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "Python",
      "LLM",
      "Zod",
      "PDF parsing",
      "Local storage",
    ],
    challenges: [
      "Handling different resume formats",
      "Preventing incorrect data from overwriting user information",
      "Creating consistent scores from incomplete resume data",
    ],
    impact:
      "The system reduces manual data entry and provides students with a clear summary of their application readiness.",
  },
  {
    slug: "ai-recruitment",
    title: "AI Recruitment Platform",
    category: "Artificial Intelligence",
    filterTag: "AI/ML",
    summary:
      "The AI Recruitment Platform helps recruiters generate job descriptions, evaluate candidate profiles, and automate repetitive recruitment tasks.",
    problem:
      "Recruiters spend a significant amount of time writing job descriptions and reviewing candidate information manually.",
    solution:
      "The platform uses generative AI and evaluation workflows to automate content generation and candidate analysis.",
    role: "I worked on AI evaluation frameworks, API integration, job description generation, and candidate assessment workflows.",
    features: [
      "AI job description generation",
      "Candidate profile evaluation",
      "API-based AI model integration",
      "Automated recruiter workflows",
      "Structured evaluation results",
    ],
    technologies: [
      "Python",
      "GPT",
      "Llama",
      "Mistral",
      "FastAPI",
      "REST APIs",
    ],
    challenges: [
      "Generating consistent output from different AI models",
      "Designing useful evaluation criteria",
      "Reducing repetitive recruiter work without removing human decision-making",
    ],
    impact:
      "The platform reduced repetitive work and improved the efficiency of recruitment workflows.",
  },
  {
    slug: "computer-vision",
    title: "Computer Vision Platform",
    category: "Machine Learning",
    filterTag: "Computer Vision",
    summary:
      "The Computer Vision Platform processes images, matches records, allows users to review results, and exports structured data.",
    problem:
      "Image-based records often require manual comparison, correction, and data entry.",
    solution:
      "The application processes image batches, presents matching results, allows corrections, and supports CSV export.",
    role: "I developed the user interface, backend API, database workflow, record-matching interface, and export feature.",
    features: [
      "Image upload and processing",
      "Batch record matching",
      "Editable result tables",
      "Review modal",
      "CSV export",
      "Database storage",
    ],
    technologies: [
      "Python",
      "Streamlit",
      "FastAPI",
      "SQLite",
      "Computer Vision",
      "Pandas",
    ],
    challenges: [
      "Presenting large matching results clearly",
      "Allowing edits without losing processed data",
      "Creating a simple batch-processing workflow",
    ],
    impact:
      "The platform made image-processing results easier to review, correct, and export.",
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
