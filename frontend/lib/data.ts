/**
 * Central content for the portfolio.
 * Edit everything here — components read from this file so the site stays
 * easy to maintain. Replace placeholder copy with your real details.
 */

export const profile = {
  name: "Rohan",
  role: "AI & Software Engineer",
  location: "Riverside, CA",
  // Short one-liner used in the hero
  tagline:
    "I build AI systems that work in the real world — from vision-language models and LLM agents to the full-stack products that put them to use.",
  // Longer narrative for the About section
  about: [
    "I'm an AI and Software Engineer working where machine learning meets dependable engineering. Most recently I've been a graduate researcher in the Trustworthy Autonomous Systems Lab at UC Riverside, fusing vision-language models with spatial data to make autonomous systems safer and more interpretable.",
    "Before that, I shipped production software and AI vision pipelines in industry — defect detection on the factory floor, high-concurrency transactional systems, and MLOps that took deployments from hours to minutes. I like the whole climb: research, modeling, and the full-stack product around it.",
    "I'm endlessly curious and learn fastest by building things slightly beyond my reach. Off the keyboard, you'll usually find me outdoors with a topographic map and a thermos of coffee.",
  ],
  email: "rtiko001@ucr.edu",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
} as const;

/**
 * Navigation + trail stages. `id` must match each section's element id.
 * `map` gives the landmark's position (0–100) on the mini Yosemite trail map,
 * winding from the trailhead (bottom) up to the summit (top).
 */
export const sections = [
  { id: "hero", label: "Trailhead", nav: "Home", map: { x: 22, y: 118 } },
  { id: "about", label: "The Forest", nav: "About", map: { x: 44, y: 103 } },
  { id: "experience", label: "Trail Markers", nav: "Experience", map: { x: 30, y: 88 } },
  { id: "projects", label: "Campsites", nav: "Projects", map: { x: 56, y: 73 } },
  { id: "research", label: "Field Notes", nav: "Research", map: { x: 36, y: 58 } },
  { id: "skills", label: "Gear", nav: "Skills", map: { x: 58, y: 44 } },
  { id: "achievements", label: "Scenic Overlooks", nav: "Milestones", map: { x: 34, y: 29 } },
  { id: "summit", label: "The Summit", nav: "Contact", map: { x: 50, y: 14 } },
] as const;

export type SectionMeta = (typeof sections)[number];

