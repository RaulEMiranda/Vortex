"use client";

import MagneticCard from "@/components/MagneticCard";
import RevealText from "@/components/RevealText";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users2,
  Trophy,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Lightbulb,
    title: "Innovación",
    description:
      "Siempre a la vanguardia de la tecnología, buscando soluciones creativas",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Heart,
    title: "Pasión",
    description: "Amamos lo que hacemos y se refleja en cada línea de código",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: Users2,
    title: "Colaboración",
    description:
      "Trabajamos en equipo con nuestros clientes para lograr los mejores resultados",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Trophy,
    title: "Excelencia",
    description:
      "Comprometidos con la calidad y el cumplimiento de los más altos estándares",
    color: "from-purple-500 to-pink-500",
  },
];

const team = [
  {
    name: "Carlos Mendoza",
    role: "CEO & Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "10+ años desarrollando soluciones web innovadoras",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Ana Rodríguez",
    role: "Lead Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Especialista en UX/UI con enfoque en experiencias memorables",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Miguel Torres",
    role: "Mobile Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Experto en React Native y Flutter con apps en millones de dispositivos",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Laura Sánchez",
    role: "DevOps Engineer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Arquitecta de infraestructura cloud y automatización",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
];

const timeline = [
  {
    year: "2019",
    title: "Fundación",
    description: "Iniciamos con un equipo de 3 personas y un gran sueño",
  },
  {
    year: "2020",
    title: "Primer Cliente Enterprise",
    description: "Logramos nuestro primer contrato con una empresa Fortune 500",
  },
  {
    year: "2021",
    title: "Expansión del Equipo",
    description: "Crecimos a 15 miembros y abrimos oficina física",
  },
  {
    year: "2022",
    title: "Premio a la Innovación",
    description: "Reconocimiento como mejor startup tech del año",
  },
  {
    year: "2023",
    title: "Proyectos Internacionales",
    description: "Comenzamos a trabajar con clientes en 5 países",
  },
  {
    year: "2024",
    title: "Nueva Era",
    description: "Alcanzamos los 50+ proyectos completados exitosamente",
  },
];

export default function NosotrosPage() {
  const [isMobile, setIsMobile] = useState(false);

  // Hook para detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Función para obtener el delay apropiado
  const getDelay = (desktopDelay: number) => {
    return isMobile ? 0 : desktopDelay;
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-8 md:pt-12 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <RevealText delay={2.5}>
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold">
                Sobre Nosotros
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
              Conoce a VortexDev
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Somos un equipo apasionado de desarrolladores, diseñadores y
              estrategas digitales comprometidos con transformar ideas en
              realidades digitales
            </p>
          </div>
        </RevealText>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: getDelay(2.75) }}
          >
            <div className="bg-linear-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8 h-full">
              <div className="inline-flex p-4 bg-linear-to-br from-blue-500 to-purple-500 rounded-2xl mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
              <p className="text-gray-300 leading-relaxed">
                Empoderar a empresas y emprendedores con soluciones digitales de
                clase mundial que impulsen su crecimiento y les permitan
                competir en la era digital. Creemos en el poder de la tecnología
                para transformar negocios y mejorar vidas.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: getDelay(3) }}
          >
            <div className="bg-linear-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 h-full">
              <div className="inline-flex p-4 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
              <p className="text-gray-300 leading-relaxed">
                Convertirnos en el socio tecnológico de referencia en América
                Latina, reconocidos por nuestra innovación, calidad y compromiso
                con el éxito de nuestros clientes. Aspiramos a estar en la
                vanguardia de la revolución digital.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Values */}
        <section className="mb-32">
          <RevealText delay={getDelay(3.2)}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Nuestros{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400">
                Valores
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
              Los principios que guían cada decisión y acción en VortexDev
            </p>
          </RevealText>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: getDelay(index * 0.15) }}
              >
                <MagneticCard className="h-full">
                  <div className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 group">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-linear-to-br ${value.color} mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </MagneticCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-32">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Nuestro{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400">
                Equipo
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
              Conoce a las personas detrás de VortexDev
            </p>
          </RevealText>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: getDelay(index * 0.15) }}
                className="group"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                  {/* Photo */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-60" />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm mb-4">{member.bio}</p>

                    {/* Social Links */}
                    <div className="flex gap-3">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="p-2 bg-slate-700/50 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          className="p-2 bg-slate-700/50 rounded-lg hover:bg-purple-600 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="p-2 bg-slate-700/50 rounded-lg hover:bg-sky-600 transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-32">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Nuestra{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400">
                Historia
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
              El camino que nos ha traído hasta aquí
            </p>
          </RevealText>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 via-purple-500 to-pink-500" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: getDelay(index * 0.2) }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                    index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>

                {/* Circle indicator */}
                <div className="absolute left-8 md:left-1/2 w-8 h-8 -ml-4 bg-linear-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center border-4 border-slate-950">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-linear-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Quieres formar parte del equipo?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Siempre estamos buscando talento apasionado que quiera crecer con
              nosotros
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg"
            >
              Ver Vacantes
            </motion.button>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
