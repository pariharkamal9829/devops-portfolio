'use client';

import { useEffect, useCallback } from 'react';

export function AnimatedBackground() {
  const createSparkle = useCallback((e: MouseEvent) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    sparkle.style.width = `${Math.random() * 100 + 50}px`;
    sparkle.style.height = sparkle.style.width;
    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', createSparkle);
    return () => window.removeEventListener('mousemove', createSparkle);
  }, [createSparkle]);

  return null;
}