export type Experience = {
  role: string;
  org: string;
  period: string;
  type: "work" | "education";
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: "Senior AI Engineer",
    org: "Acme Intelligence",
    period: "2023 — Present",
    type: "work",
    description:
      "Lead engineer on a team building large-language-model products used by thousands of customers.",
    highlights: [
      "Designed a retrieval-augmented generation pipeline that cut hallucinations by 40%.",
      "Shipped an internal evaluation framework adopted across three product teams.",
      "Mentored four engineers and established the team's ML code-review standards.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    org: "Northbound Labs",
    period: "2021 — 2023",
    type: "work",
    description:
      "Built and deployed production ML services for recommendation and forecasting.",
    highlights: [
      "Took a recommendation model from notebook to production serving 1M+ daily requests.",
      "Reduced inference latency 3x through model distillation and caching.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Trailhead Studio",
    period: "2019 — 2021",
    type: "work",
    description:
      "Full-stack development across web platforms with a focus on data-heavy interfaces.",
    highlights: [
      "Owned the analytics dashboard used by every customer-facing team.",
      "Introduced a component library that halved feature delivery time.",
    ],
  },
  {
    role: "B.S. in Computer Science",
    org: "State University",
    period: "2015 — 2019",
    type: "education",
    description:
      "Specialized in machine learning and human-computer interaction.",
    highlights: [
      "Undergraduate research in neural sequence models.",
      "Graduated with honors; teaching assistant for Algorithms.",
    ],
  },
];

/**
 * Career Timeline — the horizontal trail of major stops. Replace photos by
 * dropping files in /public and setting `photo`; otherwise a themed
 * placeholder is shown.
 */
export type CareerStop = {
  id: string;
  title: string;
  org: string;
  period: string;
  kind: "education" | "work" | "research";
  summary: string;
  accomplishments: string[];
  skills: string[];
  photo?: string;
};

export const careerStops: CareerStop[] = [
  {
    id: "btech-pune",
    title: "B.Tech — IT",
    org: "Savitribai Phule Pune University (VIIT), Pune, India",
    period: "2020 — 2024",
    kind: "education",
    summary:
      "Where the trail began — a bachelor's in Information Technology, building a strong CS foundation and a first taste of applied AI.",
    accomplishments: [
      "Coursework across algorithms, systems, full-stack, and ML.",
      "First hands-on projects in software and applied AI.",
    ],
    skills: ["Python", "Java", "Data Structures", "Full-Stack"],
  },
  {
    id: "atlas-copco",
    title: "Software Engineer, AI",
    org: "Atlas Copco, Pune, India",
    period: "Jun 2023 — Dec 2023",
    kind: "work",
    summary:
      "First professional summit — led an AI vision pipeline (YOLOv8) validating manufacturing operations on the factory floor.",
    accomplishments: [
      "92.5% defect-detection accuracy; cut inspection from 45s to under 2s.",
      "Automated handwritten-checklist tracking with multimodal AI (image + text), an 80% time reduction.",
      "Built a Dockerized MLOps pipeline and a full-stack warehouse system (Django & React).",
    ],
    skills: ["YOLOv8", "Computer Vision", "Django", "React", "Docker"],
  },
  {
    id: "digital-vision",
    title: "Software Engineer",
    org: "Digital Vision Studios, Pune, India",
    period: "Jan 2024 — Jun 2024",
    kind: "work",
    summary:
      "A steady stretch of trail — engineered a high-concurrency transactional system and scaled it onto hybrid cloud.",
    accomplishments: [
      "Built a secure ledger and transactional system for 5,500+ active users.",
      "Migrated to hybrid cloud (AWS / DigitalOcean), scaling to 8,000+ daily requests.",
      "Cut delivery cycles from 2 hours to 15 minutes with Docker guardrails.",
    ],
    skills: ["Python", "AWS", "Docker", "System Design"],
  },
  {
    id: "ms-ucr",
    title: "M.S. — Computer Science",
    org: "University of California, Riverside",
    period: "2024 — 2025",
    kind: "education",
    summary:
      "A higher ridgeline — a master's focused on AI, ML, reinforcement learning, and NLP.",
    accomplishments: [
      "Graduate coursework in AI, ML, RL, NLP, and data science.",
      "Earned AWS, Docker, and Kubernetes certifications along the way.",
    ],
    skills: ["Machine Learning", "Deep Learning", "NLP", "Reinforcement Learning"],
  },
  {
    id: "tas-lab",
    title: "AI Engineer (Graduate Researcher)",
    org: "Trustworthy Autonomous Systems Lab, UC Riverside",
    period: "Apr 2025 — Dec 2025",
    kind: "research",
    summary:
      "The current ridgeline — fusing vision-language models with spatial data to make autonomous systems safer and more interpretable.",
    accomplishments: [
      "Designed a multi-modal framework fusing VLMs with spatial features to predict anomaly-intent thresholds (submitted to IROS 2026).",
      "Achieved 20% faster LLM convergence by integrating historical variance into the reasoning context.",
      "Cut operational risk 30% with a confidence-modulated governance protocol.",
    ],
    skills: ["VLMs", "LLMs", "PyTorch", "Research"],
  },
];

/**
 * Build Backpack — gear organized into four compartments. Each technology can
 * carry a `slug` matching a Simple Icons logo (see lib/tech-icons.ts); when
 * absent, a lettered monogram is shown instead.
 */
export type Skill = {
  name: string;
  /** Simple Icons slug for the brand logo (optional). */
  slug?: string;
};

export type SkillCategory = {
  id: string;
  name: string;
  blurb: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    blurb: "The tongues I think and build in.",
    skills: [
      { name: "Python", slug: "python" },
      { name: "Java" },
      { name: "TypeScript", slug: "typescript" },
    ],
  },
  {
    id: "software",
    name: "Software Engineering",
    blurb: "Shipping reliable, well-built products.",
    skills: [
      { name: "React.js", slug: "react" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "Django", slug: "django" },
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "Jenkins", slug: "jenkins" },
      { name: "Terraform", slug: "terraform" },
      { name: "Redis", slug: "redis" },
      { name: "AWS" },
      { name: "Azure" },
      { name: "Git", slug: "git" },
    ],
  },
  {
    id: "applied-ai",
    name: "Applied AI",
    blurb: "Putting models to work in real products.",
    skills: [
      { name: "LangChain", slug: "langchain" },
      { name: "LangGraph", slug: "langgraph" },
      { name: "LangSmith" },
      { name: "CrewAI", slug: "crewai" },
      { name: "Hugging Face", slug: "huggingface" },
      { name: "RAG" },
      { name: "LLMs" },
    ],
  },
  {
    id: "ml-frameworks",
    name: "ML Frameworks",
    blurb: "The tools I train and experiment with.",
    skills: [
      { name: "PyTorch", slug: "pytorch" },
      { name: "scikit-learn", slug: "scikitlearn" },
      { name: "Matplotlib" },
      { name: "MLflow", slug: "mlflow" },
    ],
  },
];

