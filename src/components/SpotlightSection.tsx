import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    title: "Hourly Halo",
    description:
      "A beautifully designed productivity tool that helps you track how you spend your time hour-by-hour. Built with a focus on intuitive UX and clean data visualization.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://hourly-halo.vercel.app",
    githubUrl: "https://github.com",
    iframeUrl: "https://hourly-halo.vercel.app",
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
  <div className="browser-chrome">
    <div className="browser-chrome-bar">
      <div className="browser-dot bg-red-400/80" />
      <div className="browser-dot bg-yellow-400/80" />
      <div className="browser-dot bg-green-400/80" />
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
        className="block aspect-video bg-muted/30 flex items-center justify-center text-sm text-muted-foreground hover:text-foreground transition-colors backdrop-blur-sm"
      >
        <span className="flex items-center gap-2">
          <ExternalLink className="w-4 h-4" /> Tap to open live app
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
          <h3 className="text-xl font-semibold mb-1"><span className="gradient-text">Featured Spotlights</span></h3>
          <p className="text-sm text-muted-foreground mb-8">Deep dives into my most impactful projects.</p>
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

                <div className="flex flex-col justify-center glass-card">
                  <h4 className="text-lg font-semibold text-foreground mb-2">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/10 dark:bg-white/5 text-muted-foreground font-mono backdrop-blur-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" asChild className="rounded-full gradient-bg border-0 text-white hover:opacity-90">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" /> Visit Live App
                      </a>
                    </Button>
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild className="rounded-full backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3.5 h-3.5 mr-1.5" /> View Source
                        </a>
                      </Button>
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
