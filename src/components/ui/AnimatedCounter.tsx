import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  startTrigger?: boolean;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1700,
  startTrigger
}) => {
  const [count, setCount] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);
  const hasAnimatedRef = useRef<boolean>(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const runAnimation = () => {
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    // Courbe power3.out (easeOutCubic) pour un décollage franc et un atterrissage soigné
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutCubic(progress);
      setCount(easedProgress * target);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);
  };

  useEffect(() => {
    if (!isClient) return;

    // Déclenchement si le trigger externe passe à true
    if (startTrigger) {
      runAnimation();
      return;
    }

    // Déclencheur autonome dès que le compteur entre dans le viewport
    const currentEl = containerRef.current;
    if (!currentEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
        rootMargin: '40px 0px'
      }
    );

    observer.observe(currentEl);

    return () => {
      observer.disconnect();
    };
  }, [isClient, startTrigger, target, duration]);

  // En SSR/SSG : afficher la cible directement pour les robots d'indexation.
  // Côté client après montage : afficher le défilement animé.
  const displayVal = !isClient ? target : (hasAnimatedRef.current ? count : 0);
  const formattedValue = decimals > 0 ? displayVal.toFixed(decimals) : Math.round(displayVal).toString();

  return (
    <span ref={containerRef} className="tabular-nums" suppressHydrationWarning>
      {prefix}{formattedValue}{suffix}
    </span>
  );
};
