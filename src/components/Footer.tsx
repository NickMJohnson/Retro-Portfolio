export const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs text-muted-foreground font-mono">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <p className="text-xs text-muted-foreground font-mono">Built with React + Tailwind · <span className="neon-text">system_online</span></p>
    </div>
  </footer>
);
