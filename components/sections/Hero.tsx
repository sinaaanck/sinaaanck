"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations/framer";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useRef, useState } from "react";
import { getGsap } from "@/lib/animations/gsap";
import { siteConfig } from "@/site.config";
import { ArrowDown, Download } from "lucide-react";

const skills = ["Python", "Django", "n8n", "API Integration"] as const;

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    let mounted = true;
    const interval = setInterval(() => {
      if (!mounted) return;
      setIdx((i) => (i + 1) % skills.length);
    }, 1800);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    (async () => {
      const gsap = await getGsap();
      if (!gsap || !headlineRef.current) return;
      const tl = gsap.timeline();
      tl.fromTo(
        headlineRef.current.querySelectorAll("span"),
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
      );
    })();
  }, []);

  const skill = useMemo(() => skills[idx], [idx]);

  return (
    <section className="section" aria-labelledby="hero-heading">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="text-center">
        <motion.h1 ref={headlineRef} className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight">
          <span>Sinaaan CK</span> <br />
          <span>Full Stack Developer</span> <span className="text-primary">& Automation</span>
        </motion.h1>
        <motion.p variants={fadeInUp} className="mt-4 text-lg text-text-secondary">
          I build modern web apps and workflows with Python, Django, Next.js, and automations like n8n.
          Skilled in {" "}
          <span className="font-medium text-secondary">{skill}</span>.
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-8 flex items-center justify-center gap-3">
          <a href="#projects" className="focus-outline">
            <Button>
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="/resume.pdf" download className="focus-outline">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
