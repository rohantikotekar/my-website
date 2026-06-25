/**
 * Central content for the portfolio.
 * Edit everything here — components read from this file so the site stays
 * easy to maintain. Replace placeholder copy with your real details.
 */

export const profile = {
  name: "Rohan",
  role: "AI Engineer",
  location: "San Francisco, CA",
  // Short one-liner used in the hero
  tagline:
    "I build AI systems that work in the real world — from LLM agents, Vision systems to the full-stack products that put them to use.",
  // Longer narrative for the About section
  about: [
    "I’m driven to build things that didn’t exist yesterday and to create real value through intelligence. I’ve always been fascinated by human intelligence and how we navigate the world around us, so I chose to study and build AI for both the digital and physical worlds. I raise my own bar — whether I’m solving a Rubik’s Cube or fixing a mission-critical app in production. I care about doing my work well and doing it right. I started with Python, grew into backend systems, and now craft LLM AI agents, vision models, and RAG pipelines for fast-moving teams. Always reaching for the next ridge just past my current map.",
  ],
  email: "rtiko001@ucr.edu",
  social: {
    github: "https://github.com/rohantikotekar",
    linkedin: "https://www.linkedin.com/in/rohan-tikotekar/",
  },
} as const;

/**
 * About — "Trail log" quick facts. A compact, scannable summary of who/where
 * the hiker is right now, drawn from the resume.
 */
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
    value: "Vision-Language Models · LLM Agents · Full-Stack",
  },
];

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
    id: "ml-ra-viit",
    title: "ML Research Assistant",
    org: "VIIT, Savitribai Phule Pune University, Pune, India",
    period: "Aug 2022 — May 2023",
    kind: "research",
    summary:
      "Where the research trail began — applied computer-vision research on robust facial detection and recognition for occluded and profile faces.",
    accomplishments: [
      "Built a deep-learning pipeline (image preprocessing, patch splitting, EDSR-GAN super-resolution) reaching 93.2% detection and 96% recognition accuracy.",
      "Combined CNNs with Haar Cascade classifiers to handle profile and partially occluded faces.",
      "Published and presented the work at the Scopus-indexed 9th ICICT 2024, London (Springer Nature).",
    ],
    skills: ["Computer Vision", "CNNs", "GANs", "PyTorch"],
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
      "A higher ridgeline — a master's at UC Riverside focused on AI, ML, reinforcement learning, and NLP.",
    accomplishments: [
      "Core AI coursework: Artificial Intelligence, Machine Learning, Reinforcement Learning, Natural Language Processing, Data Science, Data Mining, and Data Science Ethics.",
      "Systems & cloud track: Full-Stack Web Development, Cloud Computing, DevOps, and System Design.",
      "Earned AWS Certified Cloud Practitioner plus hands-on Kubernetes and Docker DevOps certifications.",
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
 * Experience — the resume-style work history (internships + research roles),
 * shown as a dedicated section with full bullet points.
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
    role: "AI Engineer — Graduate Student Researcher",
    org: "Trustworthy Autonomous Systems Lab, UC Riverside",
    location: "Riverside, CA",
    period: "Apr 2025 — Dec 2025",
    type: "Research",
    bullets: [
      "Designed a multi-modal analytical framework fusing Vision-Language Models (VLMs) with spatial data features to predict anomaly-intent thresholds across complex variables (submitted to IROS 2026).",
      "Achieved 20% faster model convergence in LLMs vs. baseline statistical trends by integrating historical variance and feature-engineering data into the reasoning context.",
      "Mitigated operational risk by 30% with a strict confidence-modulated governance protocol that shares execution controls between automated models and manual validators.",
    ],
    skills: ["VLMs", "LLMs", "PyTorch", "Research"],
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
    role: "Software Engineer, AI",
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
    org: "VIIT, Savitribai Phule Pune University",
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
    blurb: "Dual-agent RAG for credit-card fraud forensics",
    description:
      "An enterprise-grade, dual-agent RAG pipeline that automates the analysis and detection of credit-card fraud use cases.",
    tags: ["RAG", "GPT-4o", "Azure AI Search", "Cosmos DB"],
    featured: true,
    role: "AI Engineer",
    github:
      "https://github.com/rohantikotekar/GuardianRAG-Automated-Financial-Compliance-Auditing-Agent",
    media: {
      type: "image",
      src: "/guardian-rag-architecture.png",
      alt: "Guardian RAG architecture diagram",
    },
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
    github:
      "https://github.com/rohantikotekar/ShopFloorIQ-Intelligent-Purchase-Order-Management-System",
    media: {
      type: "image",
      src: "/shop-floor-iq-ui.png",
      alt: "Purchase Order Management System UI",
    },
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
    github:
      "https://github.com/rohantikotekar/CodeMates-Autonomous-Code-to-Cloud-Delivery",
    media: {
      type: "video",
      src: "/code-mates-video.mp4",
      alt: "CodeMates demo",
    },
    highlights: [
      "Built on LLaMA-3.1-8B-Instant via LangChain.",
      "92% accuracy with under-30s pipeline generation.",
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
      title: "SATeMoMa: A Safe Assistive Teleoperation System for Mobile Manipulation",
      venue: "Submitted to IROS 2026",
      year: "2026",
      description:
        "This system reduces operator workload during mobile manipulation tasks. It predicts the user's intent using a vision-language model, spatial features, motion patterns, and speech input. The system also estimates its confidence in each prediction. Based on this confidence, it switches between teleoperation, shared control, and autonomous assistance. Control Barrier Functions ensure safe, collision-free robot motion. In simulation, the system achieved an 86.7% task success rate with zero collisions.",
      tags: ["Vision-Language Models", "Shared Autonomy", "Mobile Manipulation"],
      link: "https://drive.google.com/file/d/1LavP3tnGekI0bAeaXt6BpHjuCQqjeNqH/view?usp=drive_link",
    },
    {
      title:
        "Facial Detection and Recognition of Partially Occluded and Profile Faces",
      venue: "9th ICICT 2024, London · Springer Nature (Scopus-indexed)",
      year: "2024",
      description:
        "This system improves face recognition for profile views, partially occluded faces, and low-quality CCTV footage. It first enhances images using patch-based super-resolution and sharpening techniques. Faces are then detected using Haar Cascade classifiers. A convolutional neural network (CNN) recognizes identities and is trained on faces from multiple angles with occlusion-based data augmentation. The system achieved 93.2% face detection accuracy and 96% face recognition accuracy.",
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
