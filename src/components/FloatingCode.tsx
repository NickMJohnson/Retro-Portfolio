import { useEffect, useRef } from "react";

const FRAGMENTS = [
  "const autopilot = new BLiMS();",
  "SELECT * FROM embeddings",
  "model.fit(X_train, y_train)",
  "await resend.emails.send()",
  "git commit -m 'fix'",
  "pgvector <=> embedding",
  "useEffect(() => {}, [])",
  "fastapi.get('/search')",
  "torch.nn.Linear(512, 1)",
  "servo.write(angle);",
  "GPS.parse(nmea);",
  "const [state, setState]",
  "docker compose up",
  "supabase.from('time_entries')",
  "claude.messages.create()",
  "OCaml | match x with",
  "sklearn.ensemble.RandomForest",
  "iframe.scrollTop = 0",
  "PID.compute(error);",
  "XBRL.parse(filing)",
];

interface Fragment {
  text: string;
  x: number;
  y: number;
  opacity: number;
  speed: number;
  drift: number;
  fontSize: number;
  fadeIn: boolean;
  life: number;
  maxLife: number;
}

export const FloatingCode = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawnFragment = (): Fragment => ({
      text: FRAGMENTS[Math.floor(Math.random() * FRAGMENTS.length)],
      x: Math.random() * canvas.width,
      y: canvas.height + 20,
      opacity: 0,
      speed: 0.2 + Math.random() * 0.4,
      drift: (Math.random() - 0.5) * 0.3,
      fontSize: 11 + Math.floor(Math.random() * 4),
      fadeIn: true,
      life: 0,
      maxLife: 300 + Math.random() * 200,
    });

    let fragments: Fragment[] = Array.from({ length: 8 }, () => {
      const f = spawnFragment();
      f.y = Math.random() * canvas.height;
      f.life = Math.random() * f.maxLife * 0.5;
      f.opacity = Math.random() * 0.25;
      return f;
    });

    let frameCount = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn new fragment every ~120 frames
      frameCount++;
      if (frameCount % 120 === 0 && fragments.length < 14) {
        fragments.push(spawnFragment());
      }

      fragments = fragments.filter((f) => f.life < f.maxLife);

      fragments.forEach((f) => {
        f.life++;
        f.y -= f.speed;
        f.x += f.drift;

        const lifeRatio = f.life / f.maxLife;
        if (lifeRatio < 0.15) {
          f.opacity = (lifeRatio / 0.15) * 0.3;
        } else if (lifeRatio > 0.75) {
          f.opacity = ((1 - lifeRatio) / 0.25) * 0.3;
        } else {
          f.opacity = 0.3;
        }

        ctx.font = `${f.fontSize}px monospace`;
        ctx.fillStyle = `rgba(0, 255, 234, ${f.opacity})`;
        ctx.fillText(f.text, f.x, f.y);
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};
