# Site Content

This file is the **single source of truth for every piece of text on the site**.
Edit values here and tell me to "sync" — I'll apply them into `frontend/lib/data.ts`
(which every component reads from).

- Keep the headings and sub-headings as-is so the mapping stays clear.
- Sections are ordered top-to-bottom exactly as they appear on the page.
- Under list-style sections (Experience, Projects, etc.), each numbered/dashed
  item maps to one entry in the code.
- Leave a field blank to make it empty; delete a whole item to remove it.
- **Kicker** = the small uppercase label above a section title.
- **Intro** = the supporting sentence under a section title.

---

## Site Metadata (SEO)

Used for the browser tab title, search engines, and link previews.

- **Title:** Rohan Tikotekar — Full-stack AI engineer
- **Description:** Portfolio of Rohan Tikotekar — AI & Research Engineer building LLM agents, vision-language systems, RAG pipelines, and full-stack AI products.
- **Keywords:** AI Engineer, Research Engineer, Machine Learning, LLM Agents, Computer Vision, RAG, Portfolio
- **Social share title:** Rohan Tikotekar — AI & Research Engineer
- **Social share description:** Building LLM agents, vision-language systems, and full-stack AI products that hold up in the real world.

---

## Navigation

- **Brand wordmark:** Rohan Tikotekar
- **Button (call to action):** Get in touch

### Menu labels (section → label shown in navbar/footer)

- **hero:** Home
- **about:** About
- **work:** Work
- **projects:** Projects
- **research:** Research
- **skills:** Skills
- **contact:** Contact

---

## Profile

- **Name:** Rohan Tikotekar
- **Role:** Full-stack AI engineer
- **Location:** San Francisco, CA
- **Email:** rtiko001@ucr.edu
- **GitHub:** https://github.com/rohantikotekar
- **LinkedIn:** https://www.linkedin.com/in/rohan-tikotekar/

---

## Hero

### Headline

The headline renders as three parts; the **highlight** shows in the accent gradient.

- **Before:** Engineering
- **Highlight (gradient):** Intelligence
- **After:** .

### Tagline

I build AI systems that work in the real world — from LLM agents and vision-language models to the full-stack products that put them to use.

### Buttons

- **Primary:** View selected work → links to `#projects`
- **Secondary:** Get in touch → links to `#contact`

### Signals (label → value)

- **Currently:** AI Engineer · TASL, UC Riverside
- **Focus:** LLM Agents · RAG · Full-stack Web
- **Education:** M.S. Computer Science

### Metrics (value → label)

- **92.5%** — defect detection accuracy
- **30%** — operational risk reduction
- **5.5k+** — users supported

---

## About

- **Kicker:** About
- **Title:** The engineer behind the work.
- **Intro:** The motivation and mindset behind what I build.
- **Quick facts label:** Quick facts

### Narrative paragraphs

1. I build production AI systems — LLM agents and RAG pipelines delivered as full-stack software products.
2. My experience spans fast-moving startups (one of the first hires), vision and software solutions for supply chains, and robotics for manufacturing.
3. I have delivered scalable backend systems, cloud infrastructure, and agentic workflows in production.
4. I enjoy taking AI products from 0 to 1, integrating them into existing workflows and eventually deploying them into real-world production.


### Quick facts (label → value)

- **Currently:** AI Engineer · Trustworthy Autonomous Systems Lab, UC Riverside
- **Education:** M.S. Computer Science, UC Riverside
- **Based in:** San Francisco, California
- **Focus:** LLM agents, RAG pipelines, perception, full-stack systems

---

## Experience

- **Kicker:** Experience
- **Title:** Shipping reliably in Production.
- **Intro:** Internships and Research roles — from the labs to startups and factory floors

Each entry has: role, org, location, period, type (Internship / Research / Full-time),
bullets, and skills.

### 1. AI Engineer SV

