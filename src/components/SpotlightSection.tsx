import { ExternalLink, Github } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

export interface SpotlightProject {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
  iframeUrl: string;
}

// ============ CONFIGURE YOUR SPOTLIGHT PROJECTS HERE ============
export const spotlightProjects: SpotlightProject[] = [
  {
    title: "Clairvoyant Crime Search",
    description:
      "AI-powered video search engine that lets investigators query surveillance footage in natural language — type \"person with yellow backpack\" and instantly surface the exact clips, across all cameras, ranked by visual similarity.",
    tech: ["Python", "TypeScript", "React", "FastAPI", "PostgreSQL", "pgvector", "OpenCLIP", "Docker", "Tailwind CSS", "ffmpeg"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    iframeUrl: "#",
  },
  {
    title: "SolidGuard",
    description:
      "A security-focused application for smart contract auditing and protection. Helps developers identify vulnerabilities and safeguard their blockchain deployments.",
    tech: ["React", "TypeScript", "Solidity", "Vercel"],
    liveUrl: "https://solidguard.vercel.app",
    githubUrl: "https://github.com",
    iframeUrl: "https://solidguard.vercel.app",
  },
  {
    title: "Billable",
    description:
      "One-tap time tracking with client & project management, automatic PDF invoice generation with tax calculations, and revenue reports with weekly charts and CSV exports. Built for freelancers who want to track every billable minute and get paid faster.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://hourly-halo.vercel.app",
    githubUrl: "https://github.com",
    iframeUrl: "https://hourly-halo.vercel.app",
  },
  {
    title: "AI Research Assistant",
    description:
      "An intelligent research tool that uses RAG to help users search, summarize, and synthesize academic papers. Features semantic search and citation management.",
    tech: ["Python", "FastAPI", "LangChain", "React", "Pinecone"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    iframeUrl: "https://example.com",
  },
  {
    title: "Procedural Terrain Generator",
    description:
      "A WebGL-powered terrain generator using Perlin noise and hydraulic erosion simulation. Export meshes for use in 3D applications.",
    tech: ["TypeScript", "Three.js", "WebGL", "GLSL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    iframeUrl: "https://example.com",
  },
  {
    title: "StockGPT",
    description:
      "An AI-powered stock analysis tool that leverages GPT to provide intelligent insights, market predictions, and portfolio recommendations in real time.",
    tech: ["React", "TypeScript", "OpenAI", "Vercel"],
    liveUrl: "https://stock-gpt-five.vercel.app",
    githubUrl: "https://github.com/NickMJohnson/StockGPT",
    iframeUrl: "https://stock-gpt-five.vercel.app",
  },
];

const BrowserFrame = ({ url, title }: { url: string; title: string }) => (
  <div className="browser-chrome relative scanlines">
    <div className="browser-chrome-bar">
      <div className="browser-dot bg-destructive/60" />
      <div className="browser-dot bg-neon-amber/60" />
      <div className="browser-dot bg-primary/60" />
      <span className="ml-3 text-xs text-muted-foreground truncate font-mono">{url}</span>
    </div>
    <div className="hidden md:block overflow-hidden aspect-video">
      <iframe
        src={url}
        title={title}
        className="w-[200%] h-[200%] border-0 origin-top-left scale-50"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
    <div className="md:hidden">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block aspect-video bg-muted/30 flex items-center justify-center text-xs font-mono text-primary hover:text-foreground transition-colors"
      >
        <span className="flex items-center gap-2">
          <ExternalLink className="w-3.5 h-3.5" /> Open live app →
        </span>
      </a>
    </div>
  </div>
);

export const SpotlightSection = () => {
  return (
    <div className="space-y-20 mt-16">
      <ScrollReveal>
        <div className="section-container !py-0">
          <h3 className="text-xl font-display font-semibold mb-1"><span className="gradient-text">Featured Spotlights</span></h3>
          <p className="text-xs font-mono text-muted-foreground mb-8">// cat ~/projects/featured/*</p>
        </div>
      </ScrollReveal>

      {spotlightProjects.map((project, i) => {
        const reversed = i % 2 !== 0;
        return (
          <ScrollReveal key={project.title} delay={0.1}>
            <div className="max-w-5xl mx-auto px-6">
              <div
                className={cn(
                  "grid md:grid-cols-2 gap-8 items-start",
                  reversed && "md:[direction:rtl] md:[&>*]:[direction:ltr]"
                )}
              >
                <BrowserFrame url={project.iframeUrl} title={project.title} />

                <div className="flex flex-col justify-center cyber-card">
                  <h4 className="text-lg font-display font-semibold text-foreground mb-2">{project.title}</h4>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed font-mono">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="tag-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="neon-btn text-xs">
                      <ExternalLink className="w-3 h-3 inline mr-1.5" /> Visit Live
                    </a>
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="neon-btn neon-btn-magenta text-xs">
                        <Github className="w-3 h-3 inline mr-1.5" /> Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
};
