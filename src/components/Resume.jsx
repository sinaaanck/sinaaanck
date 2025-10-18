import Reveal from "./Reveal";

const awards = ["UiPath RPA Award", "AI Prompt Engineering Award", "Full Stack Django Certification"];

export default function Resume() {
  return (
    <section id="resume" className="section bg-white/60">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-6 items-center">
        <Reveal className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-semibold">Resume & Achievements</h2>
          <ul className="mt-4 list-disc list-inside text-textSecondary">
            {awards.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <div className="flex md:justify-end">
            <a href="/resume.pdf" target="_blank" rel="noopener" className="btn-primary hover-pop">Download My Resume</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
