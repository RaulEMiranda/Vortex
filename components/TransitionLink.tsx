"use client";
import Link, { LinkProps } from "next/link";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PageTransitionLoader } from "./PageTransitionLoader";
import { InitialPageLoader } from "./InitialPageLoader";

// Context para manejar el estado global de los loaders
const TransitionContext = createContext<{
  isTransitioning: boolean;
  setIsTransitioning: (value: boolean) => void;
  isInitialLoading: boolean;
}>({
  isTransitioning: false,
  setIsTransitioning: () => {},
  isInitialLoading: true,
});

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    setIsInitialLoading(true);

    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <TransitionContext.Provider
      value={{ isTransitioning, setIsTransitioning, isInitialLoading }}
    >
      {/* Loader inicial - componente diferente */}
      {isInitialLoading && <InitialPageLoader />}

      {/* Contenido de la página */}
      <div
        style={{
          opacity: isInitialLoading ? 0 : 1,
          transition: "opacity 0.3s",
          pointerEvents: isInitialLoading ? "none" : "auto",
        }}
      >
        {children}
      </div>

      {/* Loader de transición entre rutas */}
      <PageTransitionLoader isActive={isTransitioning} />
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
  const { setIsTransitioning } = useContext(TransitionContext);

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (onClick) onClick();

    setIsTransitioning(true);

    await sleep(2000);
    router.push(href);
    await sleep(2000);

    setIsTransitioning(false);
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};
