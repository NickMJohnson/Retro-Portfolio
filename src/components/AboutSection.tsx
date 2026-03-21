import { ScrollReveal } from "@/components/ScrollReveal";

const skills = [
  "Python", "TypeScript", "React", "Node.js", "Machine Learning",
  "Computer Vision", "Information Retrieval", "PostgreSQL", "AWS", "Docker",
  "TensorFlow", "PyTorch", "Next.js", "GraphQL",
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
                I'm a software engineer and AI builder studying at Cornell University. I love working at the
                intersection of machine learning and product engineering — building systems that are both
                technically rigorous and genuinely useful.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-foreground/80 leading-relaxed text-sm">
                My work spans computer vision, information retrieval, full-stack web development, and
                systems programming. I'm particularly drawn to problems where thoughtful engineering
                decisions can unlock new capabilities.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-foreground/80 leading-relaxed text-sm">
                Outside of engineering, I care about clean design, clear writing, and building things
                that people actually want to use.
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
