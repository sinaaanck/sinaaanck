"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? "bg-white/80 backdrop-blur shadow" : "bg-transparent"
    }`}>
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="#hero" className="font-semibold text-secondary hover:text-primary">
          Sinaaan CK
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-textSecondary">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-primary">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <a href="#contact" className="btn-primary text-sm">Hire Me</a>
        </div>
      </div>
    </header>
  );
}
