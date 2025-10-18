"use client";
import { siteConfig } from "@/site.config";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";
import { useEffect, useRef } from "react";
import { fadeInOnScroll, hoverLift } from "@/lib/animations/gsap";
import dynamic from "next/dynamic";

const ResponsiveContainer = dynamic(() => import("recharts").then(m => m.ResponsiveContainer), { ssr: false });
const RadialBarChart = dynamic(() => import("recharts").then(m => m.RadialBarChart), { ssr: false });
const RadialBar = dynamic(() => import("recharts").then(m => m.RadialBar), { ssr: false });

export default function Skills() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    fadeInOnScroll(gridRef.current.querySelectorAll(".skill-card"));
    gridRef.current.querySelectorAll(".skill-card").forEach((el) => hoverLift(el as HTMLElement));
  }, []);

  return (
    <section className="section" aria-labelledby="skills-heading">
      <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} id="skills-heading" className="text-center font-poppins text-2xl sm:text-3xl font-semibold mb-8">
        Skills
      </motion.h2>
      <div ref={gridRef} className="grid gap-4 sm:gap-6">
        {siteConfig.skills.map((group) => (
          <div key={group.category} className="skill-card rounded-lg border border-secondary/10 bg-white p-4 shadow-sm">
            <h3 className="font-semibold mb-2">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full bg-secondary/5 px-2.5 py-1 text-xs text-secondary">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
        {siteConfig.toggles.charts && (
          <div className="rounded-lg border border-secondary/10 bg-white p-4">
            <h3 className="font-semibold mb-2">Proficiency snapshot</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="90%" barSize={12} data={chartData}>
                  <RadialBar minAngle={15} background clockWise dataKey="value" />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

const chartData = [
  { name: "Python", value: 95, fill: "#14b8a6" },
  { name: "Django", value: 90, fill: "#0f172a" },
  { name: "n8n", value: 85, fill: "#f59e0b" },
  { name: "Next.js", value: 88, fill: "#334155" },
];
