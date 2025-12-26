// app/(pages)/contacto/page.tsx

"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Clock,
  MessageSquare,
} from "lucide-react";
import RevealText from "@/components/RevealText";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "hola@vortexdev.com",
    link: "mailto:hola@vortexdev.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+51 999 888 777",
    link: "tel:+51999888777",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    content: "Lima, Perú",
    link: "#",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lun - Vie: 9AM - 6PM",
    color: "from-orange-500 to-amber-500",
  },
];

const socialLinks = [
  { icon: Linkedin, link: "#", color: "hover:bg-blue-600" },
  { icon: Twitter, link: "#", color: "hover:bg-sky-500" },
  { icon: Instagram, link: "#", color: "hover:bg-pink-600" },
  { icon: Facebook, link: "#", color: "hover:bg-blue-700" },
];

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar un proyecto?",
    answer:
      "El tiempo varía según la complejidad. Un proyecto web básico puede tomar 2-4 semanas, mientras que aplicaciones más complejas pueden requerir 2-6 meses.",
  },
  {
    question: "¿Ofrecen soporte post-lanzamiento?",
    answer:
      "Sí, ofrecemos diferentes planes de mantenimiento y soporte continuo para asegurar que tu proyecto funcione perfectamente.",
  },
  {
    question: "¿Trabajan con clientes internacionales?",
    answer:
      "Absolutamente. Trabajamos con clientes en varios países y manejamos todo el proceso de forma remota de manera eficiente.",
  },
  {
    question: "¿Cuál es su proceso de trabajo?",
    answer:
      "Seguimos una metodología ágil: análisis, diseño, desarrollo iterativo, testing y lanzamiento, con comunicación constante.",
  },
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset después de 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold">
                Contacto
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
              Hablemos de tu Proyecto
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Estamos listos para ayudarte a materializar tus ideas. Cuéntanos
              más sobre tu proyecto
            </p>
          </div>
        </RevealText>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: getDelay(2.75 + index * 0.1) }}
            >
              {info.link && info.link !== "#" ? (
                <a href={info.link} className="block group">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 h-full">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-linear-to-br ${info.color} mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-300">
                      {info.title}
                    </h3>
                    <p className="text-white font-semibold">{info.content}</p>
                  </div>
                </a>
              ) : (
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 h-full">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-linear-to-br ${info.color} mb-4`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-300">
                    {info.title}
                  </h3>
                  <p className="text-white font-semibold">{info.content}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: getDelay(2.95) }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-6">Envíanos un mensaje</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="+51 999 888 777"
                    />
                  </div>
                </div>

                {/* Service & Budget */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Servicio *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="web">Desarrollo Web</option>
                      <option value="mobile">App Móvil</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="design">Diseño UI/UX</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Presupuesto
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Selecciona rango</option>
                      <option value="< $5k">Menos de $5,000</option>
                      <option value="$5k-$10k">$5,000 - $10,000</option>
                      <option value="$10k-$25k">$10,000 - $25,000</option>
                      <option value="$25k+">Más de $25,000</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all ${
                    isSubmitted
                      ? "bg-green-600"
                      : "bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Enviando...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      ¡Mensaje Enviado!
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Map & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: getDelay(3.1) }}
            className="space-y-6"
          >
            {/* Map Placeholder */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 h-80">
              <div className="w-full h-full bg-slate-900/50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-purple-500/10" />
                <div className="relative z-10 text-center">
                  <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <p className="text-gray-400">Mapa interactivo</p>
                  <p className="text-sm text-gray-500 mt-2">
                    San Isidro, Lima, Perú
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-blue-400" />
                Síguenos en Redes
              </h3>
              <p className="text-gray-400 mb-6">
                Mantente al día con nuestras últimas noticias y proyectos
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-slate-700/50 rounded-xl ${social.color} transition-colors`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-linear-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-2">⚡ Respuesta Rápida</h3>
              <p className="text-gray-300">
                Respondemos en menos de 24 horas. ¿Necesitas algo urgente?{" "}
                <a
                  href="https://wa.me/51999888777"
                  className="text-green-400 hover:text-green-300 font-semibold"
                >
                  Escríbenos por WhatsApp
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* FAQs */}
        <section>
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Preguntas{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400">
                Frecuentes
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Resolvemos las dudas más comunes
            </p>
          </RevealText>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors"
              >
                <h3 className="text-xl font-bold mb-3 text-blue-400">
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