- **Org:** Trustworthy Autonomous Systems Lab, UC Riverside
- **Location:** Riverside, CA
- **Period:** Apr 2025 — Dec 2025
- **Type:** Research
- **Bullets:**
  - Designed a multi-modal analytical framework fusing Vision-Language Models (VLMs) with spatial data features to predict anomaly-intent thresholds across complex variables (submitted to IROS 2026).
  - Achieved 20% faster model convergence in LLMs vs. baseline statistical trends by integrating historical variance and feature-engineering data into the reasoning context.
  - Mitigated operational risk by 30% with a strict confidence-modulated governance protocol that shares execution controls between automated models and manual validators.
- **Skills:** VLMs, LLMs, PyTorch

### 2. Software Engineer

- **Org:** Digital Vision Studios
- **Location:** Pune, India
- **Period:** Jan 2024 — Jun 2024
- **Type:** Internship
- **Bullets:**
  - Engineered and delivered a high-concurrency ledger and secure transactional data system for 5,500+ active users under strict data-governance, integrity, and risk-mitigation standards.
  - Orchestrated a migration to a hybrid cloud architecture (AWS / DigitalOcean), scaling capacity to process 8,000+ daily analytical requests.
  - Automated workflows and built deployment guardrails with Docker, reducing delivery cycles from 2 hours to 15 minutes.
- **Skills:** Python, AWS, Docker, System Design

### 3. Software Engineer

- **Org:** Atlas Copco
- **Location:** Pune, India
- **Period:** Jun 2023 — Dec 2023
- **Type:** Internship
- **Bullets:**
  - Led the analysis, design, and delivery of an AI vision pipeline using YOLOv8 to validate manufacturing operations.
  - Achieved 92.5% defect-detection accuracy while reducing per-unit inspection time from 45 seconds to under 2 seconds.
  - Automated handwritten-checklist tracking with multimodal AI (image + text), reducing per-checklist processing from 5 minutes to under 1 minute (80% reduction).
  - Built a Dockerized MLOps pipeline and partnered with operations teams to deliver a full-stack warehouse management system (Django & React.js).
- **Skills:** YOLOv8, Computer Vision, Django, React, Docker

### 4. ML Research Assistant (Computer Vision, ML)

- **Org:** Vishwakarma Institute of Information Technology (VIIT)
- **Location:** Pune, India
- **Period:** Aug 2022 — May 2023
- **Type:** Research
- **Bullets:**
  - Conducted applied research on robust facial detection and recognition for occluded and profile faces using Convolutional Neural Networks and Haar Cascade classifiers.
  - Engineered a deep-learning pipeline spanning image preprocessing, patch splitting, and EDSR-GAN super-resolution, improving detection accuracy to 93.2%.
  - Published and presented the work at the Scopus-indexed 9th ICICT 2024, London (Springer Nature).
- **Skills:** Computer Vision, CNNs, GANs, PyTorch

---

## Projects

- **Kicker:** Personal Projects
- **Title:** Applying AI to real-world problems.
- **Intro:** Each project leads with what it does, the technical depth behind it, and measurable outcomes.
- **Card link label:** View case study
- **Featured badge label:** Featured

Each project has: title, category (Full-Stack AI / Machine Learning), blurb,
description, tags, role, GitHub link, and optional highlights / stack / architecture.

### 1. Guardian RAG

- **Category:** Full-Stack AI
- **Blurb:** RAG agent for financial-compliance audits
- **Description:** A RAG-based AI agent that automates financial-compliance audits using regulatory documents and company policies.
- **Tags:** RAG, GPT-4o, Azure AI Search, Cosmos DB
- **Role:** AI Engineer
- **GitHub:** https://github.com/rohantikotekar/GuardianRAG-Automated-Financial-Compliance-Auditing-Agent
- **Highlights:**
  - Built a RAG-based AI agent to automate financial-compliance audits using regulatory documents and company policies.
  - Developed document ingestion, vector search, and LLM pipelines to analyze credit-card transaction context and generate evidence-backed compliance findings.
  - Generated audit-ready reports with cited regulations, risk summaries, and compliance recommendations — reducing manual review effort by 80%+.
