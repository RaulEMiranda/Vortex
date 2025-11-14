"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface PageTransitionLoaderProps {
  isActive: boolean;
}

export const PageTransitionLoader: React.FC<PageTransitionLoaderProps> = ({
  isActive,
}) => {
  // Estados para controlar la animación de entrada y salida
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShouldRender(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 10);
    } else {
      setIsVisible(false);
      setTimeout(() => {
        setShouldRender(false);
      }, 1000);
    }
  }, [isActive]);

  // No renderizar nada si no debe estar visible
  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-1000 backdrop-blur-xl ${
        isVisible ? "opacity-100 blur-0 bg-slate-200" : "opacity-0 blur-xl"
      }`}
    >
      <div className="absolute inset-0" />

      {/* Contenedor del loader */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Logo o imagen animada */}
        <div className="relative w-32 h-32">
          {/* Círculos animados de fondo */}

          <Image
            src="/logo.png"
            alt="Logo"
            width={800}
            height={800}
            className="object-contain animate-spin-medium"
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-700 mb-2 animate-pulse">
          Vortex Dev
        </h1>
      </div>

      {/* Texto de carga */}
      <div className="text-center space-y-2">
        {/* Barra de progreso */}
        <div
          key={isVisible ? "progress-active" : "progress-hidden"}
          className="w-48 h-1.5 bg-gray-300 rounded-full overflow-hidden"
        >
          <div className="h-full bg-linear-to-r from-amber-500 to-sky-700 animate-progress-fill" />
        </div>
      </div>
    </div>
  );
};
