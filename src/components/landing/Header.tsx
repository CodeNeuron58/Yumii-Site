"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRightIcon,
  CloseIcon,
  MenuIcon,
  SunIcon,
} from "./icons";

const navLinks = [
  { label: "Documentation", href: "/docs" },
  { label: "Guide", href: "#" },
  { label: "Changelog", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Discord", href: "#" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-wrapper flex items-center justify-between z-10 w-full">
      <Link
        href="#"
        aria-label="YUMI home"
        className="header-logo flex items-center gap-3 group"
      >
        <span className="logo-icon w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center overflow-hidden shrink-0">
          <span className="logo-dot w-5 h-5 rounded-full bg-brand-green/80 group-hover:bg-primary transition-colors" />
        </span>
        <span className="logo-text text-xl font-bold tracking-tight text-on-surface group-hover:text-primary transition-colors font-display">
          YUMI
        </span>
      </Link>

      <nav className="header-nav hidden md:flex items-center gap-8 text-sm font-medium text-on-surface-variant">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="nav-link hover:text-on-surface transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions flex items-center gap-4">
        <Link
          href="#"
          className="header-cta hidden md:flex items-center gap-2 bg-primary-container/10 text-primary hover:bg-primary-container/20 px-4 py-2 rounded-full text-sm font-medium transition-colors border border-primary-container/20"
        >
          Get Started
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
        <button
          type="button"
          aria-label="Toggle theme"
          className="theme-toggle p-2 text-on-surface-variant hover:text-on-surface rounded-full hover:bg-surface-container transition-colors"
        >
          <SunIcon className="w-5 h-5" />
        </button>
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="mobile-menu-btn md:hidden p-2 text-on-surface-variant hover:text-on-surface"
        >
          {menuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen ? (
        <div className="mobile-menu md:hidden absolute top-full left-0 right-0 mt-4 mx-4 sm:mx-6 lg:mx-8 bg-surface-container/95 border border-outline-variant rounded-xl p-4 flex flex-col gap-3 backdrop-blur">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="mobile-nav-link text-sm font-medium text-on-surface-variant hover:text-on-surface py-2"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="mobile-cta mt-2 flex items-center justify-center gap-2 bg-primary-container/10 text-primary hover:bg-primary-container/20 px-4 py-2.5 rounded-full text-sm font-medium transition-colors border border-primary-container/20"
          >
            Get Started
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      ) : null}
    </header>
  );
}
