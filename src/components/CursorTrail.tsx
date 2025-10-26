import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import cursorNail from '@/assets/cursor-nail.png';

interface TrailDot {
  x: number;
  y: number;
  element: HTMLDivElement;
}

const CursorTrail = () => {
  const trailRef = useRef<TrailDot[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trailLength = 12;
    
    // Create trail elements
    for (let i = 0; i < trailLength; i++) {
      const dot = document.createElement('div');
      dot.className = 'cursor-trail-dot';
      dot.style.cssText = `
        position: fixed;
        width: 32px;
        height: 32px;
        background: radial-gradient(circle, hsl(330 85% 65% / ${0.8 - i * 0.06}), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: screen;
        transform: translate(-50%, -50%);
      `;
      
      // Add nail image to some dots
      if (i % 3 === 0) {
        const img = document.createElement('img');
        img.src = cursorNail;
        img.style.cssText = `
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: ${0.6 - i * 0.04};
          filter: brightness(1.5);
        `;
        dot.appendChild(img);
      }
      
      document.body.appendChild(dot);
      trailRef.current.push({
        x: 0,
        y: 0,
        element: dot
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animate trail
    const animate = () => {
      trailRef.current.forEach((dot, index) => {
        const nextDot = index === 0 ? mousePos.current : trailRef.current[index - 1];
        
        dot.x += (nextDot.x - dot.x) * (0.3 - index * 0.015);
        dot.y += (nextDot.y - dot.y) * (0.3 - index * 0.015);
        
        gsap.to(dot.element, {
          x: dot.x,
          y: dot.y,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      trailRef.current.forEach(dot => {
        dot.element.remove();
      });
      trailRef.current = [];
    };
  }, []);

  return <div ref={containerRef} />;
};

export default CursorTrail;
