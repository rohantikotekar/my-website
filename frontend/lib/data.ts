/**
 * Central content for the portfolio.
 * Components read from this file so the site stays easy to maintain — edit copy
 * and data here rather than in the components.
 */

export const profile = {
  name: "Rohan Tikotekar",
  role: "Full-stack AI engineer",
  location: "San Francisco, CA",
  // Short description used in the hero.
  tagline:
    "I build AI systems that work in the real world — from LLM agents and vision-language models to the full-stack products that put them to use.",
  // Longer narrative for the About section.
  about: [
    "I build production AI systems — LLM agents and RAG pipelines delivered as full-stack software products.",
    "My experience spans fast-moving startups (one of the first hires), vision and software solutions for supply chains, and robotics for manufacturing.",
    "I have delivered scalable backend systems, cloud infrastructure, and agentic workflows in production.",
    "I enjoy taking AI products from 0 to 1, integrating them into existing workflows and eventually deploying them into real-world production.",
  ],
  email: "rtiko001@ucr.edu",
  social: {
    github: "https://github.com/rohantikotekar",
    linkedin: "https://www.linkedin.com/in/rohan-tikotekar/",
  },
} as const;

/**
 * Site-wide chrome & copy. Everything visible on the page is edited here so the
 * markdown source of truth (docs/data.md) maps 1:1 to the rendered site.
 */

/** SEO / social metadata (app/layout.tsx). */
export const siteMeta = {
  title: "Rohan Tikotekar — Full-stack AI engineer",
  description:
    "Portfolio of Rohan Tikotekar — AI & Research Engineer building LLM agents, vision-language systems, RAG pipelines, and full-stack AI products.",
  keywords: [
    "AI Engineer",
    "Research Engineer",
    "Machine Learning",
    "LLM Agents",
    "Computer Vision",
    "RAG",
    "Portfolio",
  ],
  ogTitle: "Rohan Tikotekar — AI & Research Engineer",
  ogDescription:
    "Building LLM agents, vision-language systems, and full-stack AI products that hold up in the real world.",
} as const;

/** Navbar brand wordmark + primary call-to-action. */
export const nav = {
  brand: "Rohan",
  cta: "Get in touch",
} as const;

/**
 * Hero copy. The headline is split so `highlight` renders with the accent
 * gradient, framed by plain `before` / `after` text.
 */
