"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function LiveBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-background overflow-hidden">
      {/* Fallback SVG Grid Overlay while loading */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83v58.34h-58.34l-.83-.83V0h58.34zM29.585 29.585V.415H.415v29.17h29.17zm0 29.17V29.585H.415v29.17h29.17zm29.17 0V29.585H29.585v29.17h29.17zm0-29.17V.415H29.585v29.17h29.17z' fill='%23a0d2b0' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}
      ></div>
      {/* Scanning Light Beam */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent via-primary-container/10 to-transparent animate-scanline"></div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-background overflow-hidden">
      {/* Particles Layer */}
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#74a484",
            },
            links: {
              color: "#74a484",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 40,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 opacity-50"
      />

      {/* SVG Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83v58.34h-58.34l-.83-.83V0h58.34zM29.585 29.585V.415H.415v29.17h29.17zm0 29.17V29.585H.415v29.17h29.17zm29.17 0V29.585H29.585v29.17h29.17zm0-29.17V.415H29.585v29.17h29.17z' fill='%23a0d2b0' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Scanning Light Beam */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent via-primary-container/10 to-transparent animate-scanline"></div>
    </div>
  );
}