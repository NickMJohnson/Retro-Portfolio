import React, { useRef, useEffect } from 'react';

interface ParticleGridBackgroundProps {
  particleColor?: string;
  particleSize?: number;
  gridSpacing?: number;
  repelRadius?: number;
  glowIntensity?: number;
}

const ParticleGridBackground: React.FC<ParticleGridBackgroundProps> = ({
  particleColor = '#00ffea',
  particleSize = 2,
  gridSpacing = 40,
  repelRadius = 150,
  glowIntensity = 15,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<Array<{
    baseX: number;
    baseY: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = container.offsetWidth;
    let height = container.offsetHeight;

    const initParticles = () => {
      particlesRef.current = [];
      const cols = Math.ceil(width / gridSpacing);
      const rows = Math.ceil(height / gridSpacing);
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const baseX = col * gridSpacing + gridSpacing / 2;
          const baseY = row * gridSpacing + gridSpacing / 2;
          particlesRef.current.push({ baseX, baseY, x: baseX, y: baseY, vx: 0, vy: 0 });
        }
      }
    };

    const resize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const mouse = mouseRef.current;

      particlesRef.current.forEach((particle) => {
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < repelRadius) {
          const force = (repelRadius - dist) / repelRadius;
          const angle = Math.atan2(dy, dx);
          particle.vx += Math.cos(angle) * force * force * 3;
          particle.vy += Math.sin(angle) * force * force * 3;
        }

        particle.vx += (particle.baseX - particle.x) * 0.05;
        particle.vy += (particle.baseY - particle.y) * 0.05;
        particle.vx *= 0.85;
        particle.vy *= 0.85;
        particle.x += particle.vx;
        particle.y += particle.vy;

        const distToMouse = Math.sqrt(
          Math.pow(particle.x - mouse.x, 2) + Math.pow(particle.y - mouse.y, 2)
        );

        let opacity = 0.2;
        let glowSize = 0;
        if (distToMouse < repelRadius * 1.5) {
          const proximity = 1 - distToMouse / (repelRadius * 1.5);
          opacity = 0.2 + proximity * 0.7;
          glowSize = proximity * glowIntensity;
        }

        ctx.shadowBlur = glowSize > 0 ? glowSize : 0;
        ctx.shadowColor = particleColor;
        ctx.globalAlpha = opacity;
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleColor, particleSize, gridSpacing, repelRadius, glowIntensity]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default ParticleGridBackground;
