export type Link = { label: string; href: string };

export const siteConfig = {
  profile: {
    name: "Mohammed Sinan",
    nickname: "Sinaaan CK",
    tagline: "Full Stack Developer & Automation Enthusiast",
    bio:
      "I build robust, scalable web apps and automation workflows. Passionate about Python, Django, n8n, and seamless API integrations.",
    location: "Kerala, India",
    email: "hello@sinaaan.dev",
    links: {
      github: "https://github.com/sinaaan",
      linkedin: "https://www.linkedin.com/in/sinaaanck/",
      twitter: "https://twitter.com/sinaaan_ck",
    },
  },
  skills: [
    {
      category: "Automation & Integration",
      items: [
        "n8n", "Zapier", "API Integration", "RPA", "Webhooks", "OAuth2", "REST/GraphQL",
      ],
    },
    {
      category: "Programming & Tech Stack",
      items: [
        "Python", "Django", "FastAPI", "TypeScript", "Next.js", "React", "Tailwind CSS", "PostgreSQL", "Docker", "Git/GitHub",
      ],
    },
    {
      category: "Soft Skills & Methodologies",
      items: ["Agile", "Problem Solving", "Communication", "Testing", "CI/CD"],
    },
  ],
  projects: [
    {
      title: "HR Consulting Web App",
      description:
        "A platform for HR consultants to manage clients, track engagements, and automate report generation.",
      type: "Web App",
      filters: ["Automation", "Web App"],
      tech: ["Next.js", "Django", "PostgreSQL", "Tailwind"],
      repo: "https://github.com/example/hr-consulting",
      demo: "https://hr-consulting-demo.example.com",
      outcomes: ["Reduced manual effort by 40%", "Improved reporting accuracy"],
      image: "/assets/projects/hr-app.png",
    },
    {
      title: "AI Document Assistant",
      description: "Lightweight AI assistant for extracting insights from PDFs and docs.",
      type: "AI",
      filters: ["AI", "Automation"],
      tech: ["FastAPI", "OpenAI", "Next.js"],
      repo: "https://github.com/example/ai-doc-assistant",
      demo: "https://ai-doc-assistant.example.com",
      outcomes: ["Cut review time by 55%"],
      image: "/assets/projects/ai-doc.png",
    },
    {
      title: "Cloud Cost Analyzer",
      description: "Recharts-driven dashboards to understand cloud spend and optimize resources.",
      type: "Cloud",
      filters: ["Cloud"],
      tech: ["Recharts", "Node.js", "GCP"],
      repo: "https://github.com/example/cloud-cost",
      demo: "https://cloud-cost.example.com",
      outcomes: ["Saved ~$2k/month"],
      image: "/assets/projects/cloud.png",
    },
  ],
  awards: [
    "UiPath RPA Award",
    "AI Prompt Engineering Award",
    "Full Stack Django Certification",
  ],
  seo: {
    title: "Sinaaan CK | Full Stack Developer & Automation Enthusiast",
    description:
      "Portfolio of Sinaaan CK – Full Stack Developer specialized in Python, Django, and automation with n8n & API integrations. View projects, skills, and contact.",
    keywords: [
      "Sinaaan CK",
      "Mohammed Sinan",
      "Full Stack Developer",
      "Django",
      "Python",
      "n8n",
      "Automation",
      "Next.js",
      "React",
      "API Integration",
    ],
    openGraphImage: "/assets/og-image.png",
  },
  analytics: {
    provider: (process.env.ANALYTICS_PROVIDER as "plausible" | "umami" | undefined) || null,
  },
  toggles: {
    charts: true,
  },
} as const;

export type SiteConfig = typeof siteConfig;
