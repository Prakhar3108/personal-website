export const profile = {
  name: "Prakhar Garg",
  title: "AI Engineer & Full-Stack Developer",
  tagline:
    "I build AI-powered applications, RAG systems, and full-stack web experiences.",
  email: "prak.works@gmail.com",
  phone: "+91-8527593031",
  linkedin: "https://linkedin.com/in/prakhar-garg31",
  github: "https://github.com/Prakhar3108",
  resumeUrl: "/Prakhar_Garg_Resume.pdf",
  education: {
    degree: "B.Tech — Mathematics & Computing",
    school: "Delhi Technological University (DTU), Delhi",
    cgpa: "8.8",
    years: "2022 – 2026",
  },
  highlights: [
    "CBSE All India Mathematics Topper — Class 10 & 12",
    "500+ DSA problems · LeetCode Knight (2011)",
    "Led Web Dev Club initiatives at DTU",
    "Chess — ~1900 rating, 10+ inter-college tournament wins",
  ],
  interests: ["Chess", "Table Tennis", "Travelling", "Sketching"],
}

export type Experience = {
  role: string
  company: string
  period: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    role: "AI Engineer (Intern)",
    company: "Bain & Company — Capability Network",
    period: "Jan 2026 – Present",
    bullets: [
      "Built a benchmarking agent that autonomously selects KPIs, computes sample sizes, and returns structured outputs — improving efficiency by 20%.",
      "Designed multi-step agentic pipelines using LangChain + LangGraph with tool selection, API orchestration, and graceful fallbacks.",
      "Built a slides-to-answers RAG system: ingested 100+ decks, hybrid retrieval with metadata filters and re-ranking.",
      "Automated survey update workflows (X-Ray agent) delivering client-ready ThinkCell PPTs from structured data.",
      "Hardened AI service reliability with async I/O, caching, retry/fallback logic, and evaluation hooks for groundedness & relevance.",
    ],
  },
  {
    role: "Gen AI Intern",
    company: "Indian Oil Corporation Limited (IOCL)",
    period: "2025 · 2 Months",
    bullets: [
      "Supported development of a document summarization RAG system for querying internal documents.",
      "Implemented preprocessing pipelines and chunking for long-form text to improve context preservation.",
      "Worked on FastAPI backend with vector-based retrieval, structured logging, and guardrails.",
    ],
  },
  {
    role: "SDE Intern",
    company: "PowerGrid",
    period: "2024 · 3 Months",
    bullets: [
      "Developed a full-stack file-sharing web app using React, Node.js, Express, and MongoDB.",
      "Designed backend with MVC architecture, Multer for file handling, and Mongoose for MongoDB.",
    ],
  },
]

export type Project = {
  name: string
  period: string
  description: string
  tags: string[]
  link?: string
  demoLink?: string
}

export const projects: Project[] = [
  {
    name: "Streamify — Chat & Video App",
    period: "2025",
    description:
      "Real-time chat and video calling with JWT auth, friend requests, and 32 themes. Live on Render — try it below.",
    tags: ["React", "Node.js", "MongoDB", "Stream SDK", "Tailwind"],
    link: "https://github.com/Prakhar3108/video-chat-app",
    demoLink: "https://video-chat-app-8ffr.onrender.com/login",
  },
  {
    name: "Wallet — Expense Tracker",
    period: "2025",
    description:
      "Mobile expense tracker built with React Native, Expo, and a PostgreSQL backend. Clerk for auth, Redis for rate limiting.",
    tags: ["React Native", "Expo", "Express", "PostgreSQL", "Clerk"],
    link: "https://github.com/Prakhar3108/wallet-api",
  },
]

export type SkillCategory = {
  category: string
  skills: string[]
}

export const skills: SkillCategory[] = [
  {
    category: "AI / GenAI",
    skills: [
      "RAG & Hybrid Retrieval",
      "Multi-Agent Pipelines",
      "LangChain & LangGraph",
      "Prompt Engineering",
      "Vector Search",
      "MCP",
      "GPT-4o / OpenAI / Anthropic",
    ],
  },
  {
    category: "Reliability & Eval",
    skills: [
      "Async LLM Calls",
      "Response Caching",
      "Retry / Fallback",
      "Circuit Breakers",
      "LLM-as-Judge",
      "Guardrails",
      "PII Handling",
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      "Python & FastAPI",
      "Node.js & Express",
      "REST APIs",
      "JWT & Webhooks",
      "Microservices",
      "MongoDB & PostgreSQL",
    ],
  },
  {
    category: "Frontend & Tools",
    skills: [
      "React.js & Vite",
      "Tailwind CSS",
      "Git & GitHub",
      "Docker",
      "Render",
      "Postman",
    ],
  },
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "C++", "C", "SQL"],
  },
]
