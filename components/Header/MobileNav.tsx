import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TransitionLink } from "../TransitionLink";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navItems: Array<{
    name: string;
    href: string;
    icon: React.ComponentType<any>;
  }>;
}

export default function MobileNav({
  isOpen,
  setIsOpen,
  navItems,
}: MobileNavProps) {
  return (
    <>
      {/* Mobile Navigation - Radial Menu */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Logo Móvil */}
          <div className="relative w-12 h-12  rounded-full">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="VertexDev Logo"
                width={5000}
                height={5000}
              />
            </Link>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-12 h-12 bg-gray-800/90 backdrop-blur-sm rounded-full border-2 border-gray-700 flex items-center justify-center overflow-hidden group"
          >
            <div
              className={`absolute inset-0 bg-linear-to-br from-amber-500 to-sky-700 transition-transform duration-500 ${
                isOpen ? "scale-100" : "scale-0"
              }`}
            ></div>
            <div className="relative z-50 transition-transform duration-300 ">
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Radial Menu */}
      <div
        className={`w-screen h-screen lg:hidden fixed inset-0 transition-all duration-500 ${
          isOpen
            ? "backdrop-blur-xl pointer-events-auto"
            : "bg-transparent pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div
          className="relative w-full h-full flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          {/* Centro del menú radial */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            {/* Contenedor rotatorio */}
            <div
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
                isOpen ? "animate-spin-slow" : ""
              }`}
              style={{
                animationDuration: "30s",
              }}
            >
              {navItems.map((item, index) => {
                const angle = (index * 360) / navItems.length - 90;
                const radius = 140;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                const Icon = item.icon;
                const delay = index * 100;

                return (
                  <TransitionLink
                    href={item.href}
                    key={item.name}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="absolute group"
                    style={{
                      transform: isOpen
                        ? `translate(${x}px, ${y}px) scale(1)`
                        : "translate(0, 0) scale(0)",
                      transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
                      left: "50%",
                      top: "50%",
                      marginLeft: "-28px",
                      marginTop: "-28px",
                    }}
                  >
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 rounded-full bg-purple-500/50 animate-ping opacity-0 group-active:opacity-75"></div>

                    {/* Orb */}
                    <div
                      className="relative w-14 h-14 bg-linear-to-br from-gray-800 to-gray-900 rounded-full border-2 border-gray-700 group-active:border-purple-500 flex flex-col items-center justify-center transition-all duration-300 group-active:scale-90 shadow-lg"
                      style={{
                        animation: isOpen
                          ? "counterRotate 30s linear infinite"
                          : "none",
                      }}
                    >
                      <Icon className="w-6 h-6 text-purple-400 group-active:text-pink-400 transition-colors" />
                    </div>
                  </TransitionLink>
                );
              })}
            </div>

            {/* Centro del menú */}
            <div
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
                isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  animation: isOpen ? "spin 15s linear infinite" : "none",
                }}
              >
                <Image
                  src="/logo.png"
                  alt="VertexDev Logo"
                  width={5000}
                  height={5000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
