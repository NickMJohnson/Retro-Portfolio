export const Footer = () => (
  <footer className="border-t border-white/10 py-8">
    <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <p className="text-xs text-muted-foreground">Built with React, Tailwind & <span className="gradient-text font-medium">good taste</span>.</p>
    </div>
  </footer>
);
