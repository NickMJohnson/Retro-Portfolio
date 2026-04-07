import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  demo?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Cornell Rocketry Autopilot",
    description: "GPS-guided parafoil autopilot running on embedded hardware, using sensor fusion of barometric and GPS altitude data to navigate a deployable glider back to a home coordinate.",
    tech: ["C++", "Arduino", "Embedded Systems", "GPS", "Sensor Fusion", "PID Control", "TinyGPS++", "PWM Servos"],
    category: "Systems",
    github: "https://github.com/NickMJohnson/Cornell-Rocketry-Autopilot",
  },
  {
    title: "Image Eraser",
    description: "Click-to-remove object eraser using SAM for instant segmentation and Stable Diffusion inpainting to fill with realistic background.",
    tech: ["Python", "PyTorch", "Stable Diffusion", "Segment Anything", "Gradio", "HuggingFace"],
    category: "AI/ML",
    github: "https://github.com/NickMJohnson/ImageEraser",
  },
  {
    title: "Neural Style Transfer App",
    description: "Real-time neural style transfer using optimized CNN architectures with a web interface.",
    tech: ["Python", "PyTorch", "React", "FastAPI"],
    category: "AI/ML",
    demo: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Distributed Key-Value Store",
    description: "Fault-tolerant distributed KV store implementing Raft consensus protocol.",
    tech: ["Go", "gRPC", "Docker"],
    category: "Systems",
    github: "https://github.com",
  },
  {
    title: "Real-Time Chat Platform",
    description: "Scalable real-time messaging with WebSocket support and end-to-end encryption.",
    tech: ["TypeScript", "React", "Node.js", "Redis"],
    category: "Web Dev",
    demo: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Image Search Engine",
    description: "Content-based image retrieval system using CLIP embeddings and approximate nearest neighbors.",
    tech: ["Python", "FAISS", "CLIP", "FastAPI"],
    category: "AI/ML",
    github: "https://github.com",
  },
  {
    title: "Generative Art Tool",
    description: "Interactive canvas for creating procedural art with exportable SVG output.",
    tech: ["TypeScript", "Canvas API", "React"],
    category: "Creative",
    demo: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Personal Finance Tracker",
    description: "Budget tracking app with bank sync, spending analytics, and goal setting.",
    tech: ["React", "Supabase", "Plaid API", "Recharts"],
    category: "Web Dev",
    demo: "https://example.com",
  },
];

const categories = ["All", "AI/ML", "Web Dev", "Systems", "Creative"];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-heading"><span className="gradient-text">Projects</span></h2>
          <p className="section-subheading">// ls ~/projects</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-1.5 text-xs font-mono uppercase tracking-wider transition-all duration-300",
                  activeCategory === cat
                    ? "bg-primary/10 text-primary border border-primary shadow-[0_0_12px_hsla(var(--neon-cyan)/0.3)]"
                    : "text-muted-foreground border border-border hover:border-primary/50 hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.05}>
              <div className="group cyber-card h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_hsla(var(--neon-cyan)/0.15)]">
                <h3 className="font-semibold text-foreground mb-1.5 text-sm">{project.title}</h3>
                <p className="text-xs text-muted-foreground mb-4 flex-1 font-mono leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 font-mono text-accent-foreground bg-accent/10 border border-accent/20">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.demo && (
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10 font-mono text-xs" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" /> Demo
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-mono text-xs" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" /> Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
