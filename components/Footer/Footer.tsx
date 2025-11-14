"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  Code,
  Rocket,
  Sparkles,
} from "lucide-react";

export const VortexFooter = () => {
  // FIX 1: Tipar correctamente como number | null
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  // FIX 2: Agregar estado de montaje para evitar hidratación
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    {
      icon: Github,
      href: "#",
      label: "GitHub",
      color: "from-gray-400 to-gray-600",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "from-sky-400 to-sky-600",
    },
    {
      icon: Mail,
      href: "#",
      label: "Email",
      color: "from-purple-400 to-purple-600",
    },
  ];

  const floatingIcons = [
    { Icon: Code, delay: 0, duration: 3 },
    { Icon: Rocket, delay: 0.5, duration: 4 },
    { Icon: Sparkles, delay: 1, duration: 3.5 },
  ];

  return (
    <footer className="relative bg-linear-to-b from-gray-900 via-slate-900 to-black overflow-hidden">
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
      </div>

      {/* Iconos flotantes decorativos - Solo renderizar cuando esté montado */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {floatingIcons.map(({ Icon, delay, duration }, index) => (
            <motion.div
              key={index}
              initial={{ y: 0, opacity: 0.1 }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 360],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute text-purple-500/20"
              style={{
                left: `${20 + index * 30}%`,
                top: `${30 + index * 20}%`,
              }}
            >
              <Icon size={60} />
            </motion.div>
          ))}
        </div>
      )}

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Logo y tagline central */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-5xl font-black bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4"
            animate={
              mounted
                ? {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }
                : {}
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            VORTEX DEV
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Transformando ideas en realidad digital
          </motion.p>
        </motion.div>

        {/* Redes sociales con animaciones únicas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center items-center gap-6 mb-16"
        >
          {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
            <motion.a
              key={label}
              href={href}
              onMouseEnter={() => setHoveredIcon(index)}
              onMouseLeave={() => setHoveredIcon(null)}
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              className="relative group"
            >
              {/* Efecto de brillo al hover */}
              {mounted && hoveredIcon === index && (
                <motion.div
                  layoutId="socialHover"
                  className={`absolute inset-0 bg-linear-to-r ${color} rounded-full blur-xl opacity-60`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1.5 }}
                  exit={{ scale: 0 }}
                />
              )}

              <div className="relative w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center border-2 border-gray-700 group-hover:border-purple-500 transition-colors duration-300">
                <Icon
                  className="text-gray-400 group-hover:text-white transition-colors duration-300"
                  size={24}
                />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Línea divisoria animada */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="h-px bg-linear-to-r from-transparent via-purple-500 to-transparent mb-8"
        />

        {/* Mensaje final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-500 flex items-center justify-center gap-2 text-sm">
            Hecho con
            {mounted && (
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="text-red-500 fill-red-500" size={16} />
              </motion.span>
            )}
            {!mounted && (
              <Heart className="text-red-500 fill-red-500" size={16} />
            )}
            por Vortex Dev
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-gray-600 text-xs mt-2"
          >
            © 2025 Todos los derechos reservados
          </motion.p>
        </motion.div>

        {/* Partículas decorativas flotantes - Solo cuando esté montado */}
        {mounted && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-500 rounded-full"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                  opacity: 0,
                }}
                animate={{
                  y: [null, Math.random() * -50 - 20],
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Efecto de onda superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500 to-transparent opacity-50" />
    </footer>
  );
};
