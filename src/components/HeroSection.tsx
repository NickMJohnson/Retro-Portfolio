import { ArrowDown, Terminal } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FloatingCode } from "@/components/FloatingCode";
import { useState, useEffect } from "react";

const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#@$%&";

const useTypingGlitch = (finalText: string, delay = 0) => {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    timeout = setTimeout(() => {
      let frame = 0;
      const totalFrames = finalText.length * 5;
      const interval = setInterval(() => {
        const progress = frame / totalFrames;
        const revealedCount = Math.floor(progress * finalText.length);
        const scrambled = finalText
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < revealedCount) return char;
            if (i === revealedCount) return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join("");
        setDisplay(scrambled);
        frame++;
        if (frame > totalFrames) {
          clearInterval(interval);
          setDisplay(finalText);
          setDone(true);
        }
      }, 40);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [finalText, delay]);

  return { display, done };
};

const slowScrollTo = (id: string, duration = 1800) => {
  const target = document.getElementById(id);
  if (!target) return;
  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + start;
  const startTime = performance.now();

  const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + (end - start) * ease(progress));
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

export const HeroSection = () => {
  const nick = useTypingGlitch("Nick", 300);
  const johnson = useTypingGlitch("Johnson", 600);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <FloatingCode />
      <div className="section-container w-full relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono text-primary tracking-widest uppercase">sys.init &gt; hello_world</span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tight mb-4">
            <span className="neon-text font-mono">{nick.display}</span>{" "}
            <span className="neon-text-magenta font-mono">{johnson.display}</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-10 font-mono">
            <span className="text-primary">$</span> Software Engineer · AI Builder · Cornell University
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="flex gap-4">
            <button onClick={() => slowScrollTo("spotlight")} className="neon-btn">
              View Projects
            </button>
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
