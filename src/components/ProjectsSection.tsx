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
          <p className="section-subheading">A selection of things I've built.</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === cat
                    ? "gradient-bg text-white shadow-lg"
                    : "bg-white/10 dark:bg-white/5 text-muted-foreground backdrop-blur-sm border border-white/15 hover:bg-white/20 hover:text-foreground"
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
              <div className="group glass-card h-full flex flex-col hover:scale-[1.02] transition-all duration-300">
                <h3 className="font-semibold text-foreground mb-1.5">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/10 dark:bg-white/5 text-muted-foreground font-mono backdrop-blur-sm">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.demo && (
                    <Button variant="ghost" size="sm" className="rounded-full" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5 mr-1" /> Demo
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button variant="ghost" size="sm" className="rounded-full" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3.5 h-3.5 mr-1" /> Code
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