- **Stack:**
  - AI: GPT-4o, LLM pipelines
  - Retrieval: Vector search, RAG
  - Data: Azure AI Search, Cosmos DB
- **Architecture:**
  - Regulatory docs & policies
  - Document ingestion + vector search
  - LLM compliance analysis (GPT-4o)
  - Audit-ready report + recommendations

### 2. ShopFloorIQ

- **Category:** Full-Stack AI
- **Blurb:** Intelligent purchase-order management
- **Description:** An AI-powered system that automates purchase orders, invoice processing, approvals, and inventory tracking.
- **Tags:** OCR, NLP, Automation, Analytics
- **Role:** AI Engineer
- **GitHub:** https://github.com/rohantikotekar/ShopFloorIQ-Intelligent-Purchase-Order-Management-System
- **Highlights:**
  - Built an AI-powered system to automate purchase orders, invoice processing, approvals, and inventory tracking.
  - Developed OCR and NLP pipelines with 90%+ extraction accuracy for purchase orders and invoices.
  - Created analytics dashboards for supplier performance, order tracking, and procurement insights.
- **Stack:**
  - AI: OCR, NLP
  - Backend: Python, FastAPI
  - Insights: Analytics dashboards
- **Architecture:**
  - Purchase orders & invoices
  - OCR + NLP extraction
  - Validation & approvals
  - Inventory + analytics dashboards

### 3. CodeMates

- **Category:** Full-Stack AI
- **Blurb:** Multi-agent code-to-cloud delivery
- **Description:** A multi-agent AI platform that automates code generation, testing, Dockerization, CI/CD, and cloud deployment.
- **Tags:** LangChain, LLaMA 3.1, DevOps, Agents
- **Role:** Builder
- **GitHub:** https://github.com/rohantikotekar/CodeMates-Autonomous-Code-to-Cloud-Delivery
- **Highlights:**
  - Built a multi-agent AI platform automating code generation, testing, Dockerization, CI/CD, and cloud deployment.
  - Orchestrated AI agents for coding, debugging, testing, documentation, and deployment — cutting manual deployment steps by 80%+.
  - Integrated GitHub, Docker, and CI/CD for one-click code-to-cloud deployment with automated validation.

### 4. CourseScout

- **Category:** Full-Stack AI
- **Blurb:** Multi-agent academic discovery engine
- **Description:** A multi-agent AI system using CrewAI, GPT-4, and Playwright to automate course discovery and personalized recommendations.
- **Tags:** CrewAI, GPT-4, Playwright, Web Scraping
- **Role:** Builder
- **GitHub:** https://github.com/rohantikotekar/CourseScout-Intelligent-Multi-Agent-Academic-Discovery-Engine
- **Highlights:**
  - Built a multi-agent AI system using CrewAI, GPT-4, and Playwright to automate course discovery and personalized recommendations.
  - Developed real-time web scraping and AI analysis, achieving <30s response time with ~94% course-relevance accuracy.
  - Automated course search and visual analysis using screenshots, cutting manual course-browsing time by ~90%.

---

## Research

- **Kicker:** Research
- **Title:** Publications over the years.
- **Publication card label:** Publication
- **Paper link label:** Read paper

### Intro

My research focuses on VLMs, VLAs, Perception for Robotics and Autonomous vehicles. I have published one first-author paper in Springer Nature journal and submitted one to IROS 2026. My work enables agents to understand, navigate, and act in real-world environments.

### Publications

Each publication has: title, venue, year, description, tags, and link.

#### 1. SATeMoMa: A Safe Assistive Teleoperation System for Mobile Manipulation

