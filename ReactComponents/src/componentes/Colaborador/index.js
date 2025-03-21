import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./colaborador.css";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
  // Função para deletar o colaborador
  function deletarColaborador() {
    aoDeletar(colaborador.id);
  }

  // Função para favoritar o colaborador
  function favoritar() {
    aoFavoritar(colaborador.id);
  }

  // Propriedades do botão de favoritar
  const propsFavorito = {
    size: 25,
    onClick: favoritar,
  };

  return (
    <div className="colaborador">
      {/* Icon do botão de deletar */}
      <AiFillCloseCircle
        size={25}
        className="deletar"
        // Evento de clique para deletar o colaborador, chamando a função deletarColaborador
        onClick={deletarColaborador}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito ? (
            <AiFillHeart {...propsFavorito} color="#ff0000" />
          ) : (
            <AiOutlineHeart {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
