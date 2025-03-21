/* Component Forms */

import "./Forms.css";
import { useState } from "react";
import InputText from "../InputText";
import DropdownList from "../DropdownList";
import Button from "../Button";

const Forms = (props) => {
  const [nome, setNome] = useState("");
  const [grade, setGrade] = useState("");
  const [imagem, setImagem] = useState("");
  const [stage, setStage] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();
    props.aoDigimonCadastrado({
      nome,
      grade,
      imagem,
      stage,
    });
    // Limpa os campos do formulário
    setNome("");
    setGrade("");
    setImagem("");
    setStage("");
  };

  return (
    <section className="forms">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados do Digimon para adicionar</h2>
        <InputText
          required={true}
          label="Nome"
          placeholder="Digite o nome do Digimon"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <InputText
          required={true}
          label="Grade"
          placeholder="Digite a ordem de desenvolvimento"
          valor={grade}
          aoAlterado={(valor) => setGrade(valor)}
        />
        <InputText
          label="Imagem"
          placeholder="Digite a URL da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <DropdownList
          required={true}
          label="Estágios de Evolução"
          items={props.stages}
          valor={stage}
          aoAlterado={(valor) => setStage(valor)}
        />
        <Button text="Criar card" />
      </form>
    </section>
  );
};

export default Forms;
