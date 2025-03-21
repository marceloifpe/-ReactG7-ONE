import { styled } from "styled-components";
import search from "./search.png";

const StylizedContainer = styled.div`
  position: relative;
  display: inline-block;

  @media (max-width: 430px) {
    max-width: 100%;
    margin-top: 2.5rem;
  }
`;

const StylizedInput = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;

  @media (max-width: 768px) {
    width: 26.625rem;
    height: 3.5rem;
  }

  @media (max-width: 430px) {
    max-width: 100%;
  }
`;

const MagnifierIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

// eslint-disable-next-line react/prop-types
const TextInput = ({ setFilter }) => {
  return (
    <StylizedContainer>
      <StylizedInput
        type="text"
        placeholder="O que você procura?"
        onChange={(event) => setFilter(event.target.value)}
      />
      <MagnifierIcon src={search} alt="Ícone de lupa" />
    </StylizedContainer>
  );
};

export default TextInput;
