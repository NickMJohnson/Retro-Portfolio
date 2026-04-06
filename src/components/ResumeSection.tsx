import { FileText, Download } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  description: string | string[];
}

const experience: TimelineItem[] = [
  {
    period: "Dec 2024 — Jun 2025",
    title: "Material Handler",
    organization: "East Penn Manufacturing",
    description: "Executed warehouse operations including order packing and fulfillment. Interacted with customers across Colorado.",
  },
  {
    period: "Dec 2021 — Sep 2024",
    title: "Co-Founder",
    organization: "LifeTote",
    description: [
      "Prototyped and engineered a convertible tote bag that rapidly transforms into a bulletproof vest.",
      "Negotiated with suppliers and manufacturers to cut costs 60% and shorten lead times.",
      "Launched website and Kickstarter, secured patent protection, and scaled revenue to $50k.",
    ],
  },
  {
    period: "Sep 2021 — May 2024",
    title: "Recovery & Payload Team Member",
    organization: "Cornell Rocketry",
    description: [
      "Engineered autopilot flight software integrating GPS, altimeter, compass, and accelerometer data to guide payload recovery to a predefined landing zone.",
      "Designed and implemented a solar panel deployment and positioning system to recharge flight batteries.",
      "Competed at the Spaceport America Cup.",
    ],
  },
  {
    period: "Feb 2020 — Jan 2021",
    title: "Founder",
    organization: "Versa Finance",
    description: [
      "Prototyped personal finance app leveraging bank account data, ML, and behavioral psychology to curb spending and increase savings.",
      "Led a team of 12 building a business plan, marketing plan, and ML bank statement analysis.",
    ],
  },
  {
    period: "Aug 2019 — May 2020",
    title: "Founder",
    organization: "Infrared Air",
    description: [
      "Engineered a drone platform integrating RGB and thermal imaging to identify and diagnose defective solar cells.",
      "Conducted inspections of 100+ residential and commercial solar arrays.",
    ],
  },
];

const education: TimelineItem[] = [
  {
    period: "2021 — May 2026",
    title: "B.E. Computer Science",
    organization: "Cornell University, College of Engineering",
    description: "Relevant experience: Cornell Rocketry (Recovery & Payload), Solid-Guard ML project, Clairvoyant Crime Detection.",
  },
];

const leadership: TimelineItem[] = [
  {
    period: "Aug 2019 — May 2020",
    title: "Founder",
    organization: "Flight Discovery Program",
    description: "Designed hands-on school curriculum in flight; taught fifth-grade classes aerodynamics, drone piloting, and rocketry culminating in student-designed rocket launches.",
  },
  {
    period: "Apr 2019 — Jun 2019",
    title: "Founder",
    organization: "Light My Fire Camp",
    description: "Founded a camp matching middle school students with high schoolers to collaborate on self-chosen projects. Fundraised to make participation fully free for all accepted students.",
  },
];

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
            <p className="text-xs text-muted-foreground font-mono mb-1">{item.period}</p>
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
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="neon-btn text-xs">
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
