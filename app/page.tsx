"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

import Image from "next/image";
import RevealText from "@/components/RevealText";
import VortexBackground from "@/components/VortexBackground";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Vortex Background */}
      <VortexBackground baseHue={200} rangeHue={60} />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center px-4">
          {/* Logo Animado */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.21, 0.47, 0.32, 0.98],
              delay: 2.3,
            }}
            className="mb-8 inline-block"
          >
            <div className="relative w-32 h-32 mx-auto">
              <motion.div
                animate={{
                  rotate: 360,
                  filter: ["brightness(1)", "brightness(10)", "brightness(1)"],
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  filter: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <Image
                  src="/logo.png"
                  alt="VortexDev Logo"
                  width={128}
                  height={128}
                  className="drop-shadow-2xl"
                />
              </motion.div>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Título Principal */}
          <RevealText delay={2.4}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
              VortexDev
            </h1>
          </RevealText>

          <RevealText delay={2.5}>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Transformamos ideas en{" "}
              <span className="text-blue-400 font-semibold">
                experiencias digitales
              </span>{" "}
              extraordinarias
            </p>
          </RevealText>

          <RevealText delay={2.7}>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Desarrollo web y aplicaciones móviles con tecnología de vanguardia
            </p>
          </RevealText>

          {/* CTAs */}
          <RevealText delay={2.9}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/proyectos">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Ver Proyectos
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>

              <Link href="/contacto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-colors"
                >
                  Contactar
                </motion.button>
              </Link>
            </div>
          </RevealText>

          {/* Stats */}
          <RevealText delay={3.0}>
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
              {[
                { number: "50+", label: "Proyectos" },
                { number: "30+", label: "Clientes" },
                { number: "100%", label: "Satisfacción" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </RevealText>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              ¿Por qué elegir{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400">
                VortexDev
              </span>
              ?
            </h2>
          </RevealText>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Código Limpio",
                description:
                  "Desarrollamos con las mejores prácticas y estándares de la industria",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Zap,
                title: "Alto Rendimiento",
                description:
                  "Optimización extrema para velocidad y experiencia de usuario",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Sparkles,
                title: "Diseño Único",
                description:
                  "Interfaces innovadoras que destacan y enamoran a tus usuarios",
                color: "from-amber-500 to-orange-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-linear-to-r opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 from-blue-500/20 to-purple-500/20 rounded-3xl" />

                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 hover:border-slate-600 transition-colors">
                  <div
                    className={`inline-block p-4 rounded-2xl bg-linear-to-br ${feature.color} mb-6`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative z-10 py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-linear-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para iniciar tu proyecto?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos
            </p>
            <Link href="/contacto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg"
              >
                Comenzar Ahora
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
