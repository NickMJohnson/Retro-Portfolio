import { ArrowDown, Terminal } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="section-container w-full">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono text-primary tracking-widest uppercase">sys.init &gt; hello_world</span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tight mb-4 glitch-hover">
            <span className="neon-text">Nick</span>{" "}
            <span className="neon-text-magenta">Johnson</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-10 font-mono">
            <span className="text-primary">$</span> Software Engineer · AI Builder · Cornell University
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="flex gap-4">
            <a href="#projects" className="neon-btn">
              View Projects
            </a>
            <a href="#resume" className="neon-btn neon-btn-magenta">
              Resume
            </a>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
          <a
            href="#about"
            className="inline-flex items-center gap-2 mt-16 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="w-3 h-3 animate-bounce" />
            scroll_to_explore()
          </a>
        </ScrollReveal>
      </div>

      {/* Decorative neon lines */}
      <div className="absolute top-1/3 right-[5%] hidden lg:block pointer-events-none">
        <div className="w-px h-40 bg-gradient-to-b from-transparent via-primary to-transparent opacity-40" />
        <div className="absolute top-20 left-8 w-px h-60 bg-gradient-to-b from-transparent via-accent to-transparent opacity-30" />
        <div className="absolute top-10 left-16 w-32 h-px bg-gradient-to-r from-primary to-transparent opacity-30" />
      </div>
    </section>
  );
};
