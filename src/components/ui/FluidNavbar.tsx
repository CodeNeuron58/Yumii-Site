"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "./MagneticButton";
import Link from "next/link";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Documentation", href: "#docs" },
  { name: "GitHub", href: "https://github.com/CodeNeuron58/Yumi" },
];

export function FluidNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-[calc(100%-2rem)] max-w-fit mx-auto transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
        <nav className="flex items-center justify-between gap-8 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur-xl md:px-6 md:py-3">
          <Link href="/" className="flex items-center gap-2 relative z-50">
            <span className="text-lg font-semibold tracking-tighter text-white">
              Yumi.
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-white/70">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <MagneticButton className="px-4 py-2 text-xs">
              Install CLI
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white md:hidden ring-1 ring-white/20"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X size={20} weight="light" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <List size={20} weight="light" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-[#050505]/90 backdrop-blur-3xl md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
              <ul className="flex flex-col items-center gap-6 text-2xl font-medium tracking-tight">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              >
                 <MagneticButton className="px-8 py-4 text-sm mt-4">
                  Install Yumi CLI
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}