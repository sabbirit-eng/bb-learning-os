/* =========================================================
   BUSINESSBRAIN AI — শেয়ার্ড ডেটা ও প্রোগ্রেস ইঞ্জিন v2.0
   GitHub Gist Storage + Notes + Practice Q&A
   ========================================================= */

const ROADMAP = [
  {
    id: "p0", num: "00", title: "Git, GitHub ও ডেভেলপমেন্ট ওয়ার্কফ্লো", titleEn: "Git, GitHub & Dev Workflow",
    items: [
      "Git Basics — init, add, commit, push, pull, clone, status, log",
      "Branching Strategy — main / develop / feature / hotfix branches",
      "Merge vs Rebase — কখন কোনটি ব্যবহার করবে",
      "Merge Conflict Resolution — হাতে-কলমে সমাধান",
      "git stash, git cherry-pick, git bisect",
      "GitHub Pull Requests & Code Review Workflow",
      "Branch Protection Rules ও PR Templates",
      "GitHub Issues, Labels ও Project Boards",
      "Semantic Versioning (SemVer) ও Conventional Commits",
      "Pre-commit Hooks — pre-commit / Husky",
      "GitHub Actions — CI/CD Basics (workflow YAML লেখা)",
      "GitHub Packages & Container Registry (GHCR)",
      "git tags, Releases ও Changelog generation"
    ],
    learn: {
      where: [
        "git-scm.com — Official Git Book (বাংলায় পড়তে চাইলে: Pro Git বইটি বাংলায় অনূদিত আছে)",
        "GitHub Skills (skills.github.com) — Interactive browser-based lab",
        "Atlassian Git Tutorials (atlassian.com/git/tutorials)",
        "GitHub Docs — GitHub Actions quickstart",
        "Conventional Commits Spec (conventionalcommits.org)"
      ],
      how: "প্রতিটি কমান্ড terminal-এ নিজে টাইপ করো — GUI tool দিয়ে নয়। একটি dummy project-এ ইচ্ছাকৃতভাবে conflict তৈরি করো এবং সমাধান করো। GitHub Actions-এর একটি simple hello-world workflow নিজে তৈরি করে run করো।",
      practice: "নিজের Phase 1-এর CLI project-টি GitHub-এ push করো — feature branch workflow, PR, review, merge অনুশীলন করো এবং একটি basic CI workflow যুক্ত করো।"
    },
    buildTask: "BusinessBrain AI-এর main GitHub repository তৈরি করো — main/develop branch strategy, feature branch naming convention (feat/crm-api), branch protection rules (PR required, 1 review), PR template (.github/pull_request_template.md), conventional commit format, এবং .gitignore সেটআপ করো। এটিই পুরো প্রজেক্টের সব কোড ম্যানেজ করবে।",
    module: "m1"
  },
  {
    id: "p1", num: "01", title: "প্রোগ্রামিং ফাউন্ডেশন", titleEn: "Programming Foundation",
    items: [
      "Python Basics", "Python OOP", "Data Structures", "Algorithms",
      "Async Python", "Type Hinting & Pydantic", "Design Patterns",
      "Error Handling & Logging", "Testing with Pytest", "Git & GitHub Workflow",
      "Functional Programming (decorators, map/filter/reduce)"
    ],
    learn: {
      where: [
        "Python.org official tutorial (docs.python.org)",
        "Real Python (realpython.com)",
        "freeCodeCamp — Python for Everybody",
        "বই: Automate the Boring Stuff with Python"
      ],
      how: "প্রতিদিন ১–২ ঘন্টা — ৩০% থিওরি পড়া, ৭০% হাতে-কলমে কোড। প্রতিটি নতুন কনসেপ্টের জন্য ছোট স্ক্রিপ্ট লেখো এবং সপ্তাহে অন্তত ৫টি LeetCode/HackerRank Easy প্রবলেম সলভ করো।",
      practice: "একটি CLI Task Manager বানাও — OOP ক্লাস, ফাইলে ডেটা সেভ (JSON), এরর হ্যান্ডলিং এবং Pytest দিয়ে ইউনিট টেস্ট থাকবে।"
    },
    buildTask: "CRM Core-এর ডেটা মডেল ও বিজনেস লজিক Python ক্লাস হিসেবে লেখো — Customer, Lead, Deal ক্লাস + OOP দিয়ে স্ট্যাটাস/পাইপলাইন লজিক ম্যানেজ করো।",
    module: "m1"
  },
  {
    id: "p11", num: "02", title: "সিস্টেম ডিজাইন ও সফটওয়্যার ইঞ্জিনিয়ারিং ফাউন্ডেশন", titleEn: "System Design & Software Engineering Foundations",
    items: [
      "SOLID Principles", "Clean Code & Code Review Practices",
      "Software Testing Strategy (Unit/Integration/E2E/TDD)",
      "Agile & Scrum Basics", "Technical Documentation & ADRs",
      "System Design Fundamentals (Scalability, Reliability, Availability)",
      "Capacity Estimation (Back-of-the-envelope)",
      "CAP Theorem & Consistency Models",
      "Load Balancing (L4 vs L7, Algorithms: Round Robin, Least Connections, Consistent Hashing)",
      "High Availability & Fault Tolerance (Failover, Redundancy, Circuit Breaker)",
      "API Gateway & Reverse Proxy Fundamentals",
      "Scalability Patterns (Horizontal vs Vertical, Stateless Services)"
    ],
    learn: {
      where: [
        "GitHub — System Design Primer (donnemartin/system-design-primer)",
        "বই: Designing Data-Intensive Applications (Martin Kleppmann)",
        "বই: System Design Interview (Alex Xu) ও ByteByteGo নিউজলেটার/ভিডিও",
        "Refactoring.Guru — SOLID ও Design Patterns",
        "martinfowler.com — Clean Code, ADR ও Testing Strategy আর্টিকেল"
      ],
      how: "প্রতি সপ্তাহে একটি পরিচিত সিস্টেম (যেমন URL Shortener, Rate Limiter, Chat App) নিয়ে কাগজে/Excalidraw-এ ডিজাইন করো — ট্রাফিক এস্টিমেট, ডেটাবেস স্কিমা, লোড ব্যালেন্সার ও ক্যাশ লেয়ার বসিয়ে।",
      practice: "একটি 'URL Shortener' সিস্টেমের সম্পূর্ণ ডিজাইন ডকুমেন্ট লেখো — capacity estimation, API কন্ট্র্যাক্ট, ডেটাবেস স্কিমা, লোড ব্যালেন্সার প্লেসমেন্ট, ক্যাশিং ও Failover স্ট্র্যাটেজি ডায়াগ্রাম সহ।"
    },
    buildTask: "CRM Core কোড লেখা শুরুর আগে একটি System Design Document বানাও — capacity estimation, API কন্ট্র্যাক্ট, ডেটাবেস স্কিমা ড্রাফট, লোড ব্যালেন্সিং ও ক্যাশিং স্ট্র্যাটেজি, এবং High Availability প্ল্যান।",
    module: "m1"
  },
  {
    id: "p2", num: "03", title: "ব্যাকএন্ড ইঞ্জিনিয়ারিং", titleEn: "Backend Engineering",
    items: [
      "FastAPI", "REST API Design", "Authentication", "JWT", "OAuth2 & SSO",
      "API Design (versioning, pagination)", "Testing (pytest + httpx)",
      "Background Tasks (Celery/RQ)", "WebSockets (Realtime)",
      "Rate Limiting & Throttling", "Dependency Injection Patterns"
    ],
    learn: {
      where: [
        "FastAPI official docs (fastapi.tiangolo.com)",
        "TestDriven.io — FastAPI course",
        "JWT.io — টোকেন বেসিক",
        "Postman / Bruno দিয়ে API টেস্টিং"
      ],
      how: "ডকুমেন্টেশনের প্রতিটি সেকশন পড়ার সাথে সাথেই সেই ফিচারের জন্য একটি এন্ডপয়েন্ট বানাও।",
      practice: "একটি Notes/Todo API বানাও — JWT Authentication, CRUD এন্ডপয়েন্ট, পেজিনেশন এবং Pytest টেস্ট সহ।"
    },
    buildTask: "FastAPI দিয়ে CRM Core-এর REST API তৈরি করো — Customer/Lead/Deal-এর জন্য CRUD এন্ডপয়েন্ট + JWT Auth + ভ্যালিডেশন।",
    module: "m1"
  },
  {
    id: "p3", num: "04", title: "ডেটাবেস ইঞ্জিনিয়ারিং", titleEn: "Database Engineering",
    items: [
      "PostgreSQL Basics", "Advanced SQL (window functions, CTEs)",
      "Query Optimization", "Indexing", "Database Normalization",
      "Multi Tenant Design", "Database Scaling (replicas, sharding)",
      "Migrations with Alembic", "Redis Caching", "Time-series Data (TimescaleDB)"
    ],
    learn: {
      where: [
        "PostgreSQL official tutorial (postgresql.org/docs)",
        "Use The Index, Luke (use-the-index-luke.com)",
        "Alembic official docs",
        "Redis official docs"
      ],
      how: "প্রতিটি SQL কনসেপ্ট হাতে লিখে প্র্যাকটিস করো — psql বা DBeaver-এ। EXPLAIN ANALYZE দিয়ে কুয়েরি পারফরম্যান্স বোঝার অভ্যাস করো।",
      practice: "একটি ছোট ই-কমার্স স্কিমা ডিজাইন করো (Users, Orders, Products) — নরমালাইজড টেবিল, ইনডেক্স, এবং Alembic মাইগ্রেশন সহ।"
    },
    buildTask: "PostgreSQL দিয়ে CRM Core-এর রিয়েল ডেটাবেস সংযুক্ত করো — Multi-tenant স্কিমা ডিজাইন এবং Alembic মাইগ্রেশন সেটআপ করো।",
    module: "m1"
  },
  {
    id: "p4", num: "05", title: "ফ্রন্টএন্ড", titleEn: "Frontend",
    items: [
      "HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript",
      "State Management (Zustand/Redux)", "Data Fetching (React Query/SWR)",
      "Forms (React Hook Form + Zod)", "UI Systems (Tailwind + shadcn/ui)",
      "Charts & Dashboards (Recharts)"
    ],
    learn: {
      where: [
        "MDN Web Docs (developer.mozilla.org)",
        "react.dev — official React docs",
        "Next.js official docs (nextjs.org/docs)",
        "Tailwind CSS docs"
      ],
      how: "প্রতিটি কনসেপ্ট শেখার পর একটি ছোট কম্পোনেন্ট বানিয়ে আগের প্রজেক্টে যুক্ত করো।",
      practice: "একটি ড্যাশবোর্ড UI ক্লোন বানাও — সাইডবার, একটি ডেটা টেবিল, একটি চার্ট এবং একটি ফর্ম সহ, TypeScript-এ।"
    },
    buildTask: "React/Next.js দিয়ে CRM Core-এর ড্যাশবোর্ড UI বানাও — Customer List, Lead Pipeline (Kanban) এবং Sales Pipeline ভিউ।",
    module: "m1"
  },
  {
    id: "p5", num: "06", title: "ক্লাউড", titleEn: "Cloud",
    items: [
      "Linux", "Docker", "Kubernetes", "AWS (EC2, S3, RDS)", "CI/CD (GitHub Actions)",
      "Nginx & Reverse Proxy", "Infrastructure as Code (Terraform)",
      "Monitoring (Prometheus + Grafana)", "Serverless (Lambda)"
    ],
    learn: {
      where: [
        "Docker official docs + Docker Curriculum",
        "Kubernetes.io — Basics tutorial",
        "AWS Free Tier + AWS Skill Builder",
        "GitHub Actions docs"
      ],
      how: "লোকাল মেশিনে প্রতিটি সার্ভিস Docker-এ চালানো প্র্যাকটিস করো, তারপর AWS Free Tier-এ ডিপ্লয় করো।",
      practice: "একটি ছোট FastAPI অ্যাপকে Dockerize করে GitHub Actions দিয়ে CI/CD পাইপলাইন বানাও।"
    },
    buildTask: "CRM Core-এর ব্যাকএন্ড ও ফ্রন্টএন্ড Dockerize করে কন্টেইনারাইজ করো, AWS-এ ডিপ্লয় করো এবং CI/CD পাইপলাইন বানাও।",
    module: "m1"
  },
  {
    id: "p6", num: "07", title: "AI ইঞ্জিনিয়ারিং", titleEn: "AI Engineering",
    items: [
      "LLM Fundamentals", "Prompt Engineering", "RAG", "Vector Databases", "Qdrant",
      "Embeddings", "LangGraph", "Agent Systems", "Multi Agent Architecture",
      "Function Calling / Tool Use", "Streaming Responses",
      "Context Window Management", "Model Context Protocol (MCP)",
      "Evaluation & Guardrails"
    ],
    learn: {
      where: [
        "Anthropic docs (docs.claude.com) ও OpenAI docs",
        "DeepLearning.AI — শর্ট কোর্স (LangChain, RAG, Agents)",
        "LangGraph official docs",
        "Qdrant official docs ও tutorials"
      ],
      how: "প্রতিটি কনসেপ্ট ছোট পাইথন স্ক্রিপ্ট দিয়ে নিজে API কল করে আউটপুট দেখো। RAG পাইপলাইন স্টেপ বাই স্টেপ নিজে বানাও।",
      practice: "তোমার নিজের নোট/ডকুমেন্ট আপলোড করে একটি RAG চ্যাটবট বানাও যা প্রশ্নের উত্তর দেয় সোর্স রেফারেন্স সহ।"
    },
    buildTask: "AI Chat Interface + RAG System + AI Agent System বানানো শুরু করো — LangGraph দিয়ে Natural Language Query System এবং Knowledge Engine।",
    module: "m3"
  },
  {
    id: "p7", num: "08", title: "অ্যাডভান্সড আর্কিটেক্চার ও স্কেলিং", titleEn: "Advanced Architecture & Scaling",
    items: [
      "Domain Driven Design", "Event Driven Architecture", "CQRS", "Microservices",
      "Distributed Systems", "Message Queues (Kafka/RabbitMQ)",
      "API Gateway Pattern", "Saga Pattern & Idempotency", "Caching Strategies",
      "Service Mesh (Istio/Linkerd Basics)",
      "Observability — Logging, Metrics & Distributed Tracing (OpenTelemetry)",
      "Database Sharding & Partitioning at Scale",
      "Consistent Hashing & Load Distribution at Scale",
      "Chaos Engineering & Resilience Testing"
    ],
    learn: {
      where: [
        "বই: Designing Data-Intensive Applications",
        "microservices.io — pattern catalog",
        "Kafka / RabbitMQ official getting-started docs",
        "martinfowler.com — আর্কিটেক্চার আর্টিকেল",
        "OpenTelemetry official docs, Istio docs (concepts)"
      ],
      how: "প্রতিটি প্যাটার্ন প্রথমে একটি সাধারণ ডায়াগ্রাম এঁকে বোঝো, তারপর তোমার বিদ্যমান প্রজেক্টের একটি অংশে প্রয়োগ করে দেখো।",
      practice: "CRM Core-এর Notification ফিচারটিকে একটি আলাদা ইভেন্ট-ড্রিভেন সার্ভিসে রূপান্তর করো (RabbitMQ/Kafka দিয়ে)।"
    },
    buildTask: "পুরো সিস্টেমকে Microservices/Event-driven আর্কিটেক্চারে রিফ্যাক্টর করো, AI Agent System-এর অর্কেস্ট্রেশন স্কেল করো।",
    module: "m5"
  },
  {
    id: "p8", num: "09", title: "বিজনেস AI", titleEn: "Business AI",
    items: [
      "Analytics", "Customer Segmentation", "Recommendation Systems",
      "Churn Prediction", "Sales Forecasting", "Business Intelligence",
      "Cohort Analysis & A/B Testing", "Text-to-SQL (NL → Query)",
      "Predictive Lead Scoring"
    ],
    learn: {
      where: [
        "Kaggle — ডেটাসেট ও নোটবুক",
        "বই: Python for Data Analysis (Wes McKinney)",
        "scikit-learn official docs",
        "Evidently AI docs (মডেল মনিটরিং)"
      ],
      how: "রিয়েল ডেটাসেট দিয়ে প্র্যাকটিস করো — প্রতিটি মডেলের আগে ও পরে মেট্রিক্স (precision, recall, RMSE) কম্পেয়ার করো।",
      practice: "তোমার CRM-এর ডেমো ডেটা দিয়ে একটি Churn Prediction মডেল বানাও এবং রিপোর্টে কারণ ব্যাখ্যা করো।"
    },
    buildTask: "Analytics Engine বানাও — KPI Dashboard, Reporting Engine, Churn Prediction এবং Sales Forecasting মডেল ইন্টিগ্রেট করো।",
    module: "m2"
  },
  {
    id: "p9", num: "10", title: "সিকিউরিটি", titleEn: "Security",
    items: [
      "OWASP Top 10", "API Security", "RBAC", "Secure Architecture",
      "Data Encryption", "Audit Logging", "Secrets Management",
      "Prompt Injection Defense (AI Security)"
    ],
    learn: {
      where: [
        "OWASP.org — Top 10 ও API Security Top 10",
        "owasp.org — Cheat Sheet Series",
        "HashiCorp Vault docs (Secrets Management)",
        "OWASP — LLM Top 10 (Prompt Injection)"
      ],
      how: "প্রতিটি ভালনারেবিলিটি নিজের প্রজেক্টে (কেবল নিজের সিস্টেমে, এথিক্যালি) টেস্ট করো — তারপর ফিক্স করো।",
      practice: "CRM Core-এর API-তে RBAC, রেট লিমিটিং, ইনপুট ভ্যালিডেশন এবং অডিট লগিং যুক্ত করো।"
    },
    buildTask: "পুরো প্ল্যাটফর্মে RBAC, API Security ও OWASP প্র্যাকটিস ইমপ্লিমেন্ট করো — সাথে AI Agent-গুলোর জন্য Prompt Injection Defense।",
    module: "m6"
  },
  {
    id: "p10", num: "11", title: "MLOps", titleEn: "MLOps",
    items: [
      "MLflow", "Model Deployment", "Monitoring", "Model Versioning",
      "Feature Store", "LLM Cost & Usage Monitoring", "LLMOps (LangSmith/Langfuse)",
      "Vector DB Scaling"
    ],
    learn: {
      where: [
        "MLflow official docs",
        "Langfuse / LangSmith docs",
        "Evidently AI docs",
        "Qdrant scaling guide"
      ],
      how: "ছোট মডেল ও প্রম্পট ভার্সন MLflow/Langfuse দিয়ে ট্র্যাক করা শুরু করো। প্রতিটি LLM কলের cost, latency, token usage লগ করার অভ্যাস গড়ো।",
      practice: "তোমার AI Agent System-এর প্রতিটি LLM কলের কস্ট, লেটেন্সি এবং সাফল্যের হার লগ করে একটি ছোট মনিটরিং ড্যাশবোর্ড বানাও।"
    },
    buildTask: "MLflow/Langfuse দিয়ে মডেল ও প্রম্পট ভার্সনিং এবং মনিটরিং সেটআপ করো — এটি Autonomous Feature Builder-এর MLOps ফাউন্ডেশন হবে।",
    module: "m6"
  }
];

