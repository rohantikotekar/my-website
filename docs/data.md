# Site Content

This file is the **single source of truth for every piece of text on the site**.
Edit values here and tell me to "sync" — I'll apply them into `frontend/lib/data.ts`
(which every component reads from).

- Keep the headings and sub-headings as-is so the mapping stays clear.
- Sections are ordered top-to-bottom exactly as they appear on the page.
- Under list-style sections (Experience, Skills), each numbered/dashed item maps
  to one entry in the code.
- Leave a field blank to make it empty; delete a whole item to remove it.

**The page is deliberately minimal:** navbar → name + two-paragraph intro →
experience bullets → education → technical skills → contact. Nothing else
renders. Content for sections that are no longer on the page is preserved at the
bottom under [Not currently on the page](#not-currently-on-the-page).

The navbar carries a light/dark theme toggle. Dark is the default; a visitor's
choice is remembered, and first-time visitors get whichever their OS prefers.

---

## Site Metadata (SEO)

Used for the browser tab title, search engines, and link previews.

- **Title:** Rohan Tikotekar Website
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
- **work:** Experience
- **education:** Education
- **skills:** Skills
- **contact:** Contact

---

## Profile

- **Name:** Rohan Tikotekar
- **Location:** San Francisco, CA
- **Email:** tikotekar.rohan@gmail.com
- **GitHub:** https://github.com/rohantikotekar
- **LinkedIn:** https://www.linkedin.com/in/rohan-tikotekar/

---

## Intro

The top of the page: the name, then the location on a muted line (pulled from
**Profile** above), then the two paragraphs below.

### Paragraphs

1. I build user-friendly AI applications delivered as full-stack products. Currently an AI Intern at a stealth AI startup in the Bay Area, building real-time, context-aware decision engines powered by LLM agents and multi-source user data.
2. I'm also drawn to computer vision and ML research — 3D perception with point clouds, vision-language models for human intent prediction on mobile manipulators, and object detection for manufacturing. One first-author paper published in Springer Nature, and one under review at IROS 2026.

---

## Experience

- **Heading:** Experience

Each entry renders as `Role at Org` with the period on the right, the location
on a muted line under it, then the bullets. Type and skill tags are stored but
not shown on the page.

### 1. Graduate AI/ML Research Assistant

- **Org:** Trustworthy Autonomous Systems Lab, UC Riverside
- **Location:** Riverside, CA
- **Period:** Apr 2025 — May 2026
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

## Education

- **Heading:** Education

Each entry renders as school, period on the right, then degree and location.

### 1. University of California, Riverside

- **Degree:** M.S. Computer Science
- **Location:** Riverside, CA
- **Period:** Sep 2024 — Mar 2026

### 2. Savitribai Phule Pune University

- **Degree:** B.Tech Information Technology
- **Location:** Pune, India
- **Period:** Aug 2020 — Jun 2024

---

## Skills

- **Heading:** Technical Skills

Grouped into modules — **keep this to 5 categories at most** (a test enforces
it). Each renders as the category name followed by its tools joined with `·` on
one line. Category blurbs are stored but not shown.

### Languages

- **Blurb:** The languages I think and build in.
- Python
- TypeScript
- Java
- C++
- SQL

### AI & Machine Learning

- **Blurb:** Models, pipelines, and the frameworks around them.
- PyTorch
- TensorFlow
- scikit-learn
- NumPy
- Pandas
- OpenCV
- YOLO
- LangChain
- LangGraph
- CrewAI
- Pinecone
- Azure AI Search

### Robotics & Perception

- **Blurb:** Simulation, spatial data, and real-world perception.
- ROS2
- Gazebo
- RViz
- CARLA
- Point Cloud Processing
- MATLAB
- CloudCompare

### Backend & Web

- **Blurb:** Services, APIs, and the data behind them.
- FastAPI
- Django
- Node.js
- React.js
- Next.js
- PostgreSQL
- MongoDB
- Redis
- Kafka

### Infrastructure & Tools

- **Blurb:** Shipping and running it in production.
- AWS
- Docker
- Kubernetes
- Terraform
- Jenkins
- Linux
- Git
- Bash

---

## Contact

- **Heading:** Contact

Renders as one centered row of plain links. All three come from **Profile**
above — the email opens a Gmail compose window.

---

## Footer

- **Fine print:** Built with Next.js & Tailwind CSS.

(One centered line: the copyright year, name, and the fine print above.)

---

# Not currently on the page

The content below is kept in `frontend/lib/data.ts` and its components still
exist in the repo, but nothing here renders. Ask me to bring a section back and
I'll re-add it in the same minimal style.

## Hero headline (removed)

- **Before:** Engineering
- **Highlight (gradient):** Intelligence
- **After:** .
- **Tagline:** I build AI systems that work in the real world — from LLM agents, Computer Vision models to the full-stack products that put them to use.
- **Primary button:** View selected work → `#projects`
- **Secondary button:** Get in touch → `#contact`

### Signals (removed)

- **Currently:** Graduate AI/ML Research Assistant · Trustworthy Autonomous Systems Lab
- **Focus:** LLM Agents · Computer Vision · Full-stack
- **Education:** M.S. Computer Science

### Metrics (removed)

- **92.5%** — defect detection accuracy
- **30%** — operational risk reduction
- **5.5k+** — users supported

## Quick facts (removed)

- **Currently:** AI Engineer · Trustworthy Autonomous Systems Lab, UC Riverside
- **Education:** M.S. Computer Science, UC Riverside
- **Based in:** San Francisco, California
- **Focus:** LLM agents, RAG pipelines, perception, full-stack systems

## Contact form (removed)

The form and its backend (Render + Supabase + Resend) are still wired up and
working — only the on-page form was removed.

- **Form heading:** Start a conversation
- **Form subtext:** Send a message and I'll get back to you.

## Projects (removed)

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

## Research (removed)

### Intro

My research focuses on VLMs, VLAs, Perception for Robotics and Autonomous vehicles. I have published one first-author paper in Springer Nature journal and submitted one to IROS 2026. My work enables agents to understand, navigate, and act in real-world environments.

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

## Achievements (removed)

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
