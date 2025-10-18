import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-10 items-center">
        <Reveal className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-semibold">About Me</h2>
          <p className="mt-4 text-textSecondary leading-relaxed">
            Currently pursuing Cloud Computing, I’ve completed Full Stack Web Development using Python Django and
            specialize in workflow automation and integration using low-code platforms like n8n, Zapier, and Make. I
            enjoy combining creativity with logic to solve real-world problems through automation.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-textSecondary">
            <span className="px-3 py-1 rounded-full bg-white shadow-soft">India</span>
            <a href="mailto:sinanckz2021@gmail.com" className="px-3 py-1 rounded-full bg-white shadow-soft hover:text-primary">sinanckz2021@gmail.com</a>
            <a href="https://linkedin.com/in/sinaaanck" className="px-3 py-1 rounded-full bg-white shadow-soft hover:text-primary" target="_blank">LinkedIn</a>
            <a href="https://github.com/sinaaanck" className="px-3 py-1 rounded-full bg-white shadow-soft hover:text-primary" target="_blank">GitHub</a>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex justify-center">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-soft hover:rotate-1 hover:scale-[1.02] transition-transform">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-white flex items-center justify-center text-3xl font-semibold text-secondary select-none">
                SC
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
