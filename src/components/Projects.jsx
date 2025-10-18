"use client";
import { useMemo, useState } from "react";
import Reveal from "./Reveal";

const ALL = "All";
const FILTERS = [ALL, "Automation", "Web App", "AI", "Cloud"];

const PROJECTS = [
  {
    title: "Workflow Automation (n8n)",
    description:
      "Automated client data processing and notifications, saving over 2 hours of manual work daily using n8n and API integrations.",
    tools: ["n8n", "APIs", "Webhooks"],
    result: "Increased operational efficiency by 35%",
    tags: ["Automation", "AI"],
  },
  {
    title: "HR Consulting Web App",
    description:
      "Built a responsive web application with Firebase authentication and automated email workflows using Django.",
    tools: ["Python", "Django", "Firebase"],
    result: "Reduced response time by 40%",
    tags: ["Web App", "Automation", "Cloud"],
  },
  {
    title: "UiPath RPA Workflow",
    description:
      "Created an intelligent automation pipeline, winning 2nd place in a UiPath RPA competition.",
    tools: ["UiPath", "AI Prompt Engineering"],
    result: "Boosted task completion speed by 40%",
    tags: ["Automation", "AI"],
  },
];

export default function Projects() {
  const [active, setActive] = useState(ALL);
  const [openIndex, setOpenIndex] = useState(null);

  const filtered = useMemo(() => {
    if (active === ALL) return PROJECTS;
    return PROJECTS.filter((p) => p.tags.includes(active));
  }, [active]);

  return (
    <section id="projects" className="section">
      <div className="max-w-5xl mx-auto px-4">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold">Featured Projects</h2>
        </Reveal>

        <div className="mt-6 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-full text-sm border ${
                active === f ? "bg-primary text-white border-primary" : "bg-white text-textSecondary border-slate-200 hover:border-primary hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {filtered.map((p, idx) => (
            <Reveal key={p.title}>
              <div className="bg-white rounded-xl shadow-soft p-5 tilt cursor-pointer h-full flex flex-col" onClick={() => setOpenIndex(idx)}>
                <div className="flex-1">
                  <h3 className="font-medium text-secondary">{p.title}</h3>
                  <p className="mt-2 text-sm text-textSecondary">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tools.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-background text-textSecondary">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 text-sm text-secondary">{p.result}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {openIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center px-4" onClick={() => setOpenIndex(null)}>
            <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-6" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-xl font-semibold text-secondary">{filtered[openIndex].title}</h3>
              <p className="mt-3 text-textSecondary">{filtered[openIndex].description}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {filtered[openIndex].tools.map((t) => (
                  <li key={t} className="text-xs px-2 py-0.5 rounded-full bg-background text-textSecondary">{t}</li>
                ))}
              </ul>
              <p className="mt-4 text-secondary">{filtered[openIndex].result}</p>
              <div className="mt-6 flex justify-end">
                <button onClick={() => setOpenIndex(null)} className="btn-secondary">Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
