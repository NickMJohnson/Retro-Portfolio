import { useState } from "react";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-heading"><span className="gradient-text">Contact</span></h2>
          <p className="section-subheading">// echo "hello" | send --to me</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="cyber-card space-y-4">
              <input
                type="text"
                placeholder="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="cyber-input"
              />
              <input
                type="email"
                placeholder="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="cyber-input"
              />
              <textarea
                placeholder="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                className="cyber-input resize-none"
              />
              <button type="submit" disabled={submitted} className="neon-btn text-xs w-full">
                {submitted ? ">> SENT" : <><Send className="w-3 h-3 inline mr-2" /> TRANSMIT</>}
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="cyber-card space-y-4">
              <p className="text-xs text-muted-foreground font-mono">
                // direct channels
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:you@example.com"
                  className="flex items-center gap-3 text-xs font-mono text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-primary text-primary">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  you@example.com
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs font-mono text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-border text-muted-foreground">
                    <Github className="w-3.5 h-3.5" />
                  </div>
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs font-mono text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-border text-muted-foreground">
                    <Linkedin className="w-3.5 h-3.5" />
                  </div>
                  LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
