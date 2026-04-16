import { ExternalLink, Github } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

export interface SpotlightProject {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string; // where "Visit Live" goes AND the iframe src — must allow framing
  githubUrl?: string;
  displayUrl?: string; // cosmetic label shown in the fake browser chrome; falls back to liveUrl
  iframeScrollOffset?: number; // px to scroll down into the page (in the iframe's coordinate space)
}

// ============ CONFIGURE YOUR SPOTLIGHT PROJECTS HERE ============
// Note: the iframe src uses `liveUrl`. Custom domains like `*.app` often set
// `X-Frame-Options` / `frame-ancestors` that block embedding — keep `liveUrl` on
// a vercel.app subdomain (or another frame-friendly origin) and use `displayUrl`
// only for the pretty label in the fake browser chrome.
export const spotlightProjects: SpotlightProject[] = [
  {
    title: "Clairvoyant Crime Search",
    description:
      "AI-powered video search engine that lets investigators query surveillance footage in natural language — type \"person with yellow backpack\" and instantly surface the exact clips, across all cameras, ranked by visual similarity.",
    tech: ["Python", "TypeScript", "React", "FastAPI", "PostgreSQL", "pgvector", "OpenCLIP", "Docker", "Tailwind CSS", "ffmpeg"],
    liveUrl: "https://clairvoyant-rouge.vercel.app",
    githubUrl: "https://github.com",
    displayUrl: "https://clairvoyant.app",
    iframeScrollOffset: 710,
  },
  {
    title: "SolidGuard",
    description:
      "A security-focused application for smart contract auditing and protection. Helps developers identify vulnerabilities and safeguard their blockchain deployments.",
    tech: ["TypeScript", "React", "Vite", "Tailwind CSS", "shadcn/ui", "Monaco Editor", "Python", "FastAPI", "Pydantic", "OpenAI API", "RAG", "NumPy", "Solidity", "Vercel", "Render"],
    liveUrl: "https://solidguard.vercel.app",
    githubUrl: "https://github.com/NickMJohnson/SolidGuard",
    displayUrl: "https://solidguard.app",
  },
  {
    title: "Billable",
    description:
      "Freelancer time tracking and invoicing app — start a timer, assign it to a client and project, then generate a PDF invoice and email it directly from the app. Includes idle detection, configurable timer rounding, revenue reports, and per-project billing rates.",
    tech: ["TypeScript", "React", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL", "shadcn/ui", "Resend", "jsPDF"],
    liveUrl: "https://hourly-halo.vercel.app",
    githubUrl: "https://github.com/NickMJohnson/hourly-halo",
    displayUrl: "https://hourly-halo.app",
  },
  {
    title: "StockGPT",
    description:
      "Pulls real SEC filings for any public company and turns them into an instant financial analyst. Search a ticker, pick a filing, and get a full income statement, balance sheet, and cash flow statement — sourced live from SEC EDGAR. Computed ratios, interactive trend charts, and an AI-written summary load alongside the data. A chat sidebar lets you ask anything about the filing, and an AI Lab tab lets you request any custom metric or chart in plain English — results appear as an interactive dashboard of tiles.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Recharts", "Python", "FastAPI", "Pydantic", "SEC EDGAR API", "Claude API", "Vercel", "Railway"],
    liveUrl: "https://stock-gpt-five.vercel.app",
    githubUrl: "https://github.com/NickMJohnson/StockGPT",
    displayUrl: "https://stock-gpt.app",
  },
];

const BrowserFrame = ({
  src,
  displayUrl,
  title,
  scrollOffset = 0,
}: {
  src: string;
  displayUrl: string;
  title: string;
  scrollOffset?: number;
}) => (
  <div className="browser-chrome relative scanlines">
    <div className="browser-chrome-bar">
      <div className="browser-dot bg-destructive/60" />
      <div className="browser-dot bg-neon-amber/60" />
      <div className="browser-dot bg-primary/60" />
      <span className="ml-3 text-xs text-muted-foreground truncate font-mono">{displayUrl}</span>
    </div>
    <div className="hidden md:block overflow-hidden aspect-video">
      <iframe
        src={src}
        title={title}
        className="w-[200%] border-0"
        style={{
          height: `calc(200% + ${scrollOffset}px)`,
          transform: `translateY(-${scrollOffset / 2}px) scale(0.5)`,
          transformOrigin: "top left",
        }}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
    <div className="md:hidden">
      <a
        href={src}
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
    <div id="spotlight" className="space-y-20 mt-16">
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
                <BrowserFrame
                  src={project.liveUrl}
                  displayUrl={project.displayUrl ?? project.liveUrl}
                  title={project.title}
                  scrollOffset={project.iframeScrollOffset}
                />
                <div className="flex flex-col justify-center cyber-card">
                  <h4 className="text-lg font-display font-semibold text-foreground mb-2">{project.title}</h4>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed font-mono">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="tag-chip">{t}</span>
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
