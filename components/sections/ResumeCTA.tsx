"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/site.config";
import { Award } from "lucide-react";

export default function ResumeCTA() {
  return (
    <section className="section" aria-labelledby="resume-heading">
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-lg border border-secondary/10 bg-white p-6 text-center shadow-soft">
        <h2 id="resume-heading" className="font-poppins text-2xl font-semibold">Resume & Achievements</h2>
        <p className="mt-2 text-text-secondary">Download my resume or view notable awards and certifications.</p>
        <div className="mt-4">
          <a href="/resume.pdf" download>
            <Button>Download Resume</Button>
          </a>
        </div>
        <ul className="mx-auto mt-6 grid max-w-lg gap-2 text-left">
          {siteConfig.awards.map((a) => (
            <li key={a} className="flex items-center gap-2 text-sm text-text-secondary">
              <Award className="h-4 w-4 text-accent" />
              {a}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
