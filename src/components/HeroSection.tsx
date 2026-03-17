import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="section-container w-full">
        <ScrollReveal>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Hello, I'm</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Your Name</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8">
            Software Engineer · AI Builder · Cornell University
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="flex gap-3">
            <Button asChild className="rounded-full gradient-bg border-0 text-white hover:opacity-90 px-6">
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" asChild className="rounded-full px-6 backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20">
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

      {/* Floating glass orbs */}
      <div className="absolute top-1/2 right-[8%] -translate-y-1/2 hidden lg:block pointer-events-none">
        <div className="w-72 h-72 rounded-full animate-float" style={{
          background: "linear-gradient(135deg, hsla(var(--gradient-start) / 0.15), hsla(var(--gradient-mid) / 0.1))",
          backdropFilter: "blur(40px)",
          border: "1px solid hsla(0 0% 100% / 0.1)",
        }} />
        <div className="absolute top-12 left-12 w-48 h-48 rounded-full animate-float-slow" style={{
          background: "linear-gradient(225deg, hsla(var(--gradient-mid) / 0.2), hsla(var(--gradient-end) / 0.1))",
          backdropFilter: "blur(30px)",
          border: "1px solid hsla(0 0% 100% / 0.08)",
        }} />
        <div className="absolute top-24 left-24 w-28 h-28 rounded-full animate-float-slower gradient-bg opacity-20 blur-sm" />
      </div>
    </section>
  );
};
