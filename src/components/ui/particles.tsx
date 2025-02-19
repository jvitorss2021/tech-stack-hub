"use client";

import { useEffect, useRef, useCallback } from "react";
import { particlesConfig } from "./particles-config";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  refresh?: boolean;
}

interface Circle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  dx: number;
  dy: number;
  color: string;
}

export default function Particles({
  className = "",
  quantity = 50,
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<Circle[]>([]);
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  const drawParticles = useCallback(() => {
    circles.current.length = 0;
    for (let i = 0; i < quantity; i++) {
      circles.current.push(circleParams());
    }
  }, [quantity]);

  const resizeCanvas = useCallback(() => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current.length = 0;
      canvasSize.current.w = window.innerWidth;
      canvasSize.current.h = window.innerHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.scale(dpr, dpr);
    }
  }, [dpr]);

  const initCanvas = useCallback(() => {
    resizeCanvas();
    drawParticles();
  }, [resizeCanvas, drawParticles]);

  const circleParams = useCallback((): Circle => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const size = Math.random() * (particlesConfig.size.max - particlesConfig.size.min) + particlesConfig.size.min;
    const alpha = Math.random() * (particlesConfig.opacity.max - particlesConfig.opacity.min) + particlesConfig.opacity.min;
    const dx = (Math.random() - 0.5) * particlesConfig.speed.max;
    const dy = (Math.random() - 0.5) * particlesConfig.speed.max;
    const color = particlesConfig.colors[Math.floor(Math.random() * particlesConfig.colors.length)].value;
    
    return {
      x,
      y,
      size,
      alpha,
      dx,
      dy,
      color
    };
  }, []);

  const drawCircle = useCallback((circle: Circle) => {
    if (context.current) {
      const { x, y, size, alpha, color } = circle;
      context.current.beginPath();
      context.current.arc(x, y, size, 0, 2 * Math.PI);
      context.current.fillStyle = color.replace(/[\d.]+\)$/g, `${alpha})`);
      context.current.fill();

      // Atualizar posição
      circle.x += circle.dx;
      circle.y += circle.dy;

      // Reposicionar quando sair da tela
      if (circle.x < 0) circle.x = canvasSize.current.w;
      if (circle.x > canvasSize.current.w) circle.x = 0;
      if (circle.y < 0) circle.y = canvasSize.current.h;
      if (circle.y > canvasSize.current.h) circle.y = 0;
    }
  }, []);

  const animate = useCallback(() => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
      circles.current.forEach(circle => {
        drawCircle(circle);
      });
      requestAnimationFrame(animate);
    }
  }, [drawCircle]);

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);

    return () => {
      window.removeEventListener("resize", initCanvas);
    };
  }, [initCanvas, animate]);

  useEffect(() => {
    initCanvas();
  }, [refresh, initCanvas]);

  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`} ref={canvasContainerRef}>
      <canvas 
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'transparent',
          zIndex: 0
        }}
      />
    </div>
  );
} 