"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((m) => m.Player),
  { ssr: false }
);

export const InitialPageLoader = () => {
  const [showContent, setShowContent] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      setShowAnimation(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const title = "VORTEX DEV";
  const slogan = "Transformando ideas en realidad digital";

  const letterVariants = {
    hidden: {
      y: -200,
      opacity: 0,
      scale: 0.5,
      rotate: -15,
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
    }),
  };

  // Variantes para las letras del slogan - caen desde arriba
  const sloganVariants = {
    hidden: {
      y: -150,
      opacity: 0,
      scale: 0.4,
    },
    visible: (i: any) => ({
      y: 0,
      opacity: 1,
      scale: 1,
    }),
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  overflow-hidden">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Patrón de grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[50px_50px]"></div>

      <div className="relative text-center z-10">
        {/* Título principal con efecto de lluvia */}
        <div className="relative mb-4">
          <h1 className="text-7xl font-black tracking-wider">
            {showContent &&
              title.split("").map((letter, i) => (
                <motion.span
                  key={`title-${i}`}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: i * 0.08,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 180,
                    damping: 9,
                    mass: 1.8,
                  }}
                  className="inline-block text-white drop-shadow-2xl"
                  style={{
                    textShadow:
                      "0 0 30px rgba(168,85,247,0.5), 0 0 60px rgba(168,85,247,0.3)",
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
          </h1>
        </div>

        {/* Slogan con efecto de lluvia */}
        <div className="relative">
          <p className="text-xl font-light tracking-wide text-gray-300">
            {showContent &&
              slogan.split("").map((letter, i) => (
                <motion.span
                  key={`slogan-${i}`}
                  custom={i}
                  variants={sloganVariants}
                  transition={{
                    delay: title.length * 0.08 + i * 0.03,
                    duration: 0.7,
                    type: "spring",
                    stiffness: 160,
                    damping: 11,
                  }}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
          </p>
        </div>

        {/* Indicador de carga animado */}
        {showAnimation && (
          <Player
            autoplay
            loop
            src="/animations/vortexa.json"
            style={{ height: "400px", width: "400px" }}
            speed={0.6}
          />
        )}
      </div>
    </div>
  );
};
