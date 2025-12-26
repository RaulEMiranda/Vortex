"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ExternalLink,
  Github,
  Globe,
  Smartphone,
  ShoppingCart,
  Palette,
} from "lucide-react";
import Image from "next/image";
import RevealText from "@/components/RevealText";

const categories = [
  { id: "all", name: "Todos", icon: Globe },
  { id: "web", name: "Web", icon: Globe },
  { id: "mobile", name: "Móvil", icon: Smartphone },
  { id: "ecommerce", name: "E-commerce", icon: ShoppingCart },
  { id: "design", name: "Diseño", icon: Palette },
];

const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "web",
    description:
      "Plataforma de análisis financiero en tiempo real con gráficos interactivos",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "TypeScript", "Chart.js", "Node.js"],
    link: "#",
    github: "#",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "FoodDelivery App",
    category: "mobile",
    description:
      "App de delivery con tracking en tiempo real y pasarela de pagos",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "Stripe", "Google Maps"],
    link: "#",
    github: "#",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 3,
    title: "Fashion Store",
    category: "ecommerce",
    description: "Tienda online de moda con sistema de recomendaciones AI",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    tags: ["Next.js", "Shopify", "Tailwind", "AI"],
    link: "#",
    github: "#",
    color: "from-pink-500 to-purple-500",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    category: "mobile",
    description: "Aplicación de seguimiento de entrenamientos y nutrición",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    tags: ["Flutter", "SQLite", "HealthKit", "Charts"],
    link: "#",
    github: "#",
    color: "from-green-500 to-teal-500",
  },
  {
    id: 5,
    title: "Real Estate Platform",
    category: "web",
    description: "Portal inmobiliario con búsqueda avanzada y tours virtuales",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Laravel", "PostgreSQL", "3D Tours"],
    link: "#",
    github: "#",
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: 6,
    title: "Brand Identity",
    category: "design",
    description: "Sistema de diseño completo para startup tecnológica",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    tags: ["Figma", "Illustrator", "Design System", "Branding"],
    link: "#",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 7,
    title: "Crypto Exchange",
    category: "web",
    description:
      "Plataforma de intercambio de criptomonedas con máxima seguridad",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    tags: ["React", "Web3", "Blockchain", "Security"],
    link: "#",
    github: "#",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 8,
    title: "E-Learning Platform",
    category: "web",
    description:
      "Plataforma educativa con clases en vivo y contenido interactivo",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    tags: ["Next.js", "WebRTC", "MongoDB", "AWS"],
    link: "#",
    github: "#",
    color: "from-blue-500 to-purple-500",
  },
  {
    id: 9,
    title: "Luxury Marketplace",
    category: "ecommerce",
    description:
      "Marketplace de productos de lujo con autenticación blockchain",
    image:
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&h=600&fit=crop",
    tags: ["Shopify Plus", "NFT", "Stripe", "AR"],
    link: "#",
    github: "#",
    color: "from-amber-500 to-yellow-500",
  },
];

export default function ProyectosPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-8 md:pt-12 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <RevealText delay={2.5}>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-semibold">
                Portafolio
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
              Proyectos Destacados
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Una selección de nuestros trabajos más innovadores y exitosos
            </p>
          </div>
        </RevealText>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.75 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;

            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50"
                    : "bg-slate-800/50 text-gray-400 hover:bg-slate-700/50 border border-slate-700"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.9 + index * 0.15 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex gap-3">
                        {project.link && (
                          <motion.a
                            href={project.link}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        )}
                        {project.github && (
                          <motion.a
                            href={project.github}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-slate-700/50 rounded-full text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Gradient border effect */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-r ${project.color} opacity-20 blur-xl`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="bg-linear-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Resultados que hablan por sí solos
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "50+", label: "Proyectos Completados" },
                { number: "30+", label: "Clientes Satisfechos" },
                { number: "95%", label: "Tasa de Éxito" },
                { number: "24/7", label: "Soporte" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