/* =========================================================
   প্র্যাকটিস প্রশ্ন ও মিনি-প্রজেক্ট — প্রতিটি ফেইজের জন্য
   ৫টি প্র্যাকটিস প্রশ্ন + ২টি মিনি-প্রজেক্ট
   ========================================================= */
const PRACTICE = {
  p0: {
    questions: [
      "git rebase -i HEAD~4 দিয়ে শেষ ৪টি commit-কে ২টিতে squash করো এবং প্রতিটির message ঠিক করো।",
      "একটি feature branch-এ কাজ করার সময় main branch-এ ৩টি নতুন commit হয়েছে — git rebase main দিয়ে conflict সমাধান করো।",
      "git bisect দিয়ে একটি bug-introducing commit খুঁজে বের করো — good commit ও bad commit mark করে binary search কীভাবে কাজ করে দেখাও।",
      "GitHub-এ একটি repository-তে branch protection rule সেটআপ করো: PR required, 1 approving review, status check must pass, direct push to main blocked।",
      "Conventional Commits spec অনুযায়ী ৫টি commit message লেখো — feat, fix, docs, refactor, chore type-এর উদাহরণ দাও।"
    ],
    projects: [
      "Personal Dev Workflow Setup: GitHub repo তৈরি, branch protection rules, PR template (.github/), conventional commits, pre-commit hooks (flake8 + black), .gitignore — পুরো workflow README-তে document করো।",
      "GitHub Actions CI Pipeline: Python project-এ flake8 lint + pytest + coverage report + badge — PR-এ trigger হলে run করে, main merge-এ badge আপডেট হয়।"
    ]
  },
  p1: {
    questions: [
      "map(), filter(), reduce() ব্যবহার করে একটি list থেকে শুধু even numbers বের করে তাদের square করো এবং sum নাও।",
      "একটি @retry(times=3, delay=1) decorator লেখো যেটি function ব্যর্থ হলে নির্দিষ্ট বার retry করে এবং প্রতিটি attempt লগ করে।",
      "Pydantic BaseModel দিয়ে একটি Product ক্লাস তৈরি করো — name, price (>=0), category, tags (list) validation সহ।",
      "Recursive এবং Iterative উভয় পদ্ধতিতে Binary Search implement করো এবং time/space complexity তুলনা করো।",
      "asyncio.gather() দিয়ে ৩টি async function একসাথে চালাও — প্রত্যেকটি আলাদা সময় (1s, 2s, 3s) নেয়, মোট সময় ≤3s হওয়া উচিত।"
    ],
    projects: [
      "CLI Task Manager: JSON-এ task সেভ, add/done/delete/list কমান্ড, due date ও priority (HIGH/MED/LOW), overdue warning, এবং Pytest দিয়ে ১০+ টেস্ট কেস।",
      "Personal Expense Tracker: income ও expense track, category-wise (food/rent/transport) monthly breakdown, budget limit ও warning, CSV export, এবং matplotlib দিয়ে chart।"
    ]
  },
  p11: {
    questions: [
      "Twitter-এর জন্য capacity estimation করো — প্রতিদিন ৫০ মিলিয়ন tweets, read/write ratio 100:1, storage, bandwidth এবং QPS বের করো।",
      "Open/Closed Principle ভাঙার একটি concrete উদাহরণ লেখো (যেমন: if/else দিয়ে payment type check) এবং Strategy Pattern দিয়ে refactor করো।",
      "CAP Theorem ব্যাখ্যা করো এবং তিনটি real system (MongoDB, Cassandra, MySQL) কোন কোন trade-off করে তা দিয়ে উদাহরণ দাও।",
      "Vertical Scaling বনাম Horizontal Scaling-এর cost, limit, এবং complexity তুলনা করো — কোন পরিস্থিতিতে কোনটি বেছে নেবে?",
      "একটি typical web application-এ single points of failure (SPOF) চিহ্নিত করো এবং প্রতিটির জন্য HA solution (active-passive / active-active) দাও।"
    ],
    projects: [
      "URL Shortener System Design Document: capacity estimation (daily 1M URLs), API contract (endpoints, request/response schema), DB schema, cache layer (Redis), load balancer strategy, HA plan — শুধু ডকুমেন্ট, কোড নয়।",
      "Phase 1-এর CLI Task Manager-কে SOLID + Clean Code গাইডলাইন অনুযায়ী refactor করো: SRP (TaskStorage আলাদা করো), OCP (TaskFormatter), Unit + Integration + E2E test pyramid বানাও।"
    ]
  },
  p2: {
    questions: [
      "FastAPI-এ POST /auth/login endpoint লেখো যেটি username/password নিয়ে access_token (15min) এবং refresh_token (7 days) JWT return করে।",
      "Redis-এ sliding window algorithm দিয়ে rate limiter implement করো — প্রতি IP ৬০ সেকেন্ডে ১০০ request, exceed হলে 429 return করো।",
      "WebSocket connection-এ reconnect logic কীভাবে handle করবে? Exponential backoff দিয়ে একটি client-side reconnect strategy লেখো।",
      "JWT-তে কোন claims রাখা safe (sub, exp, iat, role) এবং কোনগুলো রাখা dangerous (password, credit card) — উদাহরণ সহ ব্যাখ্যা করো।",
      "pytest + httpx দিয়ে একটি CRUD endpoint-এর ৫টি test case লেখো: create (201), get (200), get not found (404), update (200), delete (204)।"
    ],
    projects: [
      "Todo REST API: FastAPI + PostgreSQL + JWT Auth, CRUD endpoints (/todos), pagination (?page=1&size=10), tag-based filtering, background task দিয়ে reminder email, পূর্ণ Pytest test suite।",
      "Real-time Chat API: WebSocket rooms, room join/leave/message events, Redis Pub/Sub দিয়ে multiple server instances-এ message broadcast, online user list per room।"
    ]
  },
  p3: {
    questions: [
      "SQL Window Function দিয়ে প্রতিটি customer-এর monthly sales, running total, এবং previous month তুলনায় percentage change বের করো।",
      "EXPLAIN ANALYZE আউটপুটে 'Seq Scan' দেখলে কী সমস্যা? Composite index vs. partial index — কোন ক্ষেত্রে কোনটি কার্যকর?",
      "Multi-tenant PostgreSQL database-এ Row-Level Security (RLS) policy লেখো — tenant A যেন tenant B-এর data দেখতে না পারে।",
      "Redis Sorted Set (ZADD, ZRANK, ZRANGE) ব্যবহার করে একটি real-time leaderboard implement করো — top 10, user rank, এবং nearby players।",
      "Alembic migration লেখো: users table-এ (1) last_login timestamptz column add করো, (2) email-এ unique index বানাও, (3) এবং downgrade support করো।"
    ],
    projects: [
      "E-commerce Database: Users, Products, Categories, Orders, OrderItems table — 3NF normalized, composite indexes, views, Alembic migrations, ১০০০ rows dummy data দিয়ে performance test।",
      "Redis Cache Middleware for FastAPI: cache decorator (@cached(ttl=300)), cache invalidation on POST/PUT/DELETE, Redis connection pool, cache hit/miss logging, TTL management।"
    ]
  },
  p4: {
    questions: [
      "React-এ useFetch(url, options) custom hook লেখো — loading, error, data state, AbortController দিয়ে cleanup on unmount।",
      "Zustand দিয়ে global auth store তৈরি করো — login(), logout(), refreshToken(), user object, isAuthenticated, token persist in localStorage।",
      "React Hook Form + Zod দিয়ে একটি registration form validate করো — name (min 2), email (valid), password (8+ chars, uppercase, number, special char), confirmPassword match।",
      "Next.js App Router-এ Server Component vs Client Component-এর পার্থক্য উদাহরণ সহ দেখাও — কোনটিতে 'use client' লাগে এবং কেন?",
      "Recharts দিয়ে একটি responsive dashboard বানাও — LineChart (revenue), BarChart (orders), PieChart (categories) — সব একই page-এ।"
    ],
    projects: [
      "Admin Dashboard Clone (Next.js + TypeScript): collapsible sidebar, sortable/filterable data table (TanStack Table), AreaChart (Recharts), modal form (React Hook Form + Zod) — mobile responsive।",
      "Kanban Board App: drag-and-drop (dnd-kit), column CRUD, card priority color, card details modal, React Query দিয়ে backend sync, optimistic updates।"
    ]
  },
  p5: {
    questions: [
      "FastAPI app-এর multi-stage Dockerfile লেখো — stage 1: build dependencies, stage 2: runtime (non-root user, minimal image, .dockerignore)।",
      "GitHub Actions workflow লেখো যেটি: (1) pytest চালায়, (2) coverage report আপলোড করে, (3) Docker image build করে GHCR-এ push করে।",
      "Kubernetes-এ Deployment, Service (ClusterIP vs NodePort), এবং Ingress resource-এর YAML লেখো এবং তাদের সম্পর্ক ব্যাখ্যা করো।",
      "Nginx config লেখো: /api → FastAPI (port 8000), / → Next.js (port 3000), SSL termination, gzip compression, request rate limiting।",
      "AWS-এ একটি high-availability web app deploy করতে EC2 + ALB + RDS (Multi-AZ) + ElastiCache + S3 + CloudFront কীভাবে ব্যবহার হবে — architecture ব্যাখ্যা করো।"
    ],
    projects: [
      "Dockerized Full-stack App: FastAPI + Next.js + PostgreSQL + Redis সহ docker-compose.yml, environment variables management (.env), GitHub Actions CI/CD, health check endpoints।",
      "AWS Deployment with IaC: Terraform দিয়ে EC2 + RDS + VPC + Security Groups provision করো, Nginx + SSL (Let's Encrypt), Prometheus + Grafana monitoring — step-by-step README।"
    ]
  },
  p6: {
    questions: [
      "RAG-এ chunk size 256 বনাম 1024 tokens-এর trade-off কী? কোন ধরনের document (legal, code, FAQ) কোন chunk strategy-তে ভালো কাজ করে?",
      "LangGraph-এ একটি 2-node research agent লেখো — Node 1: web_search tool দিয়ে তথ্য সংগ্রহ, Node 2: সংগ্রহিত তথ্য summarize করে। State schema দেখাও।",
      "OpenAI/Anthropic Function Calling দিয়ে একটি weather_tool define করো — JSON schema, tool execution, result handling, এবং multi-turn conversation।",
      "Long conversation-এ context window overflow হলে ৩টি handling strategy কী? (summarization, sliding window, selective pruning) — কোনটি কখন ব্যবহার করবে?",
      "Qdrant-এ 'cosine' vs 'dot' vs 'euclidean' distance metric-এর পার্থক্য কী? Normalized embeddings-এ কোনটি ব্যবহার করবে এবং কেন?"
    ],
    projects: [
      "Personal Knowledge RAG: PDF/Markdown upload, text chunking (LangChain RecursiveTextSplitter), OpenAI embeddings, Qdrant store, streaming chat response, source citation সহ উত্তর।",
      "Multi-tool AI Agent: LangGraph orchestration, tools: web_search + python_repl + calculator + wikipedia, tool selection logic, streaming tokens, conversation memory।"
    ]
  },
  p7: {
    questions: [
      "CQRS pattern কী? একটি CRM-এ Write side (command handlers) এবং Read side (query models) আলাদা করলে কী সুবিধা এবং কী complexity যোগ হয়?",
      "Kafka-এর 'at-least-once', 'exactly-once', 'at-most-once' delivery semantics-এর পার্থক্য কী? Order Processing-এ কোনটি দরকার এবং কেন?",
      "Saga Choreography বনাম Orchestration — E-commerce Order (place → payment → inventory → shipping) workflow-এ কোনটি বেছে নেবে? trade-off দেখাও।",
      "OpenTelemetry দিয়ে 3টি microservice-এ distributed trace করো — trace context propagation (W3C TraceContext header), Span attributes, এবং Jaeger-এ visualization।",
      "Consistent Hashing-এ virtual nodes কীভাবে load imbalance কমায়? একটি 4-node cluster-এ 150 virtual nodes-এর distribution দেখাও।"
    ],
    projects: [
      "Event-driven Notification Microservice: RabbitMQ/Kafka consumer, CRM event (customer.created, deal.closed) → email + in-app notification, dead letter queue, retry mechanism।",
      "Distributed Tracing Setup: 2টি FastAPI service (auth-service + crm-service) → OpenTelemetry SDK → Jaeger → একটি request-এর complete trace span visualization।"
    ]
  },
  p8: {
    questions: [
      "Customer Churn Prediction-এ top 5 features কীভাবে select করবে? Feature importance (Random Forest), correlation analysis, এবং business logic — তিনটি approach compare করো।",
      "A/B Testing-এ p-value কী এবং 0.05 threshold কেন? Type I Error এবং Type II Error-এর পার্থক্য ও business impact কী?",
      "Monthly retention cohort analysis-এর SQL লেখো: user signup month vs. activity month, cohort size, retention % — heatmap-এ visualize করো।",
      "Text-to-SQL system-এ LLM-কে complex multi-table schema বোঝানোর জন্য effective system prompt লেখো — table descriptions, relationships, এবং example queries সহ।",
      "E-commerce recommendation system-এ Collaborative Filtering এবং Content-based Filtering-এর cold start problem কীভাবে handle করবে? Hybrid approach কী?"
    ],
    projects: [
      "Churn Prediction Pipeline: Kaggle Telco dataset, EDA (pandas + seaborn), feature engineering, Logistic Regression + Random Forest + XGBoost comparison, SHAP values দিয়ে explainability, Evidently AI দিয়ে monitoring।",
      "Business KPI Dashboard: FastAPI backend (CRM data aggregation), PostgreSQL materialized views, Recharts (revenue trend, funnel, cohort), date range filter, auto-refresh every 5min।"
    ]
  },
  p9: {
    questions: [
      "SQL Injection attack demo করো (নিজের test DB-তে) এবং FastAPI + SQLAlchemy ORM + parameterized queries দিয়ে কীভাবে prevent করবে — before/after code দেখাও।",
      "RBAC system design করো: admin (full), manager (read+write own team), viewer (read-only) — permission matrix, FastAPI Dependency Injection দিয়ে @require_permission decorator।",
      "JWT token-এ কোন data রাখা যাবে (sub, role, exp) এবং কোনটি রাখা ভুল (password, SSN, credit card)? Token decode করলে কেউ কি দেখতে পারবে?",
      "Prompt Injection attack-এর একটি real-world example দাও এবং defense strategies (input validation, output filtering, sandboxing, system prompt isolation) ব্যাখ্যা করো।",
      "Secrets management-এ .env vs HashiCorp Vault vs AWS Secrets Manager-এর পার্থক্য কী? GitHub-এ accidentally secret push হলে immediate response plan কী?"
    ],
    projects: [
      "RBAC API Security Layer: FastAPI middleware, JWT-based role extraction, permission decorator, API key management (hash+store, not plaintext), full audit log (who did what when), rate limiting per user।",
      "Security Audit Checklist: নিজের CRM project-এ OWASP Top 10 manually চেক করো, found vulnerabilities document করো, prioritize করো (Critical/High/Medium), এবং fix করো with PR।"
    ]
  },
  p10: {
    questions: [
      "MLflow Experiment tracking setup করো: একটি scikit-learn model training script-এ mlflow.log_param(), mlflow.log_metric(), mlflow.sklearn.log_model() — run comparison UI দেখাও।",
      "Data drift বনাম Concept drift-এর পার্থক্য কী? PSI (Population Stability Index) এবং KS Test দিয়ে কীভাবে detect করবে? Threshold কত রাখবে?",
      "LLM API cost কমানোর ৫টি practical strategy: prompt caching, response caching, model tiering, batching, এবং output length control — প্রতিটি কতটা effective?",
      "Langfuse দিয়ে একটি multi-step LLM chain-এর traces, scores (user rating), এবং cost per trace কীভাবে track ও visualize করবে?",
      "Feature Store কী সমস্যা সমাধান করে? Training-serving skew কখন হয়? Feast/Tecton এর মতো feature store কোন architecture-এ fit করে?"
    ],
    projects: [
      "LLM Monitoring Dashboard: AI agent-এর প্রতিটি LLM call log (model, prompt tokens, completion tokens, latency, cost, status), Langfuse integration, daily/weekly cost report, alert যদি cost threshold breach হয়।",
      "Full MLOps Pipeline: MLflow (experiment tracking + model registry) + Langfuse (LLM tracing) + Evidently AI (data drift monitoring) + GitHub Actions (auto-retrain trigger on drift detection)।"
    ]
  }
};

