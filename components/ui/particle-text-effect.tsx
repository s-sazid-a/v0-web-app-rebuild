"use client";

import React, { useEffect, useRef, useCallback } from "react";

// Brand color palette
const BRAND_COLORS = [
  "#6E00FF", // Purple
  "#00D8FF", // Cyan
  "#FF36B9", // Pink
  "#8250FF", // Light Purple
  "#00B4DC", // Deep Cyan
  "#FFFFFF", // White accent
];

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  color: string;
  size: number;
  vx: number;
  vy: number;
  friction: number;
  ease: number;
}

interface ParticleTextEffectProps {
  words?: string[];
  className?: string;
}

export function ParticleTextEffect({
  words = ["HHAI", "AI-Powered", "Health Revolution", "HyperHealth AI", "Your Health", "Reimagined"],
  className = "",
}: ParticleTextEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const currentWordIndexRef = useRef(0);
  const mouseRef = useRef({ x: -1000, y: -1000, isPressed: false, radius: 120 });
  const lastTimeRef = useRef(0);
  const wordChangeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const getRandomColor = useCallback(() => {
    return BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)];
  }, []);

  const createParticles = useCallback((ctx: CanvasRenderingContext2D, text: string, canvasWidth: number, canvasHeight: number) => {
    const particles: Particle[] = [];
    
    // Calculate dynamic font size based on canvas width and text length
    const maxFontSize = Math.min(canvasWidth * 0.15, 180);
    const minFontSize = 40;
    const baseFontSize = Math.max(minFontSize, maxFontSize - text.length * 8);
    const fontSize = Math.min(baseFontSize, canvasWidth / (text.length * 0.6));
    
    ctx.font = `bold ${fontSize}px Inter, system-ui, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "white";
    
    // Clear and draw text
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillText(text, canvasWidth / 2, canvasHeight / 2);
    
    // Get pixel data
    const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    const data = imageData.data;
    
    // Sample pixels to create particles
    const gap = Math.max(2, Math.floor(fontSize / 25));
    
    for (let y = 0; y < canvasHeight; y += gap) {
      for (let x = 0; x < canvasWidth; x += gap) {
        const index = (y * canvasWidth + x) * 4;
        const alpha = data[index + 3];
        
        if (alpha > 128) {
          particles.push({
            x: Math.random() * canvasWidth,
            y: Math.random() * canvasHeight,
            originX: x,
            originY: y,
            color: getRandomColor(),
            size: Math.random() * 2 + 1,
            vx: 0,
            vy: 0,
            friction: 0.85 + Math.random() * 0.1,
            ease: 0.08 + Math.random() * 0.04,
          });
        }
      }
    }
    
    return particles;
  }, [getRandomColor]);

  const updateParticles = useCallback((ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    const particles = particlesRef.current;
    const mouse = mouseRef.current;
    
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      
      // Mouse interaction (right-click drag to disperse)
      if (mouse.isPressed) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force * 8;
          p.vy += Math.sin(angle) * force * 8;
        }
      }
      
      // Return to origin
      const dx = p.originX - p.x;
      const dy = p.originY - p.y;
      
      p.vx += dx * p.ease;
      p.vy += dy * p.ease;
      
      p.vx *= p.friction;
      p.vy *= p.friction;
      
      p.x += p.vx;
      p.y += p.vy;
      
      // Draw particle with glow effect
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 8;
      ctx.fill();
    }
    
    ctx.shadowBlur = 0;
  }, []);

  const animate = useCallback((time: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Throttle to ~60fps
    if (time - lastTimeRef.current < 16) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }
    lastTimeRef.current = time;
    
    updateParticles(ctx, canvas.width, canvas.height);
    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticles]);

  const initText = useCallback((text: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    particlesRef.current = createParticles(ctx, text, canvas.width, canvas.height);
  }, [createParticles]);

  // Setup canvas and resize observer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const updateCanvasSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      ctx.scale(dpr, dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      
      // Reinitialize particles with current word
      initText(words[currentWordIndexRef.current]);
    };
    
    const resizeObserver = new ResizeObserver(updateCanvasSize);
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }
    
    updateCanvasSize();
    
    // Start animation loop
    animationRef.current = requestAnimationFrame(animate);
    
    // Word change interval
    wordChangeIntervalRef.current = setInterval(() => {
      currentWordIndexRef.current = (currentWordIndexRef.current + 1) % words.length;
      initText(words[currentWordIndexRef.current]);
    }, 4000);
    
    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationRef.current);
      if (wordChangeIntervalRef.current) {
        clearInterval(wordChangeIntervalRef.current);
      }
    };
  }, [words, animate, initText]);

  // Mouse event handlers
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    
    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 2) { // Right click
        mouseRef.current.isPressed = true;
      }
    };
    
    const handleMouseUp = (e: MouseEvent) => {
      if (e.button === 2) {
        mouseRef.current.isPressed = false;
      }
    };
    
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    
    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
      mouseRef.current.isPressed = false;
    };
    
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("contextmenu", handleContextMenu);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("contextmenu", handleContextMenu);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
