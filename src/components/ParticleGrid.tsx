import { useEffect, useRef } from "react";

const SPACING = 40;
const RADIUS = 1.5;
const INFLUENCE = 120;
const REPEL_STRENGTH = 60;

export const ParticleGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

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

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouse.current = { x: -9999, y: -9999 }; };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = Math.ceil(canvas.width / SPACING) + 1;
      const rows = Math.ceil(canvas.height / SPACING) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const baseX = c * SPACING;
          const baseY = r * SPACING;

          const dx = baseX - mouse.current.x;
          const dy = baseY - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let x = baseX;
          let y = baseY;
          let alpha = 0.2;
          let radius = RADIUS;

          if (dist < INFLUENCE) {
            const force = (1 - dist / INFLUENCE) * REPEL_STRENGTH;
            const angle = Math.atan2(dy, dx);
            x += Math.cos(angle) * force;
            y += Math.sin(angle) * force;
            alpha = 0.2 + (1 - dist / INFLUENCE) * 0.7;
            radius = RADIUS + (1 - dist / INFLUENCE) * 2;
          }

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(170, 100%, 50%, ${alpha})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 0 }}
    />
  );
};
