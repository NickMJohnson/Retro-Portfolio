import { useState } from "react";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
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
          <p className="section-subheading">Get in touch — I'd love to hear from you.</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass-card space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <textarea
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                className="w-full rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
              />
              <Button type="submit" disabled={submitted} className="rounded-full gradient-bg border-0 text-white hover:opacity-90">
                {submitted ? "Sent!" : <><Send className="w-3.5 h-3.5 mr-2" /> Send Message</>}
              </Button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass-card space-y-4">
              <p className="text-sm text-muted-foreground">
                You can also reach me directly through these channels:
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:you@example.com"
                  className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  you@example.com
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm flex items-center justify-center">
                    <Github className="w-3.5 h-3.5" />
                  </div>
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm flex items-center justify-center">
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
