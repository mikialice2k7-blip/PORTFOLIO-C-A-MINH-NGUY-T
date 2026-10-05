import React, { useEffect, useRef, useState } from 'react';

export const MoonCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerFine(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsPointerFine(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    if (!mediaQuery.matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let auraX = -100;
    let auraY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check if hovering over interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = target.closest('button, a, input, textarea, [role="button"], .cursor-pointer, .glass-lunar');
        setIsHovered(!!isInteractive);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth physics damping loop for moonlight aura follower
    const render = () => {
      const ease = 0.14;
      auraX += (mouseX - auraX) * ease;
      auraY += (mouseY - auraY) * ease;

      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${auraX}px, ${auraY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    rafId = requestAnimationFrame(render);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!isPointerFine) return null;

  return (
    <div className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Outer Moonlight Aura follower */}
      <div
        ref={auraRef}
        className="fixed top-0 left-0 -ml-6 -mt-6 pointer-events-none transition-[width,height,background] duration-200 ease-out will-change-transform"
        style={{
          width: isHovered ? '68px' : '48px',
          height: isHovered ? '68px' : '48px',
          marginLeft: isHovered ? '-34px' : '-24px',
          marginTop: isHovered ? '-34px' : '-24px',
          borderRadius: '50%',
          background: isHovered
            ? 'radial-gradient(circle, rgba(244, 208, 104, 0.35) 0%, rgba(244, 208, 104, 0.12) 50%, rgba(244, 208, 104, 0) 75%)'
            : 'radial-gradient(circle, rgba(244, 208, 104, 0.22) 0%, rgba(224, 225, 221, 0.08) 50%, rgba(11, 19, 43, 0) 75%)',
          boxShadow: isHovered ? '0 0 25px rgba(244, 208, 104, 0.4)' : 'none',
          backdropFilter: isHovered ? 'invert(5%)' : 'none',
        }}
      />

      {/* Sharp Center Lunar Dot / Crescent Core */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 -ml-1.5 -mt-1.5 pointer-events-none transition-transform duration-75 will-change-transform flex items-center justify-center"
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isHovered
              ? 'w-3 h-3 bg-[#F4D068] shadow-[0_0_12px_#F4D068] ring-2 ring-white/60'
              : 'w-2.5 h-2.5 bg-[#F4D068] shadow-[0_0_8px_#F4D068]'
          }`}
        />
      </div>
    </div>
  );
};