- **Venue:** Submitted to IROS 2026
- **Year:** 2026
- **Description:** A system that reduces operator workload during mobile manipulation. It predicts user intent using a vision-language model, spatial features, motion patterns, and speech, and estimates its confidence in each prediction. Based on that confidence it switches between teleoperation, shared control, and autonomous assistance, while Control Barrier Functions ensure safe, collision-free motion. In simulation it achieved an 86.7% task success rate with zero collisions.
- **Tags:** Vision-Language Models, Shared Autonomy, Mobile Manipulation
- **Link:** https://drive.google.com/file/d/1LavP3tnGekI0bAeaXt6BpHjuCQqjeNqH/view?usp=drive_link

#### 2. Facial Detection and Recognition of Partially Occluded and Profile Faces

- **Venue:** 9th ICICT 2024, London · Springer Nature (Scopus-indexed)
- **Year:** 2024
- **Description:** A pipeline that improves face recognition for profile views, partially occluded faces, and low-quality CCTV footage. Images are first enhanced with patch-based super-resolution and sharpening; faces are detected with Haar Cascade classifiers; and a CNN trained on multi-angle faces with occlusion-based augmentation recognizes identities. The system achieved 93.2% detection and 96% recognition accuracy.
- **Tags:** Computer Vision, CNNs, Super-Resolution
- **Link:** https://link.springer.com/chapter/10.1007/978-981-97-5035-1_29

---

## Skills

- **Kicker:** Technical Stack
- **Title:** Tools behind the outcomes.
- **Intro:** The technologies I reach for across AI, machine learning, and full-stack systems.
- **Count label:** items (shown as e.g. "12 items")

Grouped into categories. Each category has a name + blurb, then a list of skills.
(Brand logos are wired up in code — if you add a new skill, I'll attach the right logo on sync.)

### Languages

- **Blurb:** The languages I think and build in.
- Python
- Java
- TypeScript

### Software Engineering

- **Blurb:** Shipping reliable, well-built products.
- React.js
- Node.js
- FastAPI
- Django
- Docker
- Kubernetes
- Jenkins
- Terraform
- Redis
- AWS
- Azure
- Git

### Applied AI

- **Blurb:** Putting models to work in real products.
- LangChain
- LangGraph
- LangSmith
- CrewAI
- Hugging Face
- RAG

### ML Frameworks

- **Blurb:** The tools I train and experiment with.
- PyTorch
- scikit-learn
- Matplotlib
- MLflow

---

## Achievements

- **Kicker:** Milestones
- **Title:** Selected highlights.
<!-- - **Intro:** A few markers along the way. -->

Each achievement has: year, title, detail.

### 1. IROS 2026 Submission

- **Year:** 2026
- **Detail:** Co-authored a multi-modal VLM + spatial-data framework for anomaly-intent prediction, submitted to IROS 2026.

### 2. M.S. in Computer Science

- **Year:** 2025
- **Detail:** Completed a master's at UC Riverside focused on AI, ML, reinforcement learning, and NLP.

### 3. Cloud & DevOps Certified

- **Year:** 2025
- **Detail:** Earned AWS Certified Cloud Practitioner plus hands-on Kubernetes and Docker DevOps certifications.

### 4. 92.5% Defect Detection

- **Year:** 2023
- **Detail:** Shipped a YOLOv8 vision pipeline at Atlas Copco, cutting per-unit inspection from 45s to under 2s.

---

## Contact

- **Kicker:** Contact
- **Title:** Let's build useful AI.
- **Intro:** Open to AI engineering roles, applied-research collaborations, and production AI systems that need both model depth and product execution.
- **Form heading:** Start a conversation
- **Form subtext:** Send a message and I'll get back to you.
- **Find-me label:** Find me

The "Find me" links (Email, GitHub, LinkedIn) are generated from the Profile
email and social links above.

---

## Footer

- **Blurb:** AI & Research Engineer building AI systems that ship. Open to roles and collaborations.
- **Fine print:** Built with Next.js & Tailwind CSS.

(The footer also shows the copyright year automatically and reuses the menu
labels and social links from above.)