/* =========================================================
   EXTRAS — ঐচ্ছিক ফ্রেমওয়ার্ক (Django, Flask)
   ========================================================= */
const EXTRAS = [
  {
    id: "ex1", attachTo: "p2", name: "Django", tag: "ঐচ্ছিক · ক্যারিয়ার ব্রেডথ",
    desc: "Django একটি \"ব্যাটারি-ইনক্লুডেড\" ফুল-স্ট্যাক ফ্রেমওয়ার্ক — Admin Panel, ORM, Auth সবকিছু বিল্ট-ইন। বাংলাদেশ ও বিশ্বব্যাপী অসংখ্য জব/ফ্রিল্যান্স প্রজেক্টে Django ব্যবহার হয়।",
    items: [
      "Django Project & App Structure (MVT Pattern)",
      "Django ORM & Migrations",
      "Django Admin Panel",
      "Django Templates & Forms",
      "Django REST Framework (DRF) — Serializers & ViewSets",
      "Authentication (django-allauth / DRF Token & JWT)",
      "Django Signals & Middleware",
      "Celery + Django (Background Tasks)"
    ],
    learn: {
      where: [
        "Django official docs (djangoproject.com) — Polls App Tutorial",
        "বই: Django for Beginners ও Django for APIs (William S. Vincent)",
        "Django REST Framework official docs (DRF Tutorial)",
        "freeCodeCamp — Django কোর্স (YouTube)"
      ],
      how: "প্রথমে Django-এর অফিসিয়াল Polls টিউটোরিয়াল সম্পূর্ণ শেষ করো। তারপর সেই অ্যাপটিকেই Django REST Framework দিয়ে একটি JSON API-তে রূপান্তর করো।",
      practice: "একটি ব্লগ বা ছোট ই-কমার্স সাইট বানাও — Django Admin দিয়ে কন্টেন্ট ম্যানেজমেন্ট, Templates দিয়ে পাবলিক ফ্রন্টএন্ড, এবং DRF দিয়ে JSON API।"
    }
  },
  {
    id: "ex2", attachTo: "p2", name: "Flask", tag: "ঐচ্ছিক · ক্যারিয়ার ব্রেডথ",
    desc: "Flask একটি লাইটওয়েট মাইক্রো-ফ্রেমওয়ার্ক — কোনো বিল্ট-ইন স্ট্রাকচার চাপিয়ে দেয় না, ফলে ছোট সার্ভিস ও মাইক্রোসার্ভিসের জন্য আদর্শ।",
    items: [
      "Flask Basics (Routing, Jinja2 Templates)",
      "Flask Blueprints (Modular App Structure)",
      "Flask-SQLAlchemy (ORM)",
      "Flask-RESTful / Flask-Smorest (API Building)",
      "Flask Extensions ও Deployment (Gunicorn + Nginx)"
    ],
    learn: {
      where: [
        "Flask official docs (flask.palletsprojects.com)",
        "Miguel Grinberg — The Flask Mega-Tutorial",
        "Real Python — Flask টিউটোরিয়াল সিরিজ"
      ],
      how: "Flask-এর মিনিমালিস্ট স্ট্রাকচার দিয়ে শুরু করো — একটি সিঙ্গেল-ফাইল অ্যাপ থেকে শুরু করে ধীরে ধীরে Blueprints দিয়ে মডিউলার করো।",
      practice: "একটি ছোট মাইক্রোসার্ভিস বানাও (যেমন: ইমেজ আপলোড + রিসাইজ সার্ভিস), Flask-SQLAlchemy দিয়ে ডেটা সেভ করো, এবং Docker-এ প্যাকেজ করো।"
    }
  },
  {
    id: "ex3", attachTo: "p3", name: "Supabase", tag: "ঐচ্ছিক · ক্যারিয়ার ব্রেডথ",
    desc: "Supabase একটি open-source Firebase alternative — এর ভেতরে আছে PostgreSQL ডেটাবেস, Row Level Security, Built-in Auth (Email/OAuth/Magic Link), Realtime Subscriptions, Storage এবং Edge Functions। BusinessBrain AI-এ FastAPI + PostgreSQL + AWS ব্যবহার হওয়ায় Supabase সরাসরি প্রজেক্টে দরকার নেই — কিন্তু Next.js projects, rapid prototyping, freelancing এবং startup-এ Supabase অত্যন্ত জনপ্রিয়, তাই job market ও ফ্রিল্যান্সিংয়ের জন্য শেখা মূল্যবান।",
    items: [
      "Supabase Project Setup ও Dashboard Overview",
      "Supabase PostgreSQL — Table Editor, Schema Builder, SQL Editor",
      "Row Level Security (RLS) Policies — Tenant Isolation",
      "Supabase Auth — Email/Password, OAuth (Google, GitHub), Magic Link",
      "Supabase Realtime — Database Change Subscriptions",
      "Supabase Storage — File Upload, Buckets ও CDN URL",
      "Supabase Edge Functions (Deno Runtime)",
      "Supabase JavaScript Client SDK (@supabase/supabase-js)",
      "Supabase Python Client (supabase-py)",
      "Next.js + Supabase Full-stack Integration (SSR Auth)"
    ],
    learn: {
      where: [
        "Supabase official docs (supabase.com/docs) — বিশেষত 'Getting Started' ও 'Auth' গাইড",
        "Supabase YouTube Channel — official tutorials",
        "Jon Meyers (jonmeyers.io) — Supabase + Next.js কোর্স",
        "Supabase Egghead.io কোর্স — free, হাতে-কলমে"
      ],
      how: "Supabase-এর free tier দিয়ে একটি project তৈরি করো এবং Dashboard-এ সরাসরি SQL লিখে table, policy ও data explore করো। Phase 3-এ PostgreSQL শেখার পর Supabase-এর RLS তুলনা করলে অনেক কিছু clear হয়ে যাবে। প্রতিটি ফিচার (Auth, Realtime, Storage) আলাদাভাবে একটি ছোট test app-এ ব্যবহার করে দেখো।",
      practice: "Supabase + Next.js দিয়ে একটি ছোট 'Note Taking App' বানাও — Supabase Auth (GitHub OAuth), RLS (user শুধু নিজের notes দেখবে), Realtime (অন্য tab-এ note যোগ হলে auto-update), এবং Storage (note-এ image attach)।"
    }
  }
];

