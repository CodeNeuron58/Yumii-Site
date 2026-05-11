"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0c0c0f]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(255,121,198,0.1)]">
      <div className="flex justify-between items-center px-[20px] md:px-[40px] py-[16px] max-w-7xl mx-auto">
        <div className="flex items-center gap-[8px]">
          <span className="text-[32px]">🌸</span>
          <div className="font-display-lg text-[1.5rem] text-[#ff79c6] tracking-tighter font-bold">
            Yumi AI
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-[24px] items-center">
          <Link href="#features" className="text-[#a1a1aa] font-medium hover:text-[#ff79c6] transition-colors duration-300">Features</Link>
          <Link href="#personalities" className="text-[#a1a1aa] font-medium hover:text-[#ff79c6] transition-colors duration-300">Personalities</Link>
          <Link href="#tech" className="text-[#a1a1aa] font-medium hover:text-[#ff79c6] transition-colors duration-300">Tech Stack</Link>
          <Link href="#install" className="text-[#a1a1aa] font-medium hover:text-[#ff79c6] transition-colors duration-300">Install</Link>
          <Link href="#docs" className="text-[#a1a1aa] font-medium hover:text-[#ff79c6] transition-colors duration-300">Docs</Link>
        </div>

        <div className="flex items-center gap-[16px]">
          <a
            href="https://github.com/CodeNeuron58/Yumi"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-[8px] text-[#a1a1aa] hover:text-[#ff79c6] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">code</span>
            <span className="font-medium">GitHub</span>
          </a>
          <button className="btn-primary text-white font-label-caps px-[24px] py-[8px] rounded-full hover:scale-105 active:scale-95 transition-transform uppercase tracking-wider">
            Download
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined text-[28px]">menu</span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#121215] border-b border-white/10 overflow-hidden"
          >
            <div className="px-[20px] py-[24px] flex flex-col gap-[16px]">
              <Link href="#features" onClick={() => setIsOpen(false)} className="text-[#a1a1aa] font-medium hover:text-[#ff79c6] transition-colors">Features</Link>
              <Link href="#personalities" onClick={() => setIsOpen(false)} className="text-[#a1a1aa] font-medium hover:text-[#ff79c6] transition-colors">Personalities</Link>
              <Link href="#tech" onClick={() => setIsOpen(false)} className="text-[#a1a1aa] font-medium hover:text-[#ff79c6] transition-colors">Tech Stack</Link>
              <Link href="#install" onClick={() => setIsOpen(false)} className="text-[#a1a1aa] font-medium hover:text-[#ff79c6] transition-colors">Install</Link>
              <Link href="#docs" onClick={() => setIsOpen(false)} className="text-[#a1a1aa] font-medium hover:text-[#ff79c6] transition-colors">Docs</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}