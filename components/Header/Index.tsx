"use client";

import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Home, Briefcase, FolderOpen, Users, Mail } from "lucide-react";
import { useScrollDetection } from "./hooks/useScrollDetection";

export const navItems = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Servicios", href: "/servicios", icon: Briefcase },
  { name: "Proyectos", href: "/proyectos", icon: FolderOpen },
  { name: "Nosotros", href: "/nosotros", icon: Users },
  { name: "Contacto", href: "/contacto", icon: Mail },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrolled = useScrollDetection();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <DesktopNav
        scrolled={scrolled}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        navItems={navItems}
      />
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />
    </nav>
  );
}