const FRAMEWORK_NOTE = {
  title: "কেন BusinessBrain AI-এ FastAPI, Django/Flask নয়? এবং কেন Supabase নয়?",
  text: "FastAPI-এর native async সাপোর্ট, Pydantic দিয়ে অটোমেটিক ডেটা ভ্যালিডেশন এবং বিল্ট-ইন OpenAPI ডকুমেন্টেশন AI/LLM ইন্টিগ্রেশন ও স্ট্রিমিং রেসপন্সের জন্য আদর্শ। Supabase দুর্দান্ত rapid prototyping ও freelancing tool, কিন্তু BusinessBrain AI-এ Multi-tenant PostgreSQL, custom JWT auth, LLM streaming এবং Microservices architecture-এর জন্য সরাসরি FastAPI + PostgreSQL + AWS বেশি নিয়ন্ত্রণ দেয়।"
};

const MODULES = [
  {
    id: "m1", code: "M1", name: "CRM Core", name_bn: "কোর সিআরএম",
    desc: "কাস্টমার, লিড এবং সেলস পাইপলাইন ম্যানেজ করার ফাউন্ডেশন মডিউল।",
    requiredPhases: ["p0", "p1", "p11", "p2", "p3", "p4", "p5"],
    subtasks: [
      { name: "GitHub Repository Setup — branch strategy, protection rules, PR template, CI workflow", phase: "p0" },
      { name: "System Design Document (Capacity, API Contract, HA, Load Balancing প্ল্যান)", phase: "p11" },
      { name: "Customer Management — ডেটা মডেল (Python/OOP, SOLID + Clean Code)", phase: "p1" },
      { name: "Lead Management & Sales Pipeline API (FastAPI + JWT)", phase: "p2" },
      { name: "PostgreSQL স্কিমা + Multi-tenant ডিজাইন", phase: "p3" },
      { name: "ড্যাশবোর্ড UI (Next.js + TypeScript)", phase: "p4" },
      { name: "Docker + CI/CD ডিপ্লয়মেন্ট (AWS)", phase: "p5" }
    ]
  },
  {
    id: "m2", code: "M2", name: "Analytics Engine", name_bn: "অ্যানালিটিক্স ইঞ্জিন",
    desc: "CRM Core-এর ডেটা থেকে ইনসাইট তৈরি করে — KPI ড্যাশবোর্ড, রিপোর্ট, এবং প্রেডিক্টিভ মডেল।",
    requiredPhases: ["p3", "p8"],
    subtasks: [
      { name: "KPI Dashboard (রিয়েলটাইম মেট্রিক্স)", phase: "p8" },
      { name: "Reporting Engine (অটোমেটেড রিপোর্ট)", phase: "p8" },
      { name: "Churn Prediction মডেল", phase: "p8" },
      { name: "Sales Forecasting মডেল", phase: "p8" }
    ]
  },
  {
    id: "m3", code: "M3", name: "AI Chat Interface", name_bn: "এআই চ্যাট ইন্টারফেস",
    desc: "ইউজার প্রাকৃতিক ভাষায় পুরো সিস্টেম নিয়ন্ত্রণ করবে।",
    requiredPhases: ["p6"],
    subtasks: [
      { name: "Natural Language Query System (LLM + Function Calling)", phase: "p6" },
      { name: "চ্যাট UI (স্ট্রিমিং রেসপন্স)", phase: "p6" },
      { name: "Intent Routing — কোন কমান্ড কোন মডিউলে যাবে", phase: "p6" }
    ]
  },
  {
    id: "m4", code: "M4", name: "RAG System", name_bn: "RAG সিস্টেম",
    desc: "কোম্পানির ডকুমেন্ট ও ঐতিহাসিক ডেটা থেকে রেফারেন্স দিয়ে উত্তর দেয়।",
    requiredPhases: ["p6"],
    subtasks: [
      { name: "Knowledge Engine — ডকুমেন্ট ইনজেশন পাইপলাইন", phase: "p6" },
      { name: "Embedding + Qdrant ভেক্টর স্টোর", phase: "p6" },
      { name: "রিট্রিভাল + সোর্স-সাইটেড উত্তর জেনারেশন", phase: "p6" }
    ]
  },
  {
    id: "m5", code: "M5", name: "AI Agent System", name_bn: "এআই এজেন্ট সিস্টেম",
    desc: "একাধিক AI এজেন্ট মিলে কাজ ভাগ করে — রিপোর্ট, ওয়ার্কফ্লো, স্ট্র্যাটেজি।",
    requiredPhases: ["p6", "p7"],
    subtasks: [
      { name: "Workflow Automation (LangGraph orchestration)", phase: "p6" },
      { name: "Multi-Agent টাস্ক ডেলিগেশন", phase: "p6" },
      { name: "Event-driven Agent স্কেলিং", phase: "p7" }
    ]
  },
  {
    id: "m6", code: "M6", name: "Autonomous Feature Builder", name_bn: "স্বয়ংক্রিয় ফিচার বিল্ডার",
    desc: "AI নিজেই নতুন ফিচার ডিজাইন, কোড এবং ডিপ্লয় করতে পারবে।",
    requiredPhases: ["p7", "p9", "p10"],
    subtasks: [
      { name: "Secure Sandbox + RBAC + Prompt Injection Defense", phase: "p9" },
      { name: "AI কোড-জেনারেশন এজেন্ট + MLOps মনিটরিং", phase: "p10" }
    ]
  }
];

