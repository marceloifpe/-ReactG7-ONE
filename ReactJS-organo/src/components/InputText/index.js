/* Component de input de texto */

import "./InputText.css";

const InputText = (props) => {
  // Interpolação de string
  const placeholderModificada = `${props.placeholder}...`;

  // let valor = "Lucas E. Dickmann";

  const aoDigitado = (event) => {
    props.aoAlterado(event.target.value);
  };

  return (
    <div className="input-text">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.required}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default InputText;
