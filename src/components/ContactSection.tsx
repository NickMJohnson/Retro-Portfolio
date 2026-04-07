import { useState } from "react";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
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
              <button type="submit" disabled={status === "sending" || status === "sent"} className="neon-btn text-xs w-full">
                {status === "sending" ? ">> TRANSMITTING..." : status === "sent" ? ">> SENT" : status === "error" ? ">> ERROR — RETRY" : <><Send className="w-3 h-3 inline mr-2" /> TRANSMIT</>}
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
                  href="mailto:nmj37@cornell.edu"
                  className="flex items-center gap-3 text-xs font-mono text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-primary text-primary">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  nmj37@cornell.edu
                </a>
                <a
                  href="https://github.com/NickMJohnson"
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
                  href="https://www.linkedin.com/in/nick-m-johnson/"
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
