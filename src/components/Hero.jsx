"use client";
import useTypewriter from "../hooks/useTypewriter";
import { useEffect, useState } from "react";

export default function Hero() {
  const skills = ["Python", "Django", "n8n", "API Integration"];
  const { text } = useTypewriter(skills, { typingSpeed: 80, deletingSpeed: 40, delayBetweenWords: 800 });
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.02);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="section pt-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" style={{ transform: `translateY(${offset}px)` }} />
        <div className="absolute top-32 -left-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl" style={{ transform: `translateY(${-offset * 1.5}px)` }} />
      </div>
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm uppercase tracking-widest text-textSecondary">Automation | Integration | Cloud | Full Stack Developer</p>
        <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
          Hi, I’m <span className="text-primary">Mohammed Sinan</span> (Sinaaan CK)
        </h1>
        <p className="mt-4 text-lg md:text-xl text-textSecondary">
          Full Stack Developer | Cloud Enthusiast | Automation Builder
        </p>
        <p className="mt-6 text-base md:text-lg">I build with <span className="font-medium type-cursor text-secondary">{text}</span></p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#projects" className="btn-primary hover-pop">View My Work</a>
          <a href="/resume.pdf" target="_blank" rel="noopener" className="btn-secondary hover-pop">Download Resume</a>
        </div>
      </div>
    </section>
  );
}
