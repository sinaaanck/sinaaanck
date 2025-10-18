# Sinaaan CK – Interactive Tech Portfolio

A polished, responsive, and performant portfolio for Mohammed Sinan (Sinaaan CK).

Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui-like components (Radix primitives)
- Fonts via next/font: Inter (base) + Poppins (headings)
- Icons: lucide-react and Heroicons
- Animations: GSAP + ScrollTrigger for parallax/scroll micro‑interactions; Framer Motion for page/section transitions and mounts; Lottie (lottie-react) for accent animations
- Forms: React Hook Form + Zod validation (client + server via API route)
- Charts (optional): Recharts
- SEO: Next.js metadata + Open Graph/Twitter + JSON‑LD; sitemap/robots
- Analytics: Plausible or Umami (feature‑flag via env; default disabled)

Getting started
1. Install dependencies
   - pnpm i (recommended) or npm i or yarn
2. Run the dev server
   - pnpm dev (or npm run dev)
3. Visit http://localhost:3000

Environment variables
- ANALYTICS_PROVIDER=plausible|umami (optional)
- NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com (when using Plausible)
- NEXT_PUBLIC_UMAMI_WEBSITE_ID=uuid (when using Umami)
- NEXT_PUBLIC_UMAMI_SRC=https://umami.yourdomain.com/script.js (optional override)
- NEXT_PUBLIC_SITE_URL=https://yourdomain.com (used for canonical/OG URLs)

Content & configuration
- site.config.ts contains:
  - profile (name, nickname, tagline, bio, location, email, links)
  - skills categories
  - projects (filters, tech chips, repo/demo links, outcomes)
  - awards
  - SEO (title, description, keywords, OG image)
  - analytics provider flag and chart toggle
- Update placeholder images and Lottie at public/assets/*
- Replace public/resume.pdf with your actual resume

Animation setup
- Framer Motion: lightweight fade/slide/stagger variants in lib/animations/framer.ts
- GSAP: tree-shaken plugin registration in lib/animations/gsap.ts; helpers for hover lift and scroll fade-ins
- Lottie: dynamically imported via lottie-react and JSON loaded from /public/assets

Accessible UI
- Components under components/ui built with Tailwind and Radix primitives
- Focus outlines, skip link, semantic section headings

Performance
- next/image for images, dynamic imports for heavy libs (Recharts, Lottie)
- GSAP plugins are loaded only on client

SEO
- Metadata in app/layout.tsx
- JSON-LD for Person schema in the home page
- app/sitemap.ts and app/robots.ts are provided

Deployment
- Optimized for Vercel; works on Netlify/Render
- No secrets required to run locally

Project structure
- app/(site)/page.tsx – homepage composition
- components/sections/{Hero,About,Skills,Projects,ResumeCTA,Contact}.tsx – each section
- components/ui/* – minimal shadcn/ui-inspired primitives
- lib/animations/{framer.ts, gsap.ts}
- lib/validation/contact.ts – Zod schema
- public/assets/* – images, lottie JSON, og image
- styles/globals.css – Tailwind styles and primitives

Notes
- Replace placeholder images and resume.pdf in public/
- Charts can be toggled via site.config.ts (toggles.charts)
