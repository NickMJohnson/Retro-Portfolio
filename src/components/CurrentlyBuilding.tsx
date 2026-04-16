import { ScrollReveal } from "@/components/ScrollReveal";

const items = [
  "Plaid-powered personal finance dashboard",
  "Ketogenic diet app",
];

export const CurrentlyBuilding = () => {
  return (
    <section aria-label="Currently building" className="relative">
      <div className="max-w-5xl mx-auto px-6 py-6">
        <ScrollReveal>
          <div className="cyber-card !p-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <div className="flex items-center gap-2 shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-mono text-primary uppercase tracking-widest">
                now_building
              </span>
            </div>

            <div className="hidden sm:block h-4 w-px bg-border shrink-0" />

            <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-mono text-muted-foreground">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <span className="text-primary/60">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
