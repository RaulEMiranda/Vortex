// components/Header/DesktopNav.tsx

"use client";
import Image from "next/image";
import { TransitionLink } from "../TransitionLink";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface DesktopNavProps {
  scrolled: boolean;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  navItems: Array<{
    name: string;
    href: string;
    icon: React.ComponentType<any>;
  }>;
}

export default function DesktopNav({
  scrolled,
  activeIndex,
  setActiveIndex,
  navItems,
}: DesktopNavProps) {
  const pathname = usePathname();

  // Actualizar activeIndex basado en la ruta actual
  useEffect(() => {
    const currentIndex = navItems.findIndex((item) => item.href === pathname);
    if (currentIndex !== -1 && currentIndex !== activeIndex) {
      setActiveIndex(currentIndex);
    }
  }, [pathname, navItems, activeIndex, setActiveIndex]);

  return (
    <div
      className={`fixed z-50 hidden lg:block w-full top-0 left-0 right-0 transition-colors duration-500 ${
        scrolled ? "bg-transparent" : "bg-slate-950"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-500 ${
          scrolled
            ? "max-w-5xl mt-4 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-full shadow-4xl shadow-blue-500/20"
            : "max-w-7xl bg-slate-950/90 backdrop-blur-lg border-b border-slate-800/50"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo Desktop */}
          <div className="relative group cursor-pointer">
            <TransitionLink href="/">
              <div className="relative w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src="/logoHeader.png"
                  alt="VortexDev Logo"
                  width={56}
                  height={56}
                  className="
          relative z-10
          transition-all duration-300
          group-hover:scale-110
          drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]
          group-hover:drop-shadow-[0_0_14px_rgba(168,85,247,0.9)]
        "
                />
              </div>
            </TransitionLink>
          </div>

          {/* Nav Items Desktop */}
          <div className="flex items-center gap-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;
              const isCurrentRoute = pathname === item.href;

              return (
                <TransitionLink
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveIndex(index)}
                  className={`relative group px-6 py-3 overflow-hidden rounded-full ${
                    isCurrentRoute ? "cursor-default" : "cursor-pointer"
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {/* Hover Background Effect - Solo si no es la ruta actual */}
                  {!isCurrentRoute && (
                    <div className="absolute inset-0 bg-linear-to-r from-blue-600/0 via-purple-600/60 to-blue-600/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-full" />
                  )}

                  {/* Active Indicator - Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-500 ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                  />

                  {/* Subtle glow when active */}
                  {isActive && (
                    <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-40 animate-pulse-slow" />
                  )}

                  {/* Content */}
                  <div className="relative flex items-center gap-2 z-10">
                    <Icon
                      className={`w-5 h-5 transition-all duration-300 ${
                        isActive
                          ? "text-white scale-110"
                          : "text-gray-300 group-hover:text-blue-300 group-hover:scale-110"
                      }`}
                      strokeWidth={2.5}
                    />
                    <span
                      className={`font-semibold transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>

                  {/* Bottom Line Indicator with Gradient */}
                  <div
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-500 rounded-full ${
                      isActive
                        ? "w-3/4 opacity-100"
                        : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100"
                    }`}
                  />
                </TransitionLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
