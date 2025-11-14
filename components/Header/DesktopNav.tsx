import Image from "next/image";
import { TransitionLink } from "../TransitionLink";

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
  return (
    <div className="hidden lg:block">
      <div
        className={`mx-auto transition-all duration-500 ${
          scrolled
            ? "max-w-4xl mt-4  backdrop-blur-xl border rounded-full shadow-2xl shadow-purple-500/20"
            : "max-w-7xl bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo Desktop */}
          <div className="relative group cursor-pointer">
            <div className="relative w-14 h-14 rounded-full">
              <Image
                src="/logo.png"
                alt="VertexDev Logo"
                width={5000}
                height={5000}
              />
            </div>
          </div>

          {/* Nav Items Desktop */}
          <div className="flex items-center gap-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <TransitionLink
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveIndex(index)}
                  className="relative group px-6 py-3 overflow-hidden rounded-full"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-sky-600/0 via-sky-600/50 to-sky-300/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-full"></div>

                  {/* Active Indicator */}
                  <div
                    className={`absolute inset-0 bg-sky-600/90 rounded-full transition-all duration-500 ${
                      activeIndex === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75"
                    }`}
                  ></div>

                  {/* Content */}
                  <div className="relative flex items-center gap-2">
                    <Icon
                      className={`w-5 h-5 transition-all duration-300  ${
                        activeIndex === index
                          ? "text-amber-600"
                          : "text-gray-400 group-hover:text-amber-600 group-hover:scale-110"
                      }`}
                      strokeWidth={3.5}
                    />
                    <span
                      className={`font-semibold transition-all duration-300 ${
                        activeIndex === index
                          ? "text-white"
                          : "text-gray-400 group-hover:text-white"
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>

                  {/* Bottom Line Indicator */}
                  <div
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-amber-600 to-amber-500 transition-all duration-500 ${
                      activeIndex === index
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></div>
                </TransitionLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
