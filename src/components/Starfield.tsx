import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
}

export const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    const starColors = [
      '#FFFFFF', // Pure star white
      '#E0E1DD', // Soft silver
      '#F4D068', // Moonlight warm gold
      '#CFD8DC', // Cool nebula silver
      '#FFE8A3', // Pale starlight gold
      '#90E0EF'  // Soft cyan starlight
    ];

    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];

    const initStars = () => {
      const count = Math.min(Math.floor((width * height) / 8000), 160);
      stars = [];
      for (let i = 0; i < count; i++) {
        const baseAlpha = Math.random() * 0.6 + 0.2;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.4 + 0.6,
          alpha: baseAlpha,
          baseAlpha,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
          color: starColors[Math.floor(Math.random() * starColors.length)]
        });
      }
    };

    initStars();

    const spawnShootingStar = (customX?: number, customY?: number) => {
      if (shootingStars.length >= 3) return;
      const startX = customX !== undefined ? customX : Math.random() * width * 0.85;
      const startY = customY !== undefined ? customY : Math.random() * (height * 0.4);
      shootingStars.push({
        x: startX,
        y: startY,
        length: Math.random() * 110 + 70,
        speed: Math.random() * 9 + 11,
        angle: (Math.PI / 4) + (Math.random() * 0.3 - 0.15),
        opacity: 1,
        active: true
      });
    };

    // Periodically spawn shooting star with higher frequency
    const shootingStarInterval = setInterval(() => {
      spawnShootingStar();
    }, 3200);

    // Initial shooting star after 1s
    const initialTimer = setTimeout(() => {
      spawnShootingStar(width * 0.3, height * 0.1);
    }, 1000);

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Draw faint nebula clouds
      const grad1 = ctx.createRadialGradient(
        width * 0.75,
        height * 0.2,
        20,
        width * 0.75,
        height * 0.2,
        width * 0.45
      );
      grad1.addColorStop(0, 'rgba(28, 37, 65, 0.4)');
      grad1.addColorStop(0.5, 'rgba(244, 208, 104, 0.04)');
      grad1.addColorStop(1, 'rgba(11, 19, 43, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(
        width * 0.2,
        height * 0.7,
        10,
        width * 0.2,
        height * 0.7,
        width * 0.5
      );
      grad2.addColorStop(0, 'rgba(58, 80, 107, 0.25)');
      grad2.addColorStop(1, 'rgba(11, 19, 43, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Render Twinkling Stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.twinklePhase += star.twinkleSpeed;
        const currentAlpha = star.baseAlpha + Math.sin(star.twinklePhase) * 0.35;
        const boundedAlpha = Math.max(0.1, Math.min(1, currentAlpha));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = boundedAlpha;
        ctx.fill();

        // Extra subtle starlight halo for larger stars
        if (star.radius > 1.2 && boundedAlpha > 0.6) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = boundedAlpha * 0.15;
          ctx.fill();
        }
      }

      // Render Shooting Stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        if (!s.active) {
          shootingStars.splice(i, 1);
          continue;
        }

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.015;

        if (s.opacity <= 0 || s.x > width || s.y > height) {
          s.active = false;
          continue;
        }

        const tailX = s.x - Math.cos(s.angle) * s.length;
        const tailY = s.y - Math.sin(s.angle) * s.length;

        const starGrad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        starGrad.addColorStop(0, 'rgba(244, 208, 104, 0)');
        starGrad.addColorStop(0.7, `rgba(224, 225, 221, ${s.opacity * 0.6})`);
        starGrad.addColorStop(1, `rgba(255, 255, 255, ${s.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = starGrad;
        ctx.lineWidth = 1.6;
        ctx.globalAlpha = s.opacity;
        ctx.stroke();

        // Head bright spot
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.globalAlpha = s.opacity;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(shootingStarInterval);
      clearTimeout(initialTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
