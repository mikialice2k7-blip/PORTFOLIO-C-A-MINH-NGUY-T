import React, { useEffect, useRef } from 'react';

export const LiquidMeshBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth - 0.5) * 35;
      mouseY = (e.clientY / innerHeight - 0.5) * 35;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.04;
      currentY += (mouseY - currentY) * 0.04;

      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0B132B]">
      {/* Liquid Aurora Mesh Layer */}
      <div
        ref={containerRef}
        className="absolute -inset-[15%] w-[130%] h-[130%] opacity-70 will-change-transform filter blur-[90px]"
        aria-hidden="true"
      >
        {/* Blob 1: Golden Moonlight Fluid Pool (Top Right) */}
        <div
          className="absolute top-[12%] right-[18%] w-[580px] h-[580px] rounded-full animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(244, 208, 104, 0.16) 0%, rgba(244, 208, 104, 0.05) 45%, rgba(11, 19, 43, 0) 75%)',
            animationDuration: '18s',
          }}
        />

        {/* Blob 2: Deep Cosmic Space Fluid (Center Left) */}
        <div
          className="absolute top-[38%] left-[8%] w-[680px] h-[680px] rounded-full animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(58, 80, 107, 0.35) 0%, rgba(28, 37, 65, 0.25) 40%, rgba(11, 19, 43, 0) 70%)',
            animationDuration: '24s',
            animationDelay: '-6s',
          }}
        />

        {/* Blob 3: Silver Astral Nebula (Bottom Center) */}
        <div
          className="absolute bottom-[10%] left-[32%] w-[620px] h-[620px] rounded-full animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(224, 225, 221, 0.1) 0%, rgba(38, 50, 85, 0.3) 45%, rgba(11, 19, 43, 0) 75%)',
            animationDuration: '20s',
            animationDelay: '-10s',
          }}
        />

        {/* Blob 4: Golden Shimmer Ripple (Hero Center Accent) */}
        <div
          className="absolute top-[22%] left-[45%] w-[420px] h-[420px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, rgba(244, 208, 104, 0.12) 0%, rgba(244, 208, 104, 0.02) 55%, transparent 80%)',
            animationDuration: '12s',
          }}
        />
      </div>

      {/* Liquid Glass Overlay Noise / Prismatic Sheen */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};
