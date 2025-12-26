"use client";

import { useEffect, useRef } from "react";

interface VortexBackgroundProps {
  className?: string;
  containerClassName?: string;
  spiralArms?: number;
  segments?: number;
  rotationSpeed?: number;
  baseHue?: number;
  rangeHue?: number;
  backgroundColor?: string;
}

export default function VortexBackground({
  className = "",
  containerClassName = "",
  spiralArms = 6,
  segments = 30,
  rotationSpeed = 0.002,
  baseHue = 200,
  rangeHue = 60,
  backgroundColor = "rgb(3, 7, 18)",
}: VortexBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;
    let initialWidth = window.innerWidth;
    let initialHeight = window.innerHeight;

    const resizeCanvas = () => {
      canvas.width = initialWidth;
      canvas.height = initialHeight;
    };

    resizeCanvas();

    // Solo redimensionar en cambios significativos de orientación/ventana
    const handleResize = () => {
      const widthDiff = Math.abs(window.innerWidth - initialWidth);
      const heightDiff = Math.abs(window.innerHeight - initialHeight);

      // Solo actualizar si hay un cambio real (rotación de pantalla o resize de ventana)
      // Ignorar cambios pequeños de la barra de direcciones del navegador
      if (widthDiff > 50 || heightDiff > 150) {
        initialWidth = window.innerWidth;
        initialHeight = window.innerHeight;
        resizeCanvas();
      }
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.45;

      rotation += rotationSpeed;

      // Dibujar brazos espirales
      for (let arm = 0; arm < spiralArms; arm++) {
        const armAngle = (arm / spiralArms) * Math.PI * 2;

        ctx.beginPath();
        for (let i = 0; i < segments; i++) {
          const t = i / segments;
          const radius = t * maxRadius;
          const angle = armAngle + t * Math.PI * 4 + rotation;

          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        const hue = baseHue + (rangeHue / spiralArms) * arm;
        ctx.strokeStyle = `hsla(${hue}, 70%, 60%, 0.6)`;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Puntos luminosos a lo largo del brazo
        for (let i = 0; i < segments; i += 3) {
          const t = i / segments;
          const radius = t * maxRadius;
          const angle = armAngle + t * Math.PI * 4 + rotation;

          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;

          ctx.beginPath();
          ctx.arc(x, y, 2 + t * 3, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${hue}, 70%, 70%, ${0.8 - t * 0.5})`;
          ctx.fill();
        }
      }

      // Centro brillante
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        50
      );
      gradient.addColorStop(0, `hsla(${baseHue}, 80%, 70%, 0.8)`);
      gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 50, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [spiralArms, segments, rotationSpeed, baseHue, rangeHue, backgroundColor]);

  return (
    <div className={`relative ${containerClassName}`}>
      <canvas ref={canvasRef} className={`absolute inset-0 ${className}`} />
    </div>
  );
}
