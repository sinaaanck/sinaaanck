"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/framer";
import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/animations/gsap";
import { siteConfig } from "@/site.config";

export default function About() {
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      const gsap = await getGsap();
      if (!gsap || !photoRef.current) return;
      const el = photoRef.current;
      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(el, { rotateY: x / 40, rotateX: -y / 40, transformPerspective: 600, duration: 0.3 });
      };
      const onLeave = () => gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.3 });
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    })();
  }, []);

  return (
    <section className="section" aria-labelledby="about-heading">
      <div className="grid place-items-center gap-6 text-center">
        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} id="about-heading" className="font-poppins text-2xl sm:text-3xl font-semibold">
          About Me
        </motion.h2>
        <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl text-text-secondary">
          {siteConfig.profile.bio}
        </motion.p>
        <div ref={photoRef} className="relative h-36 w-36 md:h-40 md:w-40 rounded-full overflow-hidden border border-secondary/20 shadow-soft">
          <Image src="/assets/profile.jpg" alt="Profile photo" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
