import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import ResumeCTA from "@/components/sections/ResumeCTA";
import Contact from "@/components/sections/Contact";
import Script from "next/script";
import { siteConfig } from "@/site.config";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.profile.name,
    jobTitle: siteConfig.profile.tagline,
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    sameAs: [siteConfig.profile.links.github, siteConfig.profile.links.linkedin, siteConfig.profile.links.twitter].filter(Boolean),
  };

  return (
    <div className="space-y-20">
      <Script id="jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ResumeCTA />
      <Contact />
    </div>
  );
}
