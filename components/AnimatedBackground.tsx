'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    // Floating keywords
    const keywords = [
      { text: 'SEO', x: Math.random() * canvas.width, y: Math.random() * canvas.height, speed: 0.3, size: 24 },
      { text: 'PPC', x: Math.random() * canvas.width, y: Math.random() * canvas.height, speed: 0.25, size: 20 },
      { text: 'ROI', x: Math.random() * canvas.width, y: Math.random() * canvas.height, speed: 0.35, size: 22 },
      { text: 'ADS', x: Math.random() * canvas.width, y: Math.random() * canvas.height, speed: 0.28, size: 20 },
      { text: 'CTR', x: Math.random() * canvas.width, y: Math.random() * canvas.height, speed: 0.32, size: 18 },
      { text: 'CPC', x: Math.random() * canvas.width, y: Math.random() * canvas.height, speed: 0.27, size: 19 },
    ];

    // Floating particles
    const particles: Array<{ x: number; y: number; size: number; speed: number; opacity: number }> = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw keywords
      keywords.forEach((kw) => {
        ctx.globalAlpha = 0.12;
        ctx.fillStyle = '#709BA3';
        ctx.font = `bold ${kw.size}px Inter, sans-serif`;
        ctx.fillText(kw.text, kw.x, kw.y);

        kw.y -= kw.speed;
        if (kw.y < -50) {
          kw.y = canvas.height + 50;
          kw.x = Math.random() * canvas.width;
        }
      });

      // Draw particles
      particles.forEach((p) => {
        ctx.globalAlpha = p.opacity * 1.5;
        ctx.fillStyle = '#709BA3';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.y -= p.speed;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
      });

      // Draw connecting lines
      ctx.globalAlpha = 0.15;
      ctx.strokeStyle = '#709BA3';
      ctx.lineWidth = 1.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Canvas for animated elements */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }} />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-slow"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(112,155,163,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(112,155,163,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Radial gradients for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(112,155,163,0.12),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(90,128,137,0.12),transparent_50%)]"></div>
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </>
  );
}

