import Reveal from "./Reveal";

const categories = {
  "Automation & Integration": [
    "n8n",
    "Zapier",
    "Make (Integromat)",
    "UiPath",
    "Power Automate",
    "API Integration",
    "Webhooks",
    "AgentKit (OpenAI)",
  ],
  "Programming & Tech Stack": [
    "Python",
    "Django",
    "HTML",
    "CSS",
    "JavaScript",
    "Firebase",
    "RESTful APIs",
    "Database Management (SQL, Firebase)",
  ],
  "Soft Skills & Methodologies": [
    "Adaptability",
    "Problem Solving",
    "Agile",
    "Scrum",
    "Collaboration",
    "Analytical Thinking",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="section bg-white/60">
      <div className="max-w-5xl mx-auto px-4">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {Object.entries(categories).map(([cat, skills]) => (
            <Reveal key={cat}>
              <div className="bg-white rounded-xl shadow-soft p-6 h-full">
                <h3 className="font-medium text-secondary">{cat}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <li
                      key={s}
                      className="px-3 py-1 bg-background rounded-full text-sm text-textSecondary hover:shadow hover-pop hover:text-secondary"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