/* =========================================================
   GITHUB GIST STORAGE ENGINE
   ========================================================= */
/* ═══════════════════════════════════════════════════════════════════════════
   ██  CONFIGURATION — v3: Cross-Browser Persistent Storage
   ═══════════════════════════════════════════════════════════════════════════
   ✅ Gist ID hardcoded → যেকোনো browser থেকে data load হবে
   ✅ Encrypted token hardcoded → password দিলেই GitHub sync শুরু
   ✅ নতুন browser-এ শুধু password "businessbrain2030" দাও — সব কাজ করবে
   ═══════════════════════════════════════════════════════════════════════════ */
const BB_PASSWORD  = "businessbrain2030";
const BB_GIST_ID   = "ebef5449fbebe63a37c7a622bbf54378";
// Token encrypted with BB_PASSWORD via AES-GCM (safe to hardcode in source)
const BB_ENC_TOKEN_HARDCODED = "UdfIxYJuf02vwRZc.j3LpYWYcI4D5+jjGYfJS+4/3H6piBmYPFu4fesDcJo+jgnQ6PXJUqUJPDpZ5Zu48ksYohzzz3MU=";

/* ── Storage keys ─────────────────────────────────────────────────────────── */
const BB_KEY_PROGRESS   = "bb_progress_v3";
const BB_KEY_NOTES      = "bb_notes_v3";
const BB_KEY_ENC_TOKEN  = "bb_enc_token_v3";   // AES-GCM encrypted token (v3: updated token)
const BB_KEY_GIST_ID_LS = "bb_gist_id_v3";
const BB_KEY_SESSION    = "bb_session_v3";
const BB_KEY_NOTION     = "bb_notion_v3";      // Notion page links per phase
const BB_KEY_TIMELOG    = "bb_timelog_v3";     // Time tracker: { "2026-06-14": { p0: 45, p1: 30 } }