export type Project = {
  title: string;
  blurb: string;
  description: string;
  tags: string[];
  // Placeholder — wire up later
  href?: string;
  repo?: string;
  featured?: boolean;
  // Optional richer details shown in the full-screen case study
  year?: string;
  role?: string;
  highlights?: string[];
  challenge?: string;
  lesson?: string;
  github?: string;
  demo?: string;
  /** Grouped technology stack. */
  stack?: { label: string; items: string[] }[];
  /** Ordered architecture flow (each item is a stage in the pipeline). */
  architecture?: string[];
  /** Project timeline milestones. */
  timeline?: { phase: string; detail: string }[];
};

export const projects: Project[] = [
  {
    title: "Guardian RAG",
    blurb: "Dual-agent RAG for credit-card fraud forensics",
    description:
      "An enterprise-grade, dual-agent RAG pipeline that automates the analysis and detection of credit-card fraud use cases.",
    tags: ["RAG", "GPT-4o", "Azure AI Search", "Cosmos DB"],
    featured: true,
    role: "AI Engineer",
    github: "#",
    highlights: [
      "Dual-agent architecture for retrieval and fraud reasoning.",
      "Grounds analysis in enterprise data via Azure AI Search + Cosmos DB.",
      "Automates investigation of complex fraud scenarios.",
    ],
    stack: [
      { label: "Agents", items: ["GPT-4o", "Dual-agent"] },
      { label: "Retrieval", items: ["Azure AI Search", "RAG"] },
      { label: "Data", items: ["Cosmos DB", "Azure"] },
    ],
    architecture: [
      "Transaction & case data",
      "Azure AI Search retrieval",
      "Dual-agent reasoning (GPT-4o)",
      "Fraud analysis + verdict",
    ],
  },
  {
    title: "Purchase Order Management System",
    blurb: "Turning supplier emails into structured POs",
    description:
      "Streamlines procurement by using GPT-4o Structured Outputs to convert unstructured supplier emails into actionable Purchase Order data.",
    tags: ["GPT-4o", "Structured Outputs", "Automation", "LLMs"],
    featured: true,
    role: "AI Engineer",
    github: "#",
    highlights: [
      "2.3s parsing latency at under $0.003 per email.",
      "Converts messy supplier emails into clean, actionable PO data.",
      "Cuts manual data entry for procurement teams.",
    ],
    stack: [
      { label: "AI", items: ["GPT-4o", "Structured Outputs"] },
      { label: "Backend", items: ["Python", "FastAPI"] },
    ],
    architecture: [
      "Unstructured supplier email",
      "GPT-4o structured extraction",
      "Validated Purchase Order data",
      "Procurement workflow",
    ],
  },
  {
    title: "CodeMates",
    blurb: "AI agents for code-to-cloud DevOps",
    description:
      "Autonomous AI agents that automate the DevOps lifecycle — generating Dockerfiles, Terraform files, and CI/CD configs end to end.",
    tags: ["LangChain", "LLaMA 3.1", "DevOps", "Agents"],
    role: "Builder",
    github: "#",
    highlights: [
      "Built on LLaMA-3.1-8B-Instant via LangChain.",
      "92% accuracy with under-30s pipeline generation.",
    ],
  },
  {
    title: "CartPilot",
    blurb: "Your AI shopping companion",
    description:
      "An agentic RAG shopping assistant that delivers personalized recommendations, contextual search, and shopping insights.",
    tags: ["Agentic RAG", "LLMs", "Recommendations"],
    role: "Builder",
    github: "#",
    highlights: [
      "Agentic RAG for personalized, contextual product discovery.",
      "Surfaces insights to guide shopping decisions.",
    ],
  },
];

