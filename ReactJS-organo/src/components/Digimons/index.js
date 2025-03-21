/* Component Digimons */

// Importação do CSS
import "./Digimons.css";

const Digimons = ({ nome, imagem, grade, corDeFundo }) => {
  return (
    <div className="digimons">
      <div className="header" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="footer">
        <h4>{nome}</h4>
        <h6>{grade}</h6>
      </div>
    </div>
  );
};

export default Digimons;
