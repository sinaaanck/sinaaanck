# Sinaaan CK - Interactive Tech Portfolio

A minimalistic, futuristic personal portfolio for Mohammed Sinan (Sinaaan CK) with fluid animations and micro-interactions. Built with Next.js (App Router) and Tailwind CSS, optimized for responsiveness, performance, and accessibility.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Vanilla, lightweight animations (no heavy deps)
- Optional: Plausible analytics

## Features

- Smooth page transition feel and scroll-triggered reveals
- Hover micro-interactions (subtle scale/tilt/shadow)
- Typewriter skill animation on the hero
- Filterable project cards with modal expansion
- Contact form with success tick + confetti micro animation
- SEO metadata and social tags
- Responsive and accessible structure

## Project Structure

```
src/
  app/
    layout.js        # global layout + metadata + analytics script
    page.js          # homepage composing all sections
    globals.css      # Tailwind + custom animations and utilities
  components/
    Header.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Resume.jsx
    Contact.jsx
    Footer.jsx
    Reveal.jsx       # small IntersectionObserver helper for scroll reveal
  hooks/
    useTypewriter.js # tiny hook for typewriter animation
  lib/
    analytics.js     # Plausible tracking wrapper
public/
  (place resume.pdf and any images here)
```

## Running locally

1. Ensure Node.js 18+ is installed.
2. Install dependencies:

   npm install

3. Start the dev server:

   npm run dev

4. Open http://localhost:3000

## Deployment

The app is designed for zero-config deployment on:

- Vercel (preferred)
- Netlify
- Render

On Vercel: push the repo and import; framework will be detected automatically.

### Analytics (Plausible/Umami)

- Plausible: set the environment variable `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` to your domain (e.g., `sinaaanck.vercel.app`). When set, the Plausible script is automatically injected.
- Umami: swap to Umami by adding its script in `src/app/layout.js` (commented section can be added if needed).

## Customization

- Colors and Theme: Tailwind colors extended in `tailwind.config.js` using the provided palette.
- Fonts: Inter and Poppins are loaded via `next/font`. Update in `src/app/layout.js`.
- SEO: Update the `metadata` export in `src/app/layout.js`.
- Resume: Drop `resume.pdf` into `/public` to enable the download buttons.
- Profile Photo: Place `profile.jpg` in `/public` and update `About.jsx` to use it, or keep the generated initials avatar.

## Accessibility

- Semantic headings and labels
- High-contrast palette on light background
- Focus rings on inputs

## Animation Behavior

- Page transition ambience: light, with soft shadows and depth
- Scroll-triggered reveal: elements use the `.reveal` utility class and the `Reveal` component to slide up and fade
- Hover effects: `.hover-pop` and `.tilt` utilities
- Typewriter: implemented with a lightweight hook to rotate through [Python, Django, n8n, API Integration]
- Contact submit: shows a success tick and a quick confetti burst
- Parallax: subtle floating gradient shapes in the hero that shift with scroll

## SEO Defaults

- Title: "Sinaaan CK | Full Stack Developer & Automation Enthusiast"
- Description: "Portfolio of Mohammed Sinan (Sinaaan CK) — showcasing automation, integration, and cloud development projects."
- Keywords: [Full Stack Developer, Automation, n8n, Python Django, Cloud Computing, Integration, AI AgentKit]

## Notes on Lottie

The design favors minimal, lightweight animations. If you want to add Lottie animations:

- Place your Lottie JSON files in `/public/lottie/`.
- Load `lottie-web` via CDN or as an npm dependency and mount animations in components where needed.
- Keep Lottie use sparing and decorative to maintain performance.

## License

MIT © Mohammed Sinan (Sinaaan CK)
