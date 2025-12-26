// components/TransitionLink.tsx

"use client";
import Link, { LinkProps } from "next/link";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { PageTransitionLoader } from "./PageTransitionLoader";

// Context para manejar el estado global de los loaders
const TransitionContext = createContext<{
  isTransitioning: boolean;
  setIsTransitioning: (value: boolean) => void;
  isInitialLoad: boolean;
}>({
  isTransitioning: false,
  setIsTransitioning: () => {},
  isInitialLoad: true,
});

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Detectar carga inicial (F5 o primera carga)
  useEffect(() => {
    // Scroll al inicio en cada carga/recarga
    window.scrollTo(0, 0);

    // Mostrar loader inicial por 1.7 segundos
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <TransitionContext.Provider
      value={{ isTransitioning, setIsTransitioning, isInitialLoad }}
    >
      {/* Ocultar contenido mientras carga inicialmente */}
      <div
        className={`${
          isInitialLoad ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
      >
        {children}
      </div>

      {/* Loader de transición entre rutas - velocidad normal */}
      <PageTransitionLoader isActive={isTransitioning} speed="normal" />

      {/* Loader de carga inicial (F5) - velocidad rápida */}
      <PageTransitionLoader isActive={isInitialLoad} speed="fast" />
    </TransitionContext.Provider>
  );
};

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  onClick,
  ...props
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { setIsTransitioning } = useContext(TransitionContext);

  // Verificar si ya estamos en la ruta actual
  const isCurrentRoute = pathname === href;

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    // Si ya estamos en la ruta, no hacer nada
    if (isCurrentRoute) {
      return;
    }

    if (onClick) onClick();

    setIsTransitioning(true);

    await sleep(2000);
    router.push(href);
    await sleep(2000);

    setIsTransitioning(false);
  };

  return (
    <Link
      {...props}
      href={href}
      onClick={handleTransition}
      className={`${props.className || ""} ${
        isCurrentRoute ? "pointer-events-none" : ""
      }`}
      aria-disabled={isCurrentRoute}
    >
      {children}
    </Link>
  );
};
