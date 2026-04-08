import { ScrollReveal } from "@/components/ScrollReveal";

const skills = [
  "Python", "TypeScript", "React", "C++", "OCaml", "Solidity",
  "FastAPI", "Node.js", "Vite", "Tailwind CSS",
  "Machine Learning", "Computer Vision", "RAG", "PostgreSQL", "Stable Diffusion",
  "PyTorch", "scikit-learn", "Supabase", "pgvector",
  "Docker", "Embedded Systems", "Information Retrieval",
];

export const AboutSection = () => {
  return (
    <section id="about">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-heading"><span className="gradient-text">About Me</span></h2>
          <p className="section-subheading">// who_am_i.sh</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3 cyber-card space-y-4">
            <ScrollReveal>
              <p className="text-foreground/80 leading-relaxed text-sm">
                I build things that fly, trade, and think. I'm a CS student at Cornell who's shipped full-stack web apps,
                written flight software for a steerable parachute, founded a few companies, and trained ML models on real-world data.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-foreground/80 leading-relaxed text-sm">
                At Cornell Rocketry I worked on an autopilot system to guide our payload back to the launch site.
                Before that I started Infrared Air to inspect solar arrays with drones, and LifeTote to build
                a bag that converts into a bulletproof vest. I tend to find my way into weird, ambitious projects.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-foreground/80 leading-relaxed text-sm">
                Outside of code I'm into drone racing, model aviation, and guitar. I care a lot about
                making things that actually work and that people actually want to use.
              </p>
            </ScrollReveal>
          </div>

          <div className="md:col-span-2">
            <ScrollReveal delay={0.15}>
              <div className="cyber-card">
                <h3 className="text-xs font-mono text-primary uppercase tracking-wider mb-4">&gt; skills --list</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="tag-chip">{skill}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
