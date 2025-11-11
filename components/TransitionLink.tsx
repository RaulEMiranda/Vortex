"use client";
import Link, { LinkProps } from "next/link";
import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { PageTransitionLoader } from "./PageTransitionLoader";

// Context para manejar el estado global del loader
const TransitionContext = createContext<{
  isTransitioning: boolean;
  setIsTransitioning: (value: boolean) => void;
}>({
  isTransitioning: false,
  setIsTransitioning: () => {},
});

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  return (
    <TransitionContext.Provider value={{ isTransitioning, setIsTransitioning }}>
      {children}
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

    // Activar el loader
    setIsTransitioning(true);

    await sleep(2000); // Duración del loader
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
