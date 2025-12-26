"use client";

import MagneticCard from "@/components/MagneticCard";
import RevealText from "@/components/RevealText";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Palette,
  Server,
  Shield,
  Rocket,
  LineChart,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Sitios web modernos, responsivos y optimizados con las últimas tecnologías",
    features: ["React/Next.js", "Tailwind CSS", "SEO Optimizado", "PWA"],
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description:
      "Aplicaciones nativas e híbridas para iOS y Android de alto rendimiento",
    features: [
      "React Native",
      "Flutter",
      "iOS & Android",
      "Push Notifications",
    ],
    color: "from-purple-500 to-pink-500",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Tiendas online completas con pasarelas de pago y gestión de inventario",
    features: ["Shopify", "WooCommerce", "Pasarelas de pago", "Analytics"],
    color: "from-green-500 to-emerald-500",
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Diseños intuitivos y atractivos centrados en la experiencia del usuario",
    features: ["Figma", "Prototipos", "Design Systems", "User Research"],
    color: "from-orange-500 to-amber-500",
    gradient: "from-orange-500/10 to-amber-500/10",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Arquitecturas robustas, escalables y seguras para tus aplicaciones",
    features: ["Node.js", "Python", "GraphQL", "REST APIs"],
    color: "from-red-500 to-rose-500",
    gradient: "from-red-500/10 to-rose-500/10",
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    description:
      "Protección integral de datos y sistemas contra amenazas digitales",
    features: ["Pentesting", "SSL/TLS", "Auditorías", "GDPR Compliance"],
    color: "from-indigo-500 to-violet-500",
    gradient: "from-indigo-500/10 to-violet-500/10",
  },
  {
    icon: Rocket,
    title: "DevOps & Cloud",
    description: "Despliegue continuo y infraestructura en la nube optimizada",
    features: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    color: "from-sky-500 to-blue-500",
    gradient: "from-sky-500/10 to-blue-500/10",
  },
  {
    icon: LineChart,
    title: "Analytics & SEO",
    description:
      "Optimización para motores de búsqueda y análisis de datos avanzado",
    features: ["Google Analytics", "SEO On-page", "A/B Testing", "Reporting"],
    color: "from-teal-500 to-cyan-500",
    gradient: "from-teal-500/10 to-cyan-500/10",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Análisis",
    description: "Entendemos tus necesidades y objetivos de negocio",
  },
  {
    number: "02",
    title: "Diseño",
    description: "Creamos prototipos y diseños aprobados por ti",
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Construimos tu producto con código de calidad",
  },
  {
    number: "04",
    title: "Testing",
    description: "Probamos exhaustivamente cada funcionalidad",
  },
  {
    number: "05",
    title: "Lanzamiento",
    description: "Desplegamos y monitoreamos el rendimiento",
  },
  {
    number: "06",
    title: "Soporte",
    description: "Te acompañamos con mantenimiento continuo",
  },
];

export default function ServiciosPage() {
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
                Nuestros Servicios
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
              Soluciones Completas
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ofrecemos un stack tecnológico completo para llevar tu negocio al
              siguiente nivel
            </p>
          </div>
        </RevealText>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: getDelay(2.6 + index * 0.1) }}
            >
              <MagneticCard className="h-full">
                <div
                  className={`h-full bg-linear-to-br ${service.gradient} backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 group`}
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex p-3 rounded-xl bg-linear-to-br ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2 py-1 bg-slate-800/50 rounded-full text-gray-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </MagneticCard>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <section className="mb-32">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Nuestro{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-orange-100 to-orange-500">
                Proceso
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
              Un flujo de trabajo probado que garantiza resultados excepcionales
            </p>
          </RevealText>

          {/* Timeline */}
          <div className="relative">
            {/* Línea conectora */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-orange-100 via-orange-300 to-orange-500" />

            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
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
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors">
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>

                {/* Circle indicator */}
                <div className="hidden md:flex absolute left-1/2 w-8 h-8 -ml-4 bg-linear-to-br from-blue-500 to-purple-500 rounded-full items-center justify-center border-4 border-slate-950">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-linear-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Necesitas un servicio personalizado?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Cada proyecto es único. Contáctanos y diseñaremos una solución a
              medida para ti
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg"
            >
              Solicitar Cotización
            </motion.button>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
