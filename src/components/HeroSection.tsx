import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative">
      <div className="section-container w-full">
        <ScrollReveal>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Hello, I'm</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
            Your Name
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8">
            Software Engineer · AI Builder · Cornell University
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="flex gap-3">
            <Button asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#resume">Resume</a>
            </Button>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
          <a
            href="#about"
            className="inline-flex items-center gap-2 mt-16 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
            Scroll to explore
          </a>
        </ScrollReveal>
      </div>

      {/* Geometric accent */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 hidden lg:block">
        <div className="w-64 h-64 rounded-full border border-border opacity-20" />
        <div className="absolute top-8 left-8 w-48 h-48 rounded-full border border-primary/20" />
        <div className="absolute top-16 left-16 w-32 h-32 rounded-full bg-primary/5" />
      </div>
    </section>
  );
};
