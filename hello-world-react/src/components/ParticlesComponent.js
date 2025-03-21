import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from "../particles.json";
import TextComponent from "./TextComponent";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {};

  return (
    <>
      {init && (
        <>
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={particlesConfig}
          />
          <TextComponent />
        </>
      )}
    </>
  );
};

export default ParticlesComponent;
