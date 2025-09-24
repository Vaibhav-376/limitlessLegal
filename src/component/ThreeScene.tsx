"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; // lightweight bundle

export default function Starfield() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // loads the slim bundle -> faster than full
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: { value: "#0a061b" },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: { value: 80 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.8 },
          size: { value: 1 },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: "bounce",
          },
        },
      }}
    />
  );
}