let _bbState        = null;
let _bbNotes        = null;
let _bbNotion       = null;   // { phaseId: "https://notion.so/..." }
let _bbTimelog      = null;   // { "YYYY-MM-DD": { phaseId: minutes } }
let _bbShareMode    = false;
let _syncTimer      = null;
let _decryptedToken = null;   // in-memory only — never re-stored as plain text
let _pollTimer      = null;
let _lastKnownAt    = null;   // updatedAt of last known gist state
let _isSaving       = false;  // prevent poll overwrite during save

/* ── Local storage helpers ──────────────────────────────────────────────── */
function _localGet(key)      { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : null; } catch(e) { return null; } }
function _localSet(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch(e) {} }
function _localDel(key)      { try { localStorage.removeItem(key); } catch(e) {} }

/* ── Gist ID: hardcoded config first, then localStorage ─────────────────── */
function bbGetGistId() {
  if (BB_GIST_ID && BB_GIST_ID.trim()) return BB_GIST_ID.trim();
  return localStorage.getItem(BB_KEY_GIST_ID_LS) || null;
}
function bbSetGistId(id) { localStorage.setItem(BB_KEY_GIST_ID_LS, id); }

/* ── AES-GCM token encryption — password-derived key ────────────────────────
   কীভাবে কাজ করে:
   • প্রথমবার GitHub connect করলে token AES-GCM দিয়ে encrypt হয়ে localStorage-এ থাকে
   • নতুন browser-এ password দিলে → সেই password দিয়ে token decrypt হয়
   • Gist ID hardcode থাকলে → সাথে সাথে GitHub থেকে data load হয়
   • Token কখনো plain text-এ store হয় না
   ─────────────────────────────────────────────────────────────────────────── */
async function _deriveKey(password) {
  const enc  = new TextEncoder();
  const raw  = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveKey']);
  const salt = enc.encode('bb-salt-' + password.slice(0, 4));
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
    raw, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']
  );
}
async function _encryptToken(token, password) {
  const key = await _deriveKey(password);
  const iv  = crypto.getRandomValues(new Uint8Array(12));
  const ct  = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(token));
  const b64 = buf => btoa(String.fromCharCode(...new Uint8Array(buf)));
  return b64(iv) + '.' + b64(ct);
}
async function _decryptTokenWithPass(encrypted, password) {
  try {
    const key = await _deriveKey(password);
    const [iv64, ct64] = encrypted.split('.');
    const b64d = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
    const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64d(iv64) }, key, b64d(ct64));
    return new TextDecoder().decode(plain);
  } catch(e) { return null; }
}

/* Public token API — always uses in-memory _decryptedToken */
function bbGetToken() { return _decryptedToken || null; }
async function bbSaveToken(rawToken, password) {
  _decryptedToken = rawToken;
  const enc = await _encryptToken(rawToken, password);
  localStorage.setItem(BB_KEY_ENC_TOKEN, enc);
}

/* Cross-browser token resolution
   Priority: 1) localStorage  2) encToken from Gist  3) BB_ENC_TOKEN_HARDCODED */
async function _resolveToken(password) {
  const sources = [
    localStorage.getItem(BB_KEY_ENC_TOKEN),
    sessionStorage.getItem("bb_enc_from_gist"),
    BB_ENC_TOKEN_HARDCODED
  ];
  for (const enc of sources) {
    if (!enc) continue;
    const decrypted = await _decryptTokenWithPass(enc, password);
    if (decrypted) {
      _decryptedToken = decrypted;
      localStorage.setItem(BB_KEY_ENC_TOKEN, enc);
      return true;
    }
  }
  return false;
}

/* Pre-fetch Gist without auth (public Gist) — called BEFORE password gate
   Gets progress data + extracts encToken so password gate can decrypt it */