export const hero = {
  headline: {
    before: "Engineering",
    highlight: "intelligence",
    after: ".",
  },
  primaryCta: { label: "View selected work", href: "#projects" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
} as const;

/** Footer blurb + fine print. */
export const footer = {
  blurb:
    "AI & Research Engineer building AI systems that ship. Open to roles and collaborations.",
  builtWith: "Built with Next.js & Tailwind CSS.",
} as const;

/**
 * Per-section headings (kicker/title/intro) and small UI labels. Keyed by the
 * section id used in `sections`. Research uses `research.intro` as its intro.
 */
export const sectionContent = {
  about: {
    kicker: "About",
    title: "The engineer behind the work.",
    intro: "The motivation and mindset behind what I build.",
    quickFactsLabel: "Quick facts",
  },
  work: {
    kicker: "Experience",
    title: "Shipping reliably in Production.",
    intro:
      "Internships and research roles where the work got real — from the factory floor to the robotics lab.",
  },
  projects: {
    kicker: "Personal Projects",
    title: "Applying AI to real-world problems.",
    intro:
      "Each project leads with what it does, the technical depth behind it, and measurable outcomes.",
    caseStudyLabel: "View case study",
    featuredLabel: "Featured",
  },
  research: {
    kicker: "Research",
    title: "Publications over the years.",
    publicationLabel: "Publication",
    readPaperLabel: "Read paper",
  },
  skills: {
    kicker: "Technical Stack",
    title: "Tools behind the outcomes.",
    intro:
      "The technologies I reach for across AI, machine learning, and full-stack systems.",
    itemsLabel: "items",
  },
  achievements: {
    kicker: "Milestones",
    title: "Selected highlights.",
  },
  contact: {
    kicker: "Contact",
    title: "Let's build useful AI.",
    intro:
      "Open to AI engineering roles, applied-research collaborations, and production AI systems that need both model depth and product execution.",
    formHeading: "Start a conversation",
    formSubtext: "Send a message and I'll get back to you.",
    findMeLabel: "Find me",
  },
} as const;

/**
 * Hero "signals" + headline metrics shown in the profile snapshot card.
 * Every number is drawn from the real experience below.
 */
export const heroSignals: { label: string; value: string }[] = [
  { label: "Currently", value: "AI Engineer · TAS Lab, UC Riverside" },
  { label: "Focus", value: "VLMs · LLM Agents · RAG" },
  { label: "Education", value: "M.S. Computer Science" },
];

export const heroMetrics: { value: string; label: string }[] = [
  { value: "92.5%", label: "defect detection accuracy" },
  { value: "30%", label: "operational risk reduction" },
  { value: "5.5k+", label: "users supported" },
];

/** About — compact, scannable quick facts drawn from the resume. */
export type QuickFact = {
  label: string;
  value: string;
};

export const quickFacts: QuickFact[] = [
  {
    label: "Currently",
    value: "AI Engineer · Trustworthy Autonomous Systems Lab, UC Riverside",
  },
  {
    label: "Education",
    value: "M.S. Computer Science, UC Riverside",
  },
  {
    label: "Based in",
    value: "San Francisco, California",
  },
  {
    label: "Focus",
    value: "LLM agents, RAG pipelines, perception, full-stack systems",
  },
];

/**
 * Navigation + section ids. `id` must match each section's element id; `nav` is
 * the label shown in the navbar and footer.
 */
export const sections = [
  { id: "hero", nav: "Home" },
  { id: "about", nav: "About" },
  { id: "work", nav: "Work" },
  { id: "projects", nav: "Projects" },
  { id: "research", nav: "Research" },
  { id: "skills", nav: "Skills" },
  { id: "contact", nav: "Contact" },
] as const;

export type SectionMeta = (typeof sections)[number];

/**
 * Experience — resume-style work and research history, shown as a vertical
 * timeline with full bullet points.
 */
export type WorkExperience = {
  role: string;
  org: string;
  location: string;
  period: string;
  type: "Internship" | "Research" | "Full-time";
  bullets: string[];
  skills: string[];
};

export const experiences: WorkExperience[] = [
  {
    role: "AI Engineer SV",
    org: "Trustworthy Autonomous Systems Lab, UC Riverside",
    location: "Riverside, CA",
    period: "Apr 2025 — Dec 2025",
    type: "Research",
    bullets: [
      "Designed a multi-modal analytical framework fusing Vision-Language Models (VLMs) with spatial data features to predict anomaly-intent thresholds across complex variables (submitted to IROS 2026).",
      "Achieved 20% faster model convergence in LLMs vs. baseline statistical trends by integrating historical variance and feature-engineering data into the reasoning context.",
      "Mitigated operational risk by 30% with a strict confidence-modulated governance protocol that shares execution controls between automated models and manual validators.",
    ],
    skills: ["VLMs", "LLMs", "PyTorch"],
  },
  {
    role: "Software Engineer",
    org: "Digital Vision Studios",
    location: "Pune, India",
    period: "Jan 2024 — Jun 2024",
    type: "Internship",
    bullets: [
      "Engineered and delivered a high-concurrency ledger and secure transactional data system for 5,500+ active users under strict data-governance, integrity, and risk-mitigation standards.",
      "Orchestrated a migration to a hybrid cloud architecture (AWS / DigitalOcean), scaling capacity to process 8,000+ daily analytical requests.",
      "Automated workflows and built deployment guardrails with Docker, reducing delivery cycles from 2 hours to 15 minutes.",
    ],
    skills: ["Python", "AWS", "Docker", "System Design"],
  },
  {
    role: "Software Engineer",
    org: "Atlas Copco",
    location: "Pune, India",
    period: "Jun 2023 — Dec 2023",
    type: "Internship",
    bullets: [
      "Led the analysis, design, and delivery of an AI vision pipeline using YOLOv8 to validate manufacturing operations.",
      "Achieved 92.5% defect-detection accuracy while reducing per-unit inspection time from 45 seconds to under 2 seconds.",
      "Automated handwritten-checklist tracking with multimodal AI (image + text), reducing per-checklist processing from 5 minutes to under 1 minute (80% reduction).",
      "Built a Dockerized MLOps pipeline and partnered with operations teams to deliver a full-stack warehouse management system (Django & React.js).",
    ],
    skills: ["YOLOv8", "Computer Vision", "Django", "React", "Docker"],
  },
  {
    role: "ML Research Assistant (Computer Vision, ML)",
    org: "Vishwakarma Institute of Information Technology (VIIT)",
    location: "Pune, India",
    period: "Aug 2022 — May 2023",
    type: "Research",
    bullets: [
      "Conducted applied research on robust facial detection and recognition for occluded and profile faces using Convolutional Neural Networks and Haar Cascade classifiers.",
      "Engineered a deep-learning pipeline spanning image preprocessing, patch splitting, and EDSR-GAN super-resolution, improving detection accuracy to 93.2%.",
      "Published and presented the work at the Scopus-indexed 9th ICICT 2024, London (Springer Nature).",
    ],
    skills: ["Computer Vision", "CNNs", "GANs", "PyTorch"],
  },
];

/**
 * Skills — grouped into categories. Each technology can carry a `slug` matching
 * a Simple Icons logo (see lib/tech-icons.ts); when absent, a lettered monogram
 * is shown instead.
 */
export type Skill = {
  name: string;
  /** Simple Icons slug for the brand logo (optional). */
  slug?: string;
  /** Path to a custom logo image in /public (takes precedence over `slug`). */
  img?: string;
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
    blurb: "The languages I think and build in.",
    skills: [
      { name: "Python", slug: "python" },
      { name: "Java", slug: "openjdk" },
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
      { name: "AWS", img: "/logos/aws.png" },
      { name: "Azure", img: "/logos/azure-logo.png" },
      { name: "Git", slug: "git" },
    ],
  },
  {
    id: "applied-ai",
    name: "Applied AI",
    blurb: "Putting models to work in real products.",
    skills: [
      { name: "LangChain", img: "/logos/langchain.png" },
      { name: "LangGraph", img: "/logos/langgraph.png" },
      { name: "LangSmith" },
      { name: "CrewAI", slug: "crewai" },
      { name: "Hugging Face", slug: "huggingface" },
      { name: "RAG" },
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

export type ProjectCategory = "Full-Stack AI" | "Machine Learning";

export type Project = {
  title: string;
  blurb: string;
  description: string;
  /** Which on-site group this project appears under. */
  category: ProjectCategory;
  tags: string[];
  href?: string;
  repo?: string;
  featured?: boolean;
  // Optional richer details shown in the full-screen case study.
  year?: string;
  role?: string;
  highlights?: string[];
  challenge?: string;
  lesson?: string;
  github?: string;
  demo?: string;
  /** Demo media shown in the case study — a clip or screenshot in /public. */
  media?: { type: "video" | "image"; src: string; alt?: string };
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
    category: "Full-Stack AI",
    blurb: "RAG agent for financial-compliance audits",
    description:
      "A RAG-based AI agent that automates financial-compliance audits using regulatory documents and company policies.",
    tags: ["RAG", "GPT-4o", "Azure AI Search", "Cosmos DB"],
    role: "AI Engineer",
    github:
      "https://github.com/rohantikotekar/GuardianRAG-Automated-Financial-Compliance-Auditing-Agent",
    media: {
      type: "image",
      src: "/guardian-rag-architecture.png",
      alt: "Guardian RAG architecture diagram",
    },
    highlights: [
      "Built a RAG-based AI agent to automate financial-compliance audits using regulatory documents and company policies.",
      "Developed document ingestion, vector search, and LLM pipelines to analyze credit-card transaction context and generate evidence-backed compliance findings.",
      "Generated audit-ready reports with cited regulations, risk summaries, and compliance recommendations — reducing manual review effort by 80%+.",
    ],
    stack: [
      { label: "AI", items: ["GPT-4o", "LLM pipelines"] },
      { label: "Retrieval", items: ["Vector search", "RAG"] },
      { label: "Data", items: ["Azure AI Search", "Cosmos DB"] },
    ],
    architecture: [
      "Regulatory docs & policies",
      "Document ingestion + vector search",
      "LLM compliance analysis (GPT-4o)",
      "Audit-ready report + recommendations",
    ],
  },
  {
    title: "ShopFloorIQ",
    category: "Full-Stack AI",
    blurb: "Intelligent purchase-order management",
    description:
      "An AI-powered system that automates purchase orders, invoice processing, approvals, and inventory tracking.",
    tags: ["OCR", "NLP", "Automation", "Analytics"],
    role: "AI Engineer",
    github:
      "https://github.com/rohantikotekar/ShopFloorIQ-Intelligent-Purchase-Order-Management-System",
    media: {
      type: "image",
      src: "/shop-floor-iq-ui.png",
      alt: "ShopFloorIQ dashboard",
    },
    highlights: [
      "Built an AI-powered system to automate purchase orders, invoice processing, approvals, and inventory tracking.",
      "Developed OCR and NLP pipelines with 90%+ extraction accuracy for purchase orders and invoices.",
      "Created analytics dashboards for supplier performance, order tracking, and procurement insights.",
    ],
    stack: [
      { label: "AI", items: ["OCR", "NLP"] },
      { label: "Backend", items: ["Python", "FastAPI"] },
      { label: "Insights", items: ["Analytics dashboards"] },
    ],
    architecture: [
      "Purchase orders & invoices",
      "OCR + NLP extraction",
      "Validation & approvals",
      "Inventory + analytics dashboards",
    ],
  },
  {
    title: "CodeMates",
    category: "Full-Stack AI",
    blurb: "Multi-agent code-to-cloud delivery",
    description:
      "A multi-agent AI platform that automates code generation, testing, Dockerization, CI/CD, and cloud deployment.",
    tags: ["LangChain", "LLaMA 3.1", "DevOps", "Agents"],
    role: "Builder",
    github:
      "https://github.com/rohantikotekar/CodeMates-Autonomous-Code-to-Cloud-Delivery",
    media: {
      type: "video",
      src: "/code-mates-video.mp4",
      alt: "CodeMates demo",
    },
    highlights: [
      "Built a multi-agent AI platform automating code generation, testing, Dockerization, CI/CD, and cloud deployment.",
      "Orchestrated AI agents for coding, debugging, testing, documentation, and deployment — cutting manual deployment steps by 80%+.",
      "Integrated GitHub, Docker, and CI/CD for one-click code-to-cloud deployment with automated validation.",
    ],
  },
  {
    title: "CourseScout",
    category: "Full-Stack AI",
    blurb: "Multi-agent academic discovery engine",
    description:
      "A multi-agent AI system using CrewAI, GPT-4, and Playwright to automate course discovery and personalized recommendations.",
    tags: ["CrewAI", "GPT-4", "Playwright", "Web Scraping"],
    role: "Builder",
    github:
      "https://github.com/rohantikotekar/CourseScout-Intelligent-Multi-Agent-Academic-Discovery-Engine",
    media: {
      type: "image",
      src: "/course-scout-img.png",
      alt: "CourseScout interface",
    },
    highlights: [
      "Built a multi-agent AI system using CrewAI, GPT-4, and Playwright to automate course discovery and personalized recommendations.",
      "Developed real-time web scraping and AI analysis, achieving <30s response time with ~94% course-relevance accuracy.",
      "Automated course search and visual analysis using screenshots, cutting manual course-browsing time by ~90%.",
    ],
  },
];

export type Publication = {
  title: string;
  venue: string;
  year: string;
  description: string;
  tags: string[];
  /** Link to the paper / DOI. */
  link: string;
};

export const research = {
  intro:
    "My research focuses on VLMs, VLAs, Perception for Robotics and Autonomous vehicles. I have published one first-author paper in Springer Nature journal and submitted one to IROS 2026. My work enables agents to understand, navigate, and act in real-world environments.",
  publications: [
    {
      title:
        "SATeMoMa: A Safe Assistive Teleoperation System for Mobile Manipulation",
      venue: "Submitted to IROS 2026",
      year: "2026",
      description:
        "A system that reduces operator workload during mobile manipulation. It predicts user intent using a vision-language model, spatial features, motion patterns, and speech, and estimates its confidence in each prediction. Based on that confidence it switches between teleoperation, shared control, and autonomous assistance, while Control Barrier Functions ensure safe, collision-free motion. In simulation it achieved an 86.7% task success rate with zero collisions.",
      tags: ["Vision-Language Models", "Shared Autonomy", "Mobile Manipulation"],
      link: "https://drive.google.com/file/d/1LavP3tnGekI0bAeaXt6BpHjuCQqjeNqH/view?usp=drive_link",
    },
    {
      title:
        "Facial Detection and Recognition of Partially Occluded and Profile Faces",
      venue: "9th ICICT 2024, London · Springer Nature (Scopus-indexed)",
      year: "2024",
      description:
        "A pipeline that improves face recognition for profile views, partially occluded faces, and low-quality CCTV footage. Images are first enhanced with patch-based super-resolution and sharpening; faces are detected with Haar Cascade classifiers; and a CNN trained on multi-angle faces with occlusion-based augmentation recognizes identities. The system achieved 93.2% detection and 96% recognition accuracy.",
      tags: ["Computer Vision", "CNNs", "Super-Resolution"],
      link: "https://link.springer.com/chapter/10.1007/978-981-97-5035-1_29",
    },
  ] as Publication[],
};

export type Achievement = {
  year: string;
  title: string;
  detail: string;
};

export const achievements: Achievement[] = [
  {
    year: "2026",
    title: "IROS 2026 Submission",
    detail:
      "Co-authored a multi-modal VLM + spatial-data framework for anomaly-intent prediction, submitted to IROS 2026.",
  },
  {
    year: "2025",
    title: "M.S. in Computer Science",
    detail:
      "Completed a master's at UC Riverside focused on AI, ML, reinforcement learning, and NLP.",
  },
  {
    year: "2025",
    title: "Cloud & DevOps Certified",
    detail:
      "Earned AWS Certified Cloud Practitioner plus hands-on Kubernetes and Docker DevOps certifications.",
  },
  {
    year: "2023",
    title: "92.5% Defect Detection",
    detail:
      "Shipped a YOLOv8 vision pipeline at Atlas Copco, cutting per-unit inspection from 45s to under 2s.",
  },
];
