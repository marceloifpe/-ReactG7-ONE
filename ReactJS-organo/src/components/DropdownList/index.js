/* Component DropdownList */

import "./DropdownList.css";

const DropdownList = (props) => {
  return (
    <div className="dropdownList">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.aoAlterado(event.target.value)}
        required={props.required}
        value={props.valor}
      >
        <option value=""></option>
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;
