"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { track } from "../lib/analytics";

function ConfettiBurst() {
  const colors = ["#14b8a6", "#0ea5e9", "#f59e0b", "#10b981", "#a78bfa"];
  const pieces = Array.from({ length: 24 });
  return (
    <div className="confetti-container pointer-events-none">
      {pieces.map((_, i) => (
        <span
          key={i}
          className="confetti"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 10}%`,
            backgroundColor: colors[i % colors.length],
            animationDelay: `${Math.random() * 200}ms`,
          }}
        />
      ))}
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    // Placeholder submission; integrate your backend or form service.
    console.log("Form submission:", payload);
    track("contact_submit");
    setStatus("success");
    setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <section id="contact" className="section">
      <div className="max-w-3xl mx-auto px-4">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold">Let’s Connect</h2>
          <p className="mt-2 text-textSecondary">
            Interested in collaboration, internships, or freelance automation projects? Drop me a message.
          </p>
        </Reveal>
        <Reveal>
          <form onSubmit={onSubmit} className="mt-6 bg-white rounded-xl shadow-soft p-6 relative">
            {status === "success" && (
              <div className="absolute inset-0 bg-white/80 rounded-xl flex items-center justify-center z-10">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 -z-10">
                    <ConfettiBurst />
                  </div>
                </div>
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-sm text-textSecondary">Name</label>
                <input id="name" name="name" required className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"/>
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-textSecondary">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"/>
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="text-sm text-textSecondary">Message</label>
              <textarea id="message" name="message" rows="5" required className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div className="mt-6 flex justify-end">
              <button type="submit" className="btn-primary">Send Message</button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
