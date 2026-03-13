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
];

const BrowserFrame = ({ url, title }: { url: string; title: string }) => (
  <div className="browser-chrome">
    <div className="browser-chrome-bar">
      <div className="browser-dot bg-destructive/60" />
      <div className="browser-dot bg-primary/30" />
      <div className="browser-dot bg-primary/20" />
      <span className="ml-3 text-xs text-muted-foreground truncate font-mono">{url}</span>
    </div>
    {/* Desktop: iframe, Mobile: link placeholder */}
    <div className="hidden md:block">
      <iframe
        src={url}
        title={title}
        className="w-full aspect-video border-0"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
    <div className="md:hidden">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block aspect-video bg-muted flex items-center justify-center text-sm text-muted-foreground hover:text-foreground transition-colors"
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
        <h3 className="text-xl font-semibold text-foreground mb-1">Featured Spotlights</h3>
        <p className="text-sm text-muted-foreground mb-8">Deep dives into my most impactful projects.</p>
      </ScrollReveal>

      {spotlightProjects.map((project, i) => {
        const reversed = i % 2 !== 0;
        return (
          <ScrollReveal key={project.title} delay={0.1}>
            <div
              className={cn(
                "grid md:grid-cols-2 gap-8 items-start",
                reversed && "md:[direction:rtl] md:[&>*]:[direction:ltr]"
              )}
            >
              <BrowserFrame url={project.iframeUrl} title={project.title} />

              <div className="flex flex-col justify-center">
                <h4 className="text-lg font-semibold text-foreground mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground font-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" /> Visit Live App
                    </a>
                  </Button>
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3.5 h-3.5 mr-1.5" /> View Source
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
};
