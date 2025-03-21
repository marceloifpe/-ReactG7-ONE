import { styled } from "styled-components";
import Images from "../Gallery/Images";
import ButtonIcon from "../ButtonIcon";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogStyle = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }

  @media (max-width: 768px) {
    max-width: 768px;
    width: 100%;
    top: 143px;
  }
`;

// eslint-disable-next-line react/prop-types
const DialogZoom = ({ photo, whenClosing, toggleFavorite }) => {
  return (
    <>
      {photo && (
        <>
          <Overlay />
          <DialogStyle open={!!photo} onClose={whenClosing}>
            <Images
              photo={photo}
              spread={true}
              toggleFavorite={toggleFavorite}
            />
            <form method="dialog">
              <ButtonIcon formMethod="dialog">
                <img src="/icons/fechar.png" alt="Icone de fechar" />
              </ButtonIcon>
            </form>
          </DialogStyle>
        </>
      )}
    </>
  );
};

export default DialogZoom;
