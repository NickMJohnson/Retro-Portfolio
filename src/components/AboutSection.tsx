import { ScrollReveal } from "@/components/ScrollReveal";

const skills = [
  "Python", "TypeScript", "React", "Node.js", "Machine Learning",
  "Computer Vision", "Information Retrieval", "PostgreSQL", "AWS", "Docker",
  "TensorFlow", "PyTorch", "Next.js", "GraphQL",
];

export const AboutSection = () => {
  return (
    <section id="about" className="border-t border-border">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading">A bit about my background and what I do.</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-4">
            <ScrollReveal>
              <p className="text-foreground/80 leading-relaxed">
                I'm a software engineer and AI builder studying at Cornell University. I love working at the
                intersection of machine learning and product engineering — building systems that are both
                technically rigorous and genuinely useful.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-foreground/80 leading-relaxed">
                My work spans computer vision, information retrieval, full-stack web development, and
                systems programming. I'm particularly drawn to problems where thoughtful engineering
                decisions can unlock new capabilities.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-foreground/80 leading-relaxed">
                Outside of engineering, I care about clean design, clear writing, and building things
                that people actually want to use.
              </p>
            </ScrollReveal>
          </div>

          <div className="md:col-span-2">
            <ScrollReveal delay={0.15}>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Skills & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="tag-chip">{skill}</span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