async function _preFetchGist(gistId) {
  try {
    const r = await fetch("https://api.github.com/gists/" + gistId, {
      headers: { "Accept": "application/vnd.github.v3+json" }
    });
    if (!r.ok) return null;
    const d = await r.json();
    const fileObj = d.files && d.files["bb-progress.json"];
    if (!fileObj) return null;
    // Handle truncated content — fetch from raw_url
    let txt = fileObj.content;
    if (fileObj.truncated && fileObj.raw_url) {
      const rr = await fetch(fileObj.raw_url);
      if (rr.ok) txt = await rr.text();
    }
    if (!txt) return null;
    const data = JSON.parse(txt);
    if (data.encToken) sessionStorage.setItem("bb_enc_from_gist", data.encToken);
    return data;
  } catch(e) { return null; }
}

/* ── Share-aware navigation ─────────────────────────────────────────────── */
function bbFixNavLinks() {
  const shareId = new URLSearchParams(window.location.search).get('share');
  if (!shareId) return;
  document.querySelectorAll('.page-links a, .nav-card').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('#') || href.includes('?share=')) return;
    a.setAttribute('href', href.split('?')[0] + '?share=' + encodeURIComponent(shareId));
  });
}

/* — GitHub Gist API — */
async function _ghFetch(gistId) {
  const token = bbGetToken();
  const headers = { 'Accept': 'application/vnd.github.v3+json' };
  if (token) headers['Authorization'] = 'token ' + token;
  try {
    const r = await fetch('https://api.github.com/gists/' + gistId, { headers });
    if (!r.ok) return null;
    const d = await r.json();
    const txt = d.files && d.files['bb-progress.json'] && d.files['bb-progress.json'].content;
    return txt ? JSON.parse(txt) : null;
  } catch(e) { return null; }
}

async function _ghSave() {
  const token = bbGetToken();
  if (!token) return { ok: false, msg: 'টোকেন নেই' };
  _isSaving = true;
  const gistId = bbGetGistId();
  const encToken = localStorage.getItem(BB_KEY_ENC_TOKEN) || BB_ENC_TOKEN_HARDCODED;
  const _savedAt = new Date().toISOString();
  const payload = JSON.stringify({
    version: 3,
    updatedAt: _savedAt,
    progress: _bbState || {},
    notes: _bbNotes || {},
    notion: _bbNotion || {},
    timelog: _bbTimelog || {},
    encToken: encToken
  }, null, 2);
  try {
    let r;
    if (gistId) {
      r = await fetch('https://api.github.com/gists/' + gistId, {
        method: 'PATCH',
        headers: { 'Authorization': 'token '+token, 'Content-Type': 'application/json' },
        body: JSON.stringify({ files: { 'bb-progress.json': { content: payload } } })
      });
    } else {
      r = await fetch('https://api.github.com/gists', {
        method: 'POST',
        headers: { 'Authorization': 'token '+token, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          description: 'BusinessBrain AI — Learning OS Progress & Notes',
          public: true,
          files: { 'bb-progress.json': { content: payload } }
        })
      });
    }
    if (!r.ok) { const e = await r.json(); _isSaving = false; return { ok: false, msg: e.message || r.status }; }
    const data = await r.json();
    if (!gistId) bbSetGistId(data.id);
    // Update known timestamp so polling doesn't re-apply our own save
    _lastKnownAt = _savedAt;
    _isSaving = false;
    return { ok: true, id: data.id };
  } catch(e) { _isSaving = false; return { ok: false, msg: e.message }; }
}

/* — Public storage API — */
function bbLoadProgress() {
  if (_bbState === null) _bbState = _localGet(BB_KEY_PROGRESS) || {};
  return _bbState;
}
function bbLoadNotes() {
  if (_bbNotes === null) _bbNotes = _localGet(BB_KEY_NOTES) || {};
  return _bbNotes;
}
function bbLoadNotion() {
  if (_bbNotion === null) _bbNotion = _localGet(BB_KEY_NOTION) || {};
  return _bbNotion;
}
function bbGetNotion(phaseId) { return bbLoadNotion()[phaseId] || ''; }
function bbSetNotion(phaseId, url) {
  const n = bbLoadNotion();
  if (url && url.trim()) n[phaseId] = url.trim();
  else delete n[phaseId];
  _bbNotion = n;
  _localSet(BB_KEY_NOTION, _bbNotion);
  bbScheduleSync();
}
function bbLoadTimelog() {
  if (_bbTimelog === null) _bbTimelog = _localGet(BB_KEY_TIMELOG) || {};
  return _bbTimelog;
}
function bbGetTodayKey() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
}
function bbLogTime(phaseId, minutes) {
  const tl = bbLoadTimelog();
  const day = bbGetTodayKey();
  if (!tl[day]) tl[day] = {};
  tl[day][phaseId] = (tl[day][phaseId] || 0) + minutes;
  _bbTimelog = tl;
  _localSet(BB_KEY_TIMELOG, _bbTimelog);
  bbScheduleSync();
}
function bbGetTimeStats() {
  const tl = bbLoadTimelog();
  const days = Object.keys(tl).sort();
  let totalMins = 0;
  const perDay = {};
  const perPhase = {};
  days.forEach(day => {
    let dayTotal = 0;
    Object.entries(tl[day]).forEach(([ph, m]) => {
      dayTotal += m;
      totalMins += m;
      perPhase[ph] = (perPhase[ph] || 0) + m;
    });
    perDay[day] = dayTotal;
  });
  return { totalMins, perDay, perPhase, days };
}
function bbIsChecked(state, id) { return !!state[id]; }

function bbSetChecked(state, id, val) {
  if (val) state[id] = true; else delete state[id];
  _bbState = state;
  _localSet(BB_KEY_PROGRESS, _bbState);
  bbScheduleSync();
}

function bbGetNote(phaseId) {
  return (bbLoadNotes())[phaseId] || '';
}
function bbSetNote(phaseId, text) {
  const notes = bbLoadNotes();
  if (text && text.trim()) notes[phaseId] = text.trim();
  else delete notes[phaseId];
  _bbNotes = notes;
  _localSet(BB_KEY_NOTES, _bbNotes);
  bbScheduleSync();
}

function bbResetProgress() {
  _bbState = {}; _bbNotes = {};
  _localDel(BB_KEY_PROGRESS); _localDel(BB_KEY_NOTES);
  bbScheduleSync();
}

/* — Sync — */
function bbScheduleSync() {
  if (_bbShareMode) return;
  if (!bbGetToken()) return;
  clearTimeout(_syncTimer);
  _syncTimer = setTimeout(async () => {
    _bbSetSyncUI('syncing');
    const r = await _ghSave();
    _bbSetSyncUI(r.ok ? 'synced' : 'error', r.msg);
  }, 1800);
}

/* — Real-time polling — */
async function _pollGist() {
  if (_bbShareMode || _isSaving) return;
  const gistId = bbGetGistId();
  if (!gistId) return;
  try {
    // Authenticated fetch if token available (avoids rate limits, gets latest data)
    // Fallback to unauthenticated public fetch
    const data = bbGetToken() ? await _ghFetch(gistId) : await _preFetchGist(gistId);
    if (!data || !data.updatedAt) return;
    // First poll — just record timestamp, don't overwrite (page just loaded)
    if (_lastKnownAt === null) { _lastKnownAt = data.updatedAt; return; }
    // Remote is newer → update local state and notify page
    if (data.updatedAt !== _lastKnownAt) {
      _lastKnownAt = data.updatedAt;
      _bbState   = data.progress || {};
      _bbNotes   = data.notes    || {};
      _bbNotion  = data.notion   || {};
      _bbTimelog = data.timelog  || {};
      _localSet(BB_KEY_PROGRESS, _bbState);
      _localSet(BB_KEY_NOTES,    _bbNotes);
      _localSet(BB_KEY_NOTION,   _bbNotion);
      _localSet(BB_KEY_TIMELOG,  _bbTimelog);
      _bbSetSyncUI('synced');
      window.dispatchEvent(new CustomEvent('bb:remoteUpdate'));
    }
  } catch(e) { /* silent — don't disrupt UX */ }
}

function bbStartPolling(intervalMs = 15000) {
  if (_bbShareMode) return;
  if (_pollTimer) clearInterval(_pollTimer);
  // Set initial timestamp from current state
  _lastKnownAt = null;
  _pollTimer = setInterval(_pollGist, intervalMs);
  // First poll after 5s (give page time to settle)
  setTimeout(_pollGist, 5000);
}

function _bbSetSyncUI(status, msg) {
  const el = document.getElementById('bbSyncBadge');
  if (!el) return;
  const map = {
    idle:    { icon: '○', label: 'GitHub: Setup' },
    syncing: { icon: '↺', label: 'সিঙ্ক হচ্ছে…' },
    synced:  { icon: '✓', label: 'GitHub সেভ' },
    error:   { icon: '✗', label: 'সিঙ্ক ব্যর্থ' }
  };
  const s = map[status] || map.idle;
  el.textContent = s.icon + ' ' + s.label;
  el.className = 'bb-sync-badge bb-sync-' + status;
  el.title = msg || '';
}

