import { FileText, Download } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { experience, education, leadership, type TimelineItem } from "@/lib/resume-data";

const TimelineBlock = ({ items, label }: { items: TimelineItem[]; label: string }) => (
  <div>
    <h3 className="text-xs font-mono text-primary uppercase tracking-wider mb-6">&gt; {label.toLowerCase()}</h3>
    <div className="space-y-6 relative">
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent opacity-40" />
      {items.map((item, i) => (
        <ScrollReveal key={i} delay={i * 0.08}>
          <div className="relative pl-8">
            <div
              className="absolute left-0 top-1.5 w-[11px] h-[11px] border-2 border-primary bg-background"
              style={{ boxShadow: "0 0 8px hsla(var(--neon-cyan) / 0.6)" }}
            />
            <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
            <p className="text-xs text-primary font-mono mb-1">{item.organization}</p>
            {Array.isArray(item.description) ? (
              <ul className="space-y-1">
                {item.description.map((point, j) => (
                  <li key={j} className="text-xs text-muted-foreground flex gap-1.5">
                    <span className="text-primary shrink-0">›</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-muted-foreground">{item.description}</p>
            )}
          </div>
        </ScrollReveal>
      ))}
    </div>
  </div>
);

export const ResumeSection = () => {
  return (
    <section id="resume">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-heading"><span className="gradient-text">Resume</span></h2>
          <p className="section-subheading">// cat ~/resume.md</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex gap-3 mb-12">
            <a href="/resume" className="neon-btn text-xs">
              <FileText className="w-3.5 h-3.5 inline mr-2" /> View Resume
            </a>
            <a href="/resume.pdf" download className="neon-btn neon-btn-magenta text-xs">
              <Download className="w-3.5 h-3.5 inline mr-2" /> Download PDF
            </a>
          </div>
        </ScrollReveal>

        <div className="cyber-card">
          <div className="grid md:grid-cols-2 gap-16">
            <TimelineBlock items={experience} label="Experience" />
            <div className="space-y-16">
              <TimelineBlock items={education} label="Education" />
              <TimelineBlock items={leadership} label="Leadership" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
