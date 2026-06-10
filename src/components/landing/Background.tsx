"use client";

import { useEffect } from "react";

/**
 * Ambient background: 18 floating leaves + 40 twinkling stars.
 * Mirrors the behavior of yumii-landing.html — generated on mount so
 * each user gets a unique drift pattern but the seed count is fixed.
 */
export function Background() {
  useEffect(() => {
    const leavesContainer = document.getElementById("leaves");
    const starsContainer = document.getElementById("stars");
    if (!leavesContainer || !starsContainer) return;

    // ── Leaves ────────────────────────────────────────────────────────
    const leafSVG =
      '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2C6 2 2 6 2 10c0 3 2 6 5 8l3-8 3 8c3-2 5-5 5-8 0-4-4-8-8-8z"/></svg>';
    for (let i = 0; i < 18; i++) {
      const leaf = document.createElement("div");
      leaf.className = "leaf";
      leaf.innerHTML = leafSVG;
      leaf.style.left = `${Math.random() * 100}vw`;
      leaf.style.animationDuration = `${12 + Math.random() * 20}s`;
      leaf.style.animationDelay = `${Math.random() * 20}s`;
      leaf.style.width = `${10 + Math.random() * 16}px`;
      leaf.style.height = leaf.style.width;
      leavesContainer.appendChild(leaf);
    }

    // ── Stars ─────────────────────────────────────────────────────────
    for (let i = 0; i < 40; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDuration = `${2 + Math.random() * 4}s`;
      star.style.animationDelay = `${Math.random() * 4}s`;
      starsContainer.appendChild(star);
    }

    return () => {
      leavesContainer.innerHTML = "";
      starsContainer.innerHTML = "";
    };
  }, []);

  return (
    <>
      <div className="leaves-bg" id="leaves" aria-hidden="true" />
      <div className="stars" id="stars" aria-hidden="true" />
    </>
  );
}
