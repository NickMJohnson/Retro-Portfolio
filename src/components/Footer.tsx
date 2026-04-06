export const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-4">
      <div className="flex flex-wrap justify-center gap-6 text-xs font-mono">
        <a href="mailto:nmj37@cornell.edu" className="text-muted-foreground hover:text-foreground transition-colors">nmj37@cornell.edu</a>
        <a href="https://www.linkedin.com/in/nick-m-johnson/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">linkedin.com/in/nick-m-johnson</a>
        <a href="https://github.com/NickMJohnson" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">github.com/NickMJohnson</a>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
        <p className="text-xs text-muted-foreground font-mono">© {new Date().getFullYear()} Nick Johnson. All rights reserved.</p>
        <p className="text-xs text-muted-foreground font-mono">Built with React + Tailwind · <span className="neon-text">system_online</span></p>
      </div>
    </div>
  </footer>
);
