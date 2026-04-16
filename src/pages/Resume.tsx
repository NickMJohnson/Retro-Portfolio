import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Github, Linkedin, Mail } from "lucide-react";
import {
  education,
  experience,
  leadership,
  skillGroups,
  summary,
  type TimelineItem,
} from "@/lib/resume-data";

const TimelineBlock = ({ items }: { items: TimelineItem[] }) => (
  <div className="space-y-6">
    {items.map((item, i) => (
      <article key={`${item.organization}-${i}`} className="border-l-2 border-primary/40 pl-4">
        <p className="text-xs font-mono text-muted-foreground mb-1">{item.period}</p>
        <h3 className="font-medium text-foreground text-sm">{item.title}</h3>
        <p className="text-xs text-primary font-mono mb-1.5">{item.organization}</p>
        {Array.isArray(item.description) ? (
          <ul className="space-y-1 mt-2">
            {item.description.map((point, j) => (
              <li key={j} className="text-xs text-muted-foreground flex gap-1.5 leading-relaxed">
                <span className="text-primary shrink-0">›</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
        )}
      </article>
    ))}
  </div>
);

const Resume = () => {
  useEffect(() => {
    const prevTitle = document.title;
    const descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta?.getAttribute("content") ?? "";
    document.title = "Nick Johnson — Resume";
    descMeta?.setAttribute(
      "content",
      "Nick Johnson — resume. CS student at Cornell, software engineer, embedded systems, AI/ML, multiple-time founder."
    );
    window.scrollTo(0, 0);
    return () => {
      document.title = prevTitle;
      if (descMeta) descMeta.setAttribute("content", prevDesc);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="grid-bg" />
      <main className="relative z-10 max-w-3xl mx-auto px-6 py-12 md:py-16">
        <nav className="flex items-center justify-between mb-10 text-xs font-mono">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> back to portfolio
          </Link>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors"
          >
            <Download className="w-3.5 h-3.5" /> download pdf
          </a>
        </nav>

        <article>
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-2">
              <span className="neon-text font-mono">Nicholas</span>{" "}
              <span className="neon-text-magenta font-mono">M. Johnson</span>
            </h1>
            <p className="text-sm text-muted-foreground font-mono mb-4">
              Software Engineer · AI Builder · Cornell University
            </p>
            <address className="not-italic flex flex-wrap gap-x-5 gap-y-2 text-xs font-mono">
              <a
                href="mailto:nmj37@cornell.edu"
                className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-3 h-3" /> nmj37@cornell.edu
              </a>
              <a
                href="https://www.linkedin.com/in/nick-m-johnson/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-3 h-3" /> linkedin.com/in/nick-m-johnson
              </a>
              <a
                href="https://github.com/NickMJohnson"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
              >
                <Github className="w-3 h-3" /> github.com/NickMJohnson
              </a>
              <a
                href="https://nickjohnson.site"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                nickjohnson.site
              </a>
            </address>
          </header>

          <section className="mb-10">
            <h2 className="text-xs font-mono text-primary uppercase tracking-wider mb-3">
              &gt; summary
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{summary}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xs font-mono text-primary uppercase tracking-wider mb-4">
              &gt; experience
            </h2>
            <TimelineBlock items={experience} />
          </section>

          <section className="mb-10">
            <h2 className="text-xs font-mono text-primary uppercase tracking-wider mb-4">
              &gt; education
            </h2>
            <TimelineBlock items={education} />
          </section>

          <section className="mb-10">
            <h2 className="text-xs font-mono text-primary uppercase tracking-wider mb-4">
              &gt; leadership
            </h2>
            <TimelineBlock items={leadership} />
          </section>

          <section className="mb-10">
            <h2 className="text-xs font-mono text-primary uppercase tracking-wider mb-4">
              &gt; skills
            </h2>
            <div className="space-y-3">
              {skillGroups.map((group) => (
                <div key={group.label} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider shrink-0 sm:w-24">
                    {group.label}
                  </p>
                  <p className="text-xs text-foreground font-mono leading-relaxed">
                    {group.skills.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </article>

        <footer className="pt-8 mt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
          <p>© {new Date().getFullYear()} Nick Johnson</p>
          <Link to="/" className="hover:text-primary transition-colors">
            ← back to portfolio
          </Link>
        </footer>
      </main>
    </div>
  );
};

export default Resume;
