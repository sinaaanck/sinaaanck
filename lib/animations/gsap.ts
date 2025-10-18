"use client";
import { isBrowser } from "@/lib/utils";

let gsapInstance: typeof import("gsap") | null = null;

export async function getGsap() {
  if (!isBrowser()) return null;
  if (!gsapInstance) {
    const gsap = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);
    gsapInstance = gsap;
  }
  return gsapInstance;
}

export async function hoverLift(el: HTMLElement) {
  const gsap = await getGsap();
  if (!gsap) return;
  el.addEventListener("mouseenter", () => {
    gsap.to(el, { y: -6, boxShadow: "0 10px 30px rgba(15,23,42,0.12)", duration: 0.3 });
  });
  el.addEventListener("mouseleave", () => {
    gsap.to(el, { y: 0, boxShadow: "0 0 0 rgba(0,0,0,0)", duration: 0.3 });
  });
}

export async function fadeInOnScroll(targets: HTMLElement | HTMLElement[] | NodeListOf<Element>) {
  const gsap = await getGsap();
  if (!gsap) return;
  const items = targets instanceof Element ? [targets as HTMLElement] : Array.from(targets as any);
  items.forEach((item, i) => {
    gsap.fromTo(
      item,
      { autoAlpha: 0, y: 20 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        delay: i * 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
      }
    );
  });
}
