"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const targetId = link.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
          setMenuOpen(false);
        }
      }
    }
  });

  const navStyle = {
    backdropFilter: "blur(16px) saturate(180%)",
    backgroundColor: "rgba(17, 25, 40, 0.75)",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.125)",
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={menuRef}
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn("fixed z-[100] top-4 inset-x-0", className)}
      >
        {/* Desktop nav */}
        <div
          className="hidden md:flex max-w-fit md:min-w-[70vw] lg:min-w-fit mx-auto px-10 py-5 rounded-lg items-center justify-center space-x-4"
          style={navStyle}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-desktop-${idx}`}
              href={navItem.link}
              onClick={(e) => handleNavClick(e, navItem.link)}
              className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            >
              <span className="text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile nav */}
        <div className="md:hidden mx-4">
          <div
            className="flex items-center justify-between px-4 py-3 rounded-lg"
            style={navStyle}
          >
            <span className="text-sm font-medium text-neutral-50">Menu</span>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-neutral-50 focus:outline-none p-1"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Dropdown menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-2 rounded-lg overflow-hidden"
                style={navStyle}
              >
                <div className="flex flex-col py-2">
                  {navItems.map((navItem, idx) => (
                    <Link
                      key={`link-mobile-${idx}`}
                      href={navItem.link}
                      onClick={(e) => handleNavClick(e, navItem.link)}
                      className="flex items-center gap-3 px-5 py-3 text-neutral-50 hover:bg-white/10 transition-colors"
                    >
                      {navItem.icon && (
                        <span className="text-purple">{navItem.icon}</span>
                      )}
                      <span className="text-sm">{navItem.name}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
