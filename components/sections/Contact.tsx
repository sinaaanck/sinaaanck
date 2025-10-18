"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/validation/contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [animationData, setAnimationData] = useState<any>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  useEffect(() => {
    // Lazy-load lottie JSON from public
    fetch("/assets/lottie/success.json")
      .then((res) => res.json())
      .then((json) => setAnimationData(json))
      .catch(() => {});
  }, []);

  const onSubmit = async (values: ContactInput) => {
    // Client-side validation already occurs via zodResolver
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      setSuccess(true);
      reset();
      // basic confetti-like micro interaction using emoji fall
      if (typeof window !== "undefined") {
        import("gsap").then(({ default: gsap }) => {
          const el = document.createElement("div");
          el.textContent = "🎉";
          el.style.position = "fixed";
          el.style.left = "50%";
          el.style.top = "-40px";
          el.style.fontSize = "32px";
          el.style.zIndex = "1000";
          document.body.appendChild(el);
          gsap.to(el, { y: window.innerHeight + 40, duration: 1.2, ease: "power2.in", onComplete: () => el.remove() });
        });
      }
    }
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="text-center font-poppins text-2xl sm:text-3xl font-semibold mb-8">Contact</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-lg border border-secondary/10 bg-white p-6 shadow-sm">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" {...register("name")} />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="How can I help you?" rows={5} {...register("message")} />
            {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit" disabled={isSubmitting}>Send</Button>
            <a href="mailto:hello@sinaaan.dev" className="text-sm text-text-secondary hover:underline">Or email directly</a>
          </div>
        </form>
        <div className="grid place-items-center rounded-lg border border-secondary/10 bg-white p-6">
          {success ? (
            <div className="text-center">
              <div className="mx-auto h-40 w-40">
                {animationData ? <Lottie animationData={animationData} loop={false} /> : null}
              </div>
              <p className="mt-2 text-sm text-text-secondary">Thanks! I will get back to you soon.</p>
            </div>
          ) : (
            <div className="text-center text-sm text-text-secondary">
              Prefer socials? Find me on {" "}
              <a className="text-primary underline" href={"https://github.com/sinaaan"} target="_blank" rel="noreferrer">GitHub</a>
              {" "}and{" "}
              <a className="text-primary underline" href={"https://www.linkedin.com/in/sinaaanck/"} target="_blank" rel="noreferrer">LinkedIn</a>.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
