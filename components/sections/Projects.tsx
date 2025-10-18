"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/site.config";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";

const FILTERS = ["All", "Automation", "Web App", "AI", "Cloud"] as const;

export default function Projects() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");
  const filtered = useMemo(() => {
    if (active === "All") return siteConfig.projects;
    return siteConfig.projects.filter((p) => p.filters.includes(active));
  }, [active]);

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} id="projects-heading" className="text-center font-poppins text-2xl sm:text-3xl font-semibold mb-8">
        Projects
      </motion.h2>

      <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
        {FILTERS.map((f) => (
          <Button key={f} variant={active === f ? "default" : "outline"} onClick={() => setActive(f)} className="h-9">
            {f}
          </Button>
        ))}
      </div>

      <div className="grid gap-6">
        {filtered.map((project) => (
          <Dialog key={project.title}>
            <DialogTrigger asChild>
              <div className="cursor-pointer rounded-lg border border-secondary/10 bg-white p-4 shadow-sm card-hover">
                <div className="flex items-start gap-4">
                  <div className="relative h-20 w-28 flex-none overflow-hidden rounded-md border border-secondary/10">
                    <Image src={project.image} alt="project thumbnail" fill className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-text-secondary">{project.description}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <Badge key={t} className="text-[10px]">{t}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{project.title}</DialogTitle>
                <DialogDescription>{project.description}</DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-3">
                <div className="relative h-40 w-full overflow-hidden rounded-md border border-secondary/10">
                  <Image src={project.image} alt="project full" fill className="object-cover" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                {project.outcomes?.length ? (
                  <ul className="list-disc pl-5 text-sm text-text-secondary">
                    {project.outcomes.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                ) : null}
                <div className="flex gap-2 pt-2">
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      <Button variant="outline">Repository</Button>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <Button>Live Demo</Button>
                    </a>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
