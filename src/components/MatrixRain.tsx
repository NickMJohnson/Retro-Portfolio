import { useEffect, useRef } from "react";

const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>{}[]()#$%&!?";
const FONT_SIZE = 14;
const SPEED = 1.5;

export const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollingRef = useRef(false);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

    const cols = () => Math.floor(canvas.width / FONT_SIZE);
    let drops: number[] = Array.from({ length: cols() }, () => Math.random() * -50);

    const onScroll = () => {
      scrollingRef.current = true;
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(() => {
        scrollingRef.current = false;
      }, 150);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const draw = () => {
      if (scrollingRef.current) {
        const numCols = cols();
        if (drops.length !== numCols) {
          drops = Array.from({ length: numCols }, (_, i) => drops[i] ?? Math.random() * -50);
        }

        ctx.fillStyle = "rgba(8, 11, 15, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = `${FONT_SIZE}px monospace`;

        drops.forEach((y, i) => {
          const x = i * FONT_SIZE;
          ctx.fillStyle = "rgba(200, 255, 250, 0.9)";
          ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], x, y * FONT_SIZE);
          ctx.fillStyle = "rgba(0, 255, 234, 0.4)";
          ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], x, (y - 1) * FONT_SIZE);

          if (y * FONT_SIZE > canvas.height && Math.random() > 0.975) drops[i] = 0;
          drops[i] += SPEED;
        });
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0, opacity: 0.4 }}
    />
  );
};
