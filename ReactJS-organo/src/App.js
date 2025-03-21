/*
 * React: desenvolvendo com JavaScript | Programa Oracle ONE
 * Dev: Lucas Elias Dickmann
 */

import { useState } from "react";
import Banner from "./components/Banner";
import Forms from "./components/Forms";
import StageEvolution from "./components/StageEvolution";
import Footer from "./components/Footer";

function App() {
  // Array de objetos com os times e suas respectivas cores
  const stagesEvolution = [
    {
      nome: "DagiTama",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Bebé I",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff",
    },
    {
      nome: "Bebé II",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2",
    },
    {
      nome: "Criança",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8",
    },
    {
      nome: "Adulto",
      corPrimaria: "#db6ebf",
      corSecundaria: "#fae9f5",
    },
    {
      nome: "Perfeito",
      corPrimaria: "#ffba05",
      corSecundaria: "#fff5d9",
    },
    {
      nome: "Final",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf",
    },
    {
      nome: "Super Final",
      corPrimaria: "#ff3f3f",
      corSecundaria: "#ffe6e6",
    },
    {
      nome: "Armor",
      corPrimaria: "#ff3f3f",
      corSecundaria: "#ffe6e6",
    },
    {
      nome: "Hybrid",
      corPrimaria: "#ff3f3f",
      corSecundaria: "#ffe6e6",
    },
  ];

  // Variável de estado para gerenciar dados dos digimons e sua função setter.
  const [digimons, setDigimons] = useState([]);

  // Adiciona um novo digimon à lista existente de digimons
  const aoNovoDigimonAdicionado = (digimon) => {
    debugger;
    setDigimons([...digimons, digimon]);
  };

  return (
    <div className="App">
      <Banner />
      <Forms
        stages={stagesEvolution.map((stage) => stage.nome)}
        aoDigimonCadastrado={(digimon) => aoNovoDigimonAdicionado(digimon)}
      />
      {stagesEvolution.map((stage) => (
        <StageEvolution
          key={stage.nome}
          nome={stage.nome}
          corPrimaria={stage.corPrimaria}
          corSecundaria={stage.corSecundaria}
          digimons={digimons.filter((digimons) => digimons.stage === stage.nome)}
        />
      ))}
      <Footer
        socials={[
          {
            name: "linkedin",
            link: "https://www.linkedin.com/in/lucas-dickmann",
            alt: "Facebook",
          },
          {
            name: "github",
            link: "https://github.com/ldickmann",
            alt: "Github",
          },
          {
            name: "instagram",
            link: "https://www.instagram.com/luksdickmann",
            alt: "Instagram",
          },
        ]}
        logo={"./images/logo-organo.png"}
        alt={"Logo"}
        text={"Oracle ONE & Alura"}
        subTitle={"© Desenvolvido por Lucas Elias Dickmann"}
      />
    </div>
  );
}

export default App;
