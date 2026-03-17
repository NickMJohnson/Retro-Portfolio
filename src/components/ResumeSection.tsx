import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  description: string;
}

const experience: TimelineItem[] = [
  {
    period: "2024 — Present",
    title: "Software Engineering Intern",
    organization: "Tech Company",
    description: "Built ML pipeline infrastructure and internal tools serving 500+ engineers.",
  },
  {
    period: "2023 — 2024",
    title: "Research Assistant",
    organization: "Cornell AI Lab",
    description: "Worked on computer vision models for medical image analysis. Published at CVPR workshop.",
  },
  {
    period: "2022 — 2023",
    title: "Teaching Assistant",
    organization: "Cornell CS Department",
    description: "TA for Data Structures and Algorithms. Held office hours and designed assignments.",
  },
];

const education: TimelineItem[] = [
  {
    period: "2021 — 2025",
    title: "B.S. Computer Science",
    organization: "Cornell University",
    description: "Focus on AI/ML and systems. Dean's List. Relevant coursework: Machine Learning, NLP, Distributed Systems.",
  },
];

const TimelineBlock = ({ items, label }: { items: TimelineItem[]; label: string }) => (
  <div>
    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">{label}</h3>
    <div className="space-y-6 relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px gradient-bg opacity-30" />
      {items.map((item, i) => (
        <ScrollReveal key={i} delay={i * 0.08}>
          <div className="relative pl-8">
            <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full gradient-bg shadow-lg" style={{
              boxShadow: "0 0 12px hsla(var(--primary) / 0.4)"
            }} />
            <p className="text-xs text-muted-foreground font-mono mb-1">{item.period}</p>
            <h4 className="font-medium text-foreground">{item.title}</h4>
            <p className="text-sm text-primary mb-1">{item.organization}</p>
            <p className="text-sm text-muted-foreground">{item.description}</p>
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
          <p className="section-subheading">My experience and education at a glance.</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex gap-3 mb-12">
            <Button asChild className="rounded-full gradient-bg border-0 text-white hover:opacity-90">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4 mr-2" /> View Resume
              </a>
            </Button>
            <Button variant="outline" asChild className="rounded-full backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20">
              <a href="/resume.pdf" download>
                <Download className="w-4 h-4 mr-2" /> Download PDF
              </a>
            </Button>
          </div>
        </ScrollReveal>

        <div className="glass-card">
          <div className="grid md:grid-cols-2 gap-16">
            <TimelineBlock items={experience} label="Experience" />
            <TimelineBlock items={education} label="Education" />
          </div>
        </div>
      </div>
    </section>
  );
};