/* — Page initializer (call on DOMContentLoaded) — */
async function bbInitPage() {
  // 1. Share mode: no password, view-only
  const shareParam = new URLSearchParams(window.location.search).get("share");
  if (shareParam) {
    _bbShareMode = true;
    // shareParam may be gist ID or just "1" (view-only flag)
    // Always load from BB_GIST_ID (hardcoded) — most reliable
    const gistToLoad = (shareParam.length > 5) ? shareParam : BB_GIST_ID;
    let data = await _preFetchGist(gistToLoad);
    // Fallback: if provided shareId failed, try BB_GIST_ID
    if (!data && gistToLoad !== BB_GIST_ID) {
      data = await _preFetchGist(BB_GIST_ID);
    }
    if (data) { _bbState = data.progress || {}; _bbNotes = data.notes || {}; _bbNotion = data.notion || {}; _bbTimelog = data.timelog || {}; }
    bbFixNavLinks();
    return { shareMode: true };
  }

  // 2. Pre-fetch Gist WITHOUT auth (public) — gets data + caches encToken
  const gistId = bbGetGistId();
  _bbSetSyncUI("syncing");
  let gistData = gistId ? await _preFetchGist(gistId) : null;

  // 3. Password gate
  const sessionOk = sessionStorage.getItem(BB_KEY_SESSION) === "1";
  if (!sessionOk) {
    await _bbShowPasswordGate();
  } else {
    await _resolveToken(BB_PASSWORD);
  }

  // 4. Load data: prefer Gist data (already fetched), fallback to localStorage
  if (gistData && (gistData.progress || gistData.notes)) {
    _bbState   = gistData.progress || {};
    _bbNotes   = gistData.notes    || {};
    _bbNotion  = gistData.notion   || {};
    _bbTimelog = gistData.timelog  || {};
    _localSet(BB_KEY_PROGRESS, _bbState);
    _localSet(BB_KEY_NOTES,    _bbNotes);
    _localSet(BB_KEY_NOTION,   _bbNotion);
    _localSet(BB_KEY_TIMELOG,  _bbTimelog);
    _bbSetSyncUI(bbGetToken() ? "synced" : "idle");
  } else if (gistId && bbGetToken()) {
    // Pre-fetch failed (rate limit?) — retry with auth token
    const data = await _ghFetch(gistId);
    if (data) {
      _bbState = data.progress || {};
      _bbNotes = data.notes   || {};
      _localSet(BB_KEY_PROGRESS, _bbState);
      _localSet(BB_KEY_NOTES,   _bbNotes);
    } else {
      _bbState = _localGet(BB_KEY_PROGRESS) || {};
      _bbNotes = _localGet(BB_KEY_NOTES)   || {};
    }
    _bbSetSyncUI("synced");
  } else {
    _bbState = _localGet(BB_KEY_PROGRESS) || {};
    _bbNotes = _localGet(BB_KEY_NOTES)   || {};
    _bbSetSyncUI("idle");
  }
  return { shareMode: false };
}
/* — Password gate UI ─────────────────────────────────────────────────────── */
function _bbShowPasswordGate() {
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.id = 'bbPassOverlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.93);display:flex;align-items:center;justify-content:center;z-index:99999;font-family:inherit';

    // Check if encrypted token exists (returning user) vs first-time
    const hasToken = !!localStorage.getItem(BB_KEY_ENC_TOKEN);
    const hasGist  = !!bbGetGistId();

    overlay.innerHTML = `
      <div id="bbPassBox" style="background:#0f1117;border:1px solid #2a2f3d;border-radius:12px;padding:40px 36px;width:340px;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,0.6);transition:transform 0.1s">
        <div style="font-size:28px;margin-bottom:8px">🔐</div>
        <h2 style="color:#e2e8f0;margin:0 0 6px;font-size:18px;letter-spacing:1px">BUSINESSBRAIN AI</h2>
        <p style="color:#64748b;font-size:13px;margin:0 0 4px">Learning OS — Protected Access</p>
        ${hasToken && hasGist
          ? '<p style="color:#22c55e;font-size:11px;margin:0 0 20px">✓ GitHub token সংরক্ষিত আছে — password দিলেই sync কাজ করবে</p>'
          : '<p style="color:#f59e0b;font-size:11px;margin:0 0 20px">প্রথমবার? Password দাও, তারপর GitHub Setup করো।</p>'}
        <input id="bbPassInput" type="password" placeholder="পাসওয়ার্ড দাও…"
          style="width:100%;box-sizing:border-box;background:#1a1f2e;border:1px solid #2a2f3d;border-radius:8px;color:#e2e8f0;font-size:15px;padding:12px 14px;outline:none;margin-bottom:14px">
        <button id="bbPassBtn"
          style="width:100%;background:#6366f1;border:none;border-radius:8px;color:#fff;font-size:14px;font-weight:600;padding:12px;cursor:pointer;letter-spacing:0.5px">
          প্রবেশ করো →
        </button>
        <p id="bbPassErr" style="color:#ef4444;font-size:12px;margin:10px 0 0;display:none">❌ ভুল পাসওয়ার্ড — আবার চেষ্টা করো</p>
      </div>`;

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    const input = overlay.querySelector('#bbPassInput');
    const btn   = overlay.querySelector('#bbPassBtn');
    const err   = overlay.querySelector('#bbPassErr');
    const box   = overlay.querySelector('#bbPassBox');
    input.focus();

    async function attempt() {
      const pass = input.value.trim();
      if (pass === BB_PASSWORD) {
        // Resolve token from localStorage or hardcoded encrypted token
        await _resolveToken(pass);
        sessionStorage.setItem(BB_KEY_SESSION, '1');
        document.body.style.overflow = '';
        overlay.remove();
        resolve();
      } else {
        err.style.display = 'block';
        input.value = '';
        input.focus();
        // Shake
        ['-8px','8px','-4px','4px','0'].forEach((x, i) =>
          setTimeout(() => { box.style.transform = `translateX(${x})`; }, i * 60));
      }
    }

    btn.addEventListener('click', attempt);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') attempt(); });
  });
}

/* =========================================================
   PROGRESS CALCULATION
   ========================================================= */
function bbComputeStats() {
  const state = bbLoadProgress();
  const perPhase = {};
  let totalAll = 0, totalChecked = 0;

  ROADMAP.forEach(phase => {
    let checked = 0;
    phase.items.forEach((_, i) => {
      const id = phase.id + "-i" + i;
      totalAll++;
      if (bbIsChecked(state, id)) { checked++; totalChecked++; }
    });
    const pct = Math.round((checked / phase.items.length) * 100);

    // Practice tracking (not in main %)
    const pr = PRACTICE[phase.id] || { questions: [], projects: [] };
    let qDone = 0, pDone = 0;
    pr.questions.forEach((_, i) => { if (bbIsChecked(state, phase.id+'-q'+i)) qDone++; });
    pr.projects.forEach((_, i)  => { if (bbIsChecked(state, phase.id+'-proj'+i)) pDone++; });

    perPhase[phase.id] = {
      checked, total: phase.items.length, pct,
      qDone, qTotal: pr.questions.length,
      pDone, pTotal: pr.projects.length
    };
  });

  const perModule = {};
  MODULES.forEach(mod => {
    let checked = 0;
    mod.subtasks.forEach((_, i) => {
      const id = mod.id + "-s" + i;
      totalAll++;
      if (bbIsChecked(state, id)) { checked++; totalChecked++; }
    });
    const pct = mod.subtasks.length ? Math.round((checked / mod.subtasks.length) * 100) : 0;
    const unlocked = mod.requiredPhases.every(pid => perPhase[pid] && perPhase[pid].pct === 100);
    const requiredProgress = Math.round(
      mod.requiredPhases.reduce((s, pid) => s + (perPhase[pid] ? perPhase[pid].pct : 0), 0)
      / mod.requiredPhases.length
    );
    perModule[mod.id] = { checked, total: mod.subtasks.length, pct, unlocked, requiredProgress };
  });

  const overallPct = totalAll ? Math.round((totalChecked / totalAll) * 100) : 0;

  const perExtra = {};
  EXTRAS.forEach(ex => {
    let checked = 0;
    ex.items.forEach((_, i) => { if (bbIsChecked(state, ex.id+"-i"+i)) checked++; });
    perExtra[ex.id] = { checked, total: ex.items.length, pct: Math.round((checked/ex.items.length)*100) };
  });

  let level;
  if (overallPct < 15) level = "BEGINNER";
  else if (overallPct < 40) level = "JUNIOR DEVELOPER";
  else if (overallPct < 65) level = "MID-LEVEL ENGINEER";
  else if (overallPct < 90) level = "SENIOR AI ENGINEER";
  else level = "AI-NATIVE ENGINEER · 2030";

  const etaMonths = Math.max(0, Math.round(36 * (1 - overallPct / 100)));
  return { state, perPhase, perModule, perExtra, totalAll, totalChecked, overallPct, level, etaMonths };
}
