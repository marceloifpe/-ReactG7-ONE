/* Component Time */

// Importação do CSS
import "./StageEvolution.css";

// Importações de componentes
import Digimons from "../Digimons";

const StageEvolution = (props) => {
  /* Outra alternativa para a estilização do componente */
  // const css = {
  //   backgroundColor: props.corSecundaria,
  // };

  return (
    // Verifica se o componente possui digimons, se sim, renderiza o componente
    props.digimons.length > 0 && (
      <section
        className="stage-evolution"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="container-digimons">
          {props.digimons.map((digimon) => (
            <Digimons
              corDeFundo={props.corPrimaria}
              key={digimon.nome}
              nome={digimon.nome}
              imagem={digimon.imagem}
              grade={digimon.grade}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default StageEvolution;