export type Publication = {
  title: string;
  venue: string;
  year: string;
  description: string;
  tags: string[];
  /** Link to the paper / DOI — placeholder for now. */
  link: string;
};

export const research = {
  intro:
    "My research sits at the intersection of machine learning and robotics — teaching systems to perceive, reason, and act reliably in the messy real world. I'm especially drawn to grounding large models in physical context and making autonomous behavior interpretable and safe.",
  publications: [
    {
      title:
        "Grounded Perception for Robust Robotic Manipulation in Unstructured Environments",
      venue: "Placeholder Conference on Robotics & Automation",
      year: "2024",
      description:
        "Introduces a perception pipeline that fuses vision-language grounding with classical control to improve manipulation success in cluttered, novel scenes.",
      tags: ["Robotics", "Perception", "Vision-Language"],
      link: "#",
    },
    {
      title:
        "Towards Interpretable Policies: Explaining Learned Control with Natural Language",
      venue: "Placeholder Workshop on Trustworthy ML",
      year: "2023",
      description:
        "Proposes a method for generating faithful natural-language explanations of a learned control policy's decisions, evaluated on simulated navigation tasks.",
      tags: ["Interpretability", "Reinforcement Learning", "LLMs"],
      link: "#",
    },
  ] as Publication[],
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "AI & Machine Learning",
    items: ["PyTorch", "TensorFlow", "LLMs & RAG", "Transformers", "scikit-learn", "MLOps"],
  },
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Go"],
  },
  {
    category: "Web & Frontend",
    items: ["Next.js", "React", "Tailwind CSS", "Node.js", "Framer Motion"],
  },
  {
    category: "Data & Infrastructure",
    items: ["PostgreSQL", "Vector Databases", "Docker", "AWS", "Kubernetes"],
  },
];

export type Achievement = {
  year: string;
  title: string;
  detail: string;
};

export const achievements: Achievement[] = [
  {
    year: "2024",
    title: "Conference Speaker",
    detail: "Presented work on grounded LLM systems at a national AI conference.",
  },
  {
    year: "2023",
    title: "Patent Filed",
    detail: "Co-inventor on a patent for an efficient model-serving architecture.",
  },
  {
    year: "2022",
    title: "Hackathon Winner",
    detail: "First place out of 80+ teams for an accessibility-focused ML tool.",
  },
  {
    year: "2021",
    title: "10k+ GitHub Stars",
    detail: "Open-source contributions reaching a broad developer community.",
  },
];

/** Placeholder file path — drop a real resume in /public to wire this up. */
export const resumeUrl = "/resume.pdf";
