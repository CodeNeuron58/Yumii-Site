"use client";

import { useEffect, useState } from "react";
import { heroBadges } from "./data/hero-badges";
import { GithubIcon } from "./icons";

export function Hero() {
  const [mascotSrc, setMascotSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/yumi-hero.png")
      .then((res) => res.blob())
      .then((blob) => {
        if (cancelled) return;
        const reader = new FileReader();
        reader.onloadend = () => {
          if (!cancelled && typeof reader.result === "string") {
            setMascotSrc(reader.result);
          }
        };
        reader.readAsDataURL(blob);
      })
      .catch(() => {
        if (!cancelled) setMascotSrc("/yumi-hero.png");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="hero section" data-purpose="hero-section">
      {/* eslint-disable-next-line @next/next/no-img-element -- data URL is loaded at runtime, can't use next/image */}
      <img
        src={mascotSrc ?? "/yumi-hero.png"}
        alt="Yumii AI companion"
        width={220}
        height={220}
        className="hero-mascot animate-mascot-float"
        style={{ filter: "drop-shadow(0 0 40px rgba(63,185,80,0.3))" }}
      />

      <h1 className="hero-title">
        Your AI companion with a <span>voice</span> and a <span>face</span>.
      </h1>

      <p className="hero-subtitle">
        Yumii listens, speaks, and remembers. Live2D avatar, six personalities,
        tool calling, local-first. Open source under MIT.
      </p>

      <div className="hero-buttons">
        <a href="#" className="btn-primary">
          Get Started →
        </a>
        <a href="#" className="btn-outline">
          <GithubIcon width={18} height={18} aria-hidden="true" />
          View on GitHub
        </a>
      </div>

      <p className="hero-honesty-strip">
        v0.3.0 alpha — APIs will change. Runs on CPU. No GPU required.
      </p>

      <div className="feature-pills">
        {heroBadges.map(({ label, icon }) => (
          <span key={label} className="pill">
            <span className="pill-icon">{icon}</span>
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
