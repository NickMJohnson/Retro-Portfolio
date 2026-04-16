import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "404 // signal_lost";
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="grid-bg" />

      <main className="relative z-10 w-full max-w-xl px-6">
        <div className="cyber-card space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-widest">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>err::route_not_found</span>
          </div>

          <div>
            <h1 className="text-6xl md:text-7xl font-display font-bold tracking-tight mb-3">
              <span className="neon-text-magenta font-mono">404</span>
            </h1>
            <p className="text-sm md:text-base font-mono text-foreground">
              <span className="neon-text">signal_lost</span>{" "}
              <span className="text-muted-foreground">//</span>{" "}
              <span className="text-muted-foreground">retry?</span>
            </p>
          </div>

          <pre className="text-xs font-mono text-muted-foreground whitespace-pre-wrap break-all">
            <span className="text-primary">$</span> cat{" "}
            <span className="text-accent">{location.pathname}</span>
            {"\n"}
            <span className="text-destructive">cat: {location.pathname}: No such file or directory</span>
          </pre>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link to="/" className="neon-btn text-xs">
              <ArrowLeft className="w-3 h-3 inline mr-2" /> return_home()
            </Link>
            <Link to="/resume" className="neon-btn neon-btn-magenta text-xs">
              view_resume()
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